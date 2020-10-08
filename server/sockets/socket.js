
const { io } = require('../server');

io.on('connection', ( client ) =>{

    console.log('usuario conectado ');


    client.emit('enviarMensaje', {
        usuario : 'Administrador',
        mensaje : 'Bienvenido a esta app'
    });

    client.on('disconnect', () =>{
        console.log('usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje',  ( data , callback ) =>{

        console.log(data);

        // enviar la data a todos los que están conectados
        client.broadcast.emit('enviarMensaje', data );
        // if( mensaje.usuario ){
            
        //     callback({
        //         resp : 'TODO SALIO BIEN!'
        //     });

        // }else{
        //     callback({
        //         resp :'TODO SALIO MAL!!'
        //     });
        // }



    });

});