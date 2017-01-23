import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';

import {Puppy} from './puppy.model';

@Component({
  selector: 'puppy-root',
  templateUrl: './puppy.component.html',
})
export class PuppyComponent {
  puppy: Puppy = new Puppy();

  // TODO(you): add variables to lookup the puppy by name and the found puppy

  // dependency injected angularfire
  constructor(public af: AngularFire) {}

  save() {
    let observ = this.af.database.object('/puppy/' + this.puppy.name);
    observ.update(this.puppy);
    console.log('save clicked, name entered: ', this.puppy.name);
  }

  // TODO(you): find the puppy with af.database.get
  findPuppy() {

  }
}
