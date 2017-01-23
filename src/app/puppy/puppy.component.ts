import {Component} from '@angular/core';

@Component({
  selector: 'puppy-root',
  templateUrl: './puppy.component.html',
})
export class PuppyComponent {
  // TODO(you): add a variable from the input
  name: string;

  // TODO(you): implement a save method
  save() {
    console.log('save clicked, name entered: ', this.name);
  }
}
