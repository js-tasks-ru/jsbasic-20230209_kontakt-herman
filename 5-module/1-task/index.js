function hideSelf() {
  elem = document.body.querySelector('.hide-self-button');

  function hideElem() {
    elem.hidden = true;
  }

  elem.addEventListener('click', hideElem);
}
