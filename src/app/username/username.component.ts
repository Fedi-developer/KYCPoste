import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  @Input() public nameFromParent: any

  constructor() { }

  ngOnInit(): void {
  }

}
