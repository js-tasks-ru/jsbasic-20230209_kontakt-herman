import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this.currentIndex = 0;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner"></div>
      </div>
    `);

    let slides = this.slides.map(item => createElement(`
      <div class="carousel__slide" data-id="${item.id}">
        <img src="/assets/images/carousel/${item.image}" 
        class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `));

    this.sub('inner').append(...slides);

    this.update();
  }

  addEventListeners() {
    this.elem.onclick = ({target}) => {
      let button = target.closest('.carousel__button');
      if(button) {
        let id = target.closest('[data-id]').dataset.id;

        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }));
      }

      if(target.closest('.carousel__arrow_right')) {
        this.next();
      }

      if(target.closest('.carousel__arrow_left')) {
        this.prev();
      }
    };
  }

  sub(ref) {
    return this.elem.querySelector(`.carousel__${ref}`);
  }

  next() {
    this.currentIndex++;
    this.update();
  }

  prev() {
    this.currentIndex--;
    this.update();
  }

  update() {
    let offset = -this.elem.offsetWidth * this.currentIndex;
    this.sub('inner').style.transform = `translateX(${offset}px)`;

    if(this.currentIndex == this.slides.length - 1) {
      this.sub('arrow_right').style.display = 'none';
    }else {
      this.sub('arrow_right').style.display = '';
    }

    if(this.currentIndex == 0) {
      this.sub('arrow_left').style.display = 'none';
    }else{
      this.sub('arrow_left').style.display = '';
    }
  }

}
