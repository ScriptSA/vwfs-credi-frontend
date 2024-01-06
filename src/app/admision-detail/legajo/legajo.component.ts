import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { AppConfig } from 'src/app/app.config';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Requisito } from 'src/app/shared/models/requisito';

@Component({
  selector: 'app-legajo',
  templateUrl: './legajo.component.html',
  styleUrls: []
})

export class LegajoComponent implements OnInit {

  @Input() nroTramite: string | undefined = '';

  baseBackendUrl = AppConfig.settings?.backendBaseUrl;
  requisitoTramiteUrl = '/v1/tramite/findRequisitosTramite';
  showPDFUrl = '/v1/documento/findPdfByIdThuban';
  columnas = ['select', 'requisito', 'tipoRequisito', 'estado', 'digital', 'idThuban'];
  requisitos: Requisito[] = [];
  imageBase64 : string = "";
  selection = new SelectionModel<Requisito>(true, []);
  headers = new HttpHeaders({ 'vnd.bbva.user-id': this.authService.getCurrentUserId() });
  requestOptions = { headers: this.headers };
  pdfSrc = "";


  constructor(private http: HttpClient,private authService:AuthService) { }

  ngOnInit(): void {


    this.http
      .post<any>(this.baseBackendUrl + this.requisitoTramiteUrl, { 'nroTramite': this.nroTramite }, this.requestOptions)
      .subscribe({
        next: (data) => { this.requisitos = data.data; },
        error: (err) => console.log(err),
      })
  }

  verRequisito(row: Requisito): void {
    let idThuban = row.idThuban;

    this.http
    .post<any>(this.baseBackendUrl + this.showPDFUrl, { 'idThuban':idThuban }, this.requestOptions)
    .subscribe({
      next: (data) => { this.imageBase64 = data.data.pdf; this.printPdf() },
      error: (err) => console.log(err),
    })
  }

  printPdf() {
    //let json: any =  { "type":"Buffer", "data":this.blob }
    //let bufferOriginal = Buffer.from(json.data);
    const byteArray = new Uint8Array(
      atob(this.imageBase64)
        .split("")
        .map(char => char.charCodeAt(0))
    );
    const file = new Blob([byteArray], { type: "application/pdf" });
    const fileURL = URL.createObjectURL(file);
    //this.pdfSrc = fileURL;
    window.open(fileURL);
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
