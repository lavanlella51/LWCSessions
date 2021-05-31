import { LightningElement, api } from 'lwc';
import templateOne from './templateOne.html'
import templateTwo from './templateTwo.html'

export default class LifeCycleRendered extends LightningElement {

    @api template;

    constructor(){
        super();
        console.log("Inside Constructor"+this.template);
    }

    connectedCallback(){ 
        console.log("Inside connectedCallback"+this.template);
    }

    render(){ 
        return this.template === 'TemplateOne' ? templateOne : templateTwo;
    }

}