/*=========menu show==============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=========active and remove menu==============*/
const navLink = document.querySelectorAll('.nav_link')

function linkaction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=> n.addEventListener('click', linkaction))

/*=========scroll reveal animation==============*/


/*==========scroll home=============*/


/*=========scroll about==============*/


/*=========scroll skills==============*/


/*=========scroll work==============*/


/*=========scroll contact==============*/