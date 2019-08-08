import { Component, OnInit, Input} from '@angular/core';
import {devil } from '../devil';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input () footInfo:devil;
  constructor() { }

  ngOnInit() {
  }

}
