import { LightningElement, wire } from 'lwc';
import  getListAccount  from '@salesforce/apex/AccountController.getListAccount';

export default class UltimasContas extends LightningElement {
    accounts;
    error;

    columns = [
        {label:'Nome', fieldName:'Name'},
        {label:'Classificação', fieldName:'Rating'},
        {label:'Telefone', fieldName:'Phone', type:'phone'},
    ]
    
    @wire(getListAccount)wiredAccounts({error, data}){
        if(data){
            this.accounts = data;
            this.error = undefined;
            console.log(data);
        } else if(error){
            this.error = error;
            this.accounts = undefined;
        }
    }
}