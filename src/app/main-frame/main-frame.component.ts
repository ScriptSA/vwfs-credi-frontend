import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: []
})
export class MainFrameComponent {
  // mock login
  isUser1LoggedIn: boolean;
  isUser2LoggedIn: boolean;

  //navbar toggle
  navOpen=false;

  //item toggle
  subOpen=false;

  constructor(private authService: AuthService) {
    this.isUser1LoggedIn = this.authService.getCurrentUserRole() === 'user1';
    this.isUser2LoggedIn = this.authService.getCurrentUserRole() === 'user2';
  }

  toggleNav(){
    this.navOpen =! this.navOpen;
  }

  toggleSubs(){
    this.subOpen =! this.subOpen;
  }
}
