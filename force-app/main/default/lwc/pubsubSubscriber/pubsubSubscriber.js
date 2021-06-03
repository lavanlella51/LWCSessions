import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubSubscriber extends LightningElement {

    message;

    connectedCallback(){
        this.register();
    }

    register(){
        pubsub.register('postMessageEvent', this.receiveMessage.bind(this));
    }

    receiveMessage(msg){
        this.message = msg;
    }

}