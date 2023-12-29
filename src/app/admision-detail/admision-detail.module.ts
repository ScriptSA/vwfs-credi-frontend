import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmisionDetailComponent } from './admision-detail.component';
import { AdmisionDetailRoutingModule } from '../admision-detail/admision-detail-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { LegajoModule } from './legajo/legajo.module';
import { TareasModule } from './tareas/tareas.module';
import { PersonaModule } from './persona/persona.module';
import { DatosModule } from './datos/datos.module';

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
    MatProgressBarModule,
    LegajoModule,
    TareasModule,
    PersonaModule,
    DatosModule
  ]
})

export class AdmisionDetailModule { }
