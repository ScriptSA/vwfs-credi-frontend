import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './historia.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { PipesModule } from '../../shared/modules/pipes.module';
import { InfoModule } from '../../shared/modules/info.module';

@NgModule({
  declarations: [
    HistoriaComponent
  ],

  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatListModule,
    PipesModule,
    InfoModule
  ],

  exports: [HistoriaComponent],
})

export class HistoriaModule { }
