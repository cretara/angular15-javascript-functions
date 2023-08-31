import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private jsFunctionCustom = Function(
    '{var a = document.querySelector("#test");console.debug(a);a.style.visibility = "hidden";return a.value !== "0"}'
  );

  private jsFunctionGeneral = Function('{var a = "Hello world!"; return a}');

  ngOnInit(): void {
    console.debug(this.jsFunctionGeneral());
    const returnValueCustomFunction = this.jsFunctionCustom();
    console.debug(returnValueCustomFunction);
  }
}
