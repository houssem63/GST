import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/usermodel';
const BACKEND_URL = environment.apiUrl + '/user/';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient, private route: Router) {}
    getallsociete() {
      return  this.http.get<{societe: User[]}>(BACKEND_URL + 'getallsociete');
    }
    inscriptionsociete(
        Rs: string,
        Adresse: string,
        Tel: number,
        Fax: number,
        Email: string,
        Site: string,
        Matfiscale: string,
        Image: File,
        MotDePasse: string,
        Status: boolean,
        Login: string,
        Userfunction: string
    ) {
        const societedata = new FormData();

        societedata.append('Rs', Rs);
        societedata.append('Adresse', Adresse);
        societedata.append('Tel', Tel.toString());
        societedata.append('Fax', Fax.toString());
        societedata.append('Email', Email);
        societedata.append('Site', Site);
        societedata.append('Matfiscale', Matfiscale);
        societedata.append('Image', Image);
        societedata.append('MotDePasse', MotDePasse);
        societedata.append('Status', String(Status));
        societedata.append('Login', Login);
        societedata.append('Function', Userfunction);

        this.http
            .post<{ msg: string; ok: boolean }>(
                BACKEND_URL + 'add',
                societedata
            )
            .subscribe((res) => {
                console.log(res);
            });
    }
    inscriptionpersonnel(
        Cin: number,
        Nom: string,
        Prenom: string,
        DateDeNaissance: Date,
        Adresse: string,
        Tel: number,
        Fax: number,
        Email: string,
        NumCNSS: number,
        CopierPermis: File,
        SituationFamilialle: string,
        Login: string,
        MotDePasse: string,
        Image: File,
        SocieteID: number,
        UserFunction,
    ) {

        const personneldata = new FormData();
        personneldata.append('Cin', Cin.toString());

        personneldata.append('Nom', Nom);
        personneldata.append('Prenom', Prenom);
        personneldata.append('DateDeNaissance', DateDeNaissance.toString());

        personneldata.append('Adresse', Adresse);
        personneldata.append('Tel', Tel.toString());
        personneldata.append('Fax', Fax.toString());
        personneldata.append('Email', Email);
        personneldata.append('NumCNSS', NumCNSS.toString());
        personneldata.append('CopierPermis', CopierPermis);
        personneldata.append('SituationFamilialle', SituationFamilialle);
        personneldata.append('MotDePasse', MotDePasse);
        personneldata.append('Login', Login);
        personneldata.append('Image', Image);
        personneldata.append('SocieteID', SocieteID.toString());
        personneldata.append('Function', UserFunction);
console.log(Login)
        this.http
            .post<{ msg: string; ok: boolean }>(
                BACKEND_URL + 'add',
                personneldata
            )
            .subscribe((res) => {
                console.log(res);
            });
    }
    inscriptionclient(
        Rs: string,
        Adresse: string,
        Tel: number,
        Fax: number,
        Email: string,
        Site: string,
        NomPC: string,
        PrenomPC: string,
        TelPersonnelContact: number,
        FaxPersonnelContact: number,
        AdresseEmailPersonnel: string,
        Matfiscale: string,
        Regfiscale: number,
        Login: string,
        MotDePasse: string,
         Image: File,
         SocieteID: number,
         UserFunction: string,
    ) {
        console.log(UserFunction)
        const clientdata = new FormData();

        clientdata.append('Rs', Rs);
        clientdata.append('Adresse', Adresse);
        clientdata.append('Tel', Tel.toString());
        clientdata.append('Fax', Fax.toString());
        clientdata.append('Email', Email);
        clientdata.append('NomPC', NomPC);
        clientdata.append('PrenomPC', PrenomPC);
        clientdata.append('TelPersonnelContact', TelPersonnelContact.toString());
        clientdata.append('FaxPersonnelContact', FaxPersonnelContact.toString());
        clientdata.append('AdresseEmailPersonnel', AdresseEmailPersonnel);

        clientdata.append('Regfiscale', Regfiscale.toString());

        clientdata.append('Site', Site);

        clientdata.append('Matfiscale', Matfiscale);
        clientdata.append('Image', Image);
        clientdata.append('MotDePasse', MotDePasse);
        clientdata.append('Login', Login);
        clientdata.append('SocieteID', SocieteID.toString());
        clientdata.append('Function', UserFunction);

        this.http
            .post<{ msg: string; ok: boolean }>(
                BACKEND_URL + 'add',
                clientdata
            )
            .subscribe((res) => {
                console.log(res);
            });
    }
    getOneuser(id:string) {
        return this.http.get<{user: User}>(BACKEND_URL + `getonebyid/${id}`);
          }
}
