import { Component, Renderer2,OnInit } from '@angular/core';
//import { AuthService } from '../shared/auth/auth.service';
import { MainFrameService } from '../shared/services/mainFrame.service';
import { AuthService } from '../shared/auth/auth.service';
import { Menu } from '../shared/models/menu.model';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: []
})
export class MainFrameComponent implements OnInit {
  // mock login
  //isUser1LoggedIn: boolean;
  //isUser2LoggedIn: boolean;
  userId: string  ='';
   //select Options
  menuList: Menu[] = [];

  //navbar toggle
  navOpen = false;

  constructor(private mainFrame: MainFrameService,private authService:AuthService, private renderer: Renderer2) {
    //this.isUser1LoggedIn = this.authService.getCurrentUserRole() === 'user1';
    //this.isUser2LoggedIn = this.authService.getCurrentUserRole() === 'user2';
    this.userId = this.authService.getCurrentUserRole();

  }
  async ngOnInit(): Promise<void> {

    const menus = await this.mainFrame.getMenuData(this.userId);
    this.menuList = menus.data;
    console.log(this.menuList)
  }

  filterParentIdOfType(id:any){
    return this.menuList.filter(x => x.parentId == id);
  }

  filterParentId0(){
    return this.menuList.filter(x => x.parentId == 0);
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  closeSubItems() {
    const subsOpened = document.querySelectorAll('.item');
    subsOpened.forEach(subsOpened => {
      this.renderer.removeClass(subsOpened, 'sub-open');
    });
    this.navOpen=false;
  }

  toggleSubItems(event: any) {
    const subsOpened = document.querySelectorAll('.item');
    const subClick = event.target.closest('.item');
    const subActive = event.target.closest('.sub-open');

    subsOpened.forEach(subsOpened => {
      this.renderer.removeClass(subsOpened, 'sub-open');
    })
    if (subClick) {
      if (subActive) {
        this.renderer.removeClass(subClick, 'sub-open');
      }
      else {
        this.renderer.addClass(subClick, 'sub-open');
      }
    }
  }
  closeSubItems() {
    const subsOpened = document.querySelectorAll('.item');
    subsOpened.forEach(subsOpened => {
      this.renderer.removeClass(subsOpened, 'sub-open');
    });
    this.navOpen=false;
  }
}
