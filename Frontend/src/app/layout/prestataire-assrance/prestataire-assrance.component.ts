import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrestataireAssurance } from 'src/app/models/prestataire';
import { PrestataireAssuranceService } from 'src/app/services/prestataire-assurance.service';

@Component({
    selector: 'app-prestataire-assrance',
    templateUrl: './prestataire-assrance.component.html',
    styleUrls: ['./prestataire-assrance.component.css']
})
export class PrestataireAssranceComponent implements OnInit, OnDestroy {
    form;
    prestataireressub;
    constructor(private prestataireservice: PrestataireAssuranceService) { }
    TelPattern = '[0-9]{8}';
    prestataires: PrestataireAssurance[] = [];
    active = false;
    mode = 'create';
    prestataireID;
    ngOnInit(): void {
        this.prestataireservice.getall();
        this.prestataireressub = this.prestataireservice.prestataireressub().subscribe((res) => {
            this.prestataires = res;
        })
        this.form = new FormGroup({
            Libelle: new FormControl('', { validators: [Validators.required] }),
            Site: new FormControl('', { validators: [] }),
            Adresse: new FormControl('', { validators: [Validators.required] }),
            Tel: new FormControl('', { validators: [Validators.required, Validators.pattern(this.TelPattern)] }),
        });
    }
    enregistre() {
        if (this.form.invalid) {
            return;
        }

        if (this.mode === 'create') {
            const prestataire: PrestataireAssurance = {
                Libelle: this.form.value.Libelle,
                Adresse: this.form.value.Adresse,
                Site: this.form.value.Site,
                Tel: this.form.value.Tel
            };
            this.prestataireservice.ajoute(prestataire);
        } else {
            const prestataire: PrestataireAssurance = {
                ID : this.prestataireID,
                Libelle: this.form.value.Libelle,
                Adresse: this.form.value.Adresse,
                Site: this.form.value.Site,
                Tel: this.form.value.Tel
            };
            this.prestataireservice.edit(prestataire, this.prestataireID)
        }
        this.active = !this.active;

    }
    edit(id) {
        this.active = true;
        this.mode = 'edit';
        this.prestataireID = id;
        console.log(id)
        this.prestataireservice.getone(id).subscribe((res) => {
            console.log(res)
            this.form.setValue({
                Libelle: res.prestataire?.Libelle,
                Adresse: res.prestataire?.Adresse,
                Site: res.prestataire?.Site,
                Tel: res.prestataire?.Tel
            });
        });
    }
    delete(id){
        this.prestataireservice.delete(id)
    }
    ngOnDestroy() {
        this.prestataireressub.unsubscribe();
    }
}
