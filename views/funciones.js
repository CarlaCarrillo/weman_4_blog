//FUNCIONES PARA LA VENTANA EMERGENTE DE LOGIN

function mostrar1() {
    document.getElementById('cajapub').style.visibility="visible";
    
}

function cerrar1() {
    document.getElementById('cajapub').style.visibility="hidden";
}

//FUNCIONES PARA LA VENTANA EMERGENTE DE PUBLICACIONES

function mostrar2() {
    document.getElementById('caja').style.visibility="visible";
    
}

function cerrar2() {
    document.getElementById('caja').style.visibility="hidden";
}
      


/** Este archivo se usará para poner funciones de ejemplo para llamadas asíncronas
 * Aunque no vienen pensadas en ejercicio original, es bueno pensarlas de una vez.
 */
function peticionAsync(tipo, url, parametros) {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
			if (ajax.status == 200) {
				//El resultado es exitoso!
                //Tomar las acciones necesarias aquí
                let resp = JSON.parse(ajax.responseText);
                if (resp.error == "0") {
                    if(url === '/comentarios') {
                        dibujaPublic(resp.registros);

                    } else if (url === '/login') {
                        alert("Bienvenido: " + resp.nombre);
                    }
                    //preparnos para otras peticiones
                } else if (resp.error == 1) {
                    alert("Credenciales erróneas");
                }
			} else if (ajax.status == 404) {
				//No encontró el servicio o API
			} else {
				//Una respuesta inesperada por parte del servidor
				alert('Saliendo precipitadamente de la aldea por culpa de la escaces de rinocerontes');
			}
		}
	};
	//El tipo puede ser GET, POST, PUT, DELETE o cualquier tipo aceptado por HTTP
	//La URL es a dondo hará la petición...
	//Por último, el "true" indica que es una petición asíncrona
	ajax.open(tipo, url, true);
	//Se establece cómo será enviado el contenido.
	ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	//La función encodeURI se encarga que la petición tenga el formato adecuado para ser enviado...
	//un ejemplo de petición puede ser variable=valor&otravariable=otrovalor...
	if(parametros.toString() === "[object FormData]")
     ajax.send(parametros);
    else
    ajax.send(encodeURI(parametros));
}


function leePublicaciones() {
    peticionAsync('GET', '/comentarios', '');
}

//validando que seas o no administrador
function probarlogin() {
    var formulario = document.getElementById('form1')
    peticionAsync('POST', '/login', 'usr=' + formulario.user.value + '&pwd=' + formulario.clave.value);
}

//revisar que los campos no estén vacios 
//valida que el correo incluya valores aceptados 

function validarfor(){

    var correo = document.getElementById("email"); 
    var correoregex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    
    if(!correoregex.test(correo.value)) {
		alert('email' + correo.value + 'no valido');
	}
	else {
        alert('email valido');
    }
}








function dibujaPublic(publicaciones) {
    let cont = document.getElementById('public');
    for(let i = 0; i < publicaciones.length;i++) {
        let nvaPublicación = '<div class="comentario" id="com'+publicaciones[i].id+'">'+
    
    '<div class="comentario_hdr">'+
        '<h3 id="titulo_">'+publicaciones[i].titulo+'</h3>'+
        '<p id="autor">'+publicaciones[i].idusuario+'Autor del post</p>'+
    '</div>'+
   '<div id="contenido" class="comentario_cont">' +publicaciones[i].contenido+ '</div>'
    '</div>';
                cont.innerHTML += nvaPublicación;
            }
        }










