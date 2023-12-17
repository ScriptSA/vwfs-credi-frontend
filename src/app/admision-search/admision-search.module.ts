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
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
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
    MatExpansionModule
  ],

  declarations: [AdmisionSearchComponent],

})
export class AdmisionSearchModule { }
