import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
@Input() name:string;

  constructor() { 
  }

  ngOnInit() {
    debugger
    let names = [];
    names.push(this.name);
    console.log(names,'147258');

  }

}
