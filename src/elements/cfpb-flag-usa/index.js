import { html, LitElement } from 'lit';
import styles from './cfpb-flag-usa.component.scss';

/**
 * @element cfpb-flag-usa
 */
export class CfpbFlagUsa extends LitElement {
  static styles = styles;

  render() {
    return html` <span class="u-usa-flag"> </span> `;
  }

  static init() {
    window.customElements.get('cfpb-flag-usa') ||
      window.customElements.define('cfpb-flag-usa', CfpbFlagUsa);
  }
}
