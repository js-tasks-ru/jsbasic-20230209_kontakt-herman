import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
      <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <div class="ribbon__inner"></div>

      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      </div>
    `);

    let ribbonItems = this.categories.map(item => createElement(`
      <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
    `))

    let arrowRight = this.elem.querySelector('.ribbon__arrow_right');
    let arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let ribbon = this.elem.querySelector('.ribbon__inner');
    ribbon.append(...ribbonItems);

    this.update(arrowRight, arrowLeft, ribbon, ribbonItems);
  }

  addEventListeners() {
    let ribbon = this.elem.querySelector('.ribbon__inner');

    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.ribbon__arrow_right')) {
        ribbon.scrollBy(350, 0);
      }
      if (event.target.closest('.ribbon__arrow_left')) {
        ribbon.scrollBy(-350, 0);
      }
    })


  }

  update(arrowRight, arrowLeft, ribbon, ribbonItems) {
    let right = arrowRight;
    let left = arrowLeft;
    let elem = ribbon;
    let ribbonItem = ribbonItems;

    ribbonItem.map(item => item.addEventListener('click', (event) => {
      event.preventDefault();
      let activeItem = this.elem.querySelector('.ribbon__item_active');
      if (activeItem) activeItem.classList.remove('ribbon__item_active');
      item.classList.add('ribbon__item_active');

      let categoryId = item.getAttribute('data-id');
      this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
        detail: categoryId,
        bubbles: true
      }));
    }));

    elem.addEventListener('scroll', () => {
      let scrollWidth = elem.scrollWidth;
      let scrollLeft = elem.scrollLeft;
      let clientWidth = elem.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft > 0) {
        left.classList.add('ribbon__arrow_visible');
      } else {
        left.classList.remove('ribbon__arrow_visible');
      }

      if (scrollRight === 0) {
        right.classList.remove('ribbon__arrow_visible');
      } else {
        right.classList.add('ribbon__arrow_visible');
      }
    });
  }

}
