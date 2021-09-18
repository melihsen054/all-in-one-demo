import { LitElement,html } from "lit-element";

class PassProperties extends LitElement{
    static get properties(){
        return {
            post: {type:Object},
            comments: {type:Array}
        };        
    }

    constructor(){
        super();
        this.post = {title:'Sakaryaspor 2-0 Sarıyer', storyDate:new Date(2021,8,12)};
        this.comments = [
            {title: 'Yeşil', details:'tabiki yeşil diye bağııracaz' },
            {title: 'Siyah', details:'tabiki siyah diye bağııracaz' }
        ];
    }
    render(){
        return html `
            <comment-element .comments = ${this.comments} .post= ${this.post}>
            
            </comment-element>
        `;
    }
}

customElements.define('pass-property',PassProperties);

class Comment extends LitElement{
    static get properties(){
        return {
            post: {type:Object},
            comments: {type:Array}
        };
    }
    render() {
        return html `
            <div>${this.post.title}</div>
            <ul>
                ${this.comments.map(b=>html `<li>${b.details}</li>`)}
            </ul>
        `;
    }
}

customElements.define('comment-element',Comment);