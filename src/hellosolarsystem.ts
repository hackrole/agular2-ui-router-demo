import {NgModule, Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import {UIRouterModule} from 'ui-router-ng2';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {App} from './app.component';
import {Hello} from './hello.component';
import {About} from './about.component';
import {People} from './people.component';
import {Person} from './person.component';
import {PeopleService} from './people.service';
import {MyUIRouterConfig} from './router.config';
import {helloState, aboutState, peopleState, personState} from './states';


let INITIAL_STATES = [helloState, aboutState, peopleState, personState];
let INITIAL_COMPONENTS = [App, Hello, About, People, Person];


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UIRouterModule.forRoot({
            states: INITIAL_STATES,
            useHash: true,
            configClass: MyUIRouterConfig,
        }),
    ],
    providers: [
        {provide: PeopleService, useClass: PeopleService},
    ],
    declarations: INITIAL_COMPONENTS,
    bootstrap: [App],
})
class HelloSolarSystemModule{

}


platformBrowserDynamic().bootstrapModule(HelloSolarSystemModule)
    .catch(err => console.error(err));
