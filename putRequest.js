import page from '../../node_modules/page/page.mjs';

export async function putRequiest(e) {
    e.preventDefault();
    const target = e.target;
    const form = new FormData(e.target.parentElement);
    const id = target.getAttribute('name');
    const title = form.get('title')
    const imageUrl = form.get('imageUrl')
    const category = form.get('category')
    const description = form.get('description')
    const requirements = form.get('requirements')
    const salary = form.get('salary')
   
    const data = {
        title,
        imageUrl,
        category,
        description,
        requirements,
        salary
    }
    const token = sessionStorage.getItem('token')

    const response = await fetch(`http://localhost:3030/data/offers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'aplication/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    page.redirect('/dashboard');

}