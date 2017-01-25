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

    // Add a photo list
    if (photo) {
      let photoObserv = this.af.database.list('/puppy/' + name + '/photo');
      photoObserv.subscribe(list => {
        let found = false;
        list.forEach(item => {
          if (item.$value === photo) {
            found = true;
          }
        });
        if (!found) {
          photoObserv.push(photo);
        }
      });
    }

    console.log('saved on click.');
  }

  findPuppy(lookup: string) {
    console.log(lookup);
    this.foundPuppy = this.af.database.object('/puppy/' + lookup);
    this.foundPuppyPhotos = this.af.database.list('/puppy/' + lookup + '/photo');
  }
}
