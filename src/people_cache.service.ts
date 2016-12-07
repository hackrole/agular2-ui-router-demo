import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class PeopleService {
    cache = null;

    constructor(@Inject(Http) public http: Http){
        console.log('people service with cache constructor');
    }

    getAllPeople(){
        return this.cache = this.cache || this.http.get('data/people.json')
            .map(resp => resp.json())
            .toPromise();
    }

    getPerson(id){
        function personMatchesParam(person){
            return person.id === id;
        }

        return this.getAllPeople()
            .then(people => people.find(personMatchesParam));
    }
}
