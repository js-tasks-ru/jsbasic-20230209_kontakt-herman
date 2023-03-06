function highlight(table) {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const row = rows;
    const userAge = row[i].cells[1].textContent;
    const userGender = row[i].cells[2].textContent;
    const userStatus = row[i].cells[3].getAttribute('data-available');

    if (userAge <= 18) row[i].style.textDecoration = 'line-through';
    
    if (userGender === 'm') {
      row[i].classList.add('male');
    } else if (userGender === 'f') {
      row[i].classList.add('female');
    }

    if (userStatus === 'true') {
      row[i].classList.add('available');
    } else if (userStatus === 'false') {
      row[i].classList.add('unavailable');
    } else {
      row[i].hidden = true;
    }
  }
}
