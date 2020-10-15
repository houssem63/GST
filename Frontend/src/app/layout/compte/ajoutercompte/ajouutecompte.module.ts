import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutercompteComponent } from './ajoutercompte.component';
import {MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask'


@NgModule({
  declarations: [AjoutercompteComponent],
  imports: [
    CommonModule,MatCardModule,
    MatFormFieldModule,
    MatInputModule,MatButtonModule,
    MatSelectModule,ReactiveFormsModule,NgxMaskModule.forRoot(),
  ]
})
export class AjouutecompteModule { }
