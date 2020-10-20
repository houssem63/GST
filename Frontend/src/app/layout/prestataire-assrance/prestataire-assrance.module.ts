import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestataireAssranceComponent } from './prestataire-assrance.component';
import { PrestataireAssranceRoutingModule } from './prestataire-assrance-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [PrestataireAssranceComponent],
  imports: [
    CommonModule,MatCardModule,MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,MatTooltipModule,
    MatFormFieldModule,
    MatIconModule,MatButtonModule,
    PrestataireAssranceRoutingModule
  ]
})
export class PrestataireAssranceModule { }
