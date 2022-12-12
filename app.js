//constantes
const productos = [
    {nombre: "1 noche", precio: 7500 },
    {nombre: "2 noches", precio: 14000 },
    {nombre: "3 noches", precio: 19000 },
    {nombre: "4 noches", precio: 24000 },
    {nombre: "5 noches", precio: 29000 },
];

// carrito
let carrito = []

// bucle
let seleccion = prompt("Desea hacer una reserva")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
}

if(seleccion == "si"){
    alert("Estas son las opciones de reservas")
    let todoslosproductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosproductos.join(" - "))
}
else if (seleccion == "no"){
    alert("gracias por tu visita, te esperamos pronto en Cabañas Cerro Negro")
}

while (seleccion != "no"){
    let producto = prompt("Agrega la cantidad de noches de tu reserva")
    let precio = 0
    

        switch(producto){
            case "1 noche":
            precio = 7500;
            break;
            case "2 noches":
            precio = 14000;
            break;
            case "3 noches":
            precio = 19000;
            break;
            case "4 noches":
            precio = 24000;
            break;
            case "5 noches":
            precio = 29000;
            break;
            default:
                alert("no ha seleccionado cantidad de noches")
                break;
        }
        carritofinal = `El servicio seleccionado es: ${producto} y el costo final es de: ${precio}`

    seleccion = prompt("Quisiera hacer otra reserva?")
    
    if(seleccion === "no"){
        alert("gracias por su reserva")
       console.log (carritofinal)
    break;
    }
}