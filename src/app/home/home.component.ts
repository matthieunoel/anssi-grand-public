import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Pc } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pcList: Pc[] = [];

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    sessionStorage.removeItem('pcList');

    this.pcList = this.data.getPcList();

    this.route.queryParams.subscribe(params => {
        if (params.show) {
          this.pcList = this.data.getPcListStatic();
        }
        else {
          setTimeout(() => {
            this.pcList = this.data.getPcListStatic();
          }, 40000);
          // }, 1);
        }
      });

  }

  pcClick() {
    window.location.href = '/viewpc';
  }

}
