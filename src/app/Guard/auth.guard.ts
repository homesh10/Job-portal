import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../Services/login/login.service';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode'; // Correct import

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private token: string | null = null;
  private decodedToken: any;
  private expirationTime: number | null = null;
  private currentTime: number | undefined;

  constructor(
    private router: Router,
    private loginService: LoginService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the code is running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Check if the user is logged in
      if (!this.loginService.isLoggedIn()) {
        const returnUrl = state.url;
        this.loginService.logout();
        this.router.navigate(['/login'], { queryParams: { returnUrl } });
        return false;
      }

      // Retrieve token from localStorage or sessionStorage
      this.token = localStorage.getItem('token') || sessionStorage.getItem('token');

      if (this.token) {
        try {
          this.decodedToken = jwtDecode(this.token); // Correct usage
          this.expirationTime = this.decodedToken.exp * 1000;
          this.currentTime = new Date().getTime();

          // If token is expired, logout and redirect to login page
          if (this.currentTime > this.expirationTime) {
            alert('Token has been Expired. You will be logged out.');
            this.loginService.logout();
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
          }

          return true; // Token is valid, allow access
        } catch (error) {
          console.error('Token decoding failed:', error);
          this.loginService.logout();
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          return false;
        }
      }

      // If no token found, redirect to login page
      this.loginService.logout();
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    } else {
      // If not in the browser, deny access
      return false;
    }
  }
}
