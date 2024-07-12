function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){                          //lê-se: se o elemento for IGUAL à nulo, então faça:
        //alert('Elemento não encontrado');       //duas opções de exibir msg para o usuário
        console.log('Elemento não encontrado');
    }

    if(elemento != null && elemento.localName === 'audio'){         //lê-se: SE o elemento for DIFERENTE de nulo E igual à áudio, então faça:
        elemento.play();  
    } else{                                                         //lê-se: SENÃO (se o elemento for IGUAL à nulo), mostre essa mensagem:
        console.log('Elemento não encontrado ou seletor inválido');                     // mensagem ALERT
    }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;    ----isso é p/ selecionar UM elemento só desse seletor
//document.querySelectorAll('.tecla_pom').onclick = tocaSomPom;    ----isso é p/ selecionar TODOS os elementos desse seletor (All)
//const listaDeTeclas = document.querySelectorAll('.tecla_pom').onclick = tocaSomPom;   ---- estou guardando esse valor porque ele não vai ser alterado. Isso evita a menuntenção do código e ele não precisa se repetir.


const listaDeTeclas = document.querySelectorAll('.tecla');

//para  --- uma condição
 for (let contador = 0; contador < listaDeTeclas.length; contador++ ) {                   //o que vai ser feito a cada looping, a cada repetição, laço... 
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  // tbm se cria string com crase `` (NOME DESSE MODELO DE STRING: template string)
    //console.log(idAudio);

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
   //console.log(contador)

    tecla.onkeydown = function(evento){

        console.log(evento.code)

        if(evento.code === 'Space' || evento.code === 'Enter'){    //se a tecla de espaço for verdadeira ou a do enter, vai se realizar o que está dentro da condição if{}.  OBS: || significa OU
            tecla.classList.add('ativa');
        }

        }
    
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}



