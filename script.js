const landingPage = document.getElementById("landing-page");
const mainWebsite = document.getElementById("main-website");
const revealBtn = document.getElementById("reveal-btn");
const music = document.getElementById("bg-music");

// Click button to reveal full website
revealBtn.addEventListener("click", () => {
    landingPage.style.display = "none";   // Hide landing page
    mainWebsite.classList.remove("hidden");  // Show main website

    // Start music
    music.muted = false;  
    music.play().catch((error) => console.log("Music autoplay error:", error));

    // Smooth scroll
    document.body.style.overflowY = "scroll";  
});

// // GSAP Animations
// gsap.from(".section", {
//     opacity: 0,
//     y: 50,
//     duration: 1.5,
//     stagger: 0.3,
//     ease: "power3.out",
//     scrollTrigger: {
//         trigger: ".section",
//         start: "top 80%",
//         end: "bottom 60%",
//         scrub: true
//     }
// });

// Select all sections
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            section.classList.add('active');
        }
    });
});
