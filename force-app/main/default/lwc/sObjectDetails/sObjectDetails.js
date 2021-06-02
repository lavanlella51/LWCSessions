import { LightningElement, track, api } from 'lwc';
import getFieldSets from '@salesforce/apex/SObjectFieldSetController.getFieldSets';

export default class SObjectDetails extends LightningElement {

    @api recordId;
    @api objectApiName;
    @api fieldSetAPINames;
    @track data;

    connectedCallback(){
        getFieldSets({fieldSetNames : this.fieldSetAPINames, objectName:this.objectApiName}).then(response =>{
            if(response && response.length > 0){                
                this.data = response;
            }
        }).catch(error =>{
            this.error = error;                
        })
    }
}