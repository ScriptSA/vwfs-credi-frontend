// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private currentUserRole: string  = '';

  // Simulated login function
  login(username: string, password: string): boolean {
    // Simulated authentication logic (replace with your actual authentication logic)
    if (username === 'user1' && password === '1234') {
      this.isAuthenticated = true;
      this.currentUserRole = '1';
      return true;
    } else if (username === 'user2' && password === '123') {
      this.isAuthenticated = true;
      this.currentUserRole = '2';
      return true;
    }
    return false;
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
  getCurrentUserRole(): string  {
    return this.currentUserRole;
  }
}
