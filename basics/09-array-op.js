import { LitElement,html } from "lit-element";

class ArrayOperations extends LitElement{
    static get properties(){
        return {
            customers: {type:Array}
        }
    }
    constructor(){
        super();
        this.customers = [
            {name:'Buse',lastName:'Karaismailoğlu',age:'24',graduate:'Sakarya Üniversitesi'},
            {name:'Doğukan',lastName:'Yavuz',age:'23',graduate:'Trakya Üniversitesi'},
            {name:'Onur',lastName:'İnan',age:'26',graduate:'Selçuk Üniversitesi'},
            {name:'Uğur Kadir',lastName:'Arabacı',age:'23',graduate:'Kocaeli Üniversitesi'},
            {name:'Türkay',lastName:'Ürkmez',age:'41',graduate:'Anadolu Üniversitesi'}
        ];
    }

    render(){
        return html `
        <div>
            <input type="text" id='textName'/>
            <button @click=${this.addCustomer}>
                Ekle
            </button>
        </div>    
        <repeat-temp .customers=${this.customers}></repeat-temp> 
        `;
    }

    showCustomers(){
        return html `
        <repeat-temp .customers=${this.customers}></repeat-temp>
        `
    }
    addCustomer(){
        let customerName = this.shadowRoot.querySelector('#textName').value;
        let newCustomer = {
            name: customerName,
            lastName: '...',
            age:0,
            graduate:'İTÜ'
        };

        this.customers = [
            ...this.customers,
            newCustomer
        ];
    }
}

customElements.define('array-ops',ArrayOperations);