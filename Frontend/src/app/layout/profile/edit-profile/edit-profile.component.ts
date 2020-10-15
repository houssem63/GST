import { DatePipe } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/usermodel';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [DatePipe],

})
export class EditProfileComponent implements OnInit {
    @Input() public IDuser: string;
    formsociete;
     public formpersonnel;
    formclient;
    CinPattern = '[0-9]{8}';
    imagePreviewclient: string;
    imagePreviewpersonnel: string;
    imagePreviewsociete: string;
    imagePreviewcopierpermis: string;
    etat: boolean;
message;
Userfunction;
societes: User[] = [];
User: User;
  constructor( private userservice: UserService,private datePipe: DatePipe,
    ) {}

ngOnInit() {

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
        validators: [Validators.required, Validators.email]
      }),
      Site: new FormControl(null, {
        validators: [Validators.required]
      }),
      Matfiscale: new FormControl(null, {
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
                Validators.pattern(this.CinPattern)]
          }),
        FaxPersonnelContact: new FormControl(null, {
            validators: [Validators.required,
                Validators.minLength(8),
                Validators.pattern(this.CinPattern)]
          }),
        AdresseEmailPersonnel: new FormControl(null, {
            validators: [Validators.required, Validators.email]
          }),
          Matfiscale: new FormControl(null, {
            validators: [Validators.required]
          }),
        Regfiscale: new FormControl(null, {
            validators: [Validators.required]
          }), Login: new FormControl(null, {
            validators: [Validators.required],
        }),

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


        SocieteID: new FormControl(null, {
            validators: [Validators.required],
        }),
    });
this.userservice.getOneuser(this.IDuser)
this.userservice.getoneusersubscribe().subscribe((res) => {
console.log(res)
    this.User = res;
    this.Userfunction = res.Function;
    if (res.Function === 'Societe') {
        this.formsociete.setValue({
            Rs: this.User.Rs,
              Adresse: res.Adresse,
              Tel: this.User.Tel,

            Fax: this.User.Fax,
              Email: this.User.Email,
              Site: this.User.Site,
              Matfiscale: this.User.Matfiscale,
              Login: this.User.Login
        });
    } else if (res.Function === 'Personnel') {
        console.log('client')
        const DateDeNaissance = new Date(
            res.DateDeNaissance
        );
        this.formpersonnel.setValue({
            Cin: res.Cin,
        Nom: res.Nom,
        Prenom: res.Prenom,
        DateDeNaissance: this.datePipe.transform(
            DateDeNaissance,
            'yyyy-MM-dd'),
        Adresse: res.Adresse,
        Tel: res.Tel,
        Fax: res.Fax,
        Email: res.Email,
        NumCNSS: res.NumCNSS,
        CopierPermis: res.CopierPermis,
        SituationFamilialle: res.SituationFamilialle,

        Login: res.Login,
        SocieteID :res.SocieteID
        });

    } else {
        console.log('client')
this.formclient.setValue({

            Rs: res.Rs,
            Adresse: res.Adresse,
              Tel: res.Tel,
            Fax: res.Fax,
            Email: res.Email,
            Site: res.Site,
            NomPC: res.NomPC,
            PrenomPC: res.PrenomPC,
            TelPersonnelContact: res.TelPersonnelContact,
            FaxPersonnelContact: res.FaxPersonnelContact,
            AdresseEmailPersonnel: res.AdresseEmailPersonnel,
              Matfiscale: res.Matfiscale,
            Regfiscale: res.Regfiscale,
             Login: res.Login,
             SocieteID :res.SocieteID
        });


    }
});
this.userservice.getallsociete().subscribe((res) => {
    this.societes = res.societe;
            });



}



        editclient() {
            console.log(this.formclient)
            if (this.formclient.invalid) {
                return;
        }
       this.userservice.editclient(
            this.formclient.value.Rs,
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
    this.User.Image,
    this.User.MotDePasse,
    this.User.SocieteID,
    this.IDuser

        )


        }


        editsociete() {

            if (this.formsociete.invalid) {
                return;
        }
this.userservice.updatesociete(
    this.formsociete.value.Rs,
    this.formsociete.value.Adresse,
     this.formsociete.value.Tel,
   this.formsociete.value.Fax,
    this.formsociete.value.Email,
    this.formsociete.value.Site,
     this.formsociete.value.Matfiscale,
    this.User.Image,
     this.User.MotDePasse,
    this.User.Status,
     this.formsociete.value.Login, this.User.Function,
     this.IDuser
)


        }
editpersonnel(){
    if (this.formpersonnel.invalid) {
        return;
}


this.userservice.updatepersonnel(
    this.formpersonnel.value.Cin,
    this.formpersonnel.value.Nom,
    this.formpersonnel.value.Prenom,
    this.formpersonnel.value.DateDeNaissance,

    this.formpersonnel.value.Adresse,
     this.formpersonnel.value.Tel,
   this.formpersonnel.value.Fax,
    this.formpersonnel.value.Email,
    this.formpersonnel.value.NumCNSS,
    this.User.CopierPermis,

    this.formpersonnel.value.SituationFamilialle,
this.formpersonnel.value.Login,
    this.User.Image,
     this.User.MotDePasse,
     this.User.SocieteID,
     this.User.Function,
     this.IDuser // id pour edit
)
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


}
