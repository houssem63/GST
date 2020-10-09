import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Poste } from '../models/poste';
const BACKEND_URL = environment.apiUrl + '/poste/';

@Injectable({
  providedIn: 'root'
})
export class PosteService {
    subposte = new Subject<Poste[]>();
    poste: Poste[] = [];

  constructor(private http :HttpClient) { }
  getallposte(id) {
    this.http.get<{poste: Poste[]}>(BACKEND_URL + `getall/${id}`).subscribe((res) =>  {
      this.poste = res.poste;
       this.subposte.next([...this.poste]);
    });
 }
 getpostesub() {
    return    this.subposte.asObservable();
    }
add(poste:Poste){
    this.http.post<{poste:Poste}>(BACKEND_URL + 'add',poste).subscribe((res)=>{
        console.log(res)
        this.poste.push(res.poste)
        this.subposte.next([...this.poste])
    })
}
delete(id){
    this.http.delete(BACKEND_URL +`delete/${id}`).subscribe((res)=>{
        this.poste=this.poste.filter(p=>p.ID !=id)
        this.subposte.next([...this.poste])
    })
}
edit(poste:Poste,id:string){
    this.http.put(BACKEND_URL+`update/${id}`,poste).subscribe((res)=>{
        console.log(res)
        const updateposte = [...this.poste];
        const oldposte = updateposte.findIndex(p => p.ID === id);
        updateposte[oldposte] = poste;
        this.poste = updateposte;
        this.subposte.next([...this.poste]);
    })
}
}
