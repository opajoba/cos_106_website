/* ==========================================
   PROJECTS PAGE JAVASCRIPT
   Oparinde Oluwajoba Portfolio
========================================== */

/* ==============================
   FILTER PROJECTS
============================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const noResults = document.getElementById("no-results");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class
    button.classList.add("active");

    const filter = button.dataset.filter;

    let visibleProjects = 0;

    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.style.display = "block";
        visibleProjects++;
      } else {
        card.style.display = "none";
      }
    });

    // Show message if nothing matches
    if (visibleProjects === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  });
});

/* ==============================
   SCROLL REVEAL
============================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

hiddenElements.forEach((element) => {
  observer.observe(element);
});

/* ==============================
   PROJECT BUTTON
============================== */

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    alert("Project preview coming soon!");
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
   ACTIVE NAVIGATION
============================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

/* ==============================
   CONSOLE MESSAGE
============================== */

console.log("Projects page loaded successfully!");
