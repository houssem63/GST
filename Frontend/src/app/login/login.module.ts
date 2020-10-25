import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaModule,RecaptchaFormsModule } from 'ng-recaptcha';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,NgbModule ,
        LoginRoutingModule,RecaptchaModule,RecaptchaFormsModule ,
    FormsModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
