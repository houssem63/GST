import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { PageHeaderModule } from './../../shared';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MatTooltipModule } from '@angular/material/tooltip';

import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AjouteEditComponent } from './ajoute-edit/ajoute-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfficheClientComponent } from './affiche-client/affiche-client.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ClientComponent, AjouteEditComponent, AfficheClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatTableModule,
    PageHeaderModule,
    MatIconModule,
    MatCardModule,MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,MatInputModule,
    ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger', // set defaults here
      }),
      MatSortModule,
      MatTooltipModule,
      FormsModule, ReactiveFormsModule
  ]
})
export class ClientModule { }
