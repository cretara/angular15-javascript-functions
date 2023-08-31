import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'angular15-javascript-functions';

  private jsFunctionCustom =
    'function custom() {var a = document.querySelector("test");return a.value !== "0"}';

  private jsFunctionGeneral =
    'function general() {var a = "Hello world!"; return a}';


    constructor(){
      eval(this.jsFunctionCustom);
      eval(this.jsFunctionGeneral);
    }

  ngOnInit(): void {
    const result = Function('{var a = "Hello world!"; return a}');
    console.debug(result());
  }
}
