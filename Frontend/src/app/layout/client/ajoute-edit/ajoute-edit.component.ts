import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/models/usermodel';
import { ClientService } from 'src/app/services/client.service';

@Component({
    selector: 'app-ajoute-edit',
    templateUrl: './ajoute-edit.component.html',
    styleUrls: ['./ajoute-edit.component.css']
})
export class AjouteEditComponent implements OnInit {
    form;
    CinPattern = '[0-9]{8}';
msg ; ok;
hide = true;
imagePreview: string;
societeID;
mode='create';
clientID;
client :User;
    constructor( private clientservice :ClientService ,private router :ActivatedRoute) { }

    ngOnInit(): void {
        this.societeID =localStorage.getItem('societeId');
        console.log(this.societeID)
        this.form = new FormGroup({
            Rs: new FormControl(null, {
                validators: [Validators.required]
            }),
            Adresse: new FormControl(null, {
                validators: [Validators.required]
            }),
            Tel: new FormControl(null, [
                Validators.required,
                Validators.minLength(8),
                Validators.pattern(this.CinPattern),
            ]),
            Fax: new FormControl(null, [
                Validators.required,
                Validators.minLength(8),
                Validators.pattern(this.CinPattern),
            ]),
            Email: new FormControl(null, {
                validators: [Validators.required, Validators.email]
            }),
            Site: new FormControl(null, {
                validators: [Validators.required]
            }),
            NomPC: new FormControl(null, {
                validators: [Validators.required]
            }),
            PrenomPC: new FormControl(null, {
                validators: [Validators.required]
            }),
            TelPersonnelContact: new FormControl(null, {
                validators: [Validators.required,
                Validators.minLength(8),
                Validators.pattern(this.CinPattern),]
            }),
            FaxPersonnelContact: new FormControl(null, {
                validators: [Validators.required,
                Validators.minLength(8),
                Validators.pattern(this.CinPattern),]
            }),
            AdresseEmailPersonnel: new FormControl(null, {
                validators: [Validators.required, Validators.email]
            }),
            Matfiscale: new FormControl(null, {
                validators: [Validators.required]
            }),
            Regfiscale: new FormControl(null, {
                validators: [Validators.required]
            }),
             Login: new FormControl(null, {
                validators: [Validators.required],
            }),
            MotDePasse: new FormControl(null, {
                validators: [Validators.required],
            }),
             Image: new FormControl(null, {
                validators: []
            }),

        });
        this.router.paramMap.subscribe((paramMap: ParamMap) => {
            if (paramMap.has('id')) {
                this.mode = 'edit';
                this.clientID = paramMap.get('id');
            this.clientservice.getoneclient(this.clientID).subscribe((res)=>{
                this.client = res.client ;
                console.log(res.client)
                this.form.setValue({
                    Rs: res.client.Rs,
                    Adresse: res.client.Adresse,
                    Tel: res.client.Tel,
                    Fax: res.client.Fax,
                    Email: res.client.Email,
                    Site: res.client.Site,
                    NomPC:res.client.NomPC,
                    PrenomPC:res.client.PrenomPC,
                    TelPersonnelContact:res.client.TelPersonnelContact,
                    FaxPersonnelContact:res.client.FaxPersonnelContact,
                    AdresseEmailPersonnel:res.client.AdresseEmailPersonnel,
                    Matfiscale: res.client.Matfiscale,
                    Regfiscale: res.client.Regfiscale,
                     Login: res.client.Login,
                    MotDePasse:res.client.MotDePasse,
                     Image:res.client.Image
                })
                this.imagePreview =res.client.Image;
            })
            }
        })
    }
ajoute(){
    console.log(this.form)
if (this.form.invalid){
    return ;
}
if(this.mode==='create'){
    this.clientservice.inscriptionclient(this.form.value.Rs,
        this.form.value.Adresse,
        this.form.value.Tel,
        this.form.value.Fax,
        this.form.value.Email,
        this.form.value.Site,
        this.form.value.NomPC,
        this.form.value.PrenomPC,
        this.form.value.TelPersonnelContact,
        this.form.value.FaxPersonnelContact,
        this.form.value.AdresseEmailPersonnel,
        this.form.value.Matfiscale,
        this.form.value.Regfiscale,
        this.form.value.Login,
        this.form.value.MotDePasse,
        this.form.value.Image,
        this.societeID,
        'Client',
    );
    this.clientservice.getinscriptionresponce().subscribe(res=>{
    this.msg =res.msg;
    this.ok =res.ok
    })
} else {
    this.clientservice.edit(this.form.value.Rs,
        this.form.value.Adresse,
        this.form.value.Tel,
        this.form.value.Fax,
        this.form.value.Email,
        this.form.value.Site,
        this.form.value.NomPC,
        this.form.value.PrenomPC,
        this.form.value.TelPersonnelContact,
        this.form.value.FaxPersonnelContact,
        this.form.value.AdresseEmailPersonnel,
        this.form.value.Matfiscale,
        this.form.value.Regfiscale,
        this.form.value.Login,
        this.form.value.MotDePasse,
        this.form.value.Image,
        this.societeID,
        'Client',this.clientID)
}

}
imageclient(e) {
    const file = (e.target as HTMLInputElement).files[0];
    this.form.patchValue({ Image: file });
    this.form.get('Image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
}
supprimerimage(){
    this.imagePreview =null;
    this.form.patchValue({ Image: '' });

}
}
