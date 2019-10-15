function toggleMenu() {
    var navbar__links = document.getElementById('navbar__links'); 
    var iconMenu = document.getElementById('menu');   
    var iconClose = document.getElementById('close');

    if (navbar__links.style.display == "none") { 
      navbar__links.style.display = "flex";
      iconMenu.style.display = "none";
      iconClose.style.display = "block";     
    }
    else { 
      navbar__links.style.display = "none";
      iconMenu.style.display = "block";
      iconClose.style.display = "none";
    }
  }