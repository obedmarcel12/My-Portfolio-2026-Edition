document.addEventListener("DOMContentLoaded", function () {
  // Text for the typewriter effect
  const text = `I Create Websites,\n and I'm A Frontend Developer`;

  const speed = 40; // Typing speed in milliseconds
  let i = 0; // Counter to track current character
  const typewriterHeading = document.getElementById("typewriter-heading");

  function typeText() {
    if (typewriterHeading && i < text.length) {
      // Handle line breaks (\n) and regular characters
      typewriterHeading.innerHTML +=
        text.charAt(i) === "\n" ? "<br/>" : text.charAt(i);
      i++;
      setTimeout(typeText, speed); // Delay before typing the next character
    } else if (typewriterHeading) {
      // Once typing is done, hide the blinking cursor
      setTimeout(() => {
        typewriterHeading.classList.add("hideBlink"); // Apply the class to hide the cursor
      }, 500); // Delay slightly after finishing typing before hiding the cursor
    }
  }

  // Only start typing if element exists
  if (typewriterHeading) {
    typeText(); // Start typing effect when the page loads
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

//

// Simulate typewriter effect (if you're using this approach)
document.addEventListener("DOMContentLoaded", function () {
  const text2 = "You can download my CV by clicking the button below:";
  let index2 = 0;
  const speed2 = 100; // Speed of typing
  const heading = document.getElementById("typeText");

  function typeWriter() {
    if (heading && index2 < text2.length) {
      heading.textContent += text2.charAt(index2);
      index2++;
      setTimeout(typeWriter, speed2);
    } else if (heading) {
      // Once typing finishes, hide the blinking cursor
      heading.classList.add("BlinkHidden");
    }
  }

  // Start the typing animation only if element exists
  if (heading) {
    typeWriter();
  }
});
