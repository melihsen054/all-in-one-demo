import { LitElement,html } from "lit-element";

class AttributeVsProperties extends LitElement{
    static get properties(){
        return {
            href: {type:String},
            checked: {type: Boolean},
            label: {type:String},
            message: {type:String},
            prefix: {type:String}
        }
    }
    constructor(){
        super();
        this.label = 'Label Attribute';
        this.checked = false;
        this.href = 'http://www.turkayurkmez.com';
        this.message = 'Bu bir Mesajdır.';
        this.prefix = 'Sayın';
    }
    render(){
        // Bir lit bileşeni, template içinde başka bir bileşen kullanılabilir.
        // Eğer attribute boolean bir değer alıyorsa ? alır 
        return html `
            <a href=${this.href}>${this.label}</a>
            <input type="checkbox" ?checked=${this.checked}/>
            <msg-creator .prefix = ${this.prefix} .message = ${this.message}>
            
            </msg-creator>
        `;
    }
}

customElements.define('prop-attribute',AttributeVsProperties);

class MessageCreator extends LitElement{
    static get properties(){
        return {
            message: {type:String},
            prefix: {type:String}
        }
    }
    render(){
        return html `<div>${this.prefix} ${this.message}</div>`;
    }
}

customElements.define('msg-creator',MessageCreator);