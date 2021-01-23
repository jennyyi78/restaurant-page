const clearPage = function () {
  const mainContainer = document.querySelector('.main-container');
  while (mainContainer.children.length > 1) {
    mainContainer.removeChild(mainContainer.lastChild);
  }
};

export default clearPage;
