import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardauth : HarcodedAuthenticationService) { }

  ngOnInit() {
    //use logout() hardcoded in authentication service
    this.hardauth.logout();
  }

}
