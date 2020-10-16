import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';


import { PageHeaderModule } from './../../../shared';
import { AffichePersonnelRoutingModule } from './affiche-personnel-routing.module';
import { AffichePersonnelComponent } from './affiche-personnel.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        AffichePersonnelRoutingModule,
         MatIconModule,
         MatInputModule ,MatSelectModule,
         MatExpansionModule
         ,MatCardModule,FormsModule, ReactiveFormsModule ,
         MatButtonModule,MatSortModule,
         MatFormFieldModule , PageHeaderModule],
         exports: [
            MatSortModule],
    declarations: [AffichePersonnelComponent]
})
export class AffichePersonnelModule {}
