function toggleText() {
  const toggleBtn = document.body.querySelector('.toggle-text-button');
  const elem = document.getElementById('text')

  toggleBtn.onclick = () => elem.hidden = !elem.hidden;
}
