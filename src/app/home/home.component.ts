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

    sessionStorage.removeItem('pcList');

    this.pcList = this.data.getPcList();
    setTimeout(() => {
      this.pcList = this.data.getPcListStatic();
    // }, 20000);
    }, 1);
  }

  pcClick() {
    window.location.href = '/viewpc';
  }

}
