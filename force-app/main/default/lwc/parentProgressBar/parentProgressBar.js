import { LightningElement } from 'lwc';

export default class ParentProgressBar extends LightningElement {

    progressValue;
    
    handleNumberChange(event) {
        this.progressValue = event.target.value;
    }

}