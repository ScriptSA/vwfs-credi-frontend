import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `  
            <div class="info {{class}}">
              <mat-icon fontSet="material-symbols-outlined">{{ icon }}</mat-icon>
                <h2>{{ mainText }}</h2>
                <h5>{{ sideText }}</h5>
              </div>
  `,
  styleUrls: []

})
export class InfoComponent {
  @Input() class: string | undefined;
  @Input() icon: string | undefined;
  @Input() mainText: string | undefined;
  @Input() sideText: string | undefined;
}
