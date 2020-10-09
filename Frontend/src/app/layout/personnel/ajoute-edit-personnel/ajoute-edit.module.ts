import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';

import { PageHeaderModule } from './../../../shared';

import { AjouteEditPersonnelRoutingModule } from './ajoute-edit-routing.module';
import { AjouteEditPersonnelComponent } from './ajoute-edit-personnel.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,BrowserModule,
        AjouteEditPersonnelRoutingModule,
        MatFormFieldModule,ReactiveFormsModule,MatIconModule,NgxDropzoneModule,MatCardModule
        ,FormsModule, PageHeaderModule],
         exports: [
            ],
    declarations: [AjouteEditPersonnelComponent]
})
export class AffichePersonnelModule {}
