import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {MatCardModule} from '@angular/material/card';

import {MatDialogModule} from '@angular/material/dialog';

import { ProfileComponent } from './profile.component';
import { PorfileRoutingModule } from './profile-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
    imports: [
        CommonModule,
        PorfileRoutingModule,
        MatCardModule,MatDialogModule
        ],
    declarations: [ProfileComponent, EditProfileComponent]
})
export class ProfileModule {}
