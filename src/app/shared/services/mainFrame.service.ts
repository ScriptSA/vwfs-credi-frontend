import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from "src/app/app.config";
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class MainFrameService {

  baseBackendUrl = AppConfig.settings?.backendBaseUrl;
  menuUrl = '/v1/user/menu';

  constructor(private http: HttpClient, private router: Router,private authService: AuthService) {}


  async getMenuData(): Promise<any> {

    const headers = new HttpHeaders({'vnd.bbva.user-id': this.authService.getCurrentUserId()});

    const requestOptions = { headers: headers };


    return new Promise((resolve, reject) => {
      this.http
        .post<any>(this.baseBackendUrl+this.menuUrl,{},requestOptions)
        .subscribe({
          next: (data) => {resolve(data)},
          error: (err) => reject(err),
        })
    })
  }

}
