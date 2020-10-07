import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authservice: LoginService, private  router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
      boolean | import('@angular/router')
      .UrlTree | import('rxjs').Observable<boolean | import('@angular/router')
      .UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {

        const isauth = this.authservice.getIsAuth();
        if (!isauth) {
this.router.navigate(['/login']);
 }
        return true ;
  }

}
