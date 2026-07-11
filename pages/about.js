/* ==========================================
   ABOUT PAGE JAVASCRIPT
   Oparinde Oluwajoba Portfolio
========================================== */

/* ==============================
   SCROLL REVEAL ANIMATION
============================== */

const hiddenElements = document.querySelectorAll(".hidden");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

hiddenElements.forEach((element) => {
  revealObserver.observe(element);
});

/* ==============================
   SKILL BAR ANIMATION
============================== */

const skillBars = document.querySelectorAll(".fill");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;

        const width = bar.dataset.width;

        bar.style.width = width;

        skillObserver.unobserve(bar);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

skillBars.forEach((bar) => {
  bar.style.width = "0";

  skillObserver.observe(bar);
});

/* ==============================
   COUNTER ANIMATION
============================== */

const counters = document.querySelectorAll(".stat h2");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;

        const target = Number(counter.innerText);

        let count = 0;

        const speed = Math.max(1, Math.floor(target / 60));

        function updateCounter() {
          if (count < target) {
            count += speed;

            if (count > target) {
              count = target;
            }

            counter.innerText = count;

            requestAnimationFrame(updateCounter);
          }
        }

        updateCounter();

        counterObserver.unobserve(counter);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/* ==============================
   ACTIVE NAVIGATION LINK
============================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

/* ==============================
   PROFILE IMAGE EFFECT
============================== */

const profileImage = document.querySelector(".profile-image img");

if (profileImage) {
  profileImage.addEventListener("mouseenter", () => {
    profileImage.style.transform = "scale(1.05) rotate(-2deg)";
  });

  profileImage.addEventListener("mouseleave", () => {
    profileImage.style.transform = "scale(1) rotate(0deg)";
  });
}

/* ==============================
   HOBBY CARD HOVER EFFECT
============================== */

const hobbyCards = document.querySelectorAll(".card");

hobbyCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "0.3s";

    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

/* ==============================
   RESUME BUTTON EFFECT
============================== */

const resumeButton = document.querySelector(".resume-btn");

if (resumeButton) {
  resumeButton.addEventListener("click", (event) => {
    event.preventDefault();

    alert("Resume download will be available soon!");
  });
}

/* ==============================
   SMOOTH SCROLL
============================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/* ==============================
   FOOTER YEAR
============================== */

const copyright = document.querySelector(".copyright");

if (copyright) {
  const year = new Date().getFullYear();

  copyright.innerHTML = `© ${year} Oparinde Oluwajoba. All Rights Reserved.`;
}

/* ==============================
   CONSOLE MESSAGE
============================== */

console.log("About page loaded successfully!");
