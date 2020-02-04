import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataServiceService {
  //this service is for connecctiong spring boot service to angular component

  constructor(private http:HttpClient) { }

      name :String='deval'
     bootMessageServiceMethod(){

        return this.http.get(`http://localhost:8080/helloboot/${this.name}`);
     }

}
