function makeFriendsList(friends) {
  if (!friends) throw new Error('no argument passed');
  const ul = document.createElement('ul');

  for (let element of friends) {
    ul.innerHTML += `<li>${element.firstName} ${element.lastName}</li>`
  }

  return ul;
}