import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personnel } from '../models/personnel';
const BACKEND_URL = environment.apiUrl + '/personnel/';

@Injectable({
  providedIn: 'root'
})
export class PerosnnelService {
    personnel: Personnel[] = [];
subpersonnel = new Subject<Personnel[]>();
  constructor(private http: HttpClient , private route: Router) { }
  getallpersonnel(id) {
     this.http.get<{personnel: Personnel[]}>(BACKEND_URL + `getall/${id}`).subscribe((res) =>  {
       this.personnel = res.personnel;
        this.subpersonnel.next([...this.personnel]);
     });
  }
  getonepersonnel(id) {

      return this.http.get<{personnel: Personnel}>(BACKEND_URL + `getonebyid/${id}`);
  }
  addpersonnel(Cin: number,
    Nom: string,
     Prenom: string,
     Date_de_naissance: Date,
     Adresse: string,
     Tel: number,
     Fax: number,
     Email: string,
    NumCNSS: number,
     Permis_Copie: File,
     SituationFamilialle: string,
   societeID: string) {
    const personneldata = new FormData();
    personneldata.append('Cin', Cin.toString());
    personneldata.append('Nom', Nom);
    personneldata.append('Prenom', Prenom);
    personneldata.append('Date_de_naissance', Date_de_naissance.toString());
    personneldata.append('Adresse', Adresse);
    personneldata.append('Tel', Tel.toString());
    personneldata.append('Fax', Fax.toString());
    personneldata.append('Email', Email);
    personneldata.append('NumCNSS', NumCNSS.toString());
    personneldata.append('CopierPermis', Permis_Copie);
    personneldata.append('SituationFamilialle', SituationFamilialle);
    personneldata.append('societeID', societeID);

 this.http.post<{personnel: Personnel}>(BACKEND_URL + 'add', personneldata) .subscribe((res) => {
    this.personnel.push(res.personnel);
    this.subpersonnel.next([...this.personnel]);
    this.route.navigate(['/personnel']);

});
}

updatePersonnel(Cin: number,
    Nom: string,
     Prenom: string,
     Date_de_naissance: Date,
     Adresse: string,
     Tel: number,
     Fax: number,
     Email: string,
    NumCNSS: number,
     Permis_Copie: File,
     SituationFamilialle: string,
   societeID: string, personnelId: string) {
    const personneldata = new FormData();
    personneldata.append('Cin', Cin.toString());
    personneldata.append('Nom', Nom);
    personneldata.append('Prenom', Prenom);
    personneldata.append('Date_de_naissance', Date_de_naissance.toString());
    personneldata.append('Adresse', Adresse);
    personneldata.append('Tel', Tel.toString());
    personneldata.append('Fax', Fax.toString());
    personneldata.append('Email', Email);
    personneldata.append('NumCNSS', NumCNSS.toString());
    personneldata.append('CopierPermis', Permis_Copie);
    personneldata.append('SituationFamilialle', SituationFamilialle);
    personneldata.append('societeID', societeID);
     this.http.put<{personnel: Personnel}>(BACKEND_URL + `update/${personnelId}`, personneldata)
     .subscribe((res) => {
        const updatepersonnel = [...this.personnel];
        const oldpersonnel = updatepersonnel.findIndex(p => p.ID === res.personnel.ID);
        updatepersonnel[oldpersonnel] = res.personnel;
        this.personnel = updatepersonnel;
        this.subpersonnel.next([...this.personnel]);
        this.route.navigate(['/personnel']);
     });

   }
   delete(id) {
   this.http.delete<{personnel: Personnel}>(BACKEND_URL + `delete/${id}`).subscribe((res) => {
    const personnelupdate = this.personnel.filter(v => v.ID !== id);
    this.personnel = personnelupdate;
    this.subpersonnel.next([...this.personnel]);
   });

   }
   getpersoonelsub() {
   return    this.subpersonnel.asObservable();
   }

}

