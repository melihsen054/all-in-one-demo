import { LitElement, html } from "lit-element";

class IntroElement extends LitElement{
    render(){
        return html `
            <h3>Lit Bileşen Örnekleri</h3>
        `;
    }
}

customElements.define('intro-element',IntroElement);