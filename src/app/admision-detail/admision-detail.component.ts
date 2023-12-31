import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-admision-detail',
  templateUrl: './admision-detail.component.html',
  styleUrls: []
})

export class AdmisionDetailComponent implements OnInit{
  //test id navigation
  nroTramite: string | undefined;

  //detalle abierto
  historyOpen = false;

  //control de tabs
  selectedTabIndex = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nroTramite = params['nroTramite']; // Get the ID from route parameters
    });

    this.selectedTabIndex = 3;
  };

 
  
  volverAdmision() {
    window.history.back();
  }

  toggleHistory() {
    this.historyOpen = !this.historyOpen
  }
}
