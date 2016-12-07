import {Component, Input} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';


@Component({
    directives: [UIROUTER_DIRECTIVES],
    template: `
        <h3>Some People:</h3>
        <ul>
          <li *ngFor="let person of people">
            <a uiSref="person" [uiParams]="{personId: person.id}">{{person.name}}</a>
          </li>
        </ul>
    `
})
export class People {
    @Input() people;
}
