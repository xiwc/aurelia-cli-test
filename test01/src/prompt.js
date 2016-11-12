import { DialogController } from 'aurelia-dialog';

export class Prompt {

    person = { firstName: '' };

    static inject = [DialogController];

    constructor(controller) {
        this.controller = controller;

        this.controller.settings.lock = false;
        // this.controller.settings.centerHorizontalOnly = true;
    }

    activate(person) {
        this.person = person;
    }
}
