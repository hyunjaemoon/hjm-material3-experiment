// index.js
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";
import "@material/web/slider/slider.js";
import "@material/web/navigationbar/navigation-bar.js";
import "@material/web/navigationdrawer/navigation-drawer.js";
import "@material/web/navigationtab/navigation-tab.js";
import "./web-elements/hjm-top-app-bar";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("hjm-web")
export class HjmWeb extends LitElement {
  // Instantiation

  render() {
    return html`
      <hjm-top-app-bar></hjm-top-app-bar>
      <md-navigation-bar data-aria-label="HJM Bar">
        <md-navigation-drawer></md-navigation-drawer>
        <md-navigation-tab>About</md-navigation-tab>
        <md-navigation-tab>Projects</md-navigation-tab>
        <md-navigation-tab>Links</md-navigation-tab>
      </md-navigation-bar>
      <md-outlined-button label="Back"></md-outlined-button>
      <md-filled-button label="Next"></md-filled-button>
      <md-slider></md-slider>
    `;
  }
}
