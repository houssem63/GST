import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjouteEditComponent } from './ajoute-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,FormsModule, ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatIconModule
    ],
    declarations: [AjouteEditComponent]
})
export class AjouteEditModule {}
