import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistoriqueEmbauche } from '../models/historiqueembauche';
import { PerosnnelService } from './perosnnel.service';
import { PosteService } from './poste.service';
const BACKEND_URL = environment.apiUrl + '/HistoriqueEmbauche/';

@Injectable({
    providedIn: 'root'
})
export class HistoriqueEmbaucheService {

    HistoriqueEmbauchesub = new Subject<HistoriqueEmbauche[]>();
    private HistoriqueEmbauche: HistoriqueEmbauche[] = [];

    constructor(private http: HttpClient, private route: Router, private posteservice: PosteService) { }

    getall(id) {
        this.http.get<{ HistoriqueEmbauches: HistoriqueEmbauche[] }>(BACKEND_URL + `getall/${id}`).subscribe((res) => {


            this.HistoriqueEmbauche = res.HistoriqueEmbauches;
            this.HistoriqueEmbauchesub.next([...this.HistoriqueEmbauche]);
        });
    }
    getsub() {
        return this.HistoriqueEmbauchesub.asObservable();
    }
    gethistoriquedeonepersonnel(id) {
        return this.http.get<{ historique: HistoriqueEmbauche[] }>(BACKEND_URL + `gethistoriquedeonepersonnel/${id}`);

    }
    getonehistorique(id) {

        return this.http.get<{ Historique: HistoriqueEmbauche }>(BACKEND_URL + `getonebyid/${id}`);
    }
    ajoute(historique: HistoriqueEmbauche) {

        this.http.post<{ historique: HistoriqueEmbauche, msg: string }>(BACKEND_URL + 'add', historique).subscribe((res) => {

            this.HistoriqueEmbauche.push(res.historique);
            this.HistoriqueEmbauchesub.next([...this.HistoriqueEmbauche]);

        });
    }
    edit(historique: HistoriqueEmbauche, id: string) {
        this.http.put(BACKEND_URL + `update/${id}`, historique).subscribe((res) => {
            const updateembauche = [...this.HistoriqueEmbauche];
            const oldembauche = updateembauche.findIndex(p => p?.ID === id);
            updateembauche[oldembauche] = historique;
            this.HistoriqueEmbauche = updateembauche;
            this.HistoriqueEmbauchesub.next([...this.HistoriqueEmbauche]);
           // this.route.navigate(['/historiqueembauche']);
        });
    }
    delete(id) {
        this.http.delete(BACKEND_URL + `delete/${id}`).subscribe((res) => {
            const historiqueupdate = this.HistoriqueEmbauche.filter(h => h.ID !== id);
            this.HistoriqueEmbauche = historiqueupdate;
            this.HistoriqueEmbauchesub.next([...this.HistoriqueEmbauche]);
        });
    }
    embauchedate() {
        return this.HistoriqueEmbauche;
    }
}
