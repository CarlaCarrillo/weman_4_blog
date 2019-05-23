
var clic = 1;

function divLogin(){ 

   if(clic==1){

   document.getElementById("caja").style.height = "100px";

   clic = clic + 1;

   } else{

       document.getElementById("caja").style.height = "0px";      

    clic = 1;

   }   

}


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




