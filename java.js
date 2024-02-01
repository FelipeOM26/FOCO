let cambiarSwitch = document.getElementById("cambiarInterruptor"),
    cambiarFoco = document.getElementById("cambiar-foco"),
    switch1 = document.querySelector(".botonFoco");


function cambiarImagenes() {

    if (cambiarFoco.getAttribute("src").endsWith("imagenes/emcendido.png") &&
        cambiarSwitch.getAttribute("src").endsWith("imagenes/apagar.png")) {

        cambiarFoco.src = "imagenes/apagado.png";
        cambiarSwitch.src = "imagenes/boton-de-encendido (1).png";
        document.body.style.backgroundColor = "black";
        cambiarFoco.style.fill = "white"; 

    } else if (cambiarFoco.getAttribute("src").endsWith("imagenes/apagado.png") &&
        cambiarSwitch.getAttribute("src").endsWith("imagenes/boton-de-encendido (1).png")) {

        cambiarFoco.src = "imagenes/emcendido.png";
        cambiarSwitch.src = "imagenes/apagar.png";
        document.body.style.backgroundColor = "yellow";
        cambiarFoco.style.filter = " ";
    }



}

