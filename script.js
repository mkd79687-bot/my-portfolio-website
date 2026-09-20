// ==========================================
// MANISH KUMAR DAS - PORTFOLIO JAVASCRIPT
// ==========================================


// ------------------------------------------
// 1. MOBILE MENU
// ------------------------------------------

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

}


// ------------------------------------------
// 2. CLOSE MOBILE MENU AFTER CLICKING LINK
// ------------------------------------------

if (navLinks) {

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });

    });

}


// ------------------------------------------
// 3. CURRENT YEAR IN FOOTER
// ------------------------------------------

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ------------------------------------------
// 4. HEADER EFFECT WHEN SCROLLING
// ------------------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ------------------------------------------
// 5. ACTIVE NAVIGATION LINK
// ------------------------------------------

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);


// ------------------------------------------
// 6. SMOOTH SCROLLING
// ------------------------------------------

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ------------------------------------------
// 7. ESCAPE KEY CLOSES MOBILE MENU
// ------------------------------------------

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    }

});


// ------------------------------------------
// 8. BUTTON CLICK EFFECT
// ------------------------------------------

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.96)";

        setTimeout(function () {
            button.style.transform = "";
        }, 120);

    });

});


// ------------------------------------------
// 9. START ACTIVE NAVIGATION
// ------------------------------------------

updateActiveNavigation();