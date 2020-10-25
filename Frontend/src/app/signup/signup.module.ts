import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaModule,RecaptchaFormsModule } from 'ng-recaptcha';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    FormsModule,NgbModule,
    MatFormFieldModule,
    MatRadioModule,MatCardModule,
    MatIconModule, RecaptchaModule,RecaptchaFormsModule
  ],
  declarations: [SignupComponent],

})
export class SignupModule { }
