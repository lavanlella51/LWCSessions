import { LightningElement } from 'lwc';

export default class LifeCycleDisconnectedCallback extends LightningElement {

    constructor(){ 
        super();
        console.log("Inside Child Constructor");
    }
    connectedCallback(){ 
        console.log("Inside Child Connected Callback");
    }
    renderedCallback(){ 
        console.log("Inside Child Rendered Callback");
    }
    disconnectedCallback(){
       alert("Inside Child disconnectedCallback called "); 
    }

}