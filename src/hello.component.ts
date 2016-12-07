import {Component} from '@angular/core';


@Component({
    template: `
        <h3>{{greeting}} solar system!</h3>
        <button (click)="toggleGreeting()">toggle greeting!</button>
    `
})
export class Hello {
    greeting = 'hello';

    toggleGreeting(): void{
        this.greeting = this.greeting === 'hello' ? 'whats up' : 'hello';
    }
}
