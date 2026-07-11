/*=========================================
        CONTACT PAGE JAVASCRIPT
=========================================*/

const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const subjectInput = document.getElementById("subject");

const messageInput = document.getElementById("message");

/*=========================================
        FORM VALIDATION
=========================================*/

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  const email = emailInput.value.trim();

  const subject = subjectInput.value.trim();

  const message = messageInput.value.trim();

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill in all fields.");

    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");

    return;
  }

  alert("Message sent successfully!");

  contactForm.reset();
});

/*=========================================
        SCROLL REVEAL
=========================================*/

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

/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

/*=========================================
        FOOTER YEAR
=========================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {
  copyright.innerHTML = `© ${new Date().getFullYear()} Oparinde Oluwajoba. All Rights Reserved.`;
}

/*=========================================
        SOCIAL ICON HOVER
=========================================*/

const socialIcons = document.querySelectorAll(".socials a");

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "translateY(-6px) scale(1.1)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "translateY(0) scale(1)";
  });
});

console.log("Contact page loaded successfully!");
