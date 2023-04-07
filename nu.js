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
//
Array.from(document.getElementsByClassName("plus-icon-1")).forEach(
    (currentItem) => {
        currentItem.addEventListener("click", () => console.log("Click + "));
    }
);
// Sidebar: xoay 45 độ dấu cộng
const icon = document.querySelectorAll(".plus-icon-1");
[...icon].forEach((currentIcon) => {
    let check = false;
    currentIcon.addEventListener("click", () => {
        currentIcon.classList.toggle("rotate");
        const ul =
            currentIcon.parentElement.parentElement.lastElementChild
                .lastElementChild;
        console.log(ul);
        check = !check;
        check ? (ul.style.display = "flex") : (ul.style.display = "none");
    });
});

// const icon2 = document.querySelectorAll(".plus-icon-1");
// [...icon2].forEach((currentIcon) => {
//     let check = false;
//     currentIcon.addEventListener("click", () => {

//     });
// });

// Mo rong slidebar
// const expandable = document.querySelectorAll(".sidebar--option");
// console.log({ expandable });
// const ul = document.querySelectorAll(".sidebar--option ul");
// console.log({ ul });
// let check = false;
// [...expandable].forEach((currentItem) => {
//     currentItem.addEventListener("click", () => {
//         console.log(currentItem.lastElementChild.clientHeight);
//         currentItem.style.height =
//             currentItem.offsetHeight +
//             currentItem.lastElementChild.clientHeight +
//             "px";
//         check = true;
//     });

//     check == true ? currentItem.removeEventListener("click") : currentItem;
// });
