/*=============== SHOW MENU ===============*/

const navMenu = document.querySelector('.nav_menu'),

navToggle = document.querySelector('.nav_toggle'),

navClose = document.querySelector('.nav_close')

/*===== MENU SHOW =====*/

/* Validate if constant exists */

if(navToggle){

    navToggle.addEventListener('click', function() {

        navMenu.classList.add('show_menu')

    });
}

/*===== MENU HIDDEN =====*/

/* Validate if constant exists */

if(navClose){

    navClose.addEventListener('click', function(){

        navMenu.classList.remove('show_menu')

    });
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){

    const navMenu = document.querySelector('.nav_menu')

    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show_menu')

}

navLink.forEach(n => n.addEventListener('click', linkAction))


/* 

for( i =0; i<navLink.length; i++){      // each yerine for ile de yapabiliriz.(navlink'de gezinme işleminde)

    navLink[i].addEventListener("click" , linkAction)   
} 

*/



/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){

    const header = document.querySelector('.header')

    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll_header'); else header.classList.remove('scroll_header')

}

window.addEventListener('scroll', scrollHeader)



/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp(){

    const scrollUp = document.getElementById('scrollup');

    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show_scroll'); else scrollUp.classList.remove('show_scroll');
}

window.addEventListener('scroll', scrollUp)




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){

    const scrollY = window.pageYOffset

    sections.forEach(current =>{

        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }

        else{

            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link') 
        }
    })
}

window.addEventListener('scroll', scrollActive)