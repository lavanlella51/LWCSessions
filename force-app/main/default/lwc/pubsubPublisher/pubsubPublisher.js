import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubPublisher extends LightningElement {

    sendMessage(){
        let message = 'Hello subscriber....';
        pubsub.fire('postMessageEvent', message);
    }
}