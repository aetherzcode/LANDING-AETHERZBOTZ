console.log("made by AETHER (aetherz.xyz)");

setInterval(() => {
    console.log("made by AETHER (aetherz.xyz)");
}, 10000)

let nt = document.getElementById("toggler");
let nb = document.getElementById("navs");
let ld = document.getElementById("loading-box")
let body = document.querySelector("body");
let isnt = false;

function toggleNavbar(e) {

    if (isnt) {
        e.classList.remove("fa-times");
        e.classList.add("fa-bars");
        nb.classList.remove("on")
        body.classList.remove("on")
        isnt = false;
    } else if (!isnt) {
        e.classList.add("fa-times");
        e.classList.remove("fa-bars");
        nb.classList.add("on")
        body.classList.add("on")
        isnt = true;
    }

}

window.onload = () => {
    setTimeout(() => {
        ld.classList.add("off");
        body.classList.remove("on")
    }, 1510);
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Menutup sidebar saat mengklik di luar sidebar
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const toggler = document.querySelector(".navbar-toggler");

    // Jika klik di luar sidebar dan tombol toggler, tutup sidebar
    if (!sidebar.contains(event.target) && !toggler.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

// Menutup sidebar saat mengklik item menu
const menuItems = document.querySelectorAll(".sidebar-menu li a");
menuItems.forEach(item => {
    item.addEventListener("click", function() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("active");
    });
});