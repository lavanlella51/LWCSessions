import { LightningElement, wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';


export default class GetUserDetails extends LightningElement {


    @wire(getRecord, { recordId: USER_ID, fields: [NAME_FIELD, 'User.Email','User.Username'] })
    userData;

    get name() {
        return this.userData.data.fields.Name.value;
    }

    get username() {
        return this.userData.data.fields.Username.value;
    }

    get email() {
        return this.userData.data.fields.Email.value;
    }

    /*
    username;
    @wire(getRecord, {
        recordId: USER_ID,
        fields: [NAME_FIELD, 'User.Email','User.Username']
    }) wireuser({
        error,
        data
    }) {
        if (error) {
           this.error = error ; 
        } else if (data) {
            this.username = data.fields.Name.value;
        }
    }*/


}