import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addpc',
  templateUrl: './addpc.component.html',
  styleUrls: ['./addpc.component.scss']
})
export class AddpcComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    // const test = this.route.snapshot.paramMap.get('test');
    // console.log('test :', test);

    this.route.queryParams.subscribe(params => {
      this.data.addPcToList({
        Nom: params.nom,
        Ip: params.ip,
        Statut: "En ligne et à jour."
      });
  });

  }

}
