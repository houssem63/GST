import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Personnel } from '../models/personnel';
const BACKEND_URL = environment.apiUrl + '/personnel/';

@Injectable({
  providedIn: 'root'
})
export class PerosnnelService {

  constructor(private http : HttpClient) { }
  getallpersonnel(id){
     return this.http.get<{personnel :Personnel[]}>(BACKEND_URL + `getall/${id}`)
  }
}
