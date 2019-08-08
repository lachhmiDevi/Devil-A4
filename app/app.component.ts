import { Component } from '@angular/core';
import { devil } from './devil';
import {menu} from './menu';
import breakf from '../assets/data/breakfast.json';
import lunch1 from '../assets/data/lunch.json';
import dinner1 from '../assets/data/dinner.json';
import { PersonaldataService } from './rootComponent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Devil-A4';
  DEVIL: devil;

 // bl : menu[] = breakf.breakfast;
  ll : menu[] = lunch1.lunch;

 // dl : menu[] = dinner1.dinner;



  constructor(private pservice : PersonaldataService){}
  loadMyPersonalData():void{
    this.DEVIL = this.pservice.loadMyData();
}
ngOnInit (){this.loadMyPersonalData();}

}

