import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { PersonnelRoutingModule } from './personnel-routing.module';
import { PersonnelComponent } from './personnel.component';
import { PageHeaderModule } from './../../shared';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { AffichePersonnelComponent } from './affiche-personnel/affiche-personnel.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AjouteHistoriqueEmbaucheComponent } from '../historique-embauche/ajoute-historique-embauche/ajoute-historique-embauche.component';
import { AjouteEditComponent } from './ajoute-edit/ajoute-edit.component';
import {MatSelectModule} from '@angular/material/select';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
    imports: [
        CommonModule,ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger', // set defaults here
          }),
         PersonnelRoutingModule,
         MatIconModule,MatAutocompleteModule,
         MatTableModule,
         ReactiveFormsModule,MatSelectModule,
         MatExpansionModule,
         FormsModule,
         MatCardModule,
         MatFormFieldModule,
          MatInputModule,
         MatButtonModule,
         MatSortModule,
         MatTooltipModule,
         MatDialogModule,NgxDropzoneModule,
         PageHeaderModule],
         exports: [
            MatSortModule],
    declarations: [PersonnelComponent,AffichePersonnelComponent,AjouteHistoriqueEmbaucheComponent, AjouteEditComponent]
})
export class PersonnelModule {}
