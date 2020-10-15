import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TranslateModule } from '@ngx-translate/core';

import {MatCardModule} from '@angular/material/card';

import {MatDialogModule} from '@angular/material/dialog';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,MatDialogModule,
        MatExpansionModule,
        MatIconModule,MatFormFieldModule,
        TranslateModule,
        ReactiveFormsModule,FormsModule
        ],
    declarations: []
})
export class ProfileModule {}
