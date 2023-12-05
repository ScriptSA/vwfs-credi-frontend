import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFrameComponent } from './main-frame.component';
import { MainFrameRoutingModule } from './main-frame-routing.module';

@NgModule({
  imports: [
      CommonModule,
      MainFrameRoutingModule
  ],
  declarations: [MainFrameComponent],
})
export class MainFrameModule {}
