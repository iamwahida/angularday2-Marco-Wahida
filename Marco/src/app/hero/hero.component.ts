import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  cars: Array <{name:string, text: string, image: string, link: string }> = [
    {
    name: "Mercedes AMG",
    text:"Der Mercedes-AMG GT ist ein Gran-Turismo. Der Sportwagen von Mercedes-AMG wurde als Coupé (interne Bezeichnung C 190) am 9.",
    image: "assets/images/car1.jpg",
    link: "https://de.wikipedia.org/wiki/Mercedes-AMG"
    },
    {
     name: "Cadillac",
     text: "Und jeder Zoll ist typisch Cadillac - niemals angeberisch, sondern streng einem überzeugten Designstil unterworfen. 1965 Fleetwood, 1965 DeVille Convertible.",
     image: "assets/images/car2.jpg",
     link: "https://de.wikipedia.org/wiki/Cadillac"
    },
    {
      name: "Ford Mustang Shelby GT Super",
      text: "Der Shelby Mustang war in den 1960ern ein getunter Sportwagen. Er gehörte zur Serie von Ford Mustangs, die von Carroll Shelbys Firma im Stile des Shelby Cobra speziell umgebaut und als Serie verkauft wurden.",
      image: "assets/images/car3.jpg",
      link: "https://de.wikipedia.org/wiki/Shelby_Mustang"

    },
    {
      name: "Audi a3",
      text:"Audi A3 ist eine Kompaktklassen-Modellreihe von Audi, die seit Sommer 1996 in bisher vier Generationen hergestellt wird. Im Juli 2013 lief das dreimillionste Auto vom Band.",
      image: "assets/images/car4.jpg",
      link: "https://de.wikipedia.org/wiki/Audi_A3"
    }
];


info = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  age: new FormControl(''),
  email:new FormControl(''),
});


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    // to take the values from the form you can select the property that have the formGroup and then just add .value
   
      var a = this.info.value;
   
      console.log(a)
   
    }

}
