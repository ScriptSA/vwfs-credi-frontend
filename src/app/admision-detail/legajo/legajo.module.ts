import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegajoComponent } from './legajo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PipesModule } from '../../shared/modules/pipes.module';
import { InfoModule } from '../../shared/modules/info.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    LegajoComponent
  ],

  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatExpansionModule,
    PipesModule,
    InfoModule
  ],

  exports: [LegajoComponent],
})

export class LegajoModule { }
