import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouteEditPersonnelComponent } from './ajoute-edit-personnel.component';


const routes: Routes = [
    {
        path: '', component: AjouteEditPersonnelComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AjouteEditPersonnelRoutingModule {
}
