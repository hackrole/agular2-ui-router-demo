import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class PeopleService{
    constructor(@Inject(Http) public http: Http){
        console.log('people service constructor');
    }

    getAllPeople(){
        return this.http.get('data/people.json')
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
