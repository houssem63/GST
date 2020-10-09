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
import { PosteComponent } from './poste.component';
import { PosteRoutingModule } from './poste-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PosteRoutingModule,
         MatIconModule,
         MatTableModule,
         ReactiveFormsModule,
         MatExpansionModule,
         FormsModule,
         MatCardModule,
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
    declarations: [PosteComponent]
})
export class PosteModule {}
