import { Component, OnInit } from '@angular/core';
import { DataService, Pc } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pcList: Pc[] = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.pcList = this.data.getPcList();
    window.setInterval(() => {
      this.pcList = this.data.getPcList();
    }, 500);
  }

}
