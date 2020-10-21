import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personnel } from '../models/personnel';
import { User } from 'src/app/models/usermodel';
import { HistoriqueEmbaucheService } from './historique-embauche.service';
import { HistoriqueEmbauche } from '../models/historiqueembauche';

const BACKEND_URL = environment.apiUrl + '/personnel/';

@Injectable({
    providedIn: 'root'
})
export class PerosnnelService {
    personnel: User[] = [];
    msg = new Subject<{ msg: string, ok: boolean }>();
    subpersonnel = new Subject<User[]>();
    constructor(private http: HttpClient, private embaucheservice: HistoriqueEmbaucheService, private route: Router) { }
    getallpersonnel(id) {
        this.http.get<{ personnel: User[] }>(BACKEND_URL + `getall/${id}`).subscribe((res) => {
            res.personnel.map(p => {

                this.embaucheservice.gethistoriquedeonepersonnel(p.ID).subscribe(his => {

                    let tablength;
                    if (his.historique.length === 0) {
                        tablength = ((his.historique.length) - 1);
                    } else {
                        tablength = ((his.historique.length) - 1);
                    }

                    if (his.historique[tablength]?.DateSortie === null) {
                        p.Embaucheetat = false;
                    } else { p.Embaucheetat = true; }


                });
            });
            this.personnel = res.personnel;
            console.log(this.personnel)
            this.subpersonnel.next([...this.personnel]);
        });
    }
    getonepersonnel(id) {

        return this.http.get<{ personnel: User }>(BACKEND_URL + `getonebyid/${id}`);
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
        this.http
            .post<{ msg: string; ok: boolean }>(
                BACKEND_URL + 'add',
                personneldata
            )
            .subscribe((res) => {
                console.log(res);
            });
    }

    updatePersonnel(Cin: number,
        Nom: string,
        Prenom: string,
        DateDeNaissance: Date,
        Adresse: string,
        Tel: number,
        Fax: number,
        Email: string,
        NumCNSS: number,
        Permis_Copie: File,
        image: File,
        SituationFamilialle: string,
        societeID: string, personnelId: string) {
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
        personneldata.append('CopierPermis', Permis_Copie);
        personneldata.append('Image', image);

        personneldata.append('SituationFamilialle', SituationFamilialle);
        personneldata.append('societeID', societeID);
        this.http.put<{ personnel: User }>(BACKEND_URL + `update/${personnelId}`, personneldata)
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
        this.http.delete<{ personnel: User }>(BACKEND_URL + `delete/${id}`).subscribe((res) => {
            const personnelupdate = this.personnel.filter(v => v.ID !== id);
            this.personnel = personnelupdate;
            this.subpersonnel.next([...this.personnel]);
        });

    }
    getpersoonelsub() {
        return this.subpersonnel.asObservable();
    }
    getmsgetat() {
        return this.msg.asObservable();
    }
    editembauch(id, embauche: HistoriqueEmbauche) {
        const personnels = this.personnel.find(p => p.ID === id)
        if (embauche.DateSortie === null) {
            personnels.Embaucheetat = false;
        } else {
            personnels.Embaucheetat = true;
        }
        console.log(personnels)
        const updatepersonnel = [...this.personnel];
        const oldpersonnel = updatepersonnel.findIndex(p => p.ID === id);
        updatepersonnel[oldpersonnel] = personnels;
        this.personnel = updatepersonnel;
        this.personnel = updatepersonnel;
        this.subpersonnel.next([...this.personnel]);

    }
}

