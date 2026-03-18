import { LitElement } from 'lit';
import styles from './cfpb-flag-usa.component.scss';

/**
 * @element cfpb-flag-usa
 */
export class CfpbFlagUsa extends LitElement {
  static styles = styles;

  static init() {
    window.customElements.get('cfpb-flag-usa') ||
      window.customElements.define('cfpb-flag-usa', CfpbFlagUsa);
  }
}
