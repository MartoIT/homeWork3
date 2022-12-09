

import page from '../../node_modules/page/page.mjs'

export async function createOffer(e) {
    e.preventDefault();
    const form = new FormData(e.target.parentElement);
    const title = form.get('title');
    const imageUrl = form.get('imageUrl');
    const category = form.get('category');
    const description = form.get('description');
    const requirements = form.get('requirements');
    const salary = form.get('salary');
    const token = sessionStorage.getItem('token')
    const data = {
        title,
        imageUrl,
        category,
        description,
        requirements,
        salary
    }
    try {
        if (title == '' || imageUrl == '' || category == '' || description == '' || requirements == '' || salary == '') {
            throw new Error('All fileds are requier!')
        }
        const response = await fetch('http://localhost:3030/data/offers', {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json',
                'X-Authorization': token
            },
            body: JSON.stringify(data)

        })
        if (response.ok != true) {
            const err = await response.json();
            throw new Error(err.message)
        }
        // const result = await response.json();
        // console.log(result)
        page.redirect('/dashboard')
       

    } catch (error) {
        alert(error.message)
    }


}

