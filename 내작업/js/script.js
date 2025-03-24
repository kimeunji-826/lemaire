document.addEventListener(`DOMContentLoaded`, function () {
  const menuWoman = document.querySelector(`.menu1`);
  menuWoman.addEventListener(`mouseenter`, function () {
    this.classList.toggle(`open`);
  });
});
