import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFrameComponent } from './main-frame.component';

const routes: Routes = [
  {
    path: '',
    component: MainFrameComponent,
    children: [
      { path: 'admision-search', loadChildren: () => import('../admision-search/admision-search.module').then(m => m.AdmisionSearchModule) },
      { path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainFrameRoutingModule { }
