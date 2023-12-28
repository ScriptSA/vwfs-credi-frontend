import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFrameComponent } from './main-frame.component';
import { MainFrameRoutingModule } from './main-frame-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [MainFrameComponent],

  imports: [
    CommonModule,
    MainFrameRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule
  ]
  
})
export class MainFrameModule { }
