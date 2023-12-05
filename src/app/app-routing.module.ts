import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule)},
  { path: 'main-frame', loadChildren: () => import('../app/main-frame/main-frame.module').then(m => m.MainFrameModule)},


  // Add more routes for different roles as necessary
  { path: '**', redirectTo: '/login', pathMatch: 'full' } // Redirect unmatched routes to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
