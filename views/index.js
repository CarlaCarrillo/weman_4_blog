
//FUNCIONES PARA LA VENTANA EMERGENTE DE LOGIN

function hideshow(){
    var frm=document.form1;
    if(frm.style.display=="block"){frm.style.display="none"}
    else
    if(frm.style.display=="none"){frm.style.display="block"}
    }

    

    function divLogin(){ 
        var clic = 1;
       if(clic==1){
       document.getElementById("form1").style.height = "100px";
       clic = clic + 1;
       } else{
           document.getElementById("form1").style.height = "0px";      
        clic = 1;
       }   
    }


//FUNCIONES PARA CONCATENAR LAS CAJITAS DE COMENTARIOS

   
      


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
                    }
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
	ajax.send(encodeURI(parametros));
}

function leePublicaciones() {
    peticionAsync('GET', '/comentarios', '');
    alert("leerPublic mensaje")
}

function dibujaPublic(publicaciones) {
    let cont = document.getElementById('publicaciones');
    for(let i = 0; i < publicaciones.length;i++) {
        let nvaPublicación = '<div class="comentario" id="com'+publicaciones[i].id+'">'+
    
    '<div class="comentario_hdr">'+
        '<h3 id="titulo_'+publicaciones[i].id+'">' + 'Entrada de Noticias ' +publicaciones[i].contenido+'</h3>'+
        '<p id="autor">'+publicaciones[i].idusuario+'Autor del post</p>'+
    '</div>'+
    `<div id="contenido" class="comentario_cont">${i}Aquí ingresa el contenido de tu comentario</div}`+
    '<img src="img/delfines.jpg" alt="imagen de ejemplo" />'+
    '</div>';
                cont.innerHTML += nvaPublicación;
            }
        }










