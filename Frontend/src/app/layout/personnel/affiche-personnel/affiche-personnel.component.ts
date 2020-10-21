import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personnel } from 'src/app/models/personnel';
import { PerosnnelService } from 'src/app/services/perosnnel.service';
import { User } from 'src/app/models/usermodel';
import { HistoriqueEmbaucheService } from 'src/app/services/historique-embauche.service';
import { HistoriqueEmbauche } from 'src/app/models/historiqueembauche';
import { PosteService } from 'src/app/services/poste.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Poste } from 'src/app/models/poste';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-affiche-personnel',
    templateUrl: './affiche-personnel.component.html',
    styleUrls: ['./affiche-personnel.component.css'],
    providers: [DatePipe]

})
export class AffichePersonnelComponent implements OnInit, OnDestroy {
    personnel: User;
    form;
    postes: Poste[] = [];
    poste: Poste[] = [];
    msg;
    posteselected;
    societeID;
    embauche: HistoriqueEmbauche;
    PosteID = new FormControl('', [Validators.required]);
    formactive = false;
    historique: HistoriqueEmbauche[] = [];
    personnelID;
    constructor(public dialogRef: MatDialogRef<AffichePersonnelComponent>, private personelservice: PerosnnelService,
        @Inject(MAT_DIALOG_DATA) public ID: any, private personnelservice: PerosnnelService, private datePipe: DatePipe,

        private historiqueservice: HistoriqueEmbaucheService,

        private embaucheservice: HistoriqueEmbaucheService, private posteservice: PosteService) { }

    ngOnInit(): void {
        this.personnelID = this.ID.ID;
        const societeID = localStorage.getItem('societeId');
        this.personnelservice.getonepersonnel(this.personnelID).subscribe((res) => {
            this.personnel = res.personnel;
        });
        this.embaucheservice.gethistoriquedeonepersonnel(this.personnelID).subscribe((res) => {
            this.historique = res.historique;
            console.log(this.historique)

        });
        this.societeID = localStorage.getItem('societeId');

        this.posteservice.getallposte(this.societeID);
        this.posteservice.getpostesub().subscribe((res) => {
            this.postes = res;
        });
        this.form = new FormGroup({

            DateEmbauche: new FormControl(null, [
                Validators.required,

            ]),
            DateSortie: new FormControl(null, [


            ]),
            Salaire: new FormControl(null, [
                Validators.required,

            ]),
        });
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
    enregiste() {
        const compare = (this.form.get('DateEmbauche').value < this.form.get('DateSortie').value);
        if (compare === false) {
            this.msg = 'date embauche inferiuer de date sortie';
        }

        else {
            const historique: HistoriqueEmbauche = {
                ID: this.embauche?.ID,
                DateEmbauche: this.form.value.DateEmbauche,
                DateSortie: this.form.value.DateSortie,
                Salaire: this.form.value.Salaire,
                posteID: this.PosteID.value,
                PersonnelID: this.embauche.PersonnelID,
                userID: this.embauche.userID,

            };

            this.historiqueservice.edit(historique, this.embauche.ID).subscribe(res => {
                console.log(res)
                const update = [...this.historique];
                const old = update.findIndex(p => p?.ID === res.historique.ID);
                update[old] = res.historique;
                this.historique = update;
            console.log(this.historique)
            });
            this.form.reset();

            this.personelservice.editembauch(this.ID.ID, historique)
            this.formactive = false;


        }





    }
    edit(e: HistoriqueEmbauche) {
        this.embauche = e;

        this.formactive = true;
        this.embaucheservice.getonehistorique(e.ID).subscribe(res => {
            let datesortie;
            const DateEmbauche = new Date(res.Historique.DateEmbauche);
            if (res.Historique.DateSortie != null) {
                const DateSortie = new Date(res.Historique.DateSortie);
                datesortie = this.datePipe.transform(DateSortie, 'yyyy-MM-dd');
            } else {
                datesortie = null;
            }


            this.PosteID.patchValue(res.Historique.posteID);
            this.form.setValue({
                DateEmbauche: this.datePipe.transform(DateEmbauche, 'yyyy-MM-dd'),
                DateSortie: datesortie,
                Salaire: res.Historique.Salaire
            });
        });

    }
    ngOnDestroy() {
    }
    change(e) {
        this.posteselected = e;
    }
}
