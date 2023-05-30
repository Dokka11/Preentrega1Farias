let comando = 0;
let carrito = 0;
let Teclados = 0;
let Auriculares = 0;
let Mouse = 0;

while (comando != "Salir") {

    comando = parseInt(prompt(" 1) Productos\n 2) Metodos de pago \n 3) Carrito \n 4) Salir"));

    switch (comando) {
// PRODUCTOS //
        case 1:
            let list2 = parseInt(prompt("Agregar producto al carrito: \n 1) Teclados \n 2) Auriculares \n 3) Mouse"));

            if (list2 == 1) {
                let eleccion = parseInt(prompt("Desea agregar 'Teclados' al carrito? \n 1)Si \n 2)No"));
                if (eleccion == 1) {
                    alert("Producto agregado al carrito.");
                    carrito = carrito + 1;
                    Teclados = Teclados + 1;
                    continue;
                } else if (eleccion == 2) {
                    alert("Volviendo al menu principal...");
                    continue;
                } else {
                    alert("error 404 :p");
                    continue;
                }
            } else if (list2 == 2) {
                let eleccion = parseInt(prompt("Desea agregar 'Auriculares' al carrito? \n 1)Si \n 2)No"));
                if (eleccion == 1) {
                    alert("Producto agregado al carrito.");
                    carrito = carrito + 1;
                    Auriculares = Auriculares + 1;
                    continue;
                } else if (eleccion == 2) {
                    alert("Volviendo al menu principal...");
                    continue;
                } else {
                    alert("error 404");
                    continue;
                }
            } else if (list2 == 3) {
                let eleccion = parseInt(prompt("Desea agregar 'Mouse' al carrito? \n 1)Si \n 2)No"));
                if (eleccion == 1) {
                    alert("Producto agregado al carrito.");
                    carrito = carrito + 1;
                    Mouse = Mouse + 1;
                    continue;
                } else if (eleccion == 2) {
                    alert("Volviendo al menu principal...");
                    continue;
                } else {
                    alert("error 404");
                    continue;
                }
            }
// METODOS DE PAGO //
        case 2:
            let metodos = prompt("Elija el metodo de pago:\n 1) Credito \n 2) Debito \n 3) Efectivo");
            if (metodos == 1) {
                alert("Con tarjetas de credito tenes hasta 6 cuotas sin interes.")
            } else if (metodos == 2) {
                alert("Con tarjetas de debito tenes hasta 3 cuotas en los productos de tecnologia.");
            } else if (metodos == 3) {
                alert("Las compras en efectivo son 1 solo pago en mano y tienen 10% de descuento.");
            } else {
                alert("ERROR 404");
            }
            break;
// CARRITO //
        case 3:
            if (carrito == 0) {
                alert("Sin productos en el carrito");
            } else {
                alert("Productos agregados al carrito: \n" + Teclados + " Teclados \n" + Auriculares + " Auriculares \n" +  Mouse + " Mouuse ");
            }
            break;
// SALIR //
        case 4:
            comando = "Salir";
            break;

        default:
            alert("Opcion no disponible");
            break;
    }
}