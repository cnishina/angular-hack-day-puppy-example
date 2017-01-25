import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import {Puppy} from './puppy.model';

@Component({
  selector: 'puppy-root',
  templateUrl: './puppy.component.html',
})
export class PuppyComponent {
  puppy: Puppy;
  foundPuppy: FirebaseObjectObservable<Puppy>;
  foundPuppyPhotos: FirebaseListObservable<string[]>;

  // dependency injected angularfire
  constructor(public af: AngularFire) {}

  save(name: string, owner: string, photo: string) {

    // Add a puppy object
    if (name || owner) {
      let puppyObserv = this.af.database.object('/puppy/' + name);
      puppyObserv.subscribe(puppySub => {
        this.puppy = new Puppy();
        this.puppy.name = name || puppySub.name;
        this.puppy.owner = owner || puppySub.owner;
        puppyObserv.update(this.puppy);
      });
    }


    if (photo) {
      let photoObserv = this.af.database.list('/puppy/' + name + '/photo');
      photoObserv.subscribe(list => {
        // TODO(you): Add a photo to the list, if the item does not exist
        // push them onto the list then update
      });
    }

    console.log('saved on click.');
  }


  findPuppy(lookup: string) {
    console.log(lookup);
    this.foundPuppy = this.af.database.object('/puppy/' + lookup);
    // TODO(you): get an observable list 'findPuppyPhotos' with af.database.list
  }
}
