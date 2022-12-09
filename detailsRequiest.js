import { detailsTamplete } from '../HTMLTamplets/detailsTamplet.js';
import { myrender } from '../app.js';
import { detailsTamplete2 } from '../HTMLTamplets/detailsTampletSecond.js'
import { detailsTamplete3 } from '../HTMLTamplets/detailsTampletThird.js'

export async function details(e) {
    e.preventDefault();
    const target = e.target
    const currentId = target.id
    const response = await fetch(`http://localhost:3030/data/offers/${currentId}`)
    const result = await response.json();
    const tag = detailsTamplete3(result);
    const div = detailsTamplete2(result, tag);
    const htmlData = detailsTamplete(result, div, tag);
   
    myrender(htmlData)
}