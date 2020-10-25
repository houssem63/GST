import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouteEditComponent } from './ajoute-edit/ajoute-edit.component';
import { AssuranceComponent } from './assurance/assurance.component';
import { EntretenvoitureComponent } from './entretenvoiture/entretenvoiture.component';
import { VoitureComponent } from './voiture.component';




const routes: Routes = [
    {
        path: '', component: VoitureComponent
    },
    {
        path: 'ajoute', component: AjouteEditComponent
    },
    {
        path: 'edit/:id', component: AjouteEditComponent
    },
    {
        path : 'ajouteassurance/:id' , component : AssuranceComponent
    },
    {
        path : 'ajouteentretien/:id' , component : EntretenvoitureComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VoitureRoutingModule { }
