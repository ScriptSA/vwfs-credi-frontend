import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmisionSearchComponent } from './admision-search.component';
import { AdmisionSearchRoutingModule } from './admision-search-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomCapitalizePipe } from '../shared/pipes/custom-capitalize.pipe';

@NgModule({
  declarations: [
    AdmisionSearchComponent,
    CustomCapitalizePipe
  ],

  imports: [
    CommonModule,
    AdmisionSearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatProgressBarModule,
    MatExpansionModule,
  ]
})

export class AdmisionSearchModule { }
