import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public pcList: Pc[] = []

  // public observable: Observable<Pc[]>;

  constructor() {

    // // setInterval(()=>{
    //  setTimeout(()=>{
    //    this.pcList.push({
    //       Nom: "DESKTOP-MN23S2D",
    //       Ip: "127.0.0.1",
    //       Statut: "En ligne et à jour."
    //    });
    //  }, 3000);

  }

  clearPcList() {
    this.pcList = [];
  }

  getPcList(): Pc[] {
    return this.pcList;
  }

  addPcToList(pc: Pc) {
    this.pcList.push(pc);
  }

  // getObservable(): Observable<Pc[]> {
  //   return Observable.delay;
  // }

}

export interface Pc {
    Nom: string,
    Ip: string,
    Statut: string
}
