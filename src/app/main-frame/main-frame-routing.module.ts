import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFrameComponent } from './main-frame.component';

const routes: Routes = [
  {
    path: '',
    component: MainFrameComponent,
    children: [
      { path: 'admision-detail', loadChildren: () => import('../admision-detail/admision-detail.module').then(m => m.AdmisionDetailModule) },
      { path: 'admision-search', loadChildren: () => import('../admision-search/admision-search.module').then(m => m.AdmisionSearchModule) },
      { path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
      { path: 'login', redirectTo: '/login', pathMatch: 'full' } // Redirect unmatched routes to login
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainFrameRoutingModule { }
