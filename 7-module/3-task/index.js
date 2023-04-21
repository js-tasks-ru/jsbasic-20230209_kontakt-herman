import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
      <div class="slider">
        <div class="slider">

          <div class="slider__thumb" style="left: 50%;">
            <span class="slider__value">${this.value}</span>
          </div>

          <div class="slider__progress" style="width: 50%;"></div>

          <div class="slider__steps">
          </div>
        </div>
      <div>
    `)
    
    let sliderStepsEl = this.elem.querySelector('.slider__steps');
    
    for (let i = 0; i < this.steps; i++) {
      sliderStepsEl.innerHTML += `<span id=${i}></span>`
    }

    let firstStep = Array.from(this.elem.querySelectorAll('span'));
    firstStep[1].classList.add('slider__step-active');
  }

  addEventListeners() {
    let slider = this.elem.querySelector('.slider');
    let sliderValue = this.elem.querySelector('.slider__value');
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    let stepsElems = Array.from(this.elem.querySelectorAll('.slider__steps span'));

    slider.addEventListener('click', (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);

      this.value = value;
      sliderValue.textContent = this.value;

      console.log(stepsElems);

      stepsElems.forEach((step, index) => {
        if (index === value) {
          step.classList.add('slider__step-active');
        } else {
          step.classList.remove('slider__step-active');
        }
      });

      let leftPercents = value / segments * 100;
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      this.elem.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      }))
    
    })

  }
}
