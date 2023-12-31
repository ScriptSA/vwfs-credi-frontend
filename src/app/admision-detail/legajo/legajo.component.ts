import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { AppConfig } from 'src/app/app.config';
import { Requisito } from 'src/app/shared/models/requisito';

@Component({
  selector: 'app-legajo',
  templateUrl: './legajo.component.html',
  styleUrls: []
})

export class LegajoComponent implements OnInit {
  baseBackendUrl = AppConfig.settings?.backendBaseUrl;
  tramiteUrl = '/v1/tramite/findRequisitosTramite';
  columnas = ['select', 'requisito', 'tipoRequisito', 'estado', 'digital', 'idThuban'];
  requisitos: Requisito[] = [];
  selection = new SelectionModel<Requisito>(true, []);

  @Input() nroTramite: string | undefined = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({ 'vnd.bbva.user-id': 1 });
    const requestOptions = { headers: headers };
    this.http
      .post<any>(this.baseBackendUrl + this.tramiteUrl, { 'nroTramite': this.nroTramite }, requestOptions)
      .subscribe({
        next: (data) => { this.requisitos = data.data; },
        error: (err) => console.log(err),
      })
  }

  verRequisito(row: Requisito): void {
    console.log(row.idThuban)
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.requisitos.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.requisitos);
  }



}
