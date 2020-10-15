import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "@ngx-translate/core";

import { MatCardModule } from "@angular/material/card";

import { MatDialogModule } from "@angular/material/dialog";

import { ProfileComponent } from "./profile.component";
import { PorfileRoutingModule } from "./profile-routing.module";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChangeMotdepasseComponent } from "./change-motdepasse/change-motdepasse.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CompteComponent } from "../compte/compte.component";
import { AjoutercompteComponent } from "../compte/ajoutercompte/ajoutercompte.component";
import { MatSelectModule } from "@angular/material/select";
import { NgxMaskModule, IConfig } from 'ngx-mask'

@NgModule({
    imports: [
        CommonModule,
        PorfileRoutingModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
        MatSelectModule,
        MatIconModule,
        MatFormFieldModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,NgxMaskModule.forRoot(),
    ],
    exports: [MatFormFieldModule, MatIconModule],

    declarations: [
        ProfileComponent,
        EditProfileComponent,
        ChangeMotdepasseComponent,
        CompteComponent,
        AjoutercompteComponent,
    ],
})
export class ProfileModule {}
