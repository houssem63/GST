import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/usermodel';
import { LoginService } from 'src/app/services/login.service';
import { SocieteService } from 'src/app/services/societe-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
user :User;
private IDuser;
    constructor(private translate: TranslateService, public router: Router,
        private loginservice:LoginService,
        private userservice : UserService) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
this.IDuser=localStorage.getItem('societeId')
        this.pushRightClass = 'push-right';
   this.userservice.getOneuser(this.IDuser)
   this.userservice.getoneusersubscribe().subscribe((res)=>{

       this.user = res;
   })
    }
    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
     this.loginservice.logout()
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
