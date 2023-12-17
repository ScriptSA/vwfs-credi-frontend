import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

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

  //mock tablas
  spoolerTable = {
    spools: [
      {filterBy: ['sin Imágenes', 'en análisis']}
    ],

    heads: [
      { name: ['nro de trámite', 'fecha y hora carga', 'última modificación', 'cliente', 'campaña', 'concesionario', 'monto'] }
    ],

    rows: [
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      // Agrega más dos según sea necesario
    ]
  }

  searchTable = {
    heads: [
      { name: ['estado', 'nro de trámite', 'fecha y hora carga', 'última modificación', 'cliente', 'campaña', 'concesionario', 'monto'] },
    ],
    rows: [
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      { model: ['en análisis', '12345', '25/10/2023 12:35', '25/10/2023 12:35', 'apellido largo, muchos nombres', 'nombre de campaña', 'nombre de concesionario', '1.000.000 '] },
      // Agrega más dos según sea necesario
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
