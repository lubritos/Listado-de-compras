$(document).ready(function($) {
    let posision = 0;
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

    $("#listado").on('click', '.btn-danger', function(){
        const id = $(this).data('id');
        removeStorage(id);
    });

    function dibujarListado(listado){
        if (listado) {
            listado.forEach((element, index) => {
                agregarItem(element.nombre, element.cantidad, element.precio, index);
                calcularTotal(element.precio);
            });
            $(".img-thumbnail").hide();
        }
    }

    function agregarAlListado(producto, cantidad, precio){
        if(cantidad > 0 && precio > 0 ) {
            agregarItem(producto, cantidad, precio, posision );
            listado.push({nombre: producto, cantidad: cantidad, precio: precio});
            posision++;
        }
            
    }
    function agregarItem(producto, cantidad, precio, index){
        $('#listado').append(`
                <tr id="lista-${index}">
                 <td>#</td> 
                 <td>${producto}</td> 
                 <td>${cantidad}</td> 
                 <td>${precio}</td>
                 <td>
                 <button type="button" class="btn btn-danger" data-id="${index}">Eliminar</button>
                 </td>
                </tr>`);
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

    function removeStorage(posision) {
        $("#lista-"+posision).remove();
        storage = storage.filter(function(item, index) {
            return index !== posision
        });
        setStorage(storage);
    }



});
