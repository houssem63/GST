import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Societe } from '../models/societe';
import { routerTransition } from '../router.animations';
import { SocieteInscriptionService } from '../services/societe-inscription.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private inscriptionsocieteservice: SocieteInscriptionService,private route :Router) {}
form;
imagePreview: string;
message ;
    etat: boolean;
    ngOnInit() {
        this.form = new FormGroup({
            Rs: new FormControl(null, {
                validators: [Validators.required]
              }),
              Adresse: new FormControl(null, {
                validators: [Validators.required]
              }),
              Tel: new FormControl(null, {
                validators: [Validators.required,Validators.minLength(8)
                ]
              }),
              Fax: new FormControl(null, {
                validators: [Validators.required,Validators.minLength(8),Validators.maxLength(8)]
              }),
              Email: new FormControl(null, {
                validators: [Validators.required,Validators.email]
              }),
              Site: new FormControl(null, {
                validators: [Validators.required]
              }),
              Matfiscale: new FormControl(null, {
                validators: [Validators.required]
              }),
              Sigle: new FormControl(null, {
                validators: []
              }),
              MotDePasse: new FormControl(null, {
                validators: [Validators.required]
              }),
              login: new FormControl(null, {
                validators: [Validators.required]
              }),
            })
    }

    get Rs() { return this.form.get('Rs'); }
    get Adresse() { return this.form.get('Adresse'); }
    get Tel() { return this.form.get('Tel'); }
    get Fax() { return this.form.get('Fax'); }
    get Email() { return this.form.get('Email'); }
    get Matfiscale() { return this.form.get('Matfiscale'); }
    get Site() { return this.form.get('Site'); }
    get MotDePasse() { return this.form.get('MotDePasse'); }
    get login() { return this.form.get('login'); }

    inscription() {

        if (this.form.invalid) {
            return;
    }
console.log(this.form.value)
this.inscriptionsocieteservice.inscription(this.form.value.Rs,
    this.form.value.Adresse,
     this.form.value.Tel,
   this.form.value.Fax,
    this.form.value.Email,
    this.form.value.Site,
     this.form.value.Matfiscale,
    this.form.value.Sigle,
     this.form.value.MotDePasse,
    false,
     this.form.value.login)
     this.inscriptionsocieteservice.getinscriptionmessage().subscribe((res) => {
        this.message = res.msg;
        console.log(res)
        this.etat = res.etat;
        this.form.reset();
        setTimeout(() => {
         this.route.navigate(['/login']);
        }, 1000);

    });

    }

    onImagePicked(e) {
        const file = (e.target as HTMLInputElement).files[0];
        console.log(file)
        this.form.patchValue({ Sigle: file });
        this.form.get('Sigle').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
}
