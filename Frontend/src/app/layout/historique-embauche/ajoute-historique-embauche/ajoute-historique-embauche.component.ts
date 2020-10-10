import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Personnel } from 'src/app/models/personnel';
import { PerosnnelService } from 'src/app/services/perosnnel.service';
import {map, startWith} from 'rxjs/operators';
import { Poste } from 'src/app/models/poste';
import { PosteService } from 'src/app/services/poste.service';
import { HistoriqueEmbauche } from 'src/app/models/historiqueembauche';
import { HistoriqueEmbaucheService } from 'src/app/services/historique-embauche.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ajoute-historique-embauche',
  templateUrl: './ajoute-historique-embauche.component.html',
  styleUrls: ['./ajoute-historique-embauche.component.css'],
  providers: [DatePipe],

})
export class AjouteHistoriqueEmbaucheComponent implements OnInit {
    personnels: Personnel[] = [];
    postes: Poste[] = [];

societeID;
form;
personel: Personnel;
poste: Poste;
myControlpersonnel = new FormControl();
myControlposte = new FormControl();
msg;
private mode = 'create';
private historiqueID;
historiqueedit: HistoriqueEmbauche;
historique: HistoriqueEmbauche;
  filteredOptionspersonnel: Observable<Personnel[]>;
  filteredOptionsposte: Observable<Poste[]>;
  constructor( private personnelservice: PerosnnelService,
    private posteservice: PosteService ,
    private historiqueservice: HistoriqueEmbaucheService,
    private datePipe: DatePipe,
    private router: ActivatedRoute
    ) {

}




  ngOnInit() {
    this.societeID = localStorage.getItem('societeId');
    this.personnelservice.getallpersonnel(this.societeID);
    this.personnelservice.getpersoonelsub().subscribe((res) => {
        this.personnels = res;
    });
    this.posteservice.getallposte(this.societeID);
    this.posteservice.getpostesub().subscribe((res) => {
        this.postes = res;
    });

    this.filteredOptionspersonnel = this.myControlpersonnel.valueChanges.pipe(
      startWith(''),
      map(value => this._filterpersonnel(value))
    );
    this.filteredOptionsposte = this.myControlposte.valueChanges.pipe(
        startWith(''),
        map(value => this._filterposte(value))
      );
      this.form = new FormGroup({
        DateEmbauche: new FormControl(null, [
            Validators.required,

        ]),
        DateSortie: new FormControl(null, [
            Validators.required,

        ]),
        Salaire	: new FormControl(null, [
            Validators.required,

        ]),
    });
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has('id')) {
            this.mode = 'edit';
            this.historiqueID = paramMap.get('id'); }
            this.historiqueservice.getonehistorique(this.historiqueID).subscribe((res) => {
            this.historiqueedit = res.Historique;
            this.poste = this.postes.find(poste => poste.ID === res.Historique.posteID);
            this.personel = this.personnels.find(personnel => personnel.ID === res.Historique.personnelID);
            const DateEmbauche = new Date( res.Historique.DateEmbauche);
            const DateSortie = new Date(res.Historique.DateSortie);
            this.form.setValue({
                DateEmbauche: this.datePipe.transform( DateEmbauche , 'yyyy-MM-dd' ),
                DateSortie: this.datePipe.transform( DateSortie , 'yyyy-MM-dd' ),
                Salaire	: res.Historique.Salaire
               });
            });

        });
  }

  private _filterpersonnel(value: Personnel): Personnel[] {
    const filterValuepersonnel = value.toString();



    return this.personnels.filter(personnel => personnel.Cin.toString().indexOf(filterValuepersonnel) === 0);
  }
  private _filterposte(value: Poste): Poste[] {




    const filterValueposte = value.toString().toLowerCase();

    return this.postes.filter(poste => poste.Libelle.toLowerCase().indexOf(filterValueposte) === 0);
  }
  personnelchoix(personnel) {
      this.personel = personnel;
  }
  choixposte(poste) {
      this.poste = poste;
  }
  enregiste() {
      if (this.form.invalid) {
          return;
      }
      if (this.mode === 'create') {
          if (this.poste != null) {
    if (this.personel != null) {
        this.historique = {
     DateEmbauche : this.form.get('DateEmbauche').value,
       DateSortie : this.form.get('DateSortie').value,
         Salaire: this.form.get('Salaire').value,
        personnelID: this.personel.ID,
          posteID: this.poste.ID,
          societeID: this.societeID
   };
} else {
    this.msg = 'personnel est obligatoite';
}
        } else {
    this.msg = 'poste est obligatoire';
         }

        this.historiqueservice.ajoute(this.historique);
         this.msg = null ;
       } else {
        this.historique = {
            DateEmbauche : this.form.get('DateEmbauche').value,
              DateSortie : this.form.get('DateSortie').value,
                Salaire: this.form.get('Salaire').value,
               personnelID: this.personel.ID,
                 posteID: this.poste.ID,
                 societeID: this.societeID
          };
          this.historiqueservice.edit(this.historique, this.historiqueID);
       }
}

}
