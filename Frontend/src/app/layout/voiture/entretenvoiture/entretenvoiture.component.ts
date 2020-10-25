import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Entretien } from 'src/app/models/entretien';
import { EntretienVoiture } from 'src/app/models/entretienvoiture';
import { Voiture } from 'src/app/models/voiture';
import { EntretienVoitureService } from 'src/app/services/entretien-voiture.service';
import { EntretienService } from 'src/app/services/entretien.service';
import { VoitureService } from 'src/app/services/voiture.service';
import { AfficheEtretienComponent } from './affiche-etretien/affiche-etretien.component';
import { EditEntretienComponent } from './edit-entretien/edit-entretien.component';

@Component({
    selector: 'app-entretenvoiture',
    templateUrl: './entretenvoiture.component.html',
    styleUrls: ['./entretenvoiture.component.css']
})
export class EntretenvoitureComponent implements OnInit {
    entretiens: Entretien[] = [];
    entretiensub;
    form;
    societeID;
    voitureID;
    entretiensvoiture: EntretienVoiture[] = [];
    entretienvoituresub;
    popoverTitle = 'Popover title';
    popoverMessage = 'Vous etes sure';
    confirmClicked = false;
    cancelClicked = false;
    DateOperation ;
            DateDebutValidite;
            DateFinValidite ;
    displayedColumns: string[] = [ 'DateOperation', 'entretien',
        'Actions'];
    dataSource = new MatTableDataSource<EntretienVoiture>();
    constructor(private entretenservice: EntretienService, public dialog: MatDialog ,private router: ActivatedRoute,
        private entretienvoitureservice: EntretienVoitureService) { }
        @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
            this.dataSource.sort = sort;
        }
    ngOnInit(): void {
        this.societeID = localStorage.getItem('societeId');
        this.entretenservice.getall();
        this.entretiensub = this.entretenservice.getentretiensub().subscribe((res) => {
            this.entretiens = res;
        });
        this.router.paramMap.subscribe((paramMap: ParamMap) => {
            this.voitureID = paramMap.get('id');
        });
        this.entretienvoitureservice.getall(this.voitureID);
this.entretienvoituresub = this.entretienvoitureservice.getentretiensub().subscribe((res) => {
    this.entretiensvoiture = res;
    this.dataSource.data = res;

});
        this.form = new FormGroup({
            entretien_id: new FormControl('', { validators: [Validators.required] }),
            DateOperation: new FormControl('', { validators: [Validators.required] }),
            PieceRechange: new FormControl('', { validators: [Validators.required] }),
            MontantPieceRechange: new FormControl('', { validators: [Validators.required] }),
            MainOEuvre: new FormControl('', { validators: [Validators.required] }),
            AgentEntretien: new FormControl('', { validators: [Validators.required] }),
            KilomettrageArret: new FormControl('', { validators: [Validators.required] }),
            KilomettrageLimite: new FormControl('', { validators: [Validators.required] }),
            DateProchainEntretien: new FormControl('', { validators: [Validators.required] }),
            Remarques: new FormControl('', { validators: [Validators.required] }),

        });
    }
    public doFilter = (value: string) => {
        this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
    enregistre() {
        if (this.form.invalid) {
            return;
        }
const entretienvoiture: EntretienVoiture = {
    DateOperation: this.form.value.DateOperation,
    PieceRechange: this.form.value.PieceRechange,
    MontantPieceRechange: this.form.value.MontantPieceRechange,
    MainOEuvre: this.form.value.MainOEuvre,
    AgentEntretien: this.form.value.AgentEntretien,
    KilomettrageArret: this.form.value.KilomettrageArret,
    KilomettrageLimite: this.form.value.KilomettrageLimite,
    DateProchainEntretien: this.form.value.DateProchainEntretien,
    Remarques: this.form.value.Remarques,
    voitureID: this.voitureID,
    entretienID: this.form.value.entretien_id,
    userID: this.societeID,
};
this.entretienvoitureservice.add(entretienvoiture);
this.form.reset();
    }
    supprimer(id){
        this.entretienvoitureservice.delete(id)
    }


    openDialog(id): void {
        const dialogRef = this.dialog.open(AfficheEtretienComponent, {
            width: '650px',
            height:'350px',
          data: {ID: id }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');

        });
      }
      openDialogedit(voitureID): void {
        const dialogRef = this.dialog.open(EditEntretienComponent, {
          width: '650px',
          height:'450px',
          data: {VoitureID :voitureID,entretien :this.entretiens}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
    }
}
