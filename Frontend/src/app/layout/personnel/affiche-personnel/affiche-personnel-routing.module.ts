import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffichePersonnelComponent } from './affiche-personnel.component';

const routes: Routes = [
    {
        path: '', component: AffichePersonnelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AffichePersonnelRoutingModule {
}
