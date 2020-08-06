function InicializarCompra(){
    if (navigator.cookieEnabled == true || navigator.cookieEnabled == false) {
        TablaCarritoCompra();
      }
    
}
/*let carrito = document.getElementById("NavbarCarrito");
  carrito.onclick = function(){
  $("#FlotanteCarrito").modal('show');
  TablaCarrito();
}*/

let carrito = document.getElementById("NavbarCarrito");
  carrito.onclick = function(){
  $("#FlotanteCarrito").modal('show');
  TablaCarrito();
}
//**********Carrito******//
//crear objeto carrito y objeto producto nuevo
const ProductosCarrito = []; 
//leer valores de item boton comprar en objeto producto nuevo
//Añadir producto al carrito
function agregarProducto(e){
    let NewProducto = new Object();

    let producto = document.getElementById(e).parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(producto);
    NewProducto.Producto = producto.querySelector("h1").textContent;
    let precio = Number.parseFloat(producto.querySelector("h3").textContent);
    NewProducto.Precio = precio;
    NewProducto.Cantidad = 1;
    NewProducto.Monto = precio*1;
    ProductosCarrito.push(NewProducto);
    console.log(producto);
    console.log(NewProducto);
    console.log(ProductosCarrito);
    $("#exampleModal").modal('hide');
}
function TablaCarritoCompra(){
 
    let fil = "";
    for(let i=0;i<ProductosCarrito.length;i++){
              importe= importe + ProductosCarrito[i].Monto;
              fil += `<tr>`
              fil += `<td>`+ (i+1) +`</td>`
              fil += `<td>`+ ProductosCarrito[i].Producto +`</td>`
              fil += `<td>`+ ProductosCarrito[i].Precio +`</td>`
              fil += `<td>`+ ProductosCarrito[i].Cantidad +`</td>`
              fil += `<td>`+ ProductosCarrito[i].Monto +`</td>`
              fil += `</tr>`
      }
      document.getElementById("table1").innerHTML= fil;
  }

function TablaCarrito(){
  let importe=0;
  let fil = "";
  let PrintImporte
  for(let i=0;i<ProductosCarrito.length;i++){
            importe= importe + ProductosCarrito[i].Monto;
            fil += `<tr>`
            fil += `<td>`+ (i+1) +`</td>`
            fil += `<td>`+ ProductosCarrito[i].Producto +`</td>`
            fil += `<td>`+ ProductosCarrito[i].Precio +`</td>`
            fil += `<td>`+ ProductosCarrito[i].Cantidad +`</td>`
            fil += `<td>`+ ProductosCarrito[i].Monto +`</td>`
            fil += `</tr>`
    }
    PrintImporte=`El importe es: `+ importe;
    document.getElementById("table1").innerHTML= fil;
    document.getElementById("importe").innerHTML= PrintImporte;
}