import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../service.service';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  name;
  email;
  password;
  contact;
  constructor(private us: ServiceService) { }
 
  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.contact,this.email,this.password);
    // console.log(this.name)
}
 
 
 
}