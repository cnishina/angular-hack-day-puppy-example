import {Component} from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

import {Puppy} from './puppy.model';

@Component({
  selector: 'puppy-root',
  templateUrl: './puppy.component.html',
})
export class PuppyComponent {
  puppy: Puppy = new Puppy();

  // TODO(you): add variables to lookup the puppy by name and the found puppy
  lookup: string;
  foundPuppy: FirebaseObjectObservable<Puppy>;

  // dependency injected angularfire
  constructor(public af: AngularFire) {}

  save() {
    let observ = this.af.database.object('/puppy/' + this.puppy.name);
    observ.update(this.puppy);
    console.log('saved on click.');
    console.log('name entered: ', this.puppy.name);
    console.log('owner entered: ', this.puppy.owner);
  }

  // TODO(you): find the puppy with af.database.get
  findPuppy() {
    this.foundPuppy = this.af.database.object('/puppy/' + this.lookup);
  }
}
