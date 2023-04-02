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
const navbar = document.getElementById("navbar-mobile");
const toggleNavBtn = document.getElementById("toggle-nav-btn");

function toggleNavbar(e) {
    // navbar.classList.toggle("active");
    if (e.target.classList.contains("fa-bars")) {
        e.target.classList.remove("fa-bars");
        e.target.classList.add("fa-xmark");
    } else {
        e.target.classList.remove("fa-xmark");
        e.target.classList.add("fa-bars");
    }
    console.log("akdfhkfdh");
}

function hideNavbar(e) {
    if (!navbar.contains(e.target) && navbar.classList.contains("active")) {
        navbar.classList.remove("active");
    }
}
toggleNavBtn.addEventListener("click", toggleNavbar);
html.addEventListener("click", hideNavbar);
