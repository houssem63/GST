import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

import { PersonnelRoutingModule } from './personnel-routing.module';
import { PersonnelComponent } from './personnel.component';
import { PageHeaderModule } from './../../shared';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
         PersonnelRoutingModule,
         MatIconModule,
         MatTableModule,
         MatExpansionModule
         ,MatCardModule,MatFormFieldModule,MatInputModule,
         MatButtonModule,MatSortModule
         , PageHeaderModule],
         exports: [
            MatSortModule],
    declarations: [PersonnelComponent]
})
export class PersonnelModule {}
