let slide = {
    "tags": [
      "swiper"
    ],
    "name": "Swiper - Effect coverflow",
    "dependencies": {
      "swiper": "latest",
      "parcel-bundler": "^1.6.1"
    }
}

const intro = document.getElementsByClassName('intro')[0];
const pinkEl = document.getElementsByClassName('pinks')[0];
const mouseEl = document.getElementsByClassName('mouseover')[0];

pinkEl.addEventListener('click', function(event) {
    if(event.target.className == 'pink-square') {
        intro.style.backgroundColor = 'black';
        intro.style.color = 'white';
    }else if(event.target.className == 'pink-square sec') {
        intro.style.backgroundColor = 'blueviolet';
        intro.style.color = 'white';
    }else if(event.target.className == 'pink-square thir') {
        intro.style.backgroundColor = '#F2F0FF';
        intro.style.color = 'black';
    };
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});