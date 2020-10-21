import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entretien } from '../models/entretien';
const BACKEND_URL = environment.apiUrl + '/entretien/';

@Injectable({
  providedIn: 'root'
})
export class EntretienService {
    private entretiens :Entretien [] =[];
    private entretiensub =new Subject <Entretien []>();
  constructor(private http: HttpClient) { }
  getall(){
      this.http.get<{entretien :Entretien[]}>(BACKEND_URL+'getall').subscribe((res)=>{
          this.entretiens =res.entretien;
          this.entretiensub.next([...this.entretiens])
      })
  }
  getentretiensub(){
      return this.entretiensub.asObservable();
  }
  add(entretien){
      this.http.post<{entretien :Entretien}>(BACKEND_URL +'add',entretien).subscribe((res)=>{
          console.log(res.entretien)
          this.entretiens.push(res.entretien)
          this.entretiensub.next([...this.entretiens])

      })
  }
  delete(id){
    this.http.delete(BACKEND_URL +`delete/${id}`).subscribe((res)=>{
        this.entretiens=this.entretiens.filter(p=>p.ID !=id)
        this.entretiensub.next([...this.entretiens])
    })
}
edit(entretien:Entretien,id:string){
    this.http.put(BACKEND_URL+`update/${id}`,entretien).subscribe((res)=>{
        console.log(res)
        const updateposte = [...this.entretiens];
        const oldposte = updateposte.findIndex(p => p.ID === id);
        updateposte[oldposte] = entretien;
        this.entretiens = updateposte;
        this.entretiensub.next([...this.entretiens]);
    });
}
}
