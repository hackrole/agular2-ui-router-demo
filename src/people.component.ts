import {Component, Input} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';


@Component({
    directives: [UIROUTER_DIRECTIVES],
    template: `
        <div class="flex-h">
            <div class="people">
              <h3>some people:</h3>
              <ul>
                <li *ngFor='let person of people'>
                    <a uiSref=".person" [uiParams]="{personId: person.id}">
                        {{person.name}}
                    </a>
                </li>
              </ul>
            </div>

            <ui-view></ui-view>
        </div>
    `
})
export class People {
    @Input() people;
}
