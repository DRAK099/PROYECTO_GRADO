function infoClientes(event){
    event.preventDefault();

    var codPedido = document.forms["formClientes"]["codPedido"].value ;
    let nomCliente = document.forms["formClientes"]["nomCliente"].value ;
    let dirEnvio = document.forms["formClientes"]["dirEnvio"].value ;    
    let valorPedido = document.forms["formClientes"]["valorPedido"].value ;
    let datePedido = document.forms["formClientes"]["datePedido"].value ;

    alert("Los datos son "+ codPedido + " "+ nomCliente + " "+ dirEnvio + " "+ valorPedido)
     
        document.getElementById("datePedidoo").innerHTML = datePedido;
        document.getElementById("nomClientee").innerHTML = nomCliente;
        document.getElementById("dirEnvioo").innerHTML = dirEnvio;
}



function infoProductos(event){
    event.preventDefault();

    let refProducto = document.forms["formProductos"]["refProducto"].value ;
    let nomProducto = document.forms["formProductos"]["nomProducto"].value ;
    let cantidad = document.forms["formProductos"]["cantidad"].value ;
    let bodega = document.forms["formProductos"]["bodega"].value ;

    alert("Los datos son "+ refProducto + " "+ nomProducto + " "+ cantidad + " "+ bodega)

}

function infoInterna(event){
    event.preventDefault();

    let estado1 = document.forms["procesoInt"]["estado1"].value ;
    let estado2 = document.forms["procesoInt"]["estado2"].value ;
    let estado3 = document.forms["procesoInt"]["estado3"].value ;
    let estado4 = document.forms["procesoInt"]["estado4"].value ;
    let estado5 = document.forms["procesoInt"]["estado5"].value ;
    let revFinal = document.forms["procesoInt"]["revFinal"].value ;

    alert("Los datos son "+ estado1 + " "+ estado2 + " "+ estado3 + " "+ estado4+ " "+ estado5+ " "+ revFinal)

}

function infoLogistica(event){
    event.preventDefault();


    let numPedido = document.forms["logistica"]["numPedido"].value ;
    let numFact = document.forms["logistica"]["numFact"].value ;
    let trans = document.forms["logistica"]["trans"].value ;
    let guiaDespacho = document.forms["logistica"]["guiaDespacho"].value ;
    let dateDespacho = document.forms["logistica"]["dateDespacho"].value ;
    let dateRecibido = document.forms["logistica"]["dateRecibido"].value ;

   
  
}