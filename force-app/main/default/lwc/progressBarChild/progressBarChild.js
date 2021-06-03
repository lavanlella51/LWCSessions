import { LightningElement } from 'lwc';

export default class ProgressBarChild extends LightningElement {

    progressValue;
    
    handleNumberChange(event) {
        this.progressValue = event.target.value;
        // Creates the event with the data.
        const numberChangeEvent = new CustomEvent("progressvaluechange", {
            detail: this.progressValue
        });

        // Dispatches the event.
        this.dispatchEvent(numberChangeEvent);
    }
}
