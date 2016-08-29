import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

@Injectable()
export class DataService implements Resolve{
  constructor(){
    console.log('data services');

  }
}
