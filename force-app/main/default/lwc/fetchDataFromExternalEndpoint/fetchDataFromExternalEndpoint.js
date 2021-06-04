import { LightningElement, track } from 'lwc';
import getComics from '@salesforce/apex/AccountHelper.getComics';


export default class FetchDataFromExternalEndpoint extends LightningElement {

    @track data;
    @track activityData;
    @track comicData;
    counter = 0;

    connectedCallback(){
        this.getIPAddress();    
    }

    getIPAddress(){
        fetch('https://api.ipify.org/?format=json', {
            method: 'GET',        
        })
        .then(response => response.json())
        .then(data => {
            console.log('ip address:', typeof(data));
            this.data = data.ip;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    getActivity(){
        fetch('https://www.boredapi.com/api/activity', {
        method: 'GET',        
        })
        .then(response => response.json())
        .then(data => {
            console.log('Activity:', data);
            this.activityData = data.activity;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    fetchComics(){
        this.counter += 1; 
        getComics({counter: this.counter}).then(response =>{
            this.comicData = JSON.parse(response);
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
        })
    }
}