// modelo.js: Carga de datos del modelo (usuarios.json)




// Función para cargar los datos desde el archivo JSON
function cargarDatos(callback) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "192.168.1.74:datos/usuarios.json", true);

    xhr.send();

    xhr.onload = function () {
        console.log('Estado de la conexión XMLHttpRequest: ' + xhr.status);
        console.log('readyState: ', xhr.readyState);

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {

                try {
                    const datos = JSON.parse(xhr.responseText);
                    console.log('Datos cargados:', datos);
                    callback(datos);
                } catch (error) {
                    console.error('Error al parsear el JSON:', error);
                }
                
            } else if (xhr.status === 404) {
                console.error('Error 404: El archivo usuarios.json no se encuentra en la ruta especificada.');
            } else if (xhr.status === 500) {
                console.error('Error 500: Problema en el servidor al cargar el archivo usuarios.json.');
            } else {
                console.error('Error inesperado: Código de estado ' + xhr.status);
            }
        }
    };

    xhr.onerror = function () {
        console.error('Error de red: La solicitud no pudo completarse.');
        console.warn('Same Origin Policy: Posiblemente el navegador está bloqueando el acceso de la solicitud XMLHttpRequest desde un archivo "file://".');
        console.warn('Prueba a ejecutar el código desde un servidor local (XAMPP, Python, etc.).');

        
    };

}


