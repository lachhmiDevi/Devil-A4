import{ Injectable } from '@angular/core';
import {devil} from './devil';
@Injectable ({
    providedIn : 'root'
})
export class PersonaldataService {
    loadMyData() : devil{
        const DEVI : devil = 
        {
            studentId : 991490848, myName: "Lachhmi Devi", loginName :"devil" ,
            campusName: "Davis", title:"Devil-A4"
        }
        return DEVI;
    }
    constructor(){}
}
