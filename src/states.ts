import {Hello} from './hello.component';
import {About} from './about.component';
import {People} from './people.component';
import {Person} from './person.component';
import {PeopleService} from './people.service';
import {Transition} from 'ui-router-ng2';


export const helloState = {name: 'hello', url: '/hello', component: Hello};
export const aboutState = {name: 'about', url: '/about', component: About};
export const peopleState = {
    name: 'people',
    url: '/people',
    component: People,
    resolve: [
        {
            token: 'people',
            deps: [PeopleService],
            resolveFn: (peopleSvc) => peopleSvc.getAllPeople(),
        },
    ],
};

export const personState = {
    name: 'person',
    url: '/people/:personId',
    component: Person,
    resolve: [
        {
            token: 'person',
            deps: [Transition, PeopleService],
            resolveFn: (trans, peopleSvc) => peopleSvc.getPerson(trans.params().personId),
        },
    ],
};
