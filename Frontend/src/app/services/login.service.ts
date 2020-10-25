import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Authmodel } from '../models/authmodel';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Societe } from '../models/societe';
const BACKEND_URL = environment.apiUrl + '/user/';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private authmessage = new Subject<{message: string, etat: boolean}>();
    private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private societeId: string;
  private societe: Societe;
  private authStatusListener = new Subject<boolean>();

msg;
  constructor( private http: HttpClient, private route: Router) { }
  login( Login: string , MotDePasse: string) {
    const authdata: Authmodel = { Login  , MotDePasse };
    this.http.post<{token: string , userFunction: any, userId: any,
         expiresIn: number, msg: string, ok: boolean}>(BACKEND_URL + 'login', authdata)
.subscribe((response) => {

    this.authmessage.next({message: response.msg , etat: response.ok});
    const token = response.token;
    this.token = token;

    if (token) {
      const expiresInDuration = response.expiresIn;
      this.setAuthTimer(expiresInDuration);
      this.isAuthenticated = true;

     this.societeId = response.userId.id;
      this.authStatusListener.next(true);
      const now = new Date();
      const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
      this.saveAuthData(token, expirationDate, this.societeId ,response.userFunction);
      setTimeout(() => {
        this.route.navigate(['/']);
      }, 3000);
     }


});
}
  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getSocieteData(){
      return this.societe;
  }

  getUserId() {
    return this.societeId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
     this.societeId = authInformation.societeId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
   this.societeId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.route.navigate(['/login']);
  }

  private setAuthTimer(duration: number) {
    console.log('Setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, societeId: string ,userfunction:string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
   localStorage.setItem('societeId', societeId);
   localStorage.setItem('UserFunction', userfunction);

  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('societeId');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const societeId = localStorage.getItem('societeId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      societeId: societeId,
    };
  }
  getauthmessage() {
    return  this.authmessage.asObservable();
  }
  msglogin(){
      return this.msg;
  }

  sendRecaptchaToken(token){
    return this.http.post<any>(BACKEND_URL + 'validate_captcha', {recaptcha: token});
  }
}
