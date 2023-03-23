/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem;
    this.render();
  }

  render() {
    const table = document.createElement('table');
    const thead = this.createHeder();
    const tbody = this.createBody();
    table.append(thead);
    table.append(tbody);
    this.elem = table;
  }

  createHeder() {
    let createHead = document.createElement('thead');
    let tr = document.createElement('tr');
    const headers = ['Имя', 'Возраст', 'Зарплата', 'Город', ''];
    
    for (let header of headers) {
      tr.innerHTML += `<th>${header}</th>`;
    }
    createHead.append(tr);
    return createHead;
  }

  createBody() {
    let createBody = document.createElement('tbody');

    for (let item of this.rows) {
      let tableRow = document.createElement('tr');
      let lengthItems = Object.keys(item).length;
      let obj = Object.values(item)

      for (let i = 0; i < lengthItems; i++) {
        tableRow.innerHTML += `
          <td>${obj[i]}</td>
        `
      }

      let td = document.createElement('td');
      let remoweBtn = document.createElement('button');
      remoweBtn.textContent = 'x';
      
      remoweBtn.addEventListener('click', ()=> {
        tableRow.remove();
      })

      td.append(remoweBtn);
      tableRow.appendChild(td);


      createBody.append(tableRow);
    }

    return createBody
  }


}
