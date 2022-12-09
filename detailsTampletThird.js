import { html } from '../../node_modules/lit-html/lit-html.js';

export function detailsTamplete3(data) {
  const userId = sessionStorage.getItem('id');
  if (userId && data._ownerId !== userId) {
    return html`
    <div id="action-buttons">
      <a href="" id="apply-btn">Apply</a>
    </div>`

  }
}


