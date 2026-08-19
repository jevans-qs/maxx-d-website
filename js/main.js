const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("nav-open");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen.toString()
        );

    });


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("nav-open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}
