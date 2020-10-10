import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Personnel } from 'src/app/models/personnel';
import { PerosnnelService } from 'src/app/services/perosnnel.service';

@Component({
    selector: 'app-ajoute-edit-personnel',
    templateUrl: './ajoute-edit-personnel.component.html',
    styleUrls: ['./ajoute-edit-personnel.component.css'],
    providers: [DatePipe],
})
export class AjouteEditPersonnelComponent implements OnInit {
    form;
    imagePreview: string;
    private societeId;
    msg;
    ok;
    CinPattern = '[0-9]{8}';
    private mode = 'create';
    private personnelID;
    personnel: Personnel;
    constructor(
        private personnelservice: PerosnnelService,
        private datePipe: DatePipe,
        private route: Router,
        private router: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.personnelservice.getmsgetat().subscribe((res) => {
            this.msg = res.msg;
            this.ok = res.ok;
        });
        this.societeId = localStorage.getItem('societeId');
        this.form = new FormGroup({
            Cin: new FormControl(null, [
                Validators.required,
                Validators.minLength(8),
                Validators.pattern(this.CinPattern),
            ]),
            Nom: new FormControl(null, [Validators.required]),
            Prenom: new FormControl(null, {
                validators: [Validators.required],
            }),
            Date_de_naissance: new FormControl(null, {
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
                validators: [Validators.required, Validators.pattern('[0-9]')],
            }),
            CopierPermis: new FormControl(null, {
                validators: [],
            }),
            SituationFamilialle: new FormControl(null, {
                validators: [Validators.required],
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
                            this.personnel.Date_de_naissance
                        );
                        this.form.setValue({
                            Cin: this.personnel.Cin,
                            Nom: this.personnel.Nom,
                            Prenom: this.personnel.Prenom,
                            Date_de_naissance: this.datePipe.transform(
                                date1,
                                'yyyy-MM-dd'
                            ),
                            Adresse: this.personnel.Adresse,
                            Tel: this.personnel.Tel,
                            Fax: this.personnel.Fax,
                            Email: this.personnel.Email,
                            NumCNSS: this.personnel.NumCNSS,

                            SituationFamilialle: this.personnel
                                .SituationFamilialle,
                            CopierPermis: this.personnel.CopierPermis,
                        });
                    });
            } else {
                this.mode = 'create' ;
        this.personnelID = null ;
                }
        });
    }
    ajoute() {
        if (this.form.invalid) {
            return;
        }
        if (this.mode === 'create') { this.personnelservice
            .addpersonnel(
                this.form.value.Cin,
                this.form.value.Nom,
                this.form.value.Prenom,
                this.form.value.Date_de_naissance,
                this.form.value.Adresse,
                this.form.value.Tel,
                this.form.value.Fax,
                this.form.value.Email,
                this.form.value.NumCNSS,
                this.form.value.CopierPermis,
                this.form.value.SituationFamilialle,
                this.societeId
            );
            } else {
this.personnelservice.updatePersonnel(this.form.value.Cin,
    this.form.value.Nom,
    this.form.value.Prenom,
    this.form.value.Date_de_naissance,
    this.form.value.Adresse,
    this.form.value.Tel,
    this.form.value.Fax,
    this.form.value.Email,
    this.form.value.NumCNSS,
    this.form.value.CopierPermis,
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
    supprimer() {
        this.imagePreview = null;
        this.form.patchValue({ CopierPermis: '' });
    }
}
