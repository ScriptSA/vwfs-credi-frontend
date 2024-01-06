import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Etapa } from 'src/app/shared/models/etapa.model';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: []
})


export class HistoriaComponent implements OnInit {
  @Input() nroTramite: string | undefined = '';

  baseBackendUrl = AppConfig.settings?.backendBaseUrl;
  historiaTramiteUrl = '/v1/tramite/findEtapasTramite';



  etapas:Etapa[] = [];

  constructor(private http: HttpClient,private authService:AuthService) { }

  ngOnInit(): void {

    let headers = new HttpHeaders({ 'vnd.bbva.user-id':   this.authService.getCurrentUserId() });
    let  requestOptions = { headers: headers };

    this.http
        .post<any>(this.baseBackendUrl + this.historiaTramiteUrl, { 'nroTramite': this.nroTramite }, requestOptions)
        .subscribe({
          next: (data) => { this.etapas = data.data;  },
          error: (err) => console.log(err),
        });


  }

  filterPreaprobacionEtapas() {
    return this.etapas.filter(x => x.subProcesoAbrev == 'PREAPROB');
  }
  filterVerficacionEtapas() {
    return this.etapas.filter(x => x.subProcesoAbrev == 'VERIFIC');
  }
  filterLiquidacionEtapas() {
    return this.etapas.filter(x => x.subProcesoAbrev == 'ALTAS');
  }


}
