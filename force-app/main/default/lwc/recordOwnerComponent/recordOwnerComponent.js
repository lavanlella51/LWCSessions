import { LightningElement, api } from 'lwc';
import getUsers from '@salesforce/apex/OwnerDetailsComponent.getUsers';


export default class RecordOwnerComponent extends LightningElement {

    @api recordId;
    @api objectApiName;
    data;

    connectedCallback(){
        getUsers({recordId : this.recordId, objectName:this.objectApiName}).then(response =>{
            if(response && response.length > 0){                
                this.data = response;
            }
        }).catch(error =>{
            this.error = error;                
        })
    }

    




}