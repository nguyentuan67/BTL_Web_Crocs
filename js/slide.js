window.onload = function () {
  const cardWidth = document.querySelector('.product-card').offsetWidth;
  const silderWrap = document.querySelector(".slider-wrap");
  const lastChildAppend = document.querySelector(".product-card:last-child");
  silderWrap.prepend(lastChildAppend);
  document.querySelectorAll(".product-card").forEach(function(productCard) {
    productCard.style.left = -cardWidth + 'px';
  });
  document.querySelector('#next-arrow').addEventListener('click',function () {
    const firstChildAppend = document.querySelector(".product-card:first-child");
    document.querySelectorAll(".product-card").forEach(function(productCard) {
      productCard.animate(
        [
          { left: -2 * cardWidth + 'px' },
        ],
        { duration: 300, easing: 'ease-in-out' },
      ).onfinish = function() {
        silderWrap.appendChild(firstChildAppend);
      };
    });
  });
  document.querySelector('#prev-arrow').addEventListener('click',function () {
    const lastChildAppend = document.querySelector(".product-card:last-child");
    document.querySelectorAll(".product-card").forEach(function(productCard) {
      productCard.animate(
        [
          { left: '0' },
        ],
        { duration: 300, easing: 'ease-in-out' }
      ).onfinish = function() {
        silderWrap.prepend(lastChildAppend);
      };
    });
  });
};

