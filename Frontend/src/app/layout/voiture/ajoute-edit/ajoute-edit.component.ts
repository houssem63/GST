import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
    selector: 'app-ajoute-edit',
    templateUrl: './ajoute-edit.component.html',
    styleUrls: ['./ajoute-edit.component.css']
})
export class AjouteEditComponent implements OnInit {
    cartegrissePreview;
    form;
    copiercontratPreview;
    userID;
    voitureressub;
    msg;
    ok;
    constructor(private voitureservice: VoitureService , private route :Router) { }

    ngOnInit(): void {
        this.userID = localStorage.getItem('societeId');
        this.form = new FormGroup({
            Matricule: new FormControl('', {
                validators: [Validators.required]
            }),
            Type: new FormControl('', { validators: [Validators.required] }),
            DPMC: new FormControl('', { validators: [Validators.required] }),
            Marque: new FormControl('', { validators: [Validators.required] }),
            Categorie: new FormControl('', { validators: [Validators.required] }),
            Compteur: new FormControl('', { validators: [Validators.required] }),
            Propritaire: new FormControl('', { validators: [Validators.required] }),
            CopierContrat: new FormControl('', { validators: [Validators.required] }),
            CopierCarteGrise: new FormControl('', { validators: [Validators.required] }),
        });

    }
    onCategrissePicked(e) {
        const file = (e.target as HTMLInputElement).files[0];
        console.log(file);
        this.form.patchValue({ CopierCarteGrise: file });
        this.form.get('CopierCarteGrise').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.cartegrissePreview = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
    oncopiercontratPicked(e) {
        const file = (e.target as HTMLInputElement).files[0];
        console.log(file);
        this.form.patchValue({ CopierContrat: file });
        this.form.get('CopierContrat').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.copiercontratPreview = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
    enregistre() {
        if (this.form.invalid) {
            return;
        }
        this.voitureservice.ajoute(
            this.form.value.Matricule,
            this.form.value.Type,
            this.form.value.DPMC,
            this.form.value.Marque,
            this.form.value.Categorie,
            this.form.value.Compteur,
            this.form.value.Propritaire,
            this.form.value.CopierContrat,
            this.form.value.CopierCarteGrise,
            this.userID);
        this.voitureservice.voitureesponce().subscribe(res => {
            this.msg = res.msg;
            this.ok = res.ok;
            if (res.ok === true) {
                this.form.reset();
                setTimeout(() => {
                    this.route.navigate(['/voiture']);
                }, 100);
            }
        });
    }
}
