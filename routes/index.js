const express = require('express');
const router = express.Router();
const ruta = require('path');
const appDir = ruta.dirname(require.main.filename);
const fs = require('fs');
const pubs = require('../middlewares/publicaciones.js');
const seg = require('../middlewares/cancervero.js');



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
function dibuja() {
    let cont = document.getElementById('cont_cajacomentarios');
    for(let i = 0; i < 7; i++) {
        let nvoComment = '<div class="comentario" id="com'+i+'">'+
    
    '<div class="comentario_hdr">'+
        '<h3 id="titulo_'+i+'">' + 'Entrada de Noticias ' + i +'</h3>'+
        '<p id="autor">'+i+'Autor del post</p>'+
    '</div>'+
    `<div id="contenido" class="comentario_cont">${i}Aquí ingresa el contenido de tu comentario</div}`+
    '<img src="img/delfines.jpg" alt="imagen de ejemplo" />'+
    '</div>';
                cont.innerHTML += nvoComment;
            }
        }
        function inicia() {
            dibuja();
        }
















//BACKEND

/** Ruta: /
 * @brief Obtiene por default el index.html de la aplicación
 */
router.get('/', (pet, resp) => {
	const ppal = fs.readFileSync(appDir + '/views/index.html').toString('utf8');
	//Regresamos la página principal...
	resp.send(ppal);
});

/** Ruta: /comentarios
 * @brief Lee la lista de comentarios publicados en el blog.
 * @ref middlewares/publicaciones.js
 */
router.get('/comentarios', (pet, resp) => {
	//Aquí vamos a enviar los comentarios en formato JSON. Lo haremos de manera asíncrona.
	//Esperar el asíncrono...
	pubs.leePublicaciones(resp);
	/*
	console.log("Termina la ejecución de la función y dijo: ");
	console.log(res);
	resp.json(res);
*/
});

/** Ruta: /login
 * @brief Ejecuta la validación de usuario y contraseña. Esta ruta debe de llamarse a través del método POST
 * @ref middlewares/cancervero.js
 */
router.post('/login', (pet, resp) => {
	//Vamos a hacer la petición de entrada aquí...
	console.log("Petición de acceso para usuarios");
	let res = seg.valida(pet.body.usr, pet.body.pwd, resp);
});

/** Ruta: /publica
 * @brief Publica un comentario en la base de datos.
 * @ref middlewares/publicaciones.js
 */
router.post('/publica', (pet, resp) => {
	pubs.publica(pet.body.idusr, pet.body.titulo, pet.body.texto, resp);
});

module.exports = router;












