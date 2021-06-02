import { LightningElement, api, wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const fields = [];
export default class TimerComponent extends LightningElement {

    @api recordId;
    @api objectApiName;
    @api fieldApiName;
    @api label;
    fieldValue;
    days_difference;
    isExpired = false;

    connectedCallback(){
        fields.push(this.objectApiName+'.'+this.fieldApiName);
    }

    @wire(getRecord, { recordId: '$recordId', fields: fields})
    wiredRecord({ error, data }) {
        if (error) {
            let message = 'Unknown error';
            if (Array.isArray(error.body)) {
                message = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                message = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading contact',
                    message,
                    variant: 'error',
                }),
            );
        } else if (data) {
            this.fieldValue = data.fields[this.fieldApiName].value;
            let currentTimeMS = new Date().getTime();   
            let fieldTimeMS = Date.parse(this.fieldValue);

            let time_difference = fieldTimeMS - currentTimeMS;
            this.days_difference = Math.floor (time_difference / (1000 * 60 * 60 * 24));  

            this.isExpired = this.days_difference > 0 ? false : true;
        }
    }

    parseDate(str) {
        var mdy = str.split('-');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    }



}