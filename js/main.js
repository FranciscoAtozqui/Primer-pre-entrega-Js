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

//Compra de Productos

if (adivinar()) {
    //OBJETOS
    const camisetas = [
        { pais: "argentina", precio: 5000 },
        { pais: "brasil", precio: 4000 },
        { pais: "inglaterra", precio: 3000 },
        { pais: "uruguay", precio: 2800 },
        { pais: "alemania", precio: 3800 },
        { pais: "portugal", precio: 3300 },
    ]

    let compraProducto = prompt("Camisetas en venta:\n1:Argentina $5000\n2:Brasil $4000\n3:Inglaterra $3000\n4:Uruguay $2800\n5:Alemania $3800\n6:Portugal $3300\nIngrese el pais que desee\n\nSOLO SE PERMITE UN PRODUCTO!").toLowerCase();
    
    //Metodo Find
    const encontrarPais = camisetas.find((el) => {
        return el.pais === compraProducto;
    })

    if (encontrarPais) {
        let cantidadProducto = parseInt(prompt(`¿Cuantas camisetas de ${compraProducto} deseas comprar?`))
        let totalProductos = cantidadProducto * camisetas.find((el) => el.pais === compraProducto).precio;
        alert("Compraste exitosamente. El pago total seria $" + totalProductos);
    } else {
        alert("Ingrese el pais correspondiente. Recargue la pagina");
    }
} else {
    alert("Error al ingresar a la tienda. Contraseña incorrecta. Recargue la pagina nuevamente.");
} 
















