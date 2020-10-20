import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PrestataireAssurance } from 'src/app/models/prestataire';
import { Assurance } from 'src/app/models/assurance';

import { Voiture } from 'src/app/models/voiture';
import { PrestataireAssuranceService } from 'src/app/services/prestataire-assurance.service';
import { VoitureService } from 'src/app/services/voiture.service';
import { AssuranceService } from 'src/app/services/assurance.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-assurance',
    templateUrl: './assurance.component.html',
    styleUrls: ['./assurance.component.css']
})
export class AssuranceComponent implements OnInit, AfterViewInit {
    voitureID;
    voiture: Voiture;
    prestataires: PrestataireAssurance[] = [];
    form;
    imagePreview;
    userID;
    assurances: Assurance[] = [];
    popoverTitle = 'Popover title';
    popoverMessage = 'Vous etes sure';
    confirmClicked = false;
    cancelClicked = false;
    displayedColumns: string[] = ['Prestataire', 'DateOperation', 'DateDebutValidite', 'DateFinValidite',
        'Actions'];
    dataSource = new MatTableDataSource<Assurance>();
    constructor(private router: ActivatedRoute, private voitureservice: VoitureService,
        private prestataireservice: PrestataireAssuranceService, private assuranceservice: AssuranceService) { }
    @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
        this.dataSource.sort = sort;
    }
    ngOnInit(): void {
        this.userID = localStorage.getItem('societeId');
        this.router.paramMap.subscribe((paramMap: ParamMap) => {
            this.voitureID = paramMap.get('id');
        });
        this.voitureservice.getonevoiture(this.voitureID).subscribe((voiture) => {
            this.voiture = voiture.voiture;
        });
        this.prestataireservice.getall();
        this.prestataireservice.prestataireressub().subscribe(res => {
            this.prestataires = res;
        });
        this.assuranceservice.getallassurance(this.voitureID);
        this.assuranceservice.getallassurancesub().subscribe((res) => {
            this.assurances = res;
            this.dataSource.data = res;

        });
        this.form = new FormGroup({
            prestataireassuranceID: new FormControl('', { validators: [Validators.required] }),
            DateOperation: new FormControl('', { validators: [Validators.required] }),
            DateDebutValidite: new FormControl('', { validators: [Validators.required] }),
            DateFinValidite: new FormControl('', { validators: [Validators.required] }),
            CopierAssurance: new FormControl('', { validators: [Validators.required] }),
            Montant: new FormControl('', { validators: [Validators.required] }),

        });

    }
    ngAfterViewInit(): void {




    }
    public doFilter = (value: string) => {
        this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
    onImagePicked(e) {
        const file = (e.target as HTMLInputElement).files[0];
        this.form.patchValue({ CopierAssurance: file });
        this.form.get('CopierAssurance').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
    supprimerimage() {
        this.imagePreview = null;
        this.form.patchValue({ CopierAssurance: '' });
    }
    enregistre() {
        if (this.form.invalid) {
            return;
        }
        const assurance: Assurance = {
            prestataireassuranceID: this.form.value.prestataireassuranceID,

            DateOperation: this.form.value.DateOperation,
            DateDebutValidite: this.form.value.DateDebutValidite,
            DateFinValidite: this.form.value.DateFinValidite,
            CopierAssurance: this.form.value.CopierAssurance,
            Montant: this.form.value.Montant,
            voitureID: this.voitureID,
            userID: this.userID
        };
        this.assuranceservice.ajoute(assurance);
        this.assuranceservice.getresponcesub().subscribe(res => {
            if (res.ok === true) {
                this.form.reset();
                this.imagePreview = null;
            }
        });
    }
    supprimer(id) {

    }
}
