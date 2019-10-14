function toggleMenu() {
    var menuBox = document.getElementById('navbar__links'); 
    var icon = document.getElementById('menu');   
    var icon2 = document.getElementById('close')
    if(menuBox.style.display == "none") { // if is menuBox displayed, hide it
      menuBox.style.display = "flex";
      icon.style.display = "block";
      icon2.style.display = "none"
      
      
    }
    else { // if is menuBox hidden, display it
      menuBox.style.display = "none";
      icon.style.display = "none"
      icon2.style.display = "block"
    }
  }