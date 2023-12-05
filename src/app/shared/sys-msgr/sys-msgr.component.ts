import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sys-msgr',
  template: ``,
})
export class SysMsgrComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackbar(message: string, duration: number = 3000): void {
    this.snackBar.open(message, 'Close', {
      duration: duration,
    });
  }
}
