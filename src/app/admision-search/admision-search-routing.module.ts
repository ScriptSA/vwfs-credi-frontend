import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmisionSearchComponent } from './admision-search.component';

const routes: Routes = [
  {
    path: '',
    component: AdmisionSearchComponent,
    children:[
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmisionSearchRoutingModule { }
