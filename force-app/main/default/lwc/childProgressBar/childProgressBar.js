import { LightningElement, api } from 'lwc';

export default class ChildProgressBar extends LightningElement {
    @api progressValue;
}