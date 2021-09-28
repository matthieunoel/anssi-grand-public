import { Component, OnInit } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public osList = [
    {
      value: "A",
      viewValue: "A"
    },
    {
      value: "B",
      viewValue: "B"
    },
    {
      value: "C",
      viewValue: "C"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('Init HomeComponent')
  }

}
