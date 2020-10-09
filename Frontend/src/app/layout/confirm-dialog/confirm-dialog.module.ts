import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';


import { PageHeaderModule } from './../../shared';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@NgModule({
    imports: [
        CommonModule,

         MatIconModule,
         MatTableModule,
         MatExpansionModule
         ,MatCardModule,MatFormFieldModule,MatInputModule,
         MatButtonModule,MatSortModule,MatTooltipModule,MatDialogModule
         , PageHeaderModule],
         exports: [
            ],
    declarations: [ConfirmDialogComponent]
})
export class ConfirmDialogModule {}
