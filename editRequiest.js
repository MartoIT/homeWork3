import { editTamplete } from '../HTMLTamplets/editTamplete.js';
import {myrender} from '../app.js'


export async function editRquiest(e) {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    const target = e.target;
    const data = JSON.parse(target.getAttribute('name'));
    console.log(data);
    const htmlPatern =  editTamplete(data);
    myrender(htmlPatern);
    
} 