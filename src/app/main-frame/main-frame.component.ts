import { Component, Renderer2 } from '@angular/core';
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
  navOpen = false;

  constructor(private authService: AuthService, private renderer: Renderer2) {
    this.isUser1LoggedIn = this.authService.getCurrentUserRole() === 'user1';
    this.isUser2LoggedIn = this.authService.getCurrentUserRole() === 'user2';
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  toggleSubItems(event: any) {
    const subsOpened = document.querySelectorAll('.item');
    const subClick = event.target.closest('.item');
    const subActive = event.target.closest('.sub-open');

    subsOpened.forEach(subsOpened => {
      this.renderer.removeClass(subsOpened, 'sub-open');
    });
    if (subClick) {
      if (subActive) {
        this.renderer.removeClass(subClick, 'sub-open');
      }
      else {
        this.renderer.addClass(subClick, 'sub-open');
      }
    }
  }
}
