const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

window.addEventListener("hashchange", replaceContent);
function replaceContent() {
  let current = document.getElementsByClassName("active");

  if (!!current[0]) {
    current[0].className = current[0]?.className.replace(" active", "");
  }
  document
    .getElementById(window.location.hash.replace("#", "") + "-menu")
    ?.classList.add("active");

  switch (window.location.hash) {
    case "":
      $("#content").load("html/home.html");
      document.title = "ML Strength";
      document.getElementById("home-menu")?.classList.add("active");
      break;

    case "#about":
      $("#content").load("html/about.html");
      document.title = "About | ML Strength";
      break;

    case "#services":
      $("#content").load("html/services.html");
      document.title = "Services | ML Strength";
      break;

    case "#membership":
      $("#content").load("html/membership.html");
      document.title = "Membership | ML Strength";
      break;

    case "#contact":
      $("#content").load("html/contact.html");
      document.title = "Contact | ML Strength";
      break;

    default:
      break;
  }
}

function validatePhoneAndEmail() {
  (function () {
    var a = document.getElementById("phone");
    if (a) {
      // Javascript validation for phone and email
      var phoneInput = document.getElementById("phone");
      var errorDivPhone = document.getElementById("phone-error");

      var emailInput = document.getElementById("email");
      var errorDivEmail = document.getElementById("email-error");

      phoneInput?.addEventListener("input", function (event) {
        errorDivPhone.style.display = phoneInput.validity.patternMismatch
          ? "block"
          : "none";
      });

      emailInput?.addEventListener("input", function (event) {
        errorDivEmail.style.display = emailInput.validity.patternMismatch
          ? "block"
          : "none";
      });
    } else {
      setTimeout(arguments.callee, 1000);
    }
  })();
}

window.onload = function () {
  replaceContent();
  validatePhoneAndEmail();
};
