import { LitElement, html } from "lit-element";

class MultipleRender extends LitElement {
    static get properties() {
        return {
            message: { type: String },
            showMessage: { type: Boolean },
            disabled: { type: Boolean }
        };
    }
    constructor() {
        super();
        this.disabled = false;
    }
    render() {
        if (this.disabled) {
            return html `element disabled`;
        }
        return html `
            <div>
                <button @click=${() => this.showMessage = !this.showMessage}>
                    ${this.showMessage ? 'Gizle':'Göster'}                
                </button>
            </div>
            <div>
                ${this.showMessage ? html `Mesaj: ${this.message}`:''}
            </div>
        `;
    }
}

customElements.define('multiple-render', MultipleRender);