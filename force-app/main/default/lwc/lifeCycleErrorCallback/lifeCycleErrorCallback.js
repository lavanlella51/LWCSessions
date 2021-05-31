import { LightningElement } from 'lwc';

export default class LifeCycleErrorCallback extends LightningElement {

    constructor(){ 
        super()
        console.log("Inside Child Constructor");
    }

    connectedCallback(){ 
        console.log("Inside Child Connected Callback");
        throw new Error('Loading of child component failed');
    }

    renderedCallback(){ 
        console.log("Inside Child Rendered Callback");
    }

}