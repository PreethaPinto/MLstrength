
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
    
    document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));


  window.addEventListener('hashchange',replaceContent );
  function replaceContent() {
    switch (window.location.hash) {

      case '':
        $("#content").load("html/home.html");
            document.title = 'ML Strength';

      break;      
        
      case '#about':
        $("#content").load("html/about.html");
            document.title = 'About | ML Strength';
        
        break;

        case '#services':
          $("#content").load("html/services.html");
            document.title = 'Services | ML Strength';
        
        break;

        case '#membership':
          $("#content").load("html/membership.html");
            document.title = 'Membership | ML Strength';
        
        break;

        case '#contact':
          $("#content").load("html/contact.html");
            document.title = 'Contact | ML Strength';
        
        break;
    
      default:
        break;
    }
}

window.onload = function() {
  replaceContent();
};
