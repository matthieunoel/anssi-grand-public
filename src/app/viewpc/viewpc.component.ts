import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpc',
  templateUrl: './viewpc.component.html',
  styleUrls: ['./viewpc.component.scss']
})
export class ViewpcComponent implements OnInit {

  public scanTime!: string;

  constructor() { }

  ngOnInit(): void {
    this.scanTime = new Date().toLocaleDateString() + ', ' + new Date(new Date().getTime() - 70000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }

}
