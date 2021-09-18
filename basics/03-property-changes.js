import { LitElement,html } from "lit-element";

class PropertyChanges extends LitElement{
    static get properties(){
        return {
            counter: {type:Number},
            maxCount: {type:Number}
        };
    }

    constructor(){
        super();
        this.counter = 0;
        this.maxCount = 10;

        setInterval(()=>{
            this.counter = this.counter<this.maxCount ? this.counter +1 : 0;
        },2000);
    }

    render(){
        return html `
            <div>
                Counter: [${this.counter}]
            </div>
        `;
    }
}

customElements.define('property-change',PropertyChanges);