import '@material/top-app-bar'
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hjm-top-app-bar')
export class HjmTopAppBar extends LitElement {

    // Instantiation

    render() {
        return html `
            <div class="mdc-top-app-bar">
                <div class="mdc-top-app-bar__row">
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
                        <span class="mdc-top-app-bar__title">Page title</span>
                    </section>
                        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite</button>
                        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
                        <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
                    </section>
                </div>
            </div>
                <div class="mdc-top-app-bar--fixed-adjust">
                App content
            </div>
        `
    }
}