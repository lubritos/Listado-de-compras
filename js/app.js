$(document).ready(function($) {
    var total = 0;
    $("#carrito").on("submit", function(event) {
        event.preventDefault();
        const producto = $('#producto');
        const cantidad = $('#cantidad');
        const precio =$('#precio');
        console.log("Producto:" + producto.val());
        console.log("cantidad:" + cantidad.val());
        console.log("precio:" + precio.val());
        agregarAlListado(producto.val(), cantidad.val(), precio.val());
        calcularTotal(precio.val());
        $(".img-thumbnail").hide();
    });

    function agregarAlListado(producto, cantidad, precio){
        $('#listado').append("<tr> <td>#</td> <td>" + producto  + "</td> <td> " + cantidad + " </td> <td> $" + precio + "</td> </tr>");

    }

    function calcularTotal(precio) {
        total += parseFloat(precio);
        $(".total").html("$ " + total);
    }

});
