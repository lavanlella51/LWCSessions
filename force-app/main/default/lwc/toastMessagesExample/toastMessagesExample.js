import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastMessagesExample extends LightningElement {

    showSuccessToast() {        
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Toast Success',
                message: 'Opearion sucessful',
                variant: 'success',
                mode: 'dismissable'
            })
        );
    }

    showErrorToast() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Toast Error',
                message: 'Some unexpected error',
                variant: 'error',
                mode: 'dismissable'
            })
        );
    }

    showWarningToast() {        
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Toast Warning',
                message: 'Some problem',
                variant: 'warning',
                mode: 'dismissable'
            })
        );
    }

    showInfoToast() {        
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Toast Info',
                message: 'Operation will run in background',
                variant: 'info',
                mode: 'dismissable'
            })
        );
    }
}