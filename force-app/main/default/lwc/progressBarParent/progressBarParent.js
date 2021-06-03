import { LightningElement } from 'lwc';

export default class ProgressBarParent extends LightningElement {
    progressValue = 0;
    
    hanldeProgressValueChange(event) {
        this.progressValue = event.detail;  
    }
}