import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFrameComponent } from './main-frame.component';
import { MainFrameRoutingModule } from './main-frame-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MainFrameRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [MainFrameComponent],
})
export class MainFrameModule { }
