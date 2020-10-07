import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Societe } from '../models/societe';
const BACKEND_URL = environment.apiUrl + '/societe/';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  constructor(private http: HttpClient) { }
  getOneSociete(id:string) {
return this.http.get<{societe: Societe}>(BACKEND_URL + `getonebyid/${id}`);
  }
}
