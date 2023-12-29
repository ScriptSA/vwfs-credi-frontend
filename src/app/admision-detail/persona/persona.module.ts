import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from '../../shared/modules/pipes.module';
import { InfoModule } from '../../shared/modules/info.module';

@NgModule({
  declarations: [
    PersonaComponent
  ],

  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressBarModule,
    MatExpansionModule,
    PipesModule,
    InfoModule
  ],

  exports: [PersonaComponent],
})

export class PersonaModule { }
