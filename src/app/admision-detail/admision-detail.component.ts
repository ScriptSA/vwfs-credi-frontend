import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nroTramite = params['nroTramite']; // Get the ID from route parameters

      // Use this.id to fetch specific data or perform actions based on the ID
    });
  }
  volverAdmision(){
    window.history.back();
  }

  toggleHistory() {
    this.historyOpen =! this.historyOpen
  }
}
