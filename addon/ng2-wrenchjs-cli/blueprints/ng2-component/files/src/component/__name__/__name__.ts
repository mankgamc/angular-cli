import {Component, View} from 'angular2/angular2';

@Component({
    selector: '<%= dasherizedModuleName %>',
    injectables: []})
@View({
    templateUrl: 'component/<%= dasherizedModuleName %>/<%= dasherizedModuleName %>.html',
    directives: []
})
export class <%= classifiedModuleName %> {
    constructor() {

    }
}