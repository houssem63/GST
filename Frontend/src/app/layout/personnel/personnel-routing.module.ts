import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffichePersonnelComponent } from './affiche-personnel/affiche-personnel.component';
import { AjouteEditComponent } from './ajoute-edit/ajoute-edit.component';
import { PersonnelComponent } from './personnel.component';

const routes: Routes = [
    {
        path: '', component: PersonnelComponent
    },{
        path :'ajoute' ,component :AjouteEditComponent
    },
    {
        path :'edit/:id' ,component :AjouteEditComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonnelRoutingModule {
}
