import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Personnel } from 'src/app/models/personnel';
import { PerosnnelService } from 'src/app/services/perosnnel.service';
import { map, startWith } from 'rxjs/operators';
import { Poste } from 'src/app/models/poste';
import { PosteService } from 'src/app/services/poste.service';
import { HistoriqueEmbauche } from 'src/app/models/historiqueembauche';
import { HistoriqueEmbaucheService } from 'src/app/services/historique-embauche.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-ajoute-historique-embauche',
    templateUrl: './ajoute-historique-embauche.component.html',
    styleUrls: ['./ajoute-historique-embauche.component.css'],
    providers: [DatePipe],

})
export class AjouteHistoriqueEmbaucheComponent implements OnInit {
    personnels: Personnel[] = [];
    postes: Poste[] = [];
    poste: Poste;
    societeID;
    form;
    msg;
    private mode = 'create';
    historiqueedit: HistoriqueEmbauche;
    historique: HistoriqueEmbauche;
    PosteID = new FormControl('', [Validators.required]);
    animalControl = new FormControl('', Validators.required);

    constructor(
        private posteservice: PosteService,
        private historiqueservice: HistoriqueEmbaucheService,
        private personelservice: PerosnnelService,
        public dialogRef: MatDialogRef<AjouteHistoriqueEmbaucheComponent>,
        @Inject(MAT_DIALOG_DATA) public ID: any
    ) {

    }




    ngOnInit() {
        console.log(this.ID.ID);
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




    enregiste() {
        if (this.PosteID.invalid) {
            return;
        }
        if (this.form.invalid) {
            return;
        }
        if (this.form.get('DateSortie').value != null) {
            const compare = (this.form.get('DateEmbauche').value < this.form.get('DateSortie').value);
            if (compare === false) {
                this.msg = 'date embauche inferiuer de date sortie';
            } else {
                this.msg = null; if (this.mode === 'create') {


                    this.historique = {
                        posteID: this.PosteID.value,
                        DateEmbauche: this.form.get('DateEmbauche').value,
                        DateSortie: this.form.get('DateSortie').value,
                        Salaire: this.form.get('Salaire').value,
                        PersonnelID: this.ID.ID,

                        userID: this.societeID

                    };

                    this.historiqueservice.ajoute(this.historique);
                    this.personelservice.editembauch(this.ID.ID, this.historique)
                    this.form.reset();


                }
            }
        } else {
            this.historique = {
                posteID: this.PosteID.value,
                DateEmbauche: this.form.get('DateEmbauche').value,
                DateSortie: this.form.get('DateSortie').value,
                Salaire: this.form.get('Salaire').value,
                PersonnelID: this.ID.ID,

                userID: this.societeID

            };

            this.historiqueservice.ajoute(this.historique);
            this.personelservice.editembauch(this.ID.ID, this.historique)

            this.form.reset();

        }


    }
    change(e) {
        console.log(e)
        //   this.poste =e.target.value
    }
}
