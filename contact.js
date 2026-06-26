function Menu(e) {
  const list = document.querySelector("ul");

  if (e.name === "menu") {
    e.name = "close";
    list.classList.add("opacity-100");
    list.classList.add("top-[100px]");
  } else {
    e.name = "menu";
    list.classList.remove("opacity-100");
    list.classList.remove("top-[100px]");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

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

  // Only add form listener if form exists
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Client-side validation
      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const messageField = document.getElementById("message");

      const name = nameField ? nameField.value.trim() : "";
      const email = emailField ? emailField.value.trim() : "";
      const message = messageField ? messageField.value.trim() : "";

      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
      }

      // Show loading state
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Submit form to Web3Forms
      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("✓ Message sent successfully! I'll get back to you soon.");
            form.reset();
          } else {
            alert(
              "Error: Message failed to send. Please try again or email me directly.",
            );
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error sending message. Please try again.");
        })
        .finally(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // Handle click element if it exists
  const click = document.getElementById("click");
  if (click) {
    click.addEventListener("click", () => {
      document.location.pathname = "about.html";
    });
  }
});
