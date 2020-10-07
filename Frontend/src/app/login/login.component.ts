import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    message ;
    etat: boolean;
    constructor(
      public router: Router,
      private loginservice: LoginService
    ) {}

    ngOnInit( ) {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    connexion(f: NgForm) {
        this.loginservice.login(f.value.login, f.value.MotDePasse);
        this.loginservice.getauthmessage().subscribe((res) => {
            this.message = res.message;
            this.etat = res.etat;
        });
    }
}
