import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouteHistoriqueEmbaucheComponent } from './ajoute-historique-embauche.component';




const routes: Routes = [
    {
        path: '', component: AjouteHistoriqueEmbaucheComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AjouteHistoriqueEmbaucheRoutingModule {
}
