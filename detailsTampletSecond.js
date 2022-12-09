import { html } from '../../node_modules/lit-html/lit-html.js';
import { editRquiest } from '../requests/editRequiest.js';
import {dell} from '../requests/deleteRequiest.js'
//import { editRquiest } from '../requests/editRequiest.js';
// import { editTamplete } from '../HTMLTamplets/editTamplete.js';


export function detailsTamplete2(data) {
  const userId = sessionStorage.getItem('id');
  if (data._ownerId === userId) {
    return html`
    <div id="action-buttons">
      <a href="" id="edit-btn" name="${JSON.stringify(data)}" @click="${editRquiest}" >Edit</a>
      <a href="" id="delete-btn" name="${data._id}" @click="${dell}">Delete</a>
    </div>
    `
  }

}


