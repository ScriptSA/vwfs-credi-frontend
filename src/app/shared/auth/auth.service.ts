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
  isEmpty<Obj extends Record<PropertyKey, unknown>>(obj: Obj) {
    return Object.keys(obj).length === 0
  }
  async login(username: string, password: string):Promise<any> {
    // Simulated authentication logic (replace with your actual authentication logic)
      return new Promise((resolve, reject) => {
        this.http
          .post<any>(this.baseBackendUrl+this.loginUrl,{'legajo':username,'password':password})
          .subscribe({
            next: (data) => {
              if (!this.isEmpty(data) && data!=undefined &&  data.data != ''){
                this.isAuthenticated = true;
                this.currentUserId = data.data;
                resolve(true);
              } else {
                this.isAuthenticated = false;
                resolve(true);
              }

            },
            error: (err) => {this.isAuthenticated = false; reject(err)}
          })
        })
    }

  // Simulated logout function
  logout(): void {
    this.isAuthenticated = false;
    this.currentUserId = "";
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
