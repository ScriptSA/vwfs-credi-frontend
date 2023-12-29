import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmisionDetailComponent } from './admision-detail.component';
import { AdmisionDetailRoutingModule } from '../admision-detail/admision-detail-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { PipesModule } from '../shared/modules/pipes.module';

@NgModule({
  declarations: [
    AdmisionDetailComponent
  ],

  imports: [
    CommonModule,
    AdmisionDetailRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatProgressBarModule,
    MatExpansionModule,
    PipesModule
  ]
})

export class AdmisionDetailModule { }
