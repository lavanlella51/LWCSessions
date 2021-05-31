import { LightningElement, track, wire } from 'lwc';
import fetchAccounts from '@salesforce/apex/AccountHelper.getAccounts'

export default class GetDataUsingApex extends LightningElement {

    @track accounts;
    error;
    revenue;
    @track selectedAccountId;

    connectedCallback(){
        this.revenue = 30000000;
        //this.getData();
    }

    /*getData(){
        fetchAccounts({revenue: this.revenue}).then(response =>{
            this.accounts = response;
            console.log('----imperative-----'+this.accounts);
            this.selectedAccountId = this.accounts[0].Id;
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
        })
    }*/

    @wire(fetchAccounts, { revenue: '$revenue' })
    wiredAccount({ error, data }) {
        if (data) {
            this.accounts = data; 
            console.log('----wired-----'+JSON.stringify(data));
            this.selectedAccountId = this.accounts[0].Id;
        } else if (error) {
            this.error = error;
        }
    }

    setSelectedAccount(event){
        this.selectedAccountId = event.currentTarget.dataset.id;
        console.log('----selectedAccountId-----'+this.selectedAccountId);
    }
    
}