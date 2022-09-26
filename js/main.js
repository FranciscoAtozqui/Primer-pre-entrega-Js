//Bienvenida
let nombreUsuario = prompt("Ingrese su nombre");
    if (nombreUsuario == "") {
        alert("Bienvenido/a Usuario desconocido");
    } else {
        alert("Bienvenido/a " + nombreUsuario + " a nuestra tienda online de camisetas del mundial de Qatar!");
}

//Clave de Usuario
let claveUsuario = "2022";
function adivinar() {
    let claveIngreso = false;
    for (let i = 2; i>=0; i--) {
     let adivinanza = prompt("Adivina la clave\nPista: Poner el año en el que se juega el mundial.\n Tienes " + (i + 1) + " oportunidades");
     if (adivinanza === claveUsuario) {
         alert("Bienvenido/a " + nombreUsuario + " has adivinado correctamente");
         claveIngreso = true;
     break;
     } else {
         alert("Error. Vuelve a intentarlo!");
    }
    }
    return claveIngreso;
}

//Productos
if (adivinar()) {
    let producto = prompt("Los productos que se encuentran en venta son los siguientes:\n1-Camiseta de Argentina \n2-Camiseta de Brasil\n3-Camiseta de Francia\n4-Camiseta de Portugal\nCada producto cuesta $4000\nSeleccione el numero correspondiente\nPresione 5 para finalizar");
    while (producto != "5") {
        switch (producto) {
            case "1":
                alert("Camiseta de Argentina agregada al carrito correctamente!");
                break;

            case "2":
                alert("Camiseta de Brasil agregada al carrito correctamente!");
                break;

            case "3":
                alert("Camiseta de Francia agregada al carrito correctamente!");
                break;

            case "4":
                alert("Camiseta de Portugal agregada al carrito correctamente!");
                break;

            default:
                alert("Error. Ingresaste un numero incorrecto. Intentalo mas tarde.");
                break;
        }
            
        producto = prompt("Los productos que se encuentran en venta son los siguientes:\n1-Camiseta de Argentina \n2-Camiseta de Brasil\n3-Camiseta de Francia\n4-Camiseta de Portugal\nCada producto cuesta $4000\nSeleccione el numero correspondiente\nPresione 5 para finalizar");
    }
    
} else {
    alert("Error al ingresar a la tienda, por favor recargue la pagina para volver a intentar.");
}



