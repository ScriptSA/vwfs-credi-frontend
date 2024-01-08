import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdmisionSearchService } from '../shared/services/admision-search.service';
import { Admision } from '../shared/models/admision';



@Component({
  selector: 'app-admision-detail',
  templateUrl: './admision-detail.component.html',
  styleUrls: []
})

export class AdmisionDetailComponent implements OnInit {
  //test id navigation
  nroTramite!: string;

  //detalle abierto
  historyOpen = false;

  //control de tabs
  selectedTabIndex = 0;

  //tramite
  tramites: Admision[] = [];
  clienteElegido!: string;
  nroTramiteElegido!: string;


  constructor(private route: ActivatedRoute, private admisionSearch: AdmisionSearchService) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.nroTramite = params['nroTramite']; // Get the ID from route parameters
    });

    this.selectedTabIndex = 3;

    let searchTerm = this.nroTramite;
    this.tramites = await this.admisionSearch.getTramiteWithFilter(searchTerm);
    let filteredData = this.tramites.filter(item => item.nroTramite === searchTerm)
    this.clienteElegido = filteredData[0].cliente;
    this.nroTramiteElegido = filteredData[0].nroTramite;
  };



  volverAdmision() {
    window.history.back();
  }

  toggleHistory() {
    this.historyOpen = !this.historyOpen
  }
}
