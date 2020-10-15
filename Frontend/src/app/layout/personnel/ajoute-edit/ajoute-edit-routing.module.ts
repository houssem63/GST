import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouteEditComponent } from './ajoute-edit.component';


const routes: Routes = [
    {
        path: '', component: AjouteEditComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AjouteEditRoutingModule {
}
