import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  myVar = 1
  foobar = 'hola';
  constructor() { }

  ngOnInit() {
  }

  sayHi(){
    alert("Hi!");
  }

  getValue(myInput: HTMLInputElement){
    console.log(myInput.value);
  }
}
