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
  listaPreaprobacion:Etapa[] = [];
  etapaFinPreaprobacion:Etapa|undefined = new Etapa();
  listaResolucion:Etapa[] = [];
  etapaFinResolucion:Etapa|undefined = new Etapa();
  listaAltas:Etapa[] = [];
  etapaFinAlta:Etapa|undefined = new Etapa();
  constructor(private http: HttpClient,private authService:AuthService) { }

  ngOnInit(): void {

    let headers = new HttpHeaders({ 'vnd.bbva.user-id':   this.authService.getCurrentUserId() });
    let  requestOptions = { headers: headers };

    this.http
        .post<any>(this.baseBackendUrl + this.historiaTramiteUrl, { 'nroTramite': this.nroTramite }, requestOptions)
        .subscribe({
          next: (data) => { this.etapas = data.data; this.setFilters()  },
          error: (err) => console.log(err),
        });
  }
  setFilters(){
    this.filterPreaprobacionEtapas();
    this.filterResolucionEtapas();
    this.filterLiquidacionEtapas();
  }

  filterPreaprobacionEtapas() {
    this.listaPreaprobacion = this.etapas.filter(x => x.subProcesoAbrev == 'PREAPROB');
    this.etapaFinPreaprobacion = this.listaPreaprobacion.find(t => t.etapaFinSubProceso === '*')

  }
  filterResolucionEtapas() {
    this.listaResolucion =  this.etapas.filter(x => x.subProcesoAbrev == 'VERIFIC');
    this.etapaFinResolucion = this.listaResolucion.find(t => t.etapaFinSubProceso === '*')
  }
  filterLiquidacionEtapas() {
    this.listaAltas =  this.etapas.filter(x => x.subProcesoAbrev == 'ALTAS');
    this.etapaFinAlta = this.listaAltas.find(t => t.etapaFinSubProceso === '*')
  }


}
