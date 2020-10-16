import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouteEditComponent } from '../client/ajoute-edit/ajoute-edit.component';
import { ClientComponent } from './client.component';


const routes: Routes = [
    {
        path: '', component: ClientComponent
    },
    {
        path: 'ajoute', component: AjouteEditComponent
    }
    , {
        path: 'edit/:id', component: AjouteEditComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
