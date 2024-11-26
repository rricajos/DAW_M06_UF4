// controlador.js: Gestión de eventos y comunicación entre modelo y vista

// Asociar el evento click al botón de cargar usuarios


class ControladorUsuario {

    constructor(onLoadCallBack) {

        this._xhr = new XMLHttpRequest();

        this._xhr.open("GET", "datos/usuarios.json", true);

        this._users = {};

        // Función flecha para preservar el contexto
        this._xhr.onload = () => {

            // Muestra por consola el estado de la solicitud
            this.xhrStatus();

            // Si ha sido exitosa guarda los datos
            if (this._xhr.status >= 200 && this._xhr.status < 300) {

                this.users = JSON.parse(this._xhr.responseText);

            }

            // Al ser una operación asincrona retornamos un callback 
            if (onLoadCallBack) {
                onLoadCallBack(this.users)
            }

        };

        this._xhr.onerror = () => {
            console.error("Error al cargar los datos");
            this.xhrStatus();
        };

        this._xhr.send();

    }

    get xhr() {
        return this._xhr;
    }

    get users() {
        return this._users;
    }

    // Setters
    set xhr(newXHR) {
        if (typeof newXHR === 'XMLHttpRequest') {
            this._xhr = newXHR;
        } else {
            console.error('El nuevo xhr debe ser de tipo XMLHttpRequest');
        }
    }

    set users(newUsers) {
        if (typeof newUsers === 'object' && newUsers !== null) {
            this._users = newUsers;
        } else {
            console.error('El nuevo valor de users debe ser un objeto o un array.');
        }
    }

    xhrStatus() {
        switch (this.xhr.status) {

            // Informational responses (100-199)
            case 100:
                console.error('Estado 100: Continuar. El cliente debe continuar con su solicitud.');
                break;
            case 101:
                console.error('Estado 101: Cambiando protocolos. El servidor acepta el cambio de protocolo.');
                break;
            case 102:
                console.error('Estado 102: Procesando. El servidor está procesando la solicitud.');
                break;
            case 103:
                console.error('Estado 103: Pistas iniciales. Se envían encabezados preliminares antes de la respuesta final.');
                break;


            // Successful responses (200-299)
            case 200:
                console.log('Estado 200: OK. Solicitud exitosa.');
                break;
            case 201:
                console.error('Estado 201: Creado. La solicitud fue exitosa y se creó un recurso.');
                break;
            case 202:
                console.error('Estado 202: Aceptado. La solicitud fue aceptada para procesamiento, pero no completada.');
                break;
            case 203:
                console.error('Estado 203: Información no autorizada. Respuesta de un origen no oficial.');
                break;
            case 204:
                console.error('Estado 204: Sin contenido. La solicitud fue exitosa pero no hay contenido que devolver.');
                break;
            case 205:
                console.error('Estado 205: Restablecer contenido. El cliente debe restablecer la vista del documento.');
                break;
            case 206:
                console.error('Estado 206: Contenido parcial. Se envió solo una parte del recurso.');
                break;
            case 207:
                console.error('Estado 207: Multi-estado. Respuesta para múltiples operaciones en un recurso.');
                break;
            case 208:
                console.error('Estado 208: Ya reportado. El recurso ya fue reportado en una respuesta anterior.');
                break;
            case 226:
                console.error('Estado 226: IM usado. Respuesta representa resultado de una operación GET.');
                break;


            // Redirection messages (300-399)
            case 300:
                console.error('Estado 300: Múltiples opciones. Hay varias opciones posibles para esta solicitud.');
                break;
            case 301:
                console.error('Estado 301: Movido permanentemente. El recurso se trasladó de forma permanente.');
                break;
            case 302:
                console.error('Estado 302: Encontrado. El recurso está temporalmente en otra ubicación.');
                break;
            case 303:
                console.error('Estado 303: Ver otro recurso. El cliente debe usar un GET para el recurso.');
                break;
            case 304:
                console.error('Estado 304: No modificado. El recurso no ha cambiado desde la última solicitud.');
                break;
            case 305:
                console.error('Estado 305: Usar proxy. El recurso debe accederse mediante un proxy.');
                break;
            case 307:
                console.error('Estado 307: Redirección temporal. El recurso está temporalmente en otra ubicación.');
                break;
            case 308:
                console.error('Estado 308: Redirección permanente. La URL cambió permanentemente.');
                break;


            // Client error responses (400-499)
            case 400:
                console.error('Estado 400: Solicitud incorrecta. Hay un error en la solicitud del cliente.');
                break;
            case 401:
                console.error('Estado 401: No autorizado. El cliente necesita autenticarse.');
                break;
            case 402:
                console.error('Estado 402: Pago requerido. Código reservado para uso futuro.');
                break;
            case 403:
                console.error('Estado 403: Prohibido. El cliente no tiene permiso para acceder.');
                break;
            case 404:
                console.error('Estado 404: No encontrado. El recurso no existe.');
                break;
            case 405:
                console.error('Estado 405: Método no permitido. El método HTTP no está permitido.');
                break;
            case 406:
                console.error('Estado 406: No aceptable. El servidor no puede generar una respuesta aceptable.');
                break;
            case 407:
                console.error('Estado 407: Autenticación proxy requerida. Se necesita autenticarse con el proxy.');
                break;
            case 408:
                console.error('Estado 408: Tiempo de espera agotado. El servidor tardó demasiado en responder.');
                break;
            case 409:
                console.error('Estado 409: Conflicto. Hay un conflicto en el estado actual del recurso.');
                break;
            case 410:
                console.error('Estado 410: Gone. El recurso ya no está disponible.');
                break;
            case 411:
                console.error('Estado 411: Longitud requerida. Falta el encabezado Content-Length.');
                break;
            case 412:
                console.error('Estado 412: Fallo de precondición. Una precondición falló.');
                break;
            case 413:
                console.error('Estado 413: Carga demasiado grande. La solicitud es demasiado grande.');
                break;
            case 414:
                console.error('Estado 414: URI demasiado largo. La URI solicitada es demasiado larga.');
                break;
            case 415:
                console.error('Estado 415: Tipo de medio no soportado. El formato solicitado no es soportado.');
                break;
            case 416:
                console.error('Estado 416: Rango no satisfactorio. El rango solicitado no puede ser cumplido.');
                break;
            case 417:
                console.error('Estado 417: Fallo en la expectativa. La expectativa en la solicitud falló.');
                break;
            case 418:
                console.error("Estado 418: I'm a teapot. El servidor se niega a preparar café.");
                break;
            case 421:
                console.error('Estado 421: Solicitud mal dirigida. El servidor no puede responder a este dominio.');
                break;
            case 422:
                console.error('Estado 422: Entidad no procesable. La solicitud fue bien formada pero no procesable.');
                break;
            case 423:
                console.error('Estado 423: Bloqueado. El recurso está bloqueado.');
                break;
            case 424:
                console.error('Estado 424: Dependencia fallida. Una operación dependiente falló.');
                break;
            case 425:
                console.error('Estado 425: Muy temprano. El servidor no está listo para procesar la solicitud.');
                break;
            case 426:
                console.error('Estado 426: Actualización requerida. El cliente debe actualizarse.');
                break;
            case 428:
                console.error('Estado 428: Precondición requerida. El servidor requiere condiciones en la solicitud.');
                break;
            case 429:
                console.error('Estado 429: Demasiadas solicitudes. El cliente superó el límite de solicitudes.');
                break;
            case 431:
                console.error('Estado 431: Campos de encabezado demasiado grandes. Reduce el tamaño de los encabezados.');
                break;
            case 451:
                console.error('Estado 451: No disponible por razones legales. El recurso está restringido.');
                break;


            // Server error responses (500-599)
            case 500:
                console.error('Estado 500: Estado interno del servidor. Hubo un problema inesperado.');
                break;
            case 501:
                console.error('Estado 501: No implementado. El servidor no soporta la funcionalidad requerida.');
                break;
            case 502:
                console.error('Estado 502: Puerta de enlace incorrecta. Hubo un error con un servidor intermedio.');
                break;
            case 503:
                console.error('Estado 503: Servicio no disponible. El servidor está sobrecargado o en mantenimiento.');
                break;
            case 504:
                console.error('Estado 504: Tiempo de espera agotado. El servidor no respondió a tiempo.');
                break;
            case 505:
                console.error('Estado 505: Versión HTTP no soportada. El servidor no soporta la versión de HTTP.');
                break;
            case 506:
                console.error('Estado 506: Variante también negocia. Hay un problema de configuración en el servidor.');
                break;
            case 507:
                console.error('Estado 507: Almacenamiento insuficiente. El servidor no tiene suficiente espacio.');
                break;
            case 508:
                console.error('Estado 508: Bucle detectado. Se detectó un bucle infinito.');
                break;
            case 510:
                console.error('Estado 510: No extendido. El servidor requiere más extensiones para procesar la solicitud.');
                break;
            case 511:
                console.error('Estado 511: Autenticación de red requerida. El cliente necesita autenticarse en la red.');
                break;

            // Default case
            default:
                console.error(`Estado ${this._xhr.status}: Código de estado no manejado o desconocido.`);
                break;
        }
    }
}




