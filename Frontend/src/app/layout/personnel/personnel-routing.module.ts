import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffichePersonnelComponent } from './affiche-personnel/affiche-personnel.component';
import { AjouteEditPersonnelComponent } from './ajoute-edit-personnel/ajoute-edit-personnel.component';
import { PersonnelComponent } from './personnel.component';

const routes: Routes = [
    {
        path: '', component: PersonnelComponent
    },
    {
        path: 'ajoute', component: AjouteEditPersonnelComponent
    },
    {
        path: 'edit/:id', component: AjouteEditPersonnelComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonnelRoutingModule {
}
