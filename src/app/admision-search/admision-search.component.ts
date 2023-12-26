import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { Admision } from '../shared/models/admision';

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

  detalleTramite(row: Admision) {
    console.log(row);
  }

  //mock tablas
  spoolerTable = {
    spools: [
      { filterBy: ['sin Imágenes', 'en análisis'] }
    ]
  }


  //control de tabs
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  //mock titulo tramites (hay que hacer el count)
  totalPendingNumber = 20;
  resultNumber = 2;

  //search mock
  constructor(
    private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.searchResults = true;
    this.tabGroup.selectedIndex = 1;
  }

  removeResults() {
    this.searchResults = false;
  }

}
