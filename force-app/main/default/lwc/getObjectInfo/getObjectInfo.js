import { LightningElement, api, track, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';


export default class GetObjectInfo extends LightningElement {

    @api recordId;
    @api objectApiName;

    defaultRecordTypeId;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    wireObj({
        error,
        data
    }) {
        if (error) {
           this.error = error ; 
        } else if (data) {
            console.log('-------'+JSON.stringify(data, null, '\t'));
            this.defaultRecordTypeId = data.defaultRecordTypeId;
        }
    }

    @wire(getPicklistValues, { recordTypeId: '$defaultRecordTypeId'/*'$objectInfo.data.defaultRecordTypeId'*/, 
    fieldApiName: INDUSTRY_FIELD })
    setPicklistOptions({error, data}) {
        if (data) {
            console.log('-------'+JSON.stringify(data, null, '\t'));            
        } else if (error) {
            this.error = error;
            console.log('-------'+JSON.stringify(error, null, '\t'));            
        }
    }


}