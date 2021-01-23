const displayMenu = function () {
  const mainContainer = document.querySelector('.main-container');

  const menuHeader = document.createElement('div');
  menuHeader.classList.toggle('menu-header');
  const menuHeaderText = document.createElement('p');
  menuHeaderText.classList.toggle('menu-header-text');
  const menuHeaderInnerText = document.createTextNode('Menu');

  menuHeaderText.appendChild(menuHeaderInnerText);
  menuHeader.appendChild(menuHeaderText);
  mainContainer.appendChild(menuHeader);

  const foodHeaders = ['Sushi', 'Ramen', 'Dessert', 'Drinks'];

  const sushiFood = [
    'Dragonfly - $14',
    'Shrimp Tempura - $10',
    'Spider Roll - $12',
  ];

  const ramenFood = [
    'Signature Tonkotsu - $13',
    'Shio Ramen - $11',
    'Miso Ramen - $12',
  ];

  const dessertFood = [
    'Mochi - $3',
    'Matcha Ice Cream - $6',
    'Castella - $8',
  ];

  const drinksFood = [
    'Hakatsuru - $5',
    'Plum Wine - $7',
    'Iced Hibiscus Tea - $3',
  ];

  const foodNames = [sushiFood, ramenFood, dessertFood, drinksFood];
  displayMenuRows(mainContainer, foodHeaders, foodNames);

  const footer = document.createElement('div');
  footer.classList.toggle('menu-footer');

  mainContainer.appendChild(footer);
};

const displayMenuRows = function (mainContainer, headers, foods) {
  for (let i = 0; i < headers.length; i += 2) {
    const menuRow = document.createElement('div');
    menuRow.classList.toggle('menu-row');
    for (let j = 0; j < 2; j++) {
      const foodList = displayMenuList(headers[i + j], foods[i + j]);
      menuRow.appendChild(foodList);
    }
    mainContainer.appendChild(menuRow);
  }
};

const displayMenuList = function (header, foods) {
  const menuList = document.createElement('ul');
  const foodHeader = document.createElement('li');
  foodHeader.classList.toggle('menu-header');
  const foodHeaderText = document.createTextNode(header);
  foodHeader.appendChild(foodHeaderText);
  menuList.appendChild(foodHeader);

  foods.forEach((item) => {
    const foodTitle = document.createElement('li');
    foodTitle.classList.toggle('entry');
    const foodText = document.createTextNode(item);
    foodTitle.appendChild(foodText);

    const description = document.createElement('li');
    description.classList.toggle('description');
    const fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue mattis nunc ac malesuada. Quisque et augue non ex ullamcorper pellentesque eu nec purus.';
    const descriptionText = document.createTextNode(fillerText);
    description.appendChild(descriptionText);

    menuList.appendChild(foodTitle);
    menuList.appendChild(description);
  });

  return menuList;
};

export default displayMenu;
