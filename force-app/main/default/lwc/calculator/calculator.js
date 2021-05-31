import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {

    currentResult;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputName = event.target.name;
        if(inputName === 'firstNumber'){
            this.firstNumber = event.target.value;
        } else if(inputName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = firstN + secondN;
    }

    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = firstN - secondN;
    }

    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = firstN*secondN;        
    }

    divisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = firstN/secondN;
    }

}