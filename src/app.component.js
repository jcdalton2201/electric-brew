import {Component} from '@angular/core';

@Component({
  selector:'brew',
  template:`
  <div class='brew-main'> Main pages</div>
  `
})
export class brewComponent {
  constructor(){
    console.log('test of brew');
  }
}
