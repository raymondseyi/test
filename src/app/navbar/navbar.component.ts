import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public logo : string = '/src/assets/images/logo.png'
  constructor() { }

  ngOnInit(): void {
  }

}
