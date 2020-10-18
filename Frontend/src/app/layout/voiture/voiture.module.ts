import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoitureRoutingModule } from './voiture-routing.module';
import { PageHeaderModule } from 'src/app/shared';
import { VoitureComponent } from './voiture.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AjouteEditComponent } from './ajoute-edit/ajoute-edit.component';
import { AssuranceComponent } from './assurance/assurance.component'
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisiteComponent } from './visite/visite.component';

@NgModule({
  declarations: [

    VoitureComponent,

    AjouteEditComponent,

    AssuranceComponent,

    VisiteComponent,
  ],
  imports: [
    MatSelectModule,
    FormsModule,
     ReactiveFormsModule,
      CommonModule,
      MatIconModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      MatSortModule,
    VoitureRoutingModule,
PageHeaderModule,
MatTableModule,
ConfirmationPopoverModule.forRoot({
    confirmButtonType: 'danger', // set defaults here
}),
  ],exports: [
    MatSortModule],
})
export class VoitureModule { }
