import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntretienVoiture } from '../models/entretienvoiture';
const BACKEND_URL = environment.apiUrl + '/entretien_vehicule/';

@Injectable({
    providedIn: 'root'
})
export class EntretienVoitureService {
    private entretiensvoitures: EntretienVoiture[] = [];
    private entretienvoituresub = new Subject<EntretienVoiture[]>();
    constructor(private http: HttpClient) { }
    getall(id) {
        this.http.get<{ entretienvoiture: EntretienVoiture[] }>(BACKEND_URL + `getall/${id}`).subscribe((res) => {
            console.log(res)
            this.entretiensvoitures = res.entretienvoiture;
            this.entretienvoituresub.next([...this.entretiensvoitures]);
        });
    }
    getentretiensub() {
        return this.entretienvoituresub.asObservable();
    }
    add(entretienvoiture) {
        console.log(entretienvoiture)
        this.http.post<{ entretienvoiture: EntretienVoiture }>(BACKEND_URL + 'add', entretienvoiture).subscribe((res) => {
            console.log(res.entretienvoiture);

           this.entretiensvoitures.push(res.entretienvoiture);
           this.entretienvoituresub.next([...this.entretiensvoitures]);

        });
    }
    delete(id) {
        this.http.delete(BACKEND_URL + `delete/${id}`).subscribe((res) => {
            this.entretiensvoitures = this.entretiensvoitures.filter(p => p.ID !== id);
            this.entretienvoituresub.next([...this.entretiensvoitures]);
        });
    }
    edit(entretienvoiture: EntretienVoiture, id: string) {
        this.http.put(BACKEND_URL + `update/${id}`, entretienvoiture).subscribe((res) => {
            console.log(res);
            const updateposte = [...this.entretiensvoitures];
            const oldposte = updateposte.findIndex(p => p.ID === Number(id));
            updateposte[oldposte] = entretienvoiture;
            this.entretiensvoitures = updateposte;
            this.entretienvoituresub.next([...this.entretiensvoitures]);
        });
    }
    getoneentretienvoiture(id) {
        return this.http.get<{entretienvoiture: EntretienVoiture}>(BACKEND_URL + `getone/${id}`);
     }
}
