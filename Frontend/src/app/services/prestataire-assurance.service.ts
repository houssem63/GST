import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrestataireAssurance } from '../models/prestataire';
const BACKEND_URL = environment.apiUrl + '/prestataireassurance/';

@Injectable({
    providedIn: 'root'
})
export class PrestataireAssuranceService {
    prestataires: PrestataireAssurance[] = [];
    prestatairesub = new Subject<PrestataireAssurance[]>();
    prestatairemsgsub =new Subject<{msg:string ,ok :boolean}>()
    constructor(private http: HttpClient) { }
    ajoute(prestataire: PrestataireAssurance) {
        console.log(prestataire)
        this.http.post<{ prestataire: PrestataireAssurance }>(BACKEND_URL + 'add', prestataire).subscribe((res) => {
            console.log(res);
            this.prestataires.push(res.prestataire);
            this.prestatairesub.next([...this.prestataires]);
        });
    }
    getall() {
        this.http.get<{ prestataire: PrestataireAssurance[] }>(BACKEND_URL + 'getall').subscribe((res) => {
            this.prestataires = res.prestataire;
            this.prestatairesub.next([...this.prestataires]);
        });
    }
    prestataireressub() {
        return this.prestatairesub.asObservable();
    }
    getone(id) {
        return this.http.get<{ prestataire: PrestataireAssurance }>(BACKEND_URL + `getone/${id}`)
    }
    edit(prestataire: PrestataireAssurance, id) {
        console.log(id)
        this.http.put<{ msg: string, ok: boolean }>(BACKEND_URL + `update/${id}`, prestataire).subscribe((res) => {
            console.log(prestataire)
            if (res.ok === true) {
                const updateprestataire = [...this.prestataires];
                const oldprestataire = updateprestataire.findIndex(p => p.ID === id);
                updateprestataire[oldprestataire] = prestataire;
                this.prestataires = updateprestataire;
                this.prestatairesub.next([...this.prestataires]);
            }

        });
    }
    delete(id){
        this.http.delete<{msg:string,ok:boolean}>(BACKEND_URL + `delete/${id}`)
        .subscribe(res=>{
            this.prestatairemsgsub.next({msg:res.msg ,ok :res.ok})
            if(res.ok ===true){
              this.prestataires = this.prestataires.filter(v => v.ID !== id);
            this.prestatairesub.next([...this.prestataires]);
            }


        })
    }
    getresmsh(){
        return this.prestatairemsgsub.asObservable();
    }
}
