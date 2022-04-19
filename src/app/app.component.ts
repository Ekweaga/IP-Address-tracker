import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  data:any;
  value:any;
  error:boolean = true;
  constructor(private ip: IpService){
   
  }
  ngOnInit(){
this.ip.getip().subscribe((data)=>{
  this.error = false;
  this.data = data
  console.log(this.data)
})
  }

  getip(){
this.ip.getaip(this.value).subscribe((data:any)=>{
  console.log(data);
  this.error = false;
  this.data = data
  this.value = ""
})
  }
  title = 'GetIP';
}
