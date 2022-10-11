import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lucky-number',
  templateUrl: './lucky-number.component.html',
  styleUrls: ['./lucky-number.component.scss']
})

export class LuckyNumberComponent implements OnInit {
  luckyNumber: number = 0;

  constructor() {}

  generateLN (){
    this.luckyNumber++;
  }

  ngOnInit(): void {
    // this.luckyNumber = Math.floor(Math.random () * 10 +1);
    // console.log(this.luckyNumber);
  }

}
