import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admision-detail',
  templateUrl: './admision-detail.component.html',
  styleUrls: []
})

export class AdmisionDetailComponent {
  //test id navigation
  nroTramite: string | undefined;

  //detalle abierto
  historyOpen = false;

  constructor(private route: ActivatedRoute,  private routing: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nroTramite = params['nroTramite']; // Get the ID from route parameters
      console.log(this.nroTramite);
      // Use this.id to fetch specific data or perform actions based on the ID
    });
  }

  volverAdmision(): void  {
    this.routing.navigateByUrl(`main-frame/admision-search`);
  }

  toggleHistory() {
    this.historyOpen =! this.historyOpen
  }
}