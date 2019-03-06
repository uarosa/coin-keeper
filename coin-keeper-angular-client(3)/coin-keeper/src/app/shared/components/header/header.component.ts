
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
 @Input()
    name_surname: string = 'Roman';
    balance: number = 989898;
    expences: number = 123123;
    date: string = 'today';

  constructor() { }

    popupOne(){
        console.log('hi Roman')
    };
    logout(){
        console.log('logout Roman')
    }

  ngOnInit() {
  }

}
