import { LitElement, html } from "lit-element";

class PropertyElement extends LitElement{
    
    static get properties(){
        return {
            textMessage: {type:String},
            showCount: {type:Number}
        }
    }

    constructor(){
        super();
        this.showCount =0;
        this.textMessage= 'melih';
    }

    render(){
        return html `
            <div>
                <p>
                    Bu elementin mesajı, ${this.textMessage} ve mesajın gösterilme sayısı
                    ${this.showCount}
                </p>
                <p>
                    Bu mesajın tersten yazılışı: ${this.reverseMessage(this.textMessage)}
                </p>
            </div>
        `;
    }

    reverseMessage(word){
        return word.split('').reverse().join('');
    }
}

customElements.define('property-element',PropertyElement);