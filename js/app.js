$(document).ready(function($) {
    let total = 0;
    let listado = [];
    let storage = getStorage();
    dibujarListado(storage);

    $("#carrito").on("submit", function(event) {
        event.preventDefault();
        const producto = $('#producto');
        const cantidad = $('#cantidad');
        const precio =$('#precio');
        const precioCalculado = precio.val() * cantidad.val();
        agregarAlListado(producto.val(), cantidad.val(), precioCalculado);
        calcularTotal(precioCalculado);
        setStorage(listado);
        
        $(".img-thumbnail").hide();
    });

    function dibujarListado(listado){
        if (listado) {
            listado.forEach(element => {
                console.log(element);
                $('#listado').append("<tr> <td>#</td> <td>" + element.nombre  + "</td> <td> " + element.cantidad + " </td> <td> $" + element.precio + "</td> </tr>");
                calcularTotal(element.precio);
            });
            $(".img-thumbnail").hide();
        }
    }

    function agregarAlListado(producto, cantidad, precio){
        $('#listado').append("<tr> <td>#</td> <td>" + producto  + "</td> <td> " + cantidad + " </td> <td> $" + precio + "</td> </tr>");
        listado.push({nombre: producto, cantidad: cantidad, precio: precio});
    }

    function calcularTotal(precio) {
        total += parseFloat(precio);
        $(".total").html("$ " + total);
    }

    function setStorage(listado){
        localStorage.setItem('listado',  JSON.stringify(listado));
    }

    function getStorage(){
        let item = localStorage.getItem('listado');
        return JSON.parse(item);
    }






});
