import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
//import { constructor } from 'jasmine';

import { HarcodedAuthenticationService } from './harcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  // canActivate(route: import("@angular/router").
  // ActivatedRouteSnapshot, state: import("@angular/router").
  // RouterStateSnapshot)
   constructor(private hardauth: HarcodedAuthenticationService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.hardauth.isUserLoggedIn())  return true;
   
   // throw new Error("Method not implemented.");
       this.router.navigate(['login']);
      return false;
  }

  
  }

 

