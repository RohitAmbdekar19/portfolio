/* =====================================================
   MOBILE NAVIGATION
===================================================== */

function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();