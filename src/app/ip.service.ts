import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http:HttpClient) { }

  getip(){
    return this.http.get("http://ip-api.com/json").subscribe((data:any)=>{
      console.log(data);
    })
  }
}
