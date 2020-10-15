import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/models/usermodel';
import { PerosnnelService } from 'src/app/services/perosnnel.service';

@Component({
  selector: 'app-ajoute-edit',
  templateUrl: './ajoute-edit.component.html',
  styleUrls: ['./ajoute-edit.component.css'],
  providers:[DatePipe]
})
export class AjouteEditComponent implements OnInit {
    form;
    imagePreview: string;
    imagePreviewpersonnel: string;
    private societeId;
    msg;
    ok;
    CinPattern = '[0-9]{8}';
     mode = 'create';
    private personnelID;
    hide = true;
    personnel: User;
  constructor( private personnelservice: PerosnnelService,
    private datePipe: DatePipe,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.personnelservice.getmsgetat().subscribe((res) => {
        this.msg = res.msg;
        this.ok = res.ok;
    });
    this.societeId = localStorage.getItem('societeId');
    this.form =  new FormGroup({
        Cin: new FormControl(null, [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(this.CinPattern),
        ]),
        Nom: new FormControl(null, [Validators.required]),
        Prenom: new FormControl(null, {
            validators: [Validators.required],
        }),
        DateDeNaissance: new FormControl(null, {
            validators: [Validators.required],
        }),
        Adresse: new FormControl(null, {
            validators: [Validators.required],
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
        Email: new FormControl(null, [
            Validators.required,
            Validators.email,
        ]),
        NumCNSS: new FormControl(null, {
            validators: [ Validators.pattern('[0-9]')],
        }),
        CopierPermis: new FormControl(null, {
            validators: [],
        }),
        SituationFamilialle: new FormControl(null, {
            validators: [Validators.required],
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
            this.personnelID = paramMap.get('id');

            this.personnelservice
                .getonepersonnel(this.personnelID)
                .subscribe((res) => {
                    console.log(res);
                    this.personnel = res.personnel;
                    const date1 = new Date(
                        this.personnel.DateDeNaissance
                    );
                    this.form.setValue({
                        Cin: this.personnel.Cin,
                        Nom: this.personnel.Nom,
                        Prenom: this.personnel.Prenom,
                        DateDeNaissance: this.datePipe.transform(
                            date1,
                            'yyyy-MM-dd'
                        ),
                        Adresse: this.personnel.Adresse,
                        Tel: this.personnel.Tel,
                        Fax: this.personnel.Fax,
                        Email: this.personnel.Email,
                        NumCNSS: this.personnel.NumCNSS,
Login :this.personnel.Login,
                        SituationFamilialle: this.personnel.SituationFamilialle,
                        MotDePasse :this.personnel.MotDePasse,
                        Image:this.personnel.Image,
                        CopierPermis: this.personnel.CopierPermis,
                    });
                    this.imagePreviewpersonnel =this.personnel.Image;
                    this.imagePreview =this.personnel.CopierPermis;
                });
        } else {
            this.mode = 'create' ;
    this.personnelID = null ;
            }
    });
  }
  imagepersonnel(e) {
    const file = (e.target as HTMLInputElement).files[0];
    this.form.patchValue({ Image: file });
    this.form.get('Image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreviewpersonnel = reader.result as string;
    };
    reader.readAsDataURL(file);
}
ajoute() {
    console.log(this.form.value)

    if (this.form.invalid) {
        return;
    }
    console.log(this.form.value)
    if (this.mode === 'create') {
        this.personnelservice
        .inscriptionpersonnel(
            Number(this.form.value.Cin) ,
            this.form.value.Nom,
             this.form.value.Prenom,
              this.form.value.DateDeNaissance,
           this.form.value.Adresse,
          Number( this.form.value.Tel) ,
          Number(this.form.value.Fax)   ,
            this.form.value.Email,
          Number(this.form.value.NumCNSS)   ,
             this.form.value.CopierPermis,
             this.form.value.SituationFamilialle,
             this.form.value.Login,
             this.form.value.MotDePasse,
             this.form.value.Image,
       this.societeId,
        'Personnel'
        );
        } else {
            console.log(this.form.value)
this.personnelservice.updatePersonnel(this.form.value.Cin,
this.form.value.Nom,
this.form.value.Prenom,
this.form.value.DateDeNaissance,
this.form.value.Adresse,
this.form.value.Tel,
this.form.value.Fax,
this.form.value.Email,
this.form.value.NumCNSS,
this.form.value.CopierPermis,
this.form.value.Image,

this.form.value.SituationFamilialle,
this.societeId, this.personnelID);
        }
}
onImagePicked(e) {
    const file = (e.target as HTMLInputElement).files[0];
    console.log(file);
    this.form.patchValue({ CopierPermis: file });
    this.form.get('CopierPermis').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
        this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
}
supprimercopierpermis() {
    this.imagePreview = null;
    this.form.patchValue({ CopierPermis: '' });
}
supprimerimagepersonnel() {
    this.imagePreviewpersonnel = null;
    this.form.patchValue({ Image: '' });
}
}
