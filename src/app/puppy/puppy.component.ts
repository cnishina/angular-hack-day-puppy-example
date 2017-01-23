import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';

import {Puppy} from './puppy.model';

@Component({
  selector: 'puppy-root',
  templateUrl: './puppy.component.html',
})
export class PuppyComponent {

  // dependency injected angularfire
  constructor(public af: AngularFire) {}

  name: string;

  save() {
    // TODO(you): use update to save the puppy object
    // let observ = this.af.database.object('/path/to/save');
    // use observ.update or observ.set
    console.log('save clicked, name entered: ', this.name);
  }
}
