
import './styles/main.scss'


const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navigation");
    const navlinks = document.querySelectorAll('.mobile li')
    //toggle nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('navigation-active');

        navlinks.forEach((link, index) => {
            // console.log(index)
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }

        });
        // burger animation

        burger.classList.toggle('toggle')

    });
}
navSlide();

const socialNav = () => {
    const socialString = document.querySelector(".social");
    const navSocial = document.querySelector(".social-icons");
    const icons = document.querySelectorAll(".icons a i");


    socialString.addEventListener('click', () => {
        navSocial.classList.toggle('social-active');

        icons.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';

            } else {
                link.style.animation = `navFadeSocial .5s ease forwards ${index / 7 + 0.4}s`;
            }
        })

        // socialString.classList.toggle('toggle');

    });
}
socialNav();