import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  oldtimers: Array <{name: string, age: number, pic: string}> = [
    {
      name: "VW Käfer",
      age: 1938,
      pic: "käfer.jpg"
    },
    {
      name: "Mercedes W123",
      age: 1986,
      pic: "w123.jpeg"
    },
    {
      name: "Porsche 911",
      age: 1963,
      pic: "911.jpg"
    },
    {
      name: "Mercedes Benz SLR 107",
      age: 1989,
      pic: "slr.jpg"
    },
    {
      name: "Opel Kadett",
      age: 1984,
      pic: "kadett.jpeg"
    },
    {
      name: "Mercdes Benz Pagode",
      age: 1963,
      pic: "pagode.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
