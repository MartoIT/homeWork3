import { html } from '../../node_modules/lit-html/lit-html.js';

export function detailsTamplete(data, div, tag) {

  return html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${data.imageUrl}" alt="example1" />
    <p id="details-title">${data.title}</p>
    <p id="details-category">
      Category: <span id="categories">${data.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${data.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${data.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${data.requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">1</strong></p>
    
    <!--Edit and Delete are only for creator-->
    ${div}
    ${tag}
    
  </div>
</section>`
 

}


