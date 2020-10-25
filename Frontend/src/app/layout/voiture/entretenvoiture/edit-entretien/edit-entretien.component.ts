import { DatePipe } from '@angular/common';
import { AfterViewInit, OnInit, Component, OnChanges, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entretien } from 'src/app/models/entretien';
import { EntretienVoiture } from 'src/app/models/entretienvoiture';
import { EntretienVoitureService } from 'src/app/services/entretien-voiture.service';
import { EntretienService } from 'src/app/services/entretien.service';

@Component({
    selector: 'app-edit-entretien',
    templateUrl: './edit-entretien.component.html',
    styleUrls: ['./edit-entretien.component.css'],
    providers: [DatePipe]

})
export class EditEntretienComponent implements OnInit, AfterViewInit {
    entretiens: Entretien[] = [];
    entretiensub;
    form;
    societeID;
    constructor(private entretenvoitureservice: EntretienVoitureService, private datePipe: DatePipe,
     public dialogRef: MatDialogRef<EditEntretienComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }


    ngOnInit(): void {
        this.entretiens = this.data.entretien;
        console.log(this.data)

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
        this.entretenvoitureservice.getoneentretienvoiture(this.data.VoitureID).subscribe((res) => {
            console.log(res)
            const DateOperation = new Date(
                res.entretienvoiture.DateOperation
            );
            const DateProchainEntretien = new Date(
                res.entretienvoiture.DateProchainEntretien
            );
            this.form.setValue({
                entretien_id: res.entretienvoiture.entretienID,
                DateOperation: this.datePipe.transform(
                    DateOperation,
                    'yyyy-MM-dd'
                ),
                PieceRechange: res.entretienvoiture.PieceRechange,
                MontantPieceRechange: res.entretienvoiture.MontantPieceRechange,
                MainOEuvre: res.entretienvoiture.MainOEuvre,
                AgentEntretien: res.entretienvoiture.AgentEntretien,
                KilomettrageArret: res.entretienvoiture.KilomettrageArret,
                KilomettrageLimite: res.entretienvoiture.KilomettrageLimite,
                DateProchainEntretien: this.datePipe.transform(
                    DateProchainEntretien,
                    'yyyy-MM-dd'
                ),
                Remarques: res.entretienvoiture.Remarques,
            });
        });
    }
    ngAfterViewInit() {



    }





    enregistre() {
    /*    const entretienvoiture :EntretienVoiture={
            ID?: this.data.VoitureID,
            DateOperation: this.form.value.DateOperation,
            PieceRechange: this.form.value.PieceRechange,
            MontantPieceRechange: this.form.value.MontantPieceRechange,
            MainOEuvre: this.form.value.MainOEuvre,
            AgentEntretien: this.form.value.AgentEntretien,
            KilomettrageArret: this.form.KilomettrageArret,
            KilomettrageLimite: this.form.KilomettrageLimite,
            DateProchainEntretien: this.form.DateProchainEntretien,
            Remarques: this.form.Remarques
            voitureID: number;
            entretienID : number;
            userID: number;
            voiture?: Voiture;
            entretien?: Entretien;
        }
        //this.entretenvoitureservice.edit()*/
    }
}
