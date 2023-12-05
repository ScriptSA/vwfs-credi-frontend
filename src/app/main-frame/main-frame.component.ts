import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: []
})
export class MainFrameComponent {
  isUser1LoggedIn: boolean;
  isUser2LoggedIn: boolean;

  constructor(private authService: AuthService) {
    this.isUser1LoggedIn = this.authService.getCurrentUserRole() === 'user1';
    this.isUser2LoggedIn = this.authService.getCurrentUserRole() === 'user2';
  }
}
