import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
donateNumber: number = 0;

  constructor() { }

  addNumb () {
    this.donateNumber + 10;
  }

  ngOnInit(): void {
  }

}
