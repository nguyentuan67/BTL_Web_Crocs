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
    // console.log("Vua bam ra ngoai");
  }
}

// Sidebar: xoay 45 độ dấu cộng
const icon = document.querySelectorAll(".plus-icon-1");
// console.log(icon);
[...icon].forEach((currentIcon) => {
  let check = false;
  currentIcon.addEventListener("click", () => {
    currentIcon.classList.toggle("rotate");
    const ul =
      currentIcon.parentElement.parentElement.lastElementChild.lastElementChild;
    // console.log(ul);
    check = !check;
    check ? (ul.style.display = "flex") : (ul.style.display = "none");
  });
});

// scroll to top
const scrollToTopButton = document.getElementById("scroll-to-top");

function checkScroll() {
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", checkScroll);
scrollToTopButton.addEventListener("click", scrollToTop);
