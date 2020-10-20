import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrestataireAssranceComponent } from './prestataire-assrance.component';




const routes: Routes = [
    {
        path: '', component: PrestataireAssranceComponent
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrestataireAssranceRoutingModule { }
