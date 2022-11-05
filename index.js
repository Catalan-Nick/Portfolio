var navbar = document.querySelector(".color-change");
    document.body.addEventListener(
        "mousemove", function (e) {

        x = e.offsetX;
        if (x > 255){
            x -= 255
        }
        y = e.offsetY;
        if (y > 255){
            y -= 255
        }
        navbar.style.backgroundColor 
            = `rgb(${x}, ${y}, ${x})`;
        });