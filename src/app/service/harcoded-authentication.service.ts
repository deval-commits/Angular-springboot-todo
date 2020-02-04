import { Injectable } from '@angular/core';
import { Session } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {


  constructor() { }

  authenticate(uname, pass) {
    if (uname === 'deval' && pass === 'deval') {

      //check value is storing in broweser session    when userloggedin
      sessionStorage.setItem('authenticatedUser', uname)
      return true
    }
    return false
  }
  isUserLoggedIn() {
    let loggednUser = sessionStorage.getItem('authenticatedUser') 
      return !(loggednUser === null)
      
  
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
