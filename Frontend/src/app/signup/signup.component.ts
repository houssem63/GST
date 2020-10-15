import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Societe } from '../models/societe';
import { User } from '../models/usermodel';
import { routerTransition } from '../router.animations';
import { SocieteInscriptionService } from '../services/societe-inscription.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private userService: UserService , private route: Router) {}

    hide = true;
formsociete;
    formpersonnel;
    formclient;
imagePreviewclient: string;
imagePreviewpersonnel: string;
imagePreviewsociete: string;
imagePreviewcopierpermis: string;
SocieteID;
message ;
Userfunction = 'Societe';
    etat: boolean;
    CinPattern = '[0-9]{8}';
societes: User[] = [];
    ngOnInit() {
        this.userService.getallsociete().subscribe((res) => {
this.societes = res.societe;
        });
        this.formsociete = new FormGroup({
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
                validators: [Validators.required,Validators.email]
              }),
              Site: new FormControl(null, {
                validators: [Validators.required]
              }),
              Matfiscale: new FormControl(null, {
                validators: [Validators.required]
              }),
              Image: new FormControl(null, {
                validators: []
              }),
              MotDePasse: new FormControl(null, {
                validators: [Validators.required]
              }),
              Login: new FormControl(null, {
                validators: [Validators.required]
              })

            });
            this.formclient = new FormGroup({
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
                    validators: [Validators.required,Validators.email]
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
                    validators: [Validators.required,Validators.email]
                  }),
                  Matfiscale: new FormControl(null, {
                    validators: [Validators.required]
                  }),
                Regfiscale: new FormControl(null, {
                    validators: [Validators.required]
                  }), Login: new FormControl(null, {
                    validators: [Validators.required],
                }),
                MotDePasse: new FormControl(null, {
                    validators: [Validators.required],
                }),   Image: new FormControl(null, {
                    validators: []
                  }) ,
                  SocieteID: new FormControl(null, {
                    validators: [Validators.required],
                }),

            });
            this.formpersonnel = new FormGroup({
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
                SocieteID: new FormControl(null, {
                    validators: [Validators.required],
                }),
            });
    }
    inscriptionpersonnel() {
if (this.formpersonnel.invalid) {
    return;
}
this.userService.inscriptionpersonnel(
   Number(this.formpersonnel.value.Cin) ,
    this.formpersonnel.value.Nom,
     this.formpersonnel.value.Prenom,
      this.formpersonnel.value.DateDeNaissance,
   this.formpersonnel.value.Adresse,
  Number( this.formpersonnel.value.Tel) ,
  Number(this.formpersonnel.value.Fax)   ,
    this.formpersonnel.value.Email,
  Number(this.formpersonnel.value.NumCNSS)   ,
     this.formpersonnel.value.CopierPermis,
     this.formpersonnel.value.SituationFamilialle,
     this.formpersonnel.value.Login,
     this.formpersonnel.value.MotDePasse,
     this.formpersonnel.value.Image,
this.formpersonnel.value.SocieteID,
this.Userfunction
     );
    }
    inscriptionclient() {
        if (this.formclient.invalid) {
            return;
    }
    console.log(this.formclient.value.SocieteID)
    this.userService.inscriptionclient(this.formclient.value.Rs,
        this.formclient.value.Adresse,
        this.formclient.value.Tel,
        this.formclient.value.Fax,
        this.formclient.value.Email,
        this.formclient.value.Site,
        this.formclient.value.NomPC,
        this.formclient.value.PrenomPC,
        this.formclient.value.TelPersonnelContact,
        this.formclient.value.FaxPersonnelContact,
        this.formclient.value.AdresseEmailPersonnel,
        this.formclient.value.Matfiscale,
        this.formclient.value.Regfiscale,
        this.formclient.value.Login,
        this.formclient.value.MotDePasse,
        this.formclient.value.Image,
        this.formclient.value.SocieteID,
        this.Userfunction,
    );
    }


    inscriptionsociete() {

        if (this.formsociete.invalid) {
            return;
    }
this.userService.inscriptionsociete(this.formsociete.value.Rs,
    this.formsociete.value.Adresse,
     this.formsociete.value.Tel,
   this.formsociete.value.Fax,
    this.formsociete.value.Email,
    this.formsociete.value.Site,
     this.formsociete.value.Matfiscale,
    this.formsociete.value.Image,
     this.formsociete.value.MotDePasse,
    false,
     this.formsociete.value.Login, this.Userfunction);

    /* this.inscriptionsocieteservice.getinscriptionmessage().subscribe((res) => {
        this.message = res.msg;
        console.log(res)
        this.etat = res.etat;
        this.formsociete.reset();
        setTimeout(() => {
         this.route.navigate(['/login']);
        }, 1000);

    });*/

    }

    imagesociete(e) {
        const file = (e.target as HTMLInputElement).files[0];
        this.formsociete.patchValue({ Image: file });
        this.formsociete.get('Image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviewsociete = reader.result as string;
        };
        reader.readAsDataURL(file);
    }

    imagepersonnel(e) {
        const file = (e.target as HTMLInputElement).files[0];
        this.formpersonnel.patchValue({ Image: file });
        this.formpersonnel.get('Image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviewpersonnel = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
    imageclient(e) {
        const file = (e.target as HTMLInputElement).files[0];
        this.formclient.patchValue({ Image: file });
        this.formclient.get('Image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviewclient = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
    copierpermis(e) {
        const file = (e.target as HTMLInputElement).files[0];
        this.formpersonnel.patchValue({ CopierPermis: file });
        this.formpersonnel.get('CopierPermis').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviewcopierpermis = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
    select(e) {
        console.log(e.value);
        this.Userfunction = e.value;
    }
}
