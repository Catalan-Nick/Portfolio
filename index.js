var navbar = 
        document.querySelector(".navbar");
  
    navbar.addEventListener(
        "mousemove", function (e) {
        x = e.offsetX;
        y = e.offsetY;
        navbar.style.backgroundColor 
            = `rgb(${x}, ${y}, ${x - y})`;
        });