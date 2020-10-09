import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HistoriqueEmbauche } from '../models/historiqueembauche';
const BACKEND_URL = environment.apiUrl + '/HistoriqueEmbauche/';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueEmbaucheService {

    HistoriqueEmbauchesub = new Subject<HistoriqueEmbauche[]>();
    private HistoriqueEmbauche: HistoriqueEmbauche[] = [];

  constructor(private http :HttpClient) { }

  getall(id) {
    this.http.get<{HistoriqueEmbauches: HistoriqueEmbauche[]}>(BACKEND_URL + `getall/${id}`).subscribe((res) =>  {
      this.HistoriqueEmbauche = res.HistoriqueEmbauches;
      console.log(res)
      this.HistoriqueEmbauchesub.next([...this.HistoriqueEmbauche]);
    });
 }
 getsub() {
    return  this.HistoriqueEmbauchesub.asObservable();
    }
    getonehistorique(id) {

        return this.http.get<{Historique: HistoriqueEmbauche}>(BACKEND_URL + `getonebyid/${id}`);
    }
}
