const cartBtn = document.querySelector(".cart-header-btn");
const cart = document.querySelector("#cart");
const closeCartBtn = document.querySelector(".cart_close");
const overlay = document.querySelector(".overlay");
cartBtn.addEventListener("click", () => {
    cart.classList.add("active");
    overlay.classList.add("active");
});
closeCartBtn.addEventListener("click", () => {
    cart.classList.remove("active");
    overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
    cart.classList.remove("active");
    overlay.classList.remove("active");
});
