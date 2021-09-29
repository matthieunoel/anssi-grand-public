import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public pcList: Pc[] = []

  // public observable: Observable<Pc[]>;

  constructor() {

    this.pcList.push({
            Nom: "DESKTOP-MN23S2D",
            Ip: "127.0.0.1",
            Statut: "En ligne et à jour."
         });

    // // setInterval(()=>{
    //  setTimeout(()=>{
    //    this.pcList.push({
    //       Nom: "DESKTOP-MN23S2D",
    //       Ip: "127.0.0.1",
    //       Statut: "En ligne et à jour."
    //    });
    //  }, 3000);

    // const db = new Database("../db.sqlite3")
    // let request: string = ''
    // request = 'CREATE TABLE IF NOT EXISTS pc(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, ip NUMERIC);'
    // db.prepare(request).run()

    // const pcList = localStorage.getItem('pcList');

    // if (!pcList) {
    //   localStorage.setItem('pcList', '');
    // }

  }

  clearPcList() {
    localStorage.removeItem('pcList');
  }

  getPcList(): Pc[] {
    // return this.pcList;
    const pcList = localStorage.getItem('pcList');
    if (pcList != null || pcList == '') {
      return JSON.parse(pcList);
    }
    else {
      return [];
    }
  }

  getPcListStatic(): Pc[] {
    return this.pcList;
  }

  addPcToList(pc: Pc) {
    // this.pcList.push(pc);

    const pcList = localStorage.getItem('pcList');
    let pcList2 = [];
    if (pcList != null) {
      if (pcList != '') {
        console.log('pcList :', pcList)
        pcList2 = JSON.parse(pcList);
      }
    }

    pcList2.push(pc);

    localStorage.setItem('pcList', JSON.stringify(pcList2));

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
