import { NgModule } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [InfoComponent],
  imports: [MatIconModule],
  exports: [InfoComponent],
})
export class InfoModule { }

