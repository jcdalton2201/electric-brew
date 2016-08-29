import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Fermentables} from './data/grain';

@Component({
  selector:'brew',
  template:`
  <nav>
    <ul class="menu vertical">
      <li><a href="#">Recipes</a>
        <ul class="menu vertical nested">
          <li><a [routerLink]="['/matter/add']" >Add</a></li>
          <li><a [routerLink]="['/matter/list']">List</a></li>
        </ul>
      </li>
      <li><a href="#">Brewing</a></li>
      <li><a href="#">Equipment</a></li>
    </ul>
  </nav>
  <div class='brew-main'>
    <router-outlet></router-outlet>
  </div>
  `,
  directives:[ROUTER_DIRECTIVES],
})
export class brewComponent {
  constructor(fermentables:Fermentables){
    console.log('test of brew');
    this.fermentables = fermentables;
  }
  ngOnInit(){
    console.log(this.fermentables.fermentables);
  }
}
