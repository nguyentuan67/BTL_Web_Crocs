// Module 1: Ẩn phần nội dung mobile khi không phải màn điện thoại
const mobileHeaderElement = document.getElementById("responsive-mobile");
let breakpointSmall = 479;

function toggleMobileHeader() {
    !(window.innerWidth < breakpointSmall + 1)
        ? mobileHeaderElement.classList.add("hidden-mobile-hd")
        : mobileHeaderElement.classList.remove("hidden-mobile-hd");
}
toggleMobileHeader(); // Gọi khi tải trang
window.addEventListener("resize", toggleMobileHeader); // Gọi khi thay đổi kích thước giao diện

// Module 2: Tại giao diện điện thoại: Ẩn hiện navbar khi click vào icon Menu
const html = document.documentElement;
const navbar = document.getElementById("nav-mobile");
const toggleNavBtn = document.getElementById("toggle-nav-btn");

function handleClick(e) {
    toggleNavbarIcon(e);
    showNavbarMobile();
}

toggleNavBtn.addEventListener("click", handleClick);

function toggleNavbarIcon(e) {
    if (e.target.classList.contains("fa-bars")) {
        e.target.classList.remove("fa-bars");
        e.target.classList.add("fa-xmark");
    } else {
        e.target.classList.remove("fa-xmark");
        e.target.classList.add("fa-bars");
    }
}

function showNavbarMobile() {
    navbar.style.display !== "flex"
        ? (navbar.style.display = "flex")
        : (navbar.style.display = "none");
}
// Ẩn khi bấm ra ngoài
html.addEventListener("click", hideNavbar);
function hideNavbar(e) {
    if (
        navbar.style.display !== "none" &&
        !navbar.contains(e.target) &&
        !toggleNavBtn.contains(e.target)
    ) {
        navbar.style.display = "none";
        toggleNavBtn.classList.remove("fa-xmark");
        toggleNavBtn.classList.add("fa-bars");
        console.log("Vua bam ra ngoai");
    }
}

const cartBtn = document.querySelector(".cart-header-btn")
const cart = document.querySelector("#cart")
const closeCartBtn = document.querySelector(".cart_close")
const overlay = document.querySelector(".overlay")
cartBtn.addEventListener("click", () => {
    cart.classList.add("active")
    overlay.classList.add("active")
})
closeCartBtn.addEventListener("click", () => {
    cart.classList.remove("active")
    overlay.classList.remove("active")
})
overlay.addEventListener("click", () => {
    cart.classList.remove("active")
    overlay.classList.remove("active")
})