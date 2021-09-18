import { LitElement,html } from "lit-element";

class EventHandle extends LitElement{
    static get properties(){
        return {
            counter: {type: Number}
        };
    }
    constructor(){
        super();
        this.counter = 0;
    }

    render(){ 
        return html `
            <button @click=${()=> this.counter +=1}>Arttır</button>
            <span>Sayaç Değeri: ${this.counter}</span>
            <button @click=${this.decrementOp}>Azalt</button>
        `;
    }
    decrementOp(){
        this.counter -=1;
    }
}

customElements.define('event-handler',EventHandle);