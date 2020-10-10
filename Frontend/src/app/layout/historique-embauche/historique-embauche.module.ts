import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { PageHeaderModule } from './../../shared';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { HistoriqueEmbaucheComponent } from './historique-embauche.component';
import { HistoriqueEmbaucheRoutingModule } from './historique-embauche-routing.module';
import { AfficheComponent } from './affiche/affiche.component';
import { AjouteHistoriqueEmbaucheComponent } from './ajoute-historique-embauche/ajoute-historique-embauche.component';
import { AjouteHistoriqueEmbaucheRoutingModule } from './ajoute-historique-embauche/ajoute-historiqueEmbauche-routing.module';
import {MatSelectModule} from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PipePipe } from 'src/app/pipe/pipe.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
    imports: [
        CommonModule,
        HistoriqueEmbaucheRoutingModule,
         MatIconModule,
         MatTableModule,
         ReactiveFormsModule,
         MatExpansionModule,
         FormsModule,MatAutocompleteModule,
         MatCardModule, MatSelectModule,MatSelectModule,
         MatFormFieldModule,
         NgxMatSelectSearchModule,
         NgbDropdownModule,
         MatFormFieldModule,
          MatInputModule,
         MatButtonModule,
         MatSortModule,
         MatTooltipModule,
         MatDialogModule,NgxDropzoneModule,
         PageHeaderModule],
         exports: [
            MatSortModule],
    declarations: [HistoriqueEmbaucheComponent, AfficheComponent, AjouteHistoriqueEmbaucheComponent,PipePipe]
})
export class HistoriqueEmbaucheModule {}
