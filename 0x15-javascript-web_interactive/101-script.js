document.addEventListener('DOMContentLoaded', () => {
  let items = ['Item'];
  const list = document.querySelector('ul.my_list');
  const addButton = document.querySelector('#add_item');
  const removeButton = document.querySelector('#remove_item');
  const clearButton = document.querySelector('#clear_list');

  function render() {
    list.textContent = '';
    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    });
  }

  addButton.addEventListener('click', () => {
    items.push('Item');
    render();
  });

  removeButton.addEventListener('click', () => {
    if (items.length > 0) {
      items.pop();
      render();
    }
  });

  clearButton.addEventListener('click', () => {
    items = [];
    render();
  });
});
