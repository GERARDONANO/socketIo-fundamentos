


const socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

// escuchar 
socket.on('disconnect', function() {

    console.log('perdimos conexión con el server');
});


// enviar información
socket.emit('enviarMensaje',{
    usuario : 'Gerardo',
    mensaje : 'Hola Mundo'
}, function( resp ) {

    console.log('respuesta server: ', resp);

});

 // escuchar información
 socket.on('enviarMensaje', function ( mensaje ){

    console.log('Servidor respuesta: ', mensaje);

 });