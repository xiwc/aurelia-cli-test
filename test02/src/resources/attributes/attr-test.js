import { inject } from 'aurelia-framework';

@inject(Element)
export class AttrTestCustomAttribute {
	
    constructor(element) {
        this.element = element;
    }

    valueChanged(newValue, oldValue) {
        this.element.style.backgroundColor = newValue;
    }
}
