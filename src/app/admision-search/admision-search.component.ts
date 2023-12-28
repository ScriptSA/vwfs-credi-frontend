import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { Admision } from '../shared/models/admision';
import { AdmisionSearchService } from '../shared/services/admision-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admision-search',
  templateUrl: './admision-search.component.html',
  styleUrls: []
})
export class AdmisionSearchComponent implements OnInit {
  [x: string]: any;
  //controles del resultado de la búsqueda
  searchForm: FormGroup;
  searchResults = false;
  columnasBusqueda = ['estado', 'numero', 'carga', 'modificado', 'cliente', 'campania', 'concesionario', 'monto'];
  tramites: Admision[] = [];
  selectedTramite?: Admision;
  loading = false;
  statusIcon = { 'APROBADO': 'task_alt', 'NOEF': 'pending' }
  mapIcon: any = new Map(Object.entries(this.statusIcon));



  //mock tablas
  spoolerTable = {
    spools: [
      { filterBy: ['sin Imágenes', 'en análisis'] }
    ]
  }


  //control de tabs
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  //mock titulo tramites (hay que hacer el count)
  totalPendingNumber = 0;
  resultNumber = 0;

  //search mock
  constructor(
    private formBuilder: FormBuilder,
    private admisionSearch: AdmisionSearchService,
    private route: Router,) {
      this.searchForm = this.formBuilder.group({
        search: ['']
      });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.searchResults = true;
    this.tabGroup.selectedIndex = 1;
    let searchValue = this.searchForm.get('search')?.value;
    this.tramites = await this.admisionSearch.getTramiteWithFilter(searchValue);
    this.resultNumber = this.tramites.length;
  }

  removeResults() {
    this.searchResults = false;
  }


  detalleTramite(row: Admision): void  {
    console.log(row.nroTramite);
    this.route.navigate(['admision-detail']);

  }

}


