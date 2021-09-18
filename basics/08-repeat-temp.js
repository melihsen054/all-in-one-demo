import { LitElement,html } from "lit-element";

class RepeatTemplate extends LitElement{
    static get properties(){
        return {
            customers: {type:Array}
        }
    }
    constructor(){
        super();
        this.customers = [];
    }
    render(){
        return html `
        <h3>Müşteriler</h3>    
            <table>
                <thead>
                    <tr>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Yaş</th>
                        <th>Üniversite</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.customers.map((a)=>this.customerTemplate(a))}
                </tbody>
            </table>
        `;
    }
    customerTemplate(customer){
        return html `
        <tr>
            <td>${customer.name}</td>
            <td>${customer.lastName}</td>
            <td>${customer.age}</td>
            <td>${customer.graduate}</td>
        </tr>
        `;
    }
}

customElements.define('repeat-temp',RepeatTemplate);