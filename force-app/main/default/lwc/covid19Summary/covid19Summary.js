import { LightningElement, track } from 'lwc';

export default class Covid19Summary extends LightningElement {

    @track data;
    @track globalData;
    @track countryData;
    showTable = false;
    @track columns = [
        {
            label: 'Country',
            fieldName: 'Country',
            type: 'text',
            cellAttributes: {            
                alignment: 'left'
            }
        },
        {
            label: 'Total Confirmed',
            fieldName: 'TotalConfirmed',
            type: 'number',
            cellAttributes: {
                class: 'slds-text-color_error',
                alignment: 'left'
            }
        },
        {
            label: 'New Confirmed',
            fieldName: 'NewConfirmed',
            type: 'number',
            cellAttributes: {
                class: 'slds-text-color_error',
                alignment: 'left'
            }
        },
        {
            label: 'Total Recovered',
            fieldName: 'TotalRecovered',
            type: 'number',
            cellAttributes: {
                class: 'slds-text-color_success',
                alignment: 'left'
            }
        },
        {
            label: 'New Recovered',
            fieldName: 'NewRecovered',
            type: 'number',
            cellAttributes: {
                class: 'slds-text-color_success',
                alignment: 'left'
            }
        },
        {
            label: 'Total Deaths',
            fieldName: 'TotalDeaths',
            type: 'number',
            cellAttributes: {
                class: 'slds-text-color_weak',
                alignment: 'left'
            }
        },
        {
            label: 'New Deaths',
            fieldName: 'NewDeaths',
            type: 'number',
            cellAttributes: {
                class: 'slds-text-color_weak',
                alignment: 'left'
            }
        }
    ];
    

    connectedCallback(){
        this.getCovidSummary();
    }
    
    getCovidSummary(){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://api.covid19api.com/summary", false ); 
        xmlHttp.send();
        console.log('covid19:', typeof(xmlHttp.responseText));
        this.data = JSON.parse(xmlHttp.responseText);
        this.globalData = this.data.Global;
        this.countryData = this.data.Countries;
    }
    
    getCasesByCountry(){
        this.showTable = true;    
    }
    
}