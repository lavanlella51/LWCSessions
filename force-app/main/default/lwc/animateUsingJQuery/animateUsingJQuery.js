import { LightningElement } from 'lwc';
import {loadScript} from 'lightning/platformResourceLoader';
import jQuery from '@salesforce/resourceUrl/JQuery'

export default class AnimateUsingJQuery extends LightningElement {

    resourceLoaded = false;

    renderedCallback(){ 
        if(!this.resourceLoaded){                         
            
            loadScript(this, jQuery+'/jquery-ui-1.8.20/js/jquery-1.7.2.min.js')
            .then(() => {
                console.log('JQuery loaded.');
            })
            .catch(error=>{
                console.log('Failed to load the JQuery : ' +error);
            });
            
            /*Promise.all([
                loadScript(this, jQuery+'/jquery-ui-1.8.20/js/jquery-1.7.2.min.js'),
                loadScript(this, jQuery+'/jquery-ui-1.8.20/js/jquery-ui-1.8.20.custom.min.js')
            ]).then(()=>{ 
                $(this.template.querySelector('.className')).keyup(function() {
                    
                });
            })*/
            this.resourceLoaded = true;
        }
    }

    slideIt(event){
        $(this.template.querySelector('.panel')).slideToggle("slow");
    }

    slideRight(event){
        $(this.template.querySelector('.innerDiv')).animate({left: '1200px'});
    }
}