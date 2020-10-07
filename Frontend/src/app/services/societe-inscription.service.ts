import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Societe } from '../models/societe';
const BACKEND_URL = environment.apiUrl + '/societe/';

@Injectable({
  providedIn: 'root'
})
export class SocieteInscriptionService {

  constructor(private http: HttpClient, private route: Router) { }
  private inscriptiomessage = new Subject<{msg: string, etat: boolean}>();

  inscription(Rs: string,
    Adresse: string,
     Tel: number,
   Fax: number,
    Email: string,
    Site: string,
     Matfiscale: string,
    Sigle: File,
     MotDePasse: string,
     Status: boolean,
     login: string) {

    const societedata = new FormData();

    societedata.append('Rs', Rs);
    societedata.append('Adresse', Adresse);
    societedata.append('Tel', Tel.toString());
    societedata.append('Fax', Fax.toString());
    societedata.append('Email', Email);
    societedata.append('Site', Site);
    societedata.append('Matfiscale', Matfiscale);
    societedata.append('Sigle', Sigle);
    societedata.append('MotDePasse', MotDePasse);
    societedata.append('Status', String(Status));
    societedata.append('login', login);
    console.log(Sigle)
   this.http.post<{msg: string , ok: boolean}>(BACKEND_URL + 'add', societedata).subscribe((res) => {
this.inscriptiomessage.next({msg: res.msg, etat: res.ok});
    console.log(res);
    });;
  }
  getinscriptionmessage() {
    return  this.inscriptiomessage.asObservable();
  }
}
