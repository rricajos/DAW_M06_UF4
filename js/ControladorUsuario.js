// controlador.js: Gestión de eventos y comunicación entre modelo y vista

// Asociar el evento click al botón de cargar usuarios
document.getElementById("btnCargarUsuarios").addEventListener("click", function () {
  // Llamar al modelo para cargar los datos
  cargarDatos(function (usuarios) {
      // Pasar los datos a la vista para mostrarlos
      if (usuarios && usuarios.length > 0) {
          mostrarUsuarios(usuarios);
      } else {
          mostrarError("No se encontraron usuarios.");
      }
  });
});

class ControladorUsuario {

    constructor() {
       
        this._xhr = new XMLHttpRequest();

        this._xhr.open("GET", "datos/usuarios.json", true);

        this._xhr.onload() = function() {
            this.handleStatus(this._xhr.status);
        };
        
        this._usuarios = this._xhr.send();
        this._usuarios.forEach(u => {
            console.log(u)            
        });
    }

    handleStatus(intStatus) {
        switch (intStatus) {
    
            // Informational responses (100-199)
            case 100:
                console.error('Error 100: Continuar. El cliente debe continuar con su solicitud.');
                break;
            case 101:
                console.error('Error 101: Cambiando protocolos. El servidor acepta el cambio de protocolo.');
                break;
            case 102:
                console.error('Error 102: Procesando. El servidor está procesando la solicitud.');
                break;
            case 103:
                console.error('Error 103: Pistas iniciales. Se envían encabezados preliminares antes de la respuesta final.');
                break;
    
    
            // Successful responses (200-299)
            case 200:
                console.log('Error 200: OK. Solicitud exitosa.');
                break;
            case 201:
                console.error('Error 201: Creado. La solicitud fue exitosa y se creó un recurso.');
                break;
            case 202:
                console.error('Error 202: Aceptado. La solicitud fue aceptada para procesamiento, pero no completada.');
                break;
            case 203:
                console.error('Error 203: Información no autorizada. Respuesta de un origen no oficial.');
                break;
            case 204:
                console.error('Error 204: Sin contenido. La solicitud fue exitosa pero no hay contenido que devolver.');
                break;
            case 205:
                console.error('Error 205: Restablecer contenido. El cliente debe restablecer la vista del documento.');
                break;
            case 206:
                console.error('Error 206: Contenido parcial. Se envió solo una parte del recurso.');
                break;
            case 207:
                console.error('Error 207: Multi-estado. Respuesta para múltiples operaciones en un recurso.');
                break;
            case 208:
                console.error('Error 208: Ya reportado. El recurso ya fue reportado en una respuesta anterior.');
                break;
            case 226:
                console.error('Error 226: IM usado. Respuesta representa resultado de una operación GET.');
                break;
    
    
            // Redirection messages (300-399)
            case 300:
                console.error('Error 300: Múltiples opciones. Hay varias opciones posibles para esta solicitud.');
                break;
            case 301:
                console.error('Error 301: Movido permanentemente. El recurso se trasladó de forma permanente.');
                break;
            case 302:
                console.error('Error 302: Encontrado. El recurso está temporalmente en otra ubicación.');
                break;
            case 303:
                console.error('Error 303: Ver otro recurso. El cliente debe usar un GET para el recurso.');
                break;
            case 304:
                console.error('Error 304: No modificado. El recurso no ha cambiado desde la última solicitud.');
                break;
            case 305:
                console.error('Error 305: Usar proxy. El recurso debe accederse mediante un proxy.');
                break;
            case 307:
                console.error('Error 307: Redirección temporal. El recurso está temporalmente en otra ubicación.');
                break;
            case 308:
                console.error('Error 308: Redirección permanente. La URL cambió permanentemente.');
                break;
    
    
            // Client error responses (400-499)
            case 400:
                console.error('Error 400: Solicitud incorrecta. Hay un error en la solicitud del cliente.');
                break;
            case 401:
                console.error('Error 401: No autorizado. El cliente necesita autenticarse.');
                break;
            case 402:
                console.error('Error 402: Pago requerido. Código reservado para uso futuro.');
                break;
            case 403:
                console.error('Error 403: Prohibido. El cliente no tiene permiso para acceder.');
                break;
            case 404:
                console.error('Error 404: No encontrado. El recurso no existe.');
                break;
            case 405:
                console.error('Error 405: Método no permitido. El método HTTP no está permitido.');
                break;
            case 406:
                console.error('Error 406: No aceptable. El servidor no puede generar una respuesta aceptable.');
                break;
            case 407:
                console.error('Error 407: Autenticación proxy requerida. Se necesita autenticarse con el proxy.');
                break;
            case 408:
                console.error('Error 408: Tiempo de espera agotado. El servidor tardó demasiado en responder.');
                break;
            case 409:
                console.error('Error 409: Conflicto. Hay un conflicto en el estado actual del recurso.');
                break;
            case 410:
                console.error('Error 410: Gone. El recurso ya no está disponible.');
                break;
            case 411:
                console.error('Error 411: Longitud requerida. Falta el encabezado Content-Length.');
                break;
            case 412:
                console.error('Error 412: Fallo de precondición. Una precondición falló.');
                break;
            case 413:
                console.error('Error 413: Carga demasiado grande. La solicitud es demasiado grande.');
                break;
            case 414:
                console.error('Error 414: URI demasiado largo. La URI solicitada es demasiado larga.');
                break;
            case 415:
                console.error('Error 415: Tipo de medio no soportado. El formato solicitado no es soportado.');
                break;
            case 416:
                console.error('Error 416: Rango no satisfactorio. El rango solicitado no puede ser cumplido.');
                break;
            case 417:
                console.error('Error 417: Fallo en la expectativa. La expectativa en la solicitud falló.');
                break;
            case 418:
                console.error("Error 418: I'm a teapot. El servidor se niega a preparar café.");
                break;
            case 421:
                console.error('Error 421: Solicitud mal dirigida. El servidor no puede responder a este dominio.');
                break;
            case 422:
                console.error('Error 422: Entidad no procesable. La solicitud fue bien formada pero no procesable.');
                break;
            case 423:
                console.error('Error 423: Bloqueado. El recurso está bloqueado.');
                break;
            case 424:
                console.error('Error 424: Dependencia fallida. Una operación dependiente falló.');
                break;
            case 425:
                console.error('Error 425: Muy temprano. El servidor no está listo para procesar la solicitud.');
                break;
            case 426:
                console.error('Error 426: Actualización requerida. El cliente debe actualizarse.');
                break;
            case 428:
                console.error('Error 428: Precondición requerida. El servidor requiere condiciones en la solicitud.');
                break;
            case 429:
                console.error('Error 429: Demasiadas solicitudes. El cliente superó el límite de solicitudes.');
                break;
            case 431:
                console.error('Error 431: Campos de encabezado demasiado grandes. Reduce el tamaño de los encabezados.');
                break;
            case 451:
                console.error('Error 451: No disponible por razones legales. El recurso está restringido.');
                break;
    
    
            // Server error responses (500-599)
            case 500:
                console.error('Error 500: Error interno del servidor. Hubo un problema inesperado.');
                break;
            case 501:
                console.error('Error 501: No implementado. El servidor no soporta la funcionalidad requerida.');
                break;
            case 502:
                console.error('Error 502: Puerta de enlace incorrecta. Hubo un error con un servidor intermedio.');
                break;
            case 503:
                console.error('Error 503: Servicio no disponible. El servidor está sobrecargado o en mantenimiento.');
                break;
            case 504:
                console.error('Error 504: Tiempo de espera agotado. El servidor no respondió a tiempo.');
                break;
            case 505:
                console.error('Error 505: Versión HTTP no soportada. El servidor no soporta la versión de HTTP.');
                break;
            case 506:
                console.error('Error 506: Variante también negocia. Hay un problema de configuración en el servidor.');
                break;
            case 507:
                console.error('Error 507: Almacenamiento insuficiente. El servidor no tiene suficiente espacio.');
                break;
            case 508:
                console.error('Error 508: Bucle detectado. Se detectó un bucle infinito.');
                break;
            case 510:
                console.error('Error 510: No extendido. El servidor requiere más extensiones para procesar la solicitud.');
                break;
            case 511:
                console.error('Error 511: Autenticación de red requerida. El cliente necesita autenticarse en la red.');
                break;
    
            // Default case
            default:
                console.error(`Error ${intStatus}: Código de estado no manejado o desconocido.`);
                break;
        }
    }
}


const usuario = new ControladorUsuario();
