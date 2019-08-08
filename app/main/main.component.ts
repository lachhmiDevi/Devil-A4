import { Component, OnInit,Input } from '@angular/core';
import {menu} from '../menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
@Input() breakfastL:menu;
@Input() lunchL:menu;
@Input() dinnerL:menu;

  constructor() { }

  ngOnInit() {
  }

}
