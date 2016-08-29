import {Component} from '@angular/core';
import {Fermentables} from '../data/grain.js';
@Component({
  selector: 'recipes-app',
  template: `
  <select name='firm'>
    <option *ngFor='let grain of fermentables' value='grain'>
    {{grain}}
    </option>
  </select>
  `
})

export class RecipesAdd{
  constructor(fermentables:Fermentables){
    this.fermentables = Object.keys(fermentables.fermentables);
  }
  ngOnInit(){
  }
}
