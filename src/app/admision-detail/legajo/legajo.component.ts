import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
  columnas = ['requisito','tipoRequisito','estado','digital','idThuban'];
  requisitos: Requisito[] = [];
  @Input() nroTramite:string|undefined = '';
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  constructor(private http: HttpClient){}
    //control de tabs

  ngOnInit(): void {

    const headers = new HttpHeaders({'vnd.bbva.user-id': 1});
    const requestOptions = { headers: headers };

    this.http
      .post<any>(this.baseBackendUrl+this.tramiteUrl,{'nroTramite':this.nroTramite},requestOptions)
      .subscribe({
        next: (data) => {this.requisitos = data.data;},
        error: (err) => console.log(err),
    })


  }


  verRequisito(row: Requisito): void  {
    console.log(row.idThuban)
  }


}
