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


@NgModule({
    imports: [
        CommonModule,
        AffichePersonnelRoutingModule,
         MatIconModule,
         ,
         MatExpansionModule
         ,MatCardModule,
         MatButtonModule,MatSortModule,
         , PageHeaderModule],
         exports: [
            MatSortModule],
    declarations: [AffichePersonnelComponent]
})
export class AffichePersonnelModule {}
