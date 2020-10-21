import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntretienComponent } from './entretien.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
    {
        path: '', component: EntretienComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntretienRoutingModule { }
