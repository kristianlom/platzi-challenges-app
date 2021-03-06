import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const auth = this.authService.getAuth();
    const token = this.authService.getToken();
    if (auth !== null) {
      this.router.navigate(['./repositories']);
      return false;
    }
    return true;
  }

}
