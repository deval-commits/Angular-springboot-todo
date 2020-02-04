import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string
  password: string
//private hardauth : HarcodedAuthenticationService
  errorMessage = 'wrong credential'
   
  isvalid = false

  constructor(private router : Router,
    private hardauth : HarcodedAuthenticationService) {
//we injected service to get the logic common to all component
//but here login component need to be collabed with service 
  }
  //dependency injection for router instance we have to use 

  ngOnInit() {
  }
    
  onsubmit(){
    if(this.hardauth.authenticate(this.username, this.password))
       {
         this.router.navigate(['welcome' , this.username])
        this.isvalid =false
    }
    else{this.isvalid =true}

    // console.log(this.username);
  
    // console.log(this.password);
  }

}
