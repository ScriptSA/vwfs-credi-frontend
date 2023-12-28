import { NgModule } from '@angular/core';
import { CustomCapitalizePipe } from './pipes/custom-capitalize.pipe';

@NgModule({
  declarations: [CustomCapitalizePipe],
  exports: [CustomCapitalizePipe]
})
export class SharedModule{}
