/* ===========================
   Typing Animation
=========================== */

const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "React Developer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
    } else {

        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === current.length + 1) {

        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);

}

typeEffect();


/* ===========================
   Dark / Light Mode
=========================== */

const themeBtn = document.querySelector(".theme");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.className = "fa-solid fa-sun";

    } else {

        icon.className = "fa-solid fa-moon";

    }

};


/* ===========================
   Scroll To Top
=========================== */

const topBtn = document.getElementById("top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


/* ===========================
   Active Navbar
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===========================
   Scroll Reveal Animation
=========================== */

const revealItems = document.querySelectorAll(
    ".card,.project,.glass-card,.contact-box div,.glass"
);

function reveal() {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(80px)";
    item.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);

reveal();


/* ===========================
   Counter Animation
=========================== */

const counters = document.querySelectorAll(".counter h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const update = () => {

        if (count < target) {

            count++;

            counter.innerText = count + "+";

            requestAnimationFrame(update);

        } else {

            if (target === 100) {

                counter.innerText = "100%";

            }

        }

    };

    update();

});


/* ===========================
   Floating Mouse Effect
=========================== */

document.addEventListener("mousemove", e => {

    document.querySelectorAll(".floating").forEach(icon => {

        const speed = 20;

        const x = (window.innerWidth - e.pageX * speed) / 1000;

        const y = (window.innerHeight - e.pageY * speed) / 1000;

        icon.style.transform =
            `translate(${x}px, ${y}px)`;

    });

});


/* ===========================
   Smooth Anchor Scroll
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ===========================
   Hero Fade Effect
=========================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    const value = window.scrollY;

    hero.style.opacity = 1 - value / 700;

});


/* ===========================
   Console Message
=========================== */

console.log("%cWelcome To Beauty Akter Portfolio",
    "color:#00e5ff;font-size:22px;font-weight:bold;");