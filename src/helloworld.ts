import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import {NgModule, Component} from '@angular/core';
import {UIRouterModule} from "ui-router-ng2";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

/** Components */

@Component({
  selector: 'my-app',
  template: `
  <a uiSref="hello" uiSrefActive="active">Hello</a>
  <a uiSref="about" uiSrefActive="active">About</a>
  
  <ui-view></ui-view>
  `
})
export class App { }

@Component({  
  template: '<h3>Hello world!</h3>' 
})
class Hello { }

@Component({ 
  template: '<h3>Its the UI-Router hello world app!</h3>' 
})
class About { }


/** States */

let helloState = { name: 'hello', url: '/hello',  component: Hello }; 
let aboutState = { name: 'about', url: '/about',  component: About };

/** Root Application NgModule */

@NgModule({
  imports: [ 
    BrowserModule,
    UIRouterModule.forRoot({ states: [ helloState, aboutState ], useHash: true })
  ],
  declarations: [ App, Hello, About ],
  bootstrap: [ App ]
})
class RootAppModule {}

/** Angular 2 bootstrap */

platformBrowserDynamic().bootstrapModule(RootAppModule);
