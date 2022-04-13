import { Component } from '@angular/core';
import { IpService } from './ip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(private ip: IpService){
    this.ip.getip();
  }
  title = 'GetIP';
}
