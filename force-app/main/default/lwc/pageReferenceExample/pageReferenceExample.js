import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';


export default class PageReferenceExample extends LightningElement {

    name;

    @wire(CurrentPageReference)
    currentPageReference; 
    
    get recordIdFromState(){
        return this.currentPageReference &&
            this.currentPageReference.state.c__name; 
    }

    renderedCallback(){
        if(this.name){
            return;
        }else{
            this.name = this.recordIdFromState;
        }
        
    }

}