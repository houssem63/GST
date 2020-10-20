import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Assurance } from '../models/assurance';
const BACKEND_URL = environment.apiUrl + '/assurance/';

@Injectable({
    providedIn: 'root'
})
export class AssuranceService {
    private assurances: Assurance[] = [];
    private assurancesub = new Subject<Assurance[]>()
    private responcesub = new Subject<{ok :boolean}>()

    constructor(private http: HttpClient) { }
    ajoute(assurance: Assurance) {
        const assurancedata =new FormData;
        assurancedata.append('prestataireassuranceID',assurance.prestataireassuranceID)
        assurancedata.append('DateOperation',assurance.DateOperation.toString())
        assurancedata.append('DateDebutValidite',assurance.DateDebutValidite.toString())
        assurancedata.append('DateFinValidite',assurance.DateFinValidite.toString())
        assurancedata.append('CopierAssurance',assurance.CopierAssurance)
        assurancedata.append('voitureID',assurance.voitureID)
        assurancedata.append('Montant',assurance.Montant.toString())
        assurancedata.append('userID',assurance.userID)



        this.http.post<{ assurance: Assurance, ok: boolean }>(BACKEND_URL + 'add', assurancedata).subscribe((res) => {
           console.log(res)
            this.assurances.push(res.assurance);
            this.assurancesub.next([...this.assurances]);
            this.responcesub.next({ok :res.ok})
        })
    }
getresponcesub(){
    return this.responcesub.asObservable();
}
getallassurance(id){
    this.http.get<{assurance :Assurance[]}>(BACKEND_URL +`getassranceofonevoiture/${id}`).subscribe((res)=>{
       console.log(res.assurance)
        this.assurances=res.assurance;
        this.assurancesub.next([...this.assurances])
    })
}
getallassurancesub(){
    return this.assurancesub.asObservable();
}
}
