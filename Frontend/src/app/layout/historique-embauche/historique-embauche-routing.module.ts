import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouteHistoriqueEmbaucheComponent } from './ajoute-historique-embauche/ajoute-historique-embauche.component';
import { HistoriqueEmbaucheComponent } from './historique-embauche.component';



const routes: Routes = [
    {
        path: '', component: HistoriqueEmbaucheComponent
    },
    {
        path:'ajoute',component:AjouteHistoriqueEmbaucheComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HistoriqueEmbaucheRoutingModule {
}
