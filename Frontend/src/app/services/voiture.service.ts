import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Voiture } from '../models/voiture';
const BACKEND_URL = environment.apiUrl + '/voiture/';

@Injectable({
    providedIn: 'root'
})
export class VoitureService {
    voitures: Voiture[] = [];
    voituresub = new Subject<Voiture[]>();
    voitureres = new Subject<{ msg: string, ok: boolean }>();
    constructor(private http: HttpClient) { }
    getallvoitureofsociete(id) {
        this.http.get<{ voiture: Voiture[] }>(BACKEND_URL + `getallvoitureofonesociete/${id}`).subscribe((voitures) => {
            this.voitures = voitures.voiture;
            this.voituresub.next([...this.voitures]);
        });
    }
    voituresubscribe() {
        return this.voituresub.asObservable();
    }
    ajoute(
        Matricule: string,
        Type: string,
        DPMC: Date,
        Marque: string,
        Categorie: string,
        Compteur: string,
        Propritaire: string,
        CopierContrat: File,
        CopierCarteGrise: File,
        userID: string) {
        const voituedata = new FormData();
        voituedata.append('Matricule', Matricule);
        voituedata.append('Type', Type);
        voituedata.append('DPMC', DPMC.toString());
        voituedata.append('Marque', Marque),
            voituedata.append('Categorie', Categorie);
        voituedata.append('Compteur', Compteur);
        voituedata.append('Propritaire', Propritaire);
        voituedata.append('CopierContrat', CopierContrat);
        voituedata.append('CopierCarteGrise', CopierCarteGrise);
        voituedata.append('userID', userID);

        this.http.post<{ voiture: Voiture, msg: string, ok: boolean }>(BACKEND_URL + 'add', voituedata).subscribe((voiture) => {
console.log(voiture)
            this.voitureres.next({ msg: voiture.msg, ok: voiture.ok });
            if (voiture.ok === true) {
                this.voitures.push(voiture.voiture);
                this.voituresub.next([...this.voitures]);
            }
        });
    }
    voitureesponce() {
        return this.voitureres.asObservable();
    }
    getonevoiture(id){
    return this.http.get<{voiture: Voiture}>(BACKEND_URL + `getonevoiture/${id}`);
    }
}
