import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from "src/app/app.config";
import { Router } from '@angular/router';
import { Admision } from '../models/admision';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdmisionSearchService {

  baseBackendUrl = AppConfig.settings?.backendBaseUrl;
  tramiteUrl = '/v1/tramite/findResumenTramite';

  constructor(private http: HttpClient, private router: Router,private authService: AuthService) {}


  async getTramiteWithFilter(nroTamite:string): Promise<Admision[]> {

    const headers = new HttpHeaders({'vnd.bbva.user-id':this.authService.getCurrentUserId()});

    const requestOptions = { headers: headers };


    return new Promise((resolve, reject) => {
      this.http
        .post<any>(this.baseBackendUrl+this.tramiteUrl,{'nroTamite':nroTamite},requestOptions)
        .subscribe({
          next: (data) => { resolve(data.data)},
          error: (err) => reject(err),
        })
    })
  }
}
