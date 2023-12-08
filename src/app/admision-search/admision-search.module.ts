import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmisionSearchComponent } from './admision-search.component';
import { AdmisionSearchRoutingModule } from './admision-search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdmisionSearchRoutingModule
  ],
  declarations: [AdmisionSearchComponent],

})
export class AdmisionSearchModule { }
