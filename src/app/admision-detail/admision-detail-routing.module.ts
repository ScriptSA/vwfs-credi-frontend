import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmisionDetailComponent } from './admision-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AdmisionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmisionDetailRoutingModule { }
