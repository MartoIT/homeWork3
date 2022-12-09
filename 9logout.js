import{logoutRequiest} from '../requests/logoutRequiest.js';
import {homeTemplate} from '../HTMLTamplets/homeTamplete.js';


export async function logoutView(ctx){
    const result = await logoutRequiest();
    ctx.render(homeTemplate());
    
}