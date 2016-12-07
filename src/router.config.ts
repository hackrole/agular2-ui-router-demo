import {UIRouter} from 'ui-router-ng2';
import {visualizer} from 'ui-router-visualizer';
import {Inject, Injectable} from '@angular/core';
import {PeopleService} from './people.service';


@Injectable()
export class MyUIRouterConfig {
    constructor(@Inject(PeopleService) peopleService, @Inject(UIRouter) router: UIRouter){
        // pre-load the people list at startup
        peopleService.getAllPeople();

        // if no url matches, goto the hello state
        router.urlRouterProvider.otherwise(() => router.stateService.go('hello'));

        // Use ui-router-visualizer to show the states as a tree
        //StateTree.create(router, document.getElementById('statetree'), {width: 200, height: 100});
        visualizer(router);
    }
}
