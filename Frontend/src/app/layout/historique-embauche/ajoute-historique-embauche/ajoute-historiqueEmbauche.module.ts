import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { PageHeaderModule } from './../../../shared';

import { AjouteHistoriqueEmbaucheRoutingModule } from './ajoute-historiqueEmbauche-routing.module';

import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        AjouteHistoriqueEmbaucheRoutingModule,MatSelectModule,
         FormsModule,ReactiveFormsModule,MatIconModule,MatInputModule,
         MatCardModule,
         MatFormFieldModule,
         PageHeaderModule],

    declarations: []
})
export class AjouteHistoriqueEmbaucheModule {}
