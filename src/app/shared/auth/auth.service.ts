// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private currentUserId: string  = '';
  baseBackendUrl = AppConfig.settings?.backendBaseUrl;
  loginUrl = '/v1/user/login';

  constructor(private http: HttpClient) {}
  // Simulated login function
  login(username: string, password: string): void {
    // Simulated authentication logic (replace with your actual authentication logic)
    const promise = new Promise((resolve, reject) => {
      this.http
        .post<any>(this.baseBackendUrl+this.loginUrl,{'legajo':username,'password':password})
        .subscribe({
          next: (data) => {  resolve(data.data) },
          error: (err) => {  reject(err)},
        })
    })
    promise.then((value:any) => {

      if (value != ''){
        this.isAuthenticated = true;
        this.currentUserId = value;

      } else {
        this.isAuthenticated = false;
        this.currentUserId = "";

      }
    })


  }





  // Simulated logout function
  logout(): void {
    this.isAuthenticated = false;

  }

  // Check if user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Get current user role
  getCurrentUserId(): string  {
    return this.currentUserId;
  }
}
