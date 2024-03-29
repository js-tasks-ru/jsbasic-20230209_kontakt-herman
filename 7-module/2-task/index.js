import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
  }

  render() {
    this.elem = createElement(`
    <div class="modal">
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
          </h3>
        </div>

        <div class="modal__body">
        </div>
      </div>

    </div>
    `);

    this.addEventListeners();
    this.close();
  }

  setTitle(arg) {
    let headElem = this.elem.querySelector('.modal__title');

    if(!isNaN(arg)) {
      headElem.textContent = 'Я главное модальное окно';
    }
    headElem.textContent = arg;
  }

  setBody(arg) {
    let bodyElem = this.elem.querySelector('.modal__body');
    let modalBody = arg.outerHTML;
    bodyElem.innerHTML = modalBody;
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this.elem);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.elem.remove()
  }

  addEventListeners() {
    let btnX = this.elem.querySelector('.modal__close');

    btnX.onclick = () => {
      document.body.classList.remove('is-modal-open');
      this.elem.remove()
    }

    document.body.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        document.body.classList.remove('is-modal-open');
        this.elem.remove()
      }
    })
  }
}
