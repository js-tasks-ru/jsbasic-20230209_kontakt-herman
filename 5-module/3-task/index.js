function initCarousel() {
  const container = document.querySelector('.container');
  const carouselInner = document.body.querySelector('.carousel__inner');
  const slides = document.body.querySelectorAll('.carousel__slide');
  const arrowRight = document.body.querySelector('.carousel__arrow_right');
  const arrowLeft = document.body.querySelector('.carousel__arrow_left');

  let currentSlide = 0;
  let slideWidth = slides[0].offsetWidth;

  arrowLeft.style.display = 'none';
  arrowRight.firstElementChild.setAttribute('id', 'right');

  function slideRight() {
    currentSlide++;
    carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    if(currentSlide === slides.length - 1) {
      arrowRight.style.display = 'none';
    }
      arrowLeft.style.display = '';
  }

  function slideLeft() {
    currentSlide--;
    carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    if(currentSlide === 0) {
      arrowLeft.style.display = 'none';
    }
      arrowRight.style.display = '';
  }

  container.addEventListener('click', (event)=> {
    let next = event.target.closest('.carousel__arrow_right');
    let prev = event.target.closest('.carousel__arrow_left');
    if(next) {
      slideRight();
    }
    if(prev) {
      slideLeft();
    }
  })
}
