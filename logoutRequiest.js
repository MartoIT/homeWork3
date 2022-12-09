import { navBar } from '../views/8navBar.js'

export async function logoutRequiest(e) {
    const token = sessionStorage.getItem('token')
    const response = await fetch(`http://localhost:3030/users/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
            'X-Authorization': token
        }
    })
    if (response.status == 204) {
        sessionStorage.clear()
        const nav = document.querySelector('nav');
        nav.querySelector('.user').remove();
        nav.appendChild(navBar());
    }
}