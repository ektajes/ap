import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
secc!:any;
  constructor() { }

  ngOnInit(): any {
    // this.secc= localStorage.getItem('username');
 if(localStorage.getItem('username')!==null){
this.secc=true;
 }

  }

}
