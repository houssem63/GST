import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { PageHeaderModule } from './../../../shared';

import { AjouteHistoriqueEmbaucheRoutingModule } from './ajoute-historiqueEmbauche-routing.module';
import { AjouteHistoriqueEmbaucheComponent } from './ajoute-historique-embauche.component';

import {MatSelectModule} from '@angular/material/select';
import { PipePipe } from 'src/app/pipe/pipe.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        AjouteHistoriqueEmbaucheRoutingModule,
        MatAutocompleteModule,
         FormsModule,ReactiveFormsModule,
         MatCardModule,
         MatFormFieldModule,
         PageHeaderModule],

    declarations: [AjouteHistoriqueEmbaucheComponent,PipePipe]
})
export class AjouteHistoriqueEmbaucheModule {}
