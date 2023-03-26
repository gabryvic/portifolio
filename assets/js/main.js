/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav--menu');
navOpen = document.getElementById('nav--abre'); 
navClose = document.getElementById('nav--fecha')

if(navOpen){
    navOpen.addEventListener('click', () =>{
        navMenu.classList.add('mostrar-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('mostrar-menu')
    })
}

/*=============== exp ===============*/

/*swiperss projects*/

let swiperProject = new Swiper(".projetos-container", {
    css: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView:2,
          spaceBetween: 50,
        },

        
      },
  });

  const scroll = () =>{
    const scroll = document.getElementById('scroll-cima')
    this.scrollY >= 360 ? scroll.classList.add('mostrar-scroll')
                : scroll.classList.remove('mostrar-scroll')
  }

  window.addEventListener('scroll', scroll)

  