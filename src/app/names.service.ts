import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  names = ['Isaac', 'Yasha']

  addNames(name){
    this.names.push(name)
    console.log(this.names)
  }

  constructor() { }
}
