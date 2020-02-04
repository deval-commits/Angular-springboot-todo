import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WelcomeDataServiceService } from '../service/data/welcome-data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    constructor(private router:ActivatedRoute,
    private welcomeDataService : WelcomeDataServiceService) { }

  message="welcome message"
  name =''

  ngOnInit() {
    this.name = this.router.snapshot.params['name'];
  }


  getbootMessage(){
    //call service in welcome component
    console.log("get request is intercepted");
   //console.log(this.welcomeDataService.bootMessageServiceMethod().subscribe());
    this.welcomeDataService.bootMessageServiceMethod().subscribe();
  }

}
