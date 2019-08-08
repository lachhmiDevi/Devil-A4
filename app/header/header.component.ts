import { Component, OnInit,Input  } from '@angular/core';
import {devil } from '../devil';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input () headInfo:devil;
  constructor() { }

  ngOnInit() {
  }

}
