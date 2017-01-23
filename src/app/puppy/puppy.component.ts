import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';

import {Puppy} from './puppy.model';

@Component({
  selector: 'puppy-root',
  templateUrl: './puppy.component.html',
})
export class PuppyComponent {
  puppy: Puppy = new Puppy();

  // dependency injected angularfire
  constructor(public af: AngularFire) {}

  name: string;

  save() {
    // TODO(you): use update to save the puppy object
    // let observ = this.af.database.object('/path/to/save');
    // use observ.update or observ.set
    let observ = this.af.database.object('/puppy/' + this.puppy.name);
    observ.update(this.puppy);
    console.log('save clicked, name entered: ', this.puppy.name);
  }
}
