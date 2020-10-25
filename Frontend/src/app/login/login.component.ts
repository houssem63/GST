import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Alert } from '../models/alert';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit ,OnDestroy {
    message;
    RECAPTCHA_SITE_Key = environment.RECAPTCHA_SITE_Key;
    alerts: Alert[] = [];
loginmsg ;
    etat: boolean;
    constructor(
        public router: Router,
        private loginservice: LoginService
    ) { }

    ngOnInit() { }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    connexion(f: NgForm) {
        if (f.invalid) {
            return;
        }
        let typealert;
        this.loginservice.login(f.value.login, f.value.MotDePasse);

     this.loginmsg=   this.loginservice.getauthmessage().subscribe((res) => {
            this.message = res.message;
            this.etat = res.etat;
            if (this.etat === true) {
                typealert = 'success'
            } else {
                typealert = 'danger'
            }
            this.alerts.push({
                type: typealert,
                message: this.message
            });
        });

   //
    }
    async resolved(captchaResponse: string) {
       // console.log(`Resolved response token: ${captchaResponse}`);
        await this.sendrecaptchaTokenToBackend(captchaResponse); // declaring the token send function with a token parameter
    }


    // function to send the token to the node server
    sendrecaptchaTokenToBackend(token) {
        // calling the service and passing the token to the service
        this.loginservice.sendRecaptchaToken(token).subscribe(
            data => {
                if (data.success === true) {
                    this.alerts.push({
                        type: 'success',
                        message: data.message
                    });
                    //  this.alertService.success(data.message , this.options);
                } else {
                    ///   this.userForm.controls['recaptcha'].setErrors({'failedRecaptcha': true});
                    //   this.alertService.error(data.message , this.options);
                    // this.loginForm.reset();
                    grecaptcha.reset();
                }
            },
            error => {
                //  this.alertService.error(error.error.message , this.options);
            }
        );
    }
    close(alert: Alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
    reset() {
        this.alerts = Array.from(this.alerts);
    }
    ngOnDestroy(){
    //    this.loginmsg.unsubscribe();
    }
}
