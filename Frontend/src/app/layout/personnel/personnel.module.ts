import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PersonnelRoutingModule } from './personnel-routing.module';
import { PersonnelComponent } from './personnel.component';
import { PageHeaderModule } from './../../shared';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { AffichePersonnelComponent } from './affiche-personnel/affiche-personnel.component';
import { AjouteEditPersonnelComponent } from './ajoute-edit-personnel/ajoute-edit-personnel.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
    imports: [
        CommonModule,
         PersonnelRoutingModule,
         MatIconModule,
         MatTableModule,
         ReactiveFormsModule,
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
    declarations: [PersonnelComponent,AffichePersonnelComponent, AjouteEditPersonnelComponent]
})
export class PersonnelModule {}
