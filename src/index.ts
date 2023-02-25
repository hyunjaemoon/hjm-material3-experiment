// index.js
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/slider/slider.js'
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hjm-web')
export class HjmWeb extends LitElement {
    render() {
        return html `
            <md-outlined-button label="Back"></md-outlined-button>
            <md-filled-button label="Next"></md-filled-button>
            <md-slider></md-slider>
        `
    }
}