//
//
document.addEventListener("DOMContentLoaded", function () {
  const text = "I'm a Frontend Developer";
  const speed = 70; // Adjust speed of typing here (milliseconds)
  let i = 0;
  const typewriter = document.getElementById("typewriter");

  function typeText() {
    if (typewriter && i < text.length) {
      typewriter.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeText, speed);
    } else if (typewriter) {
      // Once typing is done, hide the blinking cursor
      setTimeout(() => {
        typewriter.classList.add("hideBlink"); // Apply the class to hide the cursor
      }, 500); // Delay slightly after finishing typing before hiding the cursor
    }
  }

  // Only start typing if element exists
  if (typewriter) {
    typeText();
  }

  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

    // Close menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});
