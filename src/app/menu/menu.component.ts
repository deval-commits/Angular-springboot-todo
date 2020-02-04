import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isuserloggedin: boolean=false;
  constructor(private hardauth : HarcodedAuthenticationService) { }


  ngOnInit() {

  this.isuserloggedin=this.hardauth.isUserLoggedIn();
  
  }
     
}
