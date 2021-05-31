import { LightningElement } from 'lwc';

export default class LifeCycleHooksExample extends LightningElement {

    //name;
    displayChild = false;


    constructor(){ 
        super();
        console.log("Inside Constructor");
    }
    connectedCallback(){ 
        console.log("Inside Connected Callback");
    }
    renderedCallback(){ 
        console.log("Inside Rendered Callback ");
    }

    /*changeHandler(event){
        this.name = event.target.value
    }*/

    //for disconnected callback
    handleClick(){ 
        this.displayChild = !this.displayChild;
    }

    /*errorCallback(error, stack){ 
        console.log(error.message);
        console.log(stack)
    }*/

}