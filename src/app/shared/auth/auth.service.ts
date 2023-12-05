// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private currentUserRole: string | null = null;

  // Simulated login function
  login(username: string, password: string): boolean {
    // Simulated authentication logic (replace with your actual authentication logic)
    if (username === 'user1' && password === '1234') {
      this.isAuthenticated = true;
      this.currentUserRole = 'user1';
      return true;
    } else if (username === 'user2' && password === '123') {
      this.isAuthenticated = true;
      this.currentUserRole = 'user2';
      return true;
    }
    return false;
  }

  // Simulated logout function
  logout(): void {
    this.isAuthenticated = false;
    this.currentUserRole = null;
  }

  // Check if user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Get current user role
  getCurrentUserRole(): string | null {
    return this.currentUserRole;
  }
}
