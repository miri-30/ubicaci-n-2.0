import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapBoxComponent } from './core/components/public/map-box/map-box.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: MapBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
