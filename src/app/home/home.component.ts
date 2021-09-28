import { Component, OnInit } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pcList = [
    {
      Nom: "DESKTOP-MN23S2D",
      Ip: "127.0.0.1",
      Statut: "En ligne et à jour."
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('Init HomeComponent')
  }

}
