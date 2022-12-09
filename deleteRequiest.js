import page from '../../node_modules/page/page.mjs';

export async function dell(e){
    e.preventDefault();
    const target = e.target
    const id = target.getAttribute('name');
    console.log('tuk')
    console.log(id)
    const token = sessionStorage.getItem('token')
    const response = await fetch(`http://localhost:3030/data/offers/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'aplication/json',
            'X-Authorization': token
        },
    });

    const result = await response.json();
    page.redirect('/dashboard');
}