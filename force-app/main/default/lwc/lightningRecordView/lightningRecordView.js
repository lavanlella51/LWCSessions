import { LightningElement, api } from 'lwc';

export default class LightningRecordView extends LightningElement {

    @api recordId;
    @api objectApiName;
    @api flexipageRegionWidth;
    fields = ['Name', 'Phone', 'Email', 'AccountNumber'];

    connectedCallback(){
        console.log('----region width---'+this.flexipageRegionWidth);
        console.log('----recordId---'+this.recordId);
        console.log('----objectApiName---'+this.objectApiName);
    }

}