const navBarUser = document.querySelector('.user')
const navBarGuest = document.querySelector('.guest')

export function navBar(){
    const token = sessionStorage.getItem('token')
    if(token == undefined){
        return navBarGuest
    }

    return navBarUser

}