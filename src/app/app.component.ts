import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[] //Contains a list of all services that will be needed
})
export class AppComponent {
  constructor(){}
  ngOnInit(){
   
  }
  title = 'first-app';
}
