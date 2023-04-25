

var upflag = 1
var downflag = 1
var leftflag = 1
var rightflag = 1

function playVideo(link, audio = null) {
  const video = document.createElement('video');
  video.src = link;
  video.autoplay = true;
  
  const canvasvideo = document.getElementById('canvas4');
  canvasvideo.style.zIndex = 15; // Asignamos un z-index al canvas
  canvasvideo.style.width = 800;
  canvasvideo.style.height = 600;
  canvasvideo.style.objectFit = "cover";
  
  document.body.appendChild(video);
  
  video.addEventListener('ended', () => {
    //audio.play() // solo para intro o audio opcional
    if(entradaJugador === 0){
    intro.play()
    }
    canvasvideo.style.display = 'none'; // Ocultamos el canvas
    document.body.removeChild(video); // Eliminamos el video del DOM
  });
  
}

playVideo("/video/intropokemon.mp4")


var barraVidaenemy = document.getElementById("enemy-life-bar");
var barraVidaplayer = document.getElementById("player-life-bar");

function barra_Salud(player,rival){
  barraVidaenemy.style.display = "block";
  barraVidaenemy.querySelector(".lifeenemy").style.width = rival + "%";
  barraVidaenemy.querySelector(".porcentenemy").textContent =  rival + "%";

  barraVidaplayer.style.display = "block";
  barraVidaplayer.querySelector(".lifeplayer").style.width = player + "%";
  barraVidaplayer.querySelector(".porcentplayer").textContent =  player + "%";
}

  function mostrarAtaques(){

    let menu1 = document.getElementById("menu1");
    let menu2 = document.getElementById("menu2");
    menu1.style.display = "none";
    menu2.style.display = "block";

  }

  function mostrarMenu(){

    let menu1 = document.getElementById("menu1");
    let menu2 = document.getElementById("menu2");
    menu1.style.display = "block";
    menu2.style.display = "none";

}


  function correrMenu(){
    let menu1 = document.getElementById("menu1");
    let menu2 = document.getElementById("menu2");
    menu1.style.display = "none";
    menu2.style.display = "none";
    barraVidaenemy.style.transition ="none"
    barraVidaplayer.style.transition ="none"
    barraVidaenemy.style.display = "none";
    barraVidaplayer.style.display = "none";
    
    springTown_views()
    combate = false;



    mover(650, 280, 1);

  }
  function GrunidoAtaqueMenu(){
    ataq = true;

  }

function addname(){

  playername = document.getElementById("name").value;

    if(playername != ""){
    document.getElementById("addname").style.display = "none";

    } else {

      showDialog(["Hey espera chico/a, Ciudad paleta necesita saber tu nombre"])

    }

  }

  //Funcion va a corresponder a los dialogos de los personajes

  function showDialog(messages) {
  if (is_talking === false) {
    const dialogBox = document.getElementById("dialog-box");
    const dialogText = document.getElementById("dialog-text");
    const dialogButton = document.getElementById("dialog-button");
    is_talking = true;

    dialogText.innerHTML = "";
    dialogBox.style.display = "block";
    let i = 0;

    const typing = setInterval(function() {
      if (i < messages[0].length) {
        dialogText.innerHTML += messages[0].charAt(i);
        i++;
      } else {

        clearInterval(typing);

      }

    }, 50);

  dialogButton.onclick = function() {
      if (messages.length > 1) {
        i = 0;
          messages.shift();
            dialogText.innerHTML = "";
            const nextTyping = setInterval(function() {

            if (i < messages[0].length) {
              dialogText.innerHTML += messages[0].charAt(i);
              i++;
            } else {
              clearInterval(nextTyping);
            }
          }, 50);

      } else {
        dialogBox.style.display = "none";
        is_talking = false;
      }
    }
  }
}

function fightDialog(messages, video, fight = null) {
  if (is_talking === false) {
    const dialogBox = document.getElementById("dialog-box");
    const dialogText = document.getElementById("dialog-text");
    const dialogButton = document.getElementById("dialog-button");
    is_talking = true;

    dialogText.innerHTML = "";
    dialogBox.style.display = "block";
    let i = 0;

    const typing = setInterval(function() {
      if (i < messages[0].length) {
        dialogText.innerHTML += messages[0].charAt(i);
        i++;
      } else {

        clearInterval(typing);

      }

    }, 50);

      dialogButton.onclick = function() {
        video("/video/loading.mp4");
        dialogBox.style.display = "none";
        fightadded = true;
        fight()
    }
  }
}


//Audios del juego

var intro = document.getElementById("intro")

var walking = document.getElementById('walking');
var natural = document.getElementById('natural');
var springtown_audio = document.getElementById('springtown');
var naturalnight = document.getElementById('naturalnight');
var pokemon_battle = document.getElementById("pokemon-battle");
var selectpokemon_audio = document.getElementById("selectpokemon");
var motivation = document.getElementById("wait");

//INTERACCION CON EL PERSONAJE
var globalvar = 1;
var global_map = "img/starfall.png"
var playerBadges = 0; //Esta es la insignia del jugador que definira el progreso del jugador
var fightadded = false;
var startofplaceX;
var startofplaceY;
var direccion = 1;
var combate = false;
var playername = "";
var pokemonG_player = Array(2) //Ahi es donde se va a almasenar el pokemon actual del jugador
var entradaJugador = 0; //VARIABLE QUE OBLIGA AL JUGADOR HACER UNA COSA A LA VEZ EN LA INTRO
var conversacionMostrada = false; //NO UTILIZADA TODAVIA
var is_talking = false; //Para que cuando el npc converse no se mueva el jugador
var primerPokemon = false; //Variable te permite seleccionar tu primer pokemon una sola vez, corrige error.
var pelea;

  //INICIALIZACION DE CAPAS
  var canvas1 = document.getElementById("canvas1");
  var map = canvas1.getContext("2d");

  var canvas2 = document.getElementById("canvas2");
  var players = canvas2.getContext("2d");

  var canvas3 = document.getElementById("canvas3");
  var framecanvas = canvas3.getContext("2d");

  var canvas4 = document.getElementById("canvasnpc");
  var canvasnpc = canvas4.getContext("2d");

  canvas1.setAttribute("style", "z-index: 2; position:absolute;");
  canvas1.width = 800;
  canvas1.height = 600;

  canvas2.setAttribute("style", "z-index: 10; position:relative;");
  canvas2.width = 800;
  canvas2.height = 600;

  canvas4.setAttribute("style", "z-index: 3; position:relative;");
  canvas4.width = 800;
  canvas4.height = 600;

  canvas3.setAttribute("style", "z-index: 1; position:relative;");
  canvas3.width = 1230;
  canvas3.height = 610;

  //INICIALIZACION DE LAYER BOTTOM 
  var imagen = new Image();
  imagen.src = "img/pockemon.png";

  imagen.onload = function () {
    map.drawImage(imagen, 180, 10, 450, 180);
  }  

  //INICIALIZACION DE LAYER TOP 
  var font = new FontFace('pokemon', 'url(fonts/PokemonHollow.ttf)');
    font.load().then(function (loadedFont) {
    document.fonts.add(loadedFont);
    
    startofplaceX = -680;
    startofplaceY = -505;

    map.font = '30px pokemon';
    map.fillText('1.- J U E G O    N U E V O', 180, 500);
    map.fillText('2 -  S A L I R', 180, 550);
    
  }); 



  //DIFINCION DE ELEMENTOS DINAMICOS
  var myImage = new Image();
  myImage.src = "img/player/left2.png";   
  myImage.onload = function () {
                //this.x = startofplaceX;
                //this.y = startofplaceY;
                //players.drawImage(myImage, startofplaceX, startofplaceY, 50, 50);                
                //players.font = 'bold 20px arial';
                //players.fillText(this.name, this.x , this.y);
            }

//INTERACCION CON MENU
canvas2.addEventListener("click", function(event) {
  var x = event.clientX - canvas2.offsetLeft;
  var y = event.clientY - canvas2.offsetTop;

if(playername){

    if(entradaJugador === 0){
      if (x >= 55 && x <= 489 && y >= 470 && y <= 504) {
        map.clearRect(0, 0, canvas1.width, canvas1.height)

       
        intro.pause();
        //house1_Views();
        //springTown_views()
        house1_Views(-900,-535)
        //mover(650, 280, 1);
        entradaJugador = 1;
      }
    }
  }
});
            

const city = ({name = 'Principal', x = null, y = null, width = null, height = null, routeImage = null}) => ({

name,
x,
y,
width,
height,
routeImage,

          draw () {

            //map.clearRect(0, 0, canvas1.width, canvas1.height);
            //players.clearRect(0, 0, canvas2.width, canvas2.height);

              var myImage = new Image();
              myImage.src = routeImage;
              if(globalvar === 99){   
                    myImage.onload = function () {
                        
                      map.clearRect(0, 0, canvas1.width, canvas1.height);
                      canvasnpc.clearRect(0, 0, canvas4.width, canvas4.height);
                      players.clearRect(0, 0, canvas2.width, canvas2.height);
                      
                        map.drawImage(myImage, 0, 0, 800, 600);
                    }  
                } else if(combate === true){
                    myImage.onload = function () {
                          
                          map.clearRect(0, 0, canvas1.width, canvas1.height);
                          canvasnpc.clearRect(0, 0, canvas4.width, canvas4.height);
                          players.clearRect(0, 0, canvas2.width, canvas2.height);
                          
                            map.drawImage(myImage, 0, 0, 800, 600);
                        }  

                } else {
                myImage.onload = function () {

                    map.drawImage(myImage, x, y, 2000, 1800);

                } 
              }
                console.log(x,y)

              }
 
})

const player = ({name = 'player', x = 0, y = 0, width = 130, height = 100, routeImage = null, speed = 5, location = 1}) => ({

name,
x,
y,
width,
height,
location,
speed: 5,
routeImage,
            draw () {
 //var myImage = new Image();
 // myImage.src = routeImage;  
           // myImage.onload = function () {
                //this.x = startofplaceX;
                //this.y = startofplaceY;
                var pasosX = ((startofplaceX / 2) % 2);
                var pasosY = ((startofplaceY / 2) % 2);
                
                switch(direccion){

                  case 1:  
                        if(pasosX == 0){
                        myImage.src = "img/player/left1.png";
                      } else {
                        myImage.src = "img/player/left2.png";
                      }

                      break;

                      case 2:  
                        if(pasosY == 0){
                        myImage.src = "img/player/up1.png";
                      } else {
                        myImage.src = "img/player/up2.png";
                      }
                      
                      break;

                      case 3:  
                        if(pasosX == 0){
                        myImage.src = "img/player/right1.png";
                      } else {
                        myImage.src = "img/player/right2.png";
                      }
                      
                      break;

                      case 4:  
                        if(pasosY == 0){
                        myImage.src = "img/player/down1.png";
                      } else {
                        myImage.src = "img/player/down2.png";
                      }
                      
                      break;


                }

                players.clearRect(0, 0, canvas1.width, canvas1.height)
                players.drawImage(myImage, x, y, 50, 50);
                
                players.shadowOffsetX = 3;
                players.shadowOffsetY = 3;
                players.shadowBlur = 4;
                players.shadowColor = "rgba(1, 1, 3, 0.8)"; 
                players.font = 'bold 25px arial';
                players.fillStyle = "white"
                players.fillText(playername, this.x -10 , this.y -5);
                console.log("COORDENADA X (" + firstplayer.x + ") Y (" + firstplayer.y + ")");
           // } 
          }
})

const npc = ({name = 'hola', x = 0, y = 0,  npcrouteImage = null, speed = 5}) => ({

name,
x,
y,
location,
speed: 5,
npcrouteImage,
            draw () {
              
                var npcmyImage = new Image();
                npcmyImage.src = npcrouteImage;  
                npcmyImage.onload = function () {
                              //this.x = startofplaceX;
                              //this.y = startofplaceY;
                
                canvasnpc.clearRect(0, 0, canvas2.width, canvas2.height);
                canvasnpc.drawImage(npcmyImage, x, y, 50, 50);                
                canvasnpc.font = 'bold arial 20px';
                canvasnpc.shadowOffsetX = 3;
                canvasnpc.shadowOffsetY = 3;
                canvasnpc.shadowBlur = 4;
                canvasnpc.shadowColor = "rgba(1, 1, 3, 0.8)"; 
                canvasnpc.fillStyle = "white"
                canvasnpc.fillText(this.name, 120 , 270);
                

            } 
          }
})

const pokemones = ({pokemonname = 'hola', x = 0, y = 0,  pokemonrouteImage = null, tipo = null}) => ({

pokemonname,
x,
y,
pokemonrouteImage,
tipo,

            draw () {
            var pokemonmyImage = new Image();
            pokemonmyImage.src = pokemonrouteImage;  
            pokemonmyImage.onload = function () {
                          //this.x = startofplaceX;
                          //this.y = startofplaceY;
                if(tipo === 2){

                  players.clearRect(400, 0, 400, 600)

                } else if(tipo === 1) {

                  players.clearRect(0, 0, 400, 600);
                  //Aqui vamos a limpiar el otro personaje

                }
                
            
                players.drawImage(pokemonmyImage, x, y, 300, 300);                
                //map.font = 'bold 20px';
                //map.fillText(this.name, 160 , 320);
            } 

            
          }
          
});


const freameleft = ({framename = null, x = null, y = null, width = null, height = null, freamerouteImage = null, fight = false, freamePlayer = null, freameRival = null}) => ({

framename,
x,
y,
width,
height,
fight,
freamerouteImage,
freamePlayer,
freameRival,

          draw () {

            if(fight === true){

                framecanvas.clearRect(0, 0, canvas3.width, canvas3.height)
                
                var framemyImage = new Image();
                framemyImage.src = "img/freame/freamepoke.png"; 

                framemyImage.onload = function () {
                framecanvas.drawImage(framemyImage, width, height, canvas3.width,canvas3.height);
                    
                framecanvas.font = 'bold 20px pokemon';
                framecanvas.fillStyle = "white"
                framecanvas.fillText(`Rival: ${freameRival.nombre}`, 65, 50);
                framecanvas.fillText(`Nivel: ${freameRival.nivel}`, 65, 80)

                framecanvas.fillText(`Pokemon: ${freamePlayer.nombre}`, 180, 450);
                framecanvas.fillText(`Nivel: ${freamePlayer.nivel}`, 185, 480)
                framecanvas.fillText("TEXT", 10, 550);


                }

                } else {
                
                    framecanvas.clearRect(0, 0, canvas3.width, canvas3.height)
                    var framemyImage = new Image();
                    framemyImage.src = "img/freame/freamepoke2.png";   

                    framemyImage.onload = function () {
                    framecanvas.drawImage(framemyImage, width, height, canvas3.width,canvas3.height);
                    framecanvas.font = '  20px pokemon';
                    framecanvas.fillStyle = "white"
                    framecanvas.fillText("Carlos Rodriguez Games ™.", 60, 600);
            
                    }

                  }
              }
 
});

//En este espacio vamos a crear el marco para informacion del jugador
function freame(name, img, fights,freamePlayer,freameRival){
  
framespring = freameleft({

      framename: name,
      width: 0,
      height: 0,
      fight: fights,
      freamePlayer: freamePlayer,
      freameRival: freameRival,
      freamerouteImage: img,

  });

  framespring.draw()

}
freame()




const my_house = city({

  name            : 'myHouse',
  with            : 0,
  height          : 0,
  routeImage      : "img/house/myhouse.png"
});

const houseTeacher = city({

  name            : 'teacherHouse',
  with            : 0,
  height          : 0,
  routeImage      : "img/house/house_teacher2.png",

});

//En este apartados vamos a crear los mundos
const springTown = city({

  name            : 'SpringTown',
  width           : 0,
  height          : 0,
  routeImage      : "img/puebloprimavera.png"

});

const pallettown = city({

  name            : 'pallettown',
  width           : 0,
  height          : 0,
  routeImage      : "img/pallettown.png"

});

const shadowVille = city({

  name            : 'shadowville',
  with            : 0,
  height          : 0,
  routeImage      : "img/shadowville.png",

});

const selectPokemon = city({

name            : 'SelectPokemon',
with            : 0,
height          : 0,
routeImage      : "img/startpokemon.png",

});

//vamos a definir el lugar donde los personaje va a pelear
const arena_forest = city({

name            : 'arena1',
with            : 0,
height          : 0,
routeImage      : "img/arenas/arena.png",


});

//Aqui se va a definir los objetos de los jugadores.
var firstplayer;

function mover(x, y, w) {


ciudad = city({

name            : 'SpringTown',
x               : x,
y               : y,
routeImage      : global_map

}); 

 firstplayer = player({

  name            :    "Carlos",
  x               :     350,
  y               :     290,
  routeImage      :    "img/player.png",
  speed           :    5,
  location        :    w

}); 

firstplayer.draw();
ciudad.draw()

//COORDENADAS DEL JUEGO
var coordinates = document.getElementById("coordinates");
coordinates.innerText = `Coordenadas: X: ${startofplaceX} Y: ${startofplaceY}`

}


//Aqui se va a definir los npc

var mother;

function mothernpc(x, y, w) {

mother = npc({

  name            : "Hoenn",
  x               :  x,
  y               :  y,
  npcrouteImage   : "img/npc/motherleft.png",
  speed           :  5,
  location        :  w

});
mother.draw();

}

var teacher;

function teachernpc(x,y){
  
teacher = npc({

  name            : "OAK",
  x               : x,
  y               : y,
  speed           : 5,
  npcrouteImage   : "img/npc/teacherdown1.png"

});
teacher.draw()
  
}

// Aqui estaremos definiendo los pokemones

var optimus_image;
var myVar;

function optimus_pk(x,y){
  
   optimus_image = pokemones({

  pokemonname        : "optimus",
  x                  : x,
  y                  : y,
  pokemonrouteImage  : "img/pokemons/optimus.png",
  tipo               : 2

});

if (ataq) {

myVar = setTimeout(function () {
  
  ataq = false; pokemonG_player[0].atacar(optimus)

}, 800);
  }
   else {

      clearTimeout(myVar);
      optimus_image.draw();

    ataq = false;

}

}




var alastor_image;

function alastor_pk(x,y){
  
 alastor_image = pokemones({

  pokemonname        : "alastor",
  x                  : x,
  y                  : y,
  pokemonrouteImage  : "img/pokemons/alastor.png",
  tipo               : 1

});

alastor_image.draw()

}

var balsaur_image;

function balsaur_pk(x,y){
  
  balsaur_image = pokemones({

  pokemonname        : "balsaur",
  x                  : x,
  y                  : y,
  pokemonrouteImage  : "img/pokemons/balsaur.png",
  tipo               : 1

});

balsaur_image.draw()

}

var squirtle_image;

function squirtle_pk(x,y){
  
  squirtle_image = pokemones({

  pokemonname        : "squirtle",
  x                  : x,
  y                  : y,
  pokemonrouteImage  : "img/pokemons/squirtle.png",
  tipo               : 1

});

squirtle_image.draw()

}

var charmander_image;

function charmander_pk(x,y){
  
  charmander_image = pokemones({

  pokemonname        : "charmander",
  x                  : x,
  y                  : y,
  pokemonrouteImage  : "img/pokemons/charmander.png",
  tipo               : 1

});

charmander_image.draw()

}



//Aqui estan las funciones que nos permitira mostrar el mundo de forma dinamica
//Esta limpia pantalla y carga el mapa

function springTown_views(inicio = true){


      if(inicio === true){

        startofplaceX = -210;
        startofplaceY = -1050;

      } else if(globalvar === 11) {

        startofplaceX = -1050;
        startofplaceY = -510;

      }

      globalvar = 1;

      barraVidaenemy.style.display = "none";
      barraVidaplayer.style.display = "none";
      combate = false

      map.clearRect(0, 0, canvas1.width, canvas1.height);
      players.clearRect(0, 0, canvas2.width, canvas2.height);
      framecanvas.clearRect(0, 0, canvas3.width, canvas3.height);
      canvasnpc.clearRect(0, 0, canvas4.width, canvas4.height);
      //springTown.draw();
      selectpokemon_audio.pause()
      freame("Pueblo Paleta", "img/freame/1.png");
      natural.pause();
      pokemon_battle.pause();
      springtown_audio.play();
      mover(startofplaceX, startofplaceY, globalvar);
      global_map = "img/starfall.png"
      
}

function palletTown_views(x,y){

      players.clearRect(0, 0, canvas1.width, canvas1.height);
      globalvar = 2;
/*       startofplaceX = 750;
      startofplaceY = 170; */
      startofplaceX = x;
      startofplaceY = y;
      
      map.clearRect(0, 0, canvas1.width, canvas1.height);
      players.clearRect(0, 0, canvas2.width, canvas2.height);
      framecanvas.clearRect(0, 0, canvas3.width, canvas3.height);
      //pallettown.draw();
      freame("Aldea Paleta", "img/freame/2.png");
      springtown_audio.pause();
      naturalnight.pause();
      natural.play();
      global_map = "img/pallettown.png"
      mover(startofplaceX, startofplaceY, globalvar);

}

function shadowVille_views(x,y){

      players.clearRect(0, 0, canvas1.width, canvas1.height);
      globalvar = 3;
      startofplaceX = x;
      startofplaceY = y;
      map.clearRect(0, 0, canvas1.width, canvas1.height);
      players.clearRect(0, 0, canvas2.width, canvas2.height);
      natural.pause();
      springtown_audio.pause();
      naturalnight.play();
      global_map = "img/progresscity.png"
      mover(startofplaceX, startofplaceY, globalvar);
      
}
moving = true
u = 160;
p = 320;


function house1_Views(x,y){

      globalvar = 10;
      map.clearRect(0, 0, canvas1.width, canvas1.height);
      players.clearRect(0, 0, canvas2.width, canvas2.height);
      //my_house.draw()
      startofplaceX = x
      startofplaceY = y

      mothernpc(-420,-695,11)
/*       setInterval(() => {

        mothernpc(u,p,11)
        if(moving){
          u++
          console.log(u,p)
            p--
                if(u === 190){moving = false}

          } else {
              u--
                p++
                    if(u <= 160){moving = true}
                }
                

      }, 100);
  */

      global_map = "img/house/myhouse.png"
      mover(startofplaceX, startofplaceY, globalvar);


}

function houseTeacher_views(){
      
      globalvar = 11;
      startofplaceX = -420
      startofplaceY = -1255
      map.clearRect(0, 0, canvas1.width, canvas1.height);
      players.clearRect(0, 0, canvas2.width, canvas2.height);
      houseTeacher.draw();
      global_map = "img/house/house_teacher2.png";
      mover(startofplaceX, startofplaceY, globalvar);
      //teachernpc(-455,-105)

}

function selectPokemon_views(){

globalvar = 99;
map.clearRect(0, 0, canvas1.width, canvas1.height);
canvasnpc.clearRect(0, 0, canvas4.width, canvas4.height);
players.clearRect(0, 0, canvas2.width, canvas2.height);
springtown_audio.pause()
motivation.pause()
selectpokemon_audio.play()
//selectPokemon.draw()

mover(0,0,99)
global_map = "img/startpokemon.png"

}

//Esta funcion nos permite visualizar la pelea de los pokemones, y recibira como argumento,
//la arena que es de donde se va a pelear, el pokemonplayer que es el jugador, y el rival

var ataq = false;
function arenafight(arena,pokemonplayer,rival){
        
        let z = 0
        let f = 300
        moving = true
        combate = true;
        globalvar = 21;
        pokemon_battle.play()
        springtown_audio.pause()
        selectpokemon_audio.pause()
        map.clearRect(0, 0, canvas1.width, canvas1.height);
        players.clearRect(0, 0, canvas2.width, canvas2.height);
        barra_Salud("Salud", "Rival")
        mostrarMenu()

        //Aqui es donde se dibujara el fondo de la arena, es dinamico.
        arena.draw() 
        
//Aqui se estara definiendo el movimiento de los pokemon a la hora de pelear
//FUNCION IMPORTANTE PARA PELEAR LOS DOS POKEMONES DE FORMA DINAMICA

 var animarPokemon = setInterval(function(){
    if(combate === true){
          rival(450, z)
          pokemonplayer(130, f)
        

      if(moving){
          z++
            f--
                if(z === 100){moving = false}

          } else {
              z--
                f++
                    if(z <= 0){moving = true}
                }

        } else {
          clearInterval(animarPokemon);
        }} , 60)         
 


      setInterval(function(){

        alastor.atacar(charmander)

      }, 5000)
      
/*        setInterval(function(){

        
        charmander.atacar(alastor)

      }, 5000)    */ 
    
    } 
  






//Aqui vamos a definir la clase para crear los pokemones
class pokemon {

      constructor(nombre, tipo, nivel, experiencia, hp, ataque, defensa, velocidad, movimientos){

        this.nombre       =   nombre
        this.tipo         =   tipo
        this.nivel        =   nivel
        this.experiencia  =   experiencia
        this.hp           =   hp
        this.ataque       =   ataque
        this.defensa      =   defensa
        this.velocidad    =   velocidad
        this.movimientos  =   movimientos

      }

      atacar(rival){

        function calcular_efectividad(tipo_atacante, tipo_oponente) {
          
          if (tipo_atacante === 'Fuego' && tipo_oponente === 'Hierba') {
            return 2; 
          } else if (tipo_atacante === 'Fuego' && tipo_oponente === 'Agua') {
            return 0.5; 
          } else if (tipo_atacante === 'Agua' && tipo_oponente === 'Fuego') {
            return 2;
          } else if (tipo_atacante === 'Agua' && tipo_oponente === 'Hierba') {
            return 0.5;
          } else if (tipo_atacante === 'Hierba' && tipo_oponente === 'Agua') {
            return 2;
          } else if (tipo_atacante === 'Hierba' && tipo_oponente === 'Fuego') {
            return 0.5;
          } else {
            return 1; 
          }
        }
          
        let efectividad = calcular_efectividad(this.tipo, rival.tipo);
        let damage = Math.floor(((((2 * this.nivel) / 5) + 2) * this.ataque * efectividad) / rival.defensa / 50) + 2;
        rival.hp -= damage;
        //Esta parte nos permitira actualizar el estado del pokemon en el canvas izquierdo
        freame("Arena Spring", null, true,alastor,charmander)

        //Aqui se va a mostrar la barra del enemigo y el jugador
        
        barra_Salud(this.hp,rival.hp)

         if(rival.hp <= 0){
          rival.hp = 50
          correrMenu()  
          //springTown_views(false)
          shadowVille_views(-540,-290)
          setTimeout(() => {
            showDialog(systemNotification.parrafo1[3])
          }, 5000);
          
        } 

      }
        
      
            

      subir_nivel(){
      //aqui vamos a definir la logica para subir nivel

      }

      aprender_movimiento(){
      //aqui la logica para aprender movimiento

      }

}



//Aqui se va a crear los pokemones para pelear, llamara la clase pokemon (no imagen)

var optimus= new pokemon(
  "optimus",
   "Fuego",
    5,
    0,
    100,
    52,
    43,
    65,
    ["Ascuas", "Arañazo", "Malicioso", "Gruñido"]  
);

var alastor = new pokemon(
  "Alastor",
  "Agua",
    6,
    0, 
    40,
    50,
    41,
    66,
    ["Tornado", "Arañazo", "Malicioso", "Gruñido"]
);

var charmander = new pokemon(
  "Charmander",
  "Fuego",
    6,
    0, 
    50,
    60,
    36,
    56,
    ["Llama", "Flecha", "Malicioso", "Gruñido"]
);

var squirtle = new pokemon(
  "Squirtle",
  "Hierba",
    5,
    0, 
    55,
    62,
    26,
    56,
    ["Hercules", "Zumbido", "Malicioso", "Gruñido"]
);

var balsaur= new pokemon(
  "Balsaur",
  "Hierba",
    5,
    0, 
    45,
    52,
    26,
    56,
    ["Hercules", "Zumbido", "Malicioso", "Gruñido"]
);


//Variables para los pokemones 

current_player = alastor; //Tambien depende el pokemon que seleccione el jugador
current_enemy  = charmander; //Aqui se volvera dinamico para cambiar

if(is_talking === false){

window.addEventListener("keydown", (event) => {
 //event.preventDefault();
    //CAPTURA DE COORDENADAS
    if(playername){
      switch(event.key){
      case 'ArrowUp':
          direccion = 2;

                if(upflag === 1){ //PARA COLICION, SI SE DETECTA NO SE MUEVE
                  startofplaceY += 5; // Mover hacia arriba
                  
                  walking.play()
                    }
                  

              break;

        case 'ArrowDown':
            direccion = 4;
   
                  if(downflag === 1){ //PARA COLICION, SI SE DETECTA NO SE MUEVE
                  startofplaceY -= 5; // Mover hacia abajo
                  upflag = 1
                  walking.play()
                  }
              

              break;

        case 'ArrowLeft':
            direccion = 1;

                  if(leftflag === 1){ ///PARA COLICION, SI SE DETECTA NO SE MUEVE
                  startofplaceX += 5; // Mover hacia la izquierda
                  walking.play()
                    }
                  

          break;

          
        case 'ArrowRight':
            direccion = 3;

                  if(rightflag === 1){ //PARA COLICION, SI SE DETECTA NO SE MUEVE
                  startofplaceX -= 5; // Mover hacia la derecha
                  leftflag = 1
                  walking.play()
                  }
                
          break;

        default:

          break;

    }
      
      if(entradaJugador === 1){
      mover(startofplaceX, startofplaceY, globalvar);
      
      //Control de limite del mundo 1 Ciudad paleta
      if(globalvar === 1){

      if(startofplaceX > 170){leftflag = 0} else {leftflag = 1}
      if(startofplaceY > -10){upflag = 0} else {upflag = 1} 
      if(startofplaceX < -1210){rightflag = 0} else {rightflag = 1} 
      if(startofplaceY < -1230){downflag = 0} else {downflag = 1}
    } else if(globalvar === 2){
      //Control de limite del mundo 1 Aldea Paleta
      if(startofplaceX > 160){leftflag = 0} else {leftflag = 1}
      if(startofplaceY > 5){upflag = 0} else {upflag = 1}
      if(startofplaceX < -1320){rightflag = 0} else {rightflag = 1} 
      if(startofplaceY < -1195){downflag = 0} else {downflag = 1}

    } else if(globalvar === 3){
      //Control de limite del mundo ciudad 
      if(startofplaceX > 70){leftflag = 0} else {leftflag = 1}
      if(startofplaceY > -110){upflag = 0} else {upflag = 1}
      if(startofplaceX < -1530){rightflag = 0} else {rightflag = 1} 
      if(startofplaceY < -1410){downflag = 0} else {downflag = 1}

    } else if(globalvar === 10){
     //Control de limite del mundo mi casa
      if(startofplaceX > -280){leftflag = 0} else {leftflag = 1}
      if(startofplaceY > -355){upflag = 0} else {upflag = 1}
      if(startofplaceX < -980){rightflag = 0} else {rightflag = 1} 
      if(startofplaceY < -1035){downflag = 0} else {downflag = 1}

    } else if(globalvar === 11){
     //Control de limite del mundo casa del profesor oak
      if(startofplaceX > -170){leftflag = 0} else {leftflag = 1}
      if(startofplaceY > -90){upflag = 0} else {upflag = 1}
      if(startofplaceX < -710){rightflag = 0} else {rightflag = 1} 
      if(startofplaceY < -1330){downflag = 0} else {downflag = 1}

    }
      

    }
  } 
        
    //players.clearRect(0, 0, canvas1.width, canvas1.height);

    if (globalvar === 1){

              if (startofplaceX > 130 && startofplaceY < -115 && startofplaceY > -265){
                    
                if(playerBadges === 2){
                      
                      playVideo("/video/loadingmap.mp4")
                      palletTown_views(-1500,-275)

                  } else {

                    showDialog(["Hey, espera! ¿A dónde crees que vas? Es peligroso aventurarte en ese mundo sin un Pokémon que te proteja.","Ven al laboratorio muchacho te enseñare algo", "Dirigete al laboratorio del profesor en la coordenada X: -1055 Y: -500"])
                    motivation.play()
                    springtown_audio.pause()
                    //teachernpc(280, 40)

                  }
              }

               if (startofplaceX < -160 && startofplaceX > -255 && startofplaceY === -1010){

                      house1_Views(-640,-960)
                      playVideo("/video/loadingmap.mp4")

                    
              } 

              if (startofplaceX < -1000 && startofplaceX > -1100 && startofplaceY === -470){
                  
                      houseTeacher_views() //CASA DEL PROFESOR OAK
                      playVideo("/video/loadingmap.mp4")

              }

        }

    if (globalvar === 2) {
      
              if (startofplaceX === 760){

                  changeworld = confirm("¿Deseas regresar a Ciudad Paleta?")
                      if(changeworld){

                        springTown_views(false)
                        playVideo("/video/loadingmap.mp4")

                      }
              }

              if(startofplaceX === 165 && startofplaceY < -100 && startofplaceX > -255){

                       shadowVille_views(-1350,-730);
                       playVideo("/video/loadingmap.mp4")

              }
              
              if(startofplaceX > -1255 && startofplaceY < -155 && startofplaceY > -460){
                  
              //fightDialog(["Un pokemon te ha encontrado!, tienes que luchar para defenderte"], playVideo, run1)
                  
              //ESTA FUNCION POR EL MOMENTO, NOS EJECUTARA UNA PELEA UNA VEZ SE REPRODUCE LA IMAGEN CARGANDO
              //ESTO ES PARA QUE LA PELEA SE EJECUTE DESPUES DE 5 SEG Y NO CON EL VIDEO, FUNCION TEMPORAL PARA 
              //DAR SOLUCION AL MISMO, POR LO QUE NO ES FIJA, DE TENER MEJOR SOLUCION APLICARLA.
/*                  function run1(){

                    setTimeout(() => {
                      
                      arenafight(arena_forest,pokemonG_player[1],optimus_pk)
                      freame("Arena Spring", "img/freame/freamepoke.png", true,pokemonG_player[1],optimus)

                      }, 5000);
                    
                    } */
                  
              }
        }

    if(globalvar === 3){

              if(startofplaceX === 760 && startofplaceY > 290 && startofplaceY < 320){
                  
                  changeworld = confirm("¿Deseas regresar a aldea paleta?")
                    if(changeworld){
                          
                      palletTown_views(0,150)
                      playVideo("/video/loadingmap.mp4")

                    }
              }

              if(startofplaceX < -490 && startofplaceX > -630 && startofplaceY === -190){

                if(playerBadges === 2){
                naturalnight.pause()
                playVideo("/video/arenapresentacion.mp4")
                playerBadges = 3; 
                function run1(){
                
                  setTimeout(() => {
                    
                    arenafight(arena_forest,pokemonG_player[1],optimus_pk)
                    freame("Arena Spring", "img/freame/freamepoke.png", true,pokemonG_player[1],optimus)

                    }, 56000);
                  }
                }
                run1()

              }

              if(startofplaceX < -1330 && startofplaceX > -1490){

                showDialog(nps_city.parrafo1)

              }
      }

    if (globalvar === 10){

                  //conversaciones
                  if(startofplaceX > -475){

                    if(playerBadges === 0){

                      showDialog(conversacionMadre.parrafo1)  
                      playerBadges = 1

                      } else {
                        showDialog(["Hola hijo, no olvides la comida, luego me cuentas como te fue."])
                      }

                  }

              if (startofplaceX < -555 && startofplaceX > -710 && startofplaceY < -980){

                      playVideo("/video/loadingmap.mp4")
                      springTown_views()
                    
              }
        }

    if (globalvar === 11){

              if (startofplaceX < -380 && startofplaceX > -480 && startofplaceY < -1310 && startofplaceY > -1360){
  
                      springTown_views(false)
                      playVideo("/video/loadingmap.mp4")
                    
              }
              
            if(startofplaceX < -90 && startofplaceX > -280 && startofplaceY < -170 && startofplaceY > - 245){

              if(primerPokemon === false){

                selectPokemon_views()
                canvas2.addEventListener("click", function(event) {
                var x = event.clientX - canvas2.offsetLeft;
                var y = event.clientY - canvas2.offsetTop;
                
                  if(!pokemonG_player[0]){

                      //Aqui es donde se va a seleccionar los pokemones
                      if (x >= 0 && x <= 270 && y >= 100 && y <= 450) {

                          pokemonG_player = [balsaur,balsaur_pk]
                          showDialog([`Felicidades! ${playername} haz obtenido tu pokemon,
                           su nombre es Balsaur, cuidalo mucho, ve y disfruta tu aventura`])
                          
                        } else if (x >= 280 && x <= 530 && y >= 100 && y <= 450){

                          pokemonG_player = [squirtle,squirtle_pk]
                          showDialog([`Felicidades! ${playername} haz obtenido tu pokemon,
                           nombre es Squirtle, cuidalo mucho, ve y disfruta tu aventura`])

                        } else if (x >= 540 && x <= 760 && y >= 100 && y <= 450){
                          
                          pokemonG_player = [charmander,charmander_pk]
                          showDialog([`Felicidades! ${playername} haz obtenido tu pokemon,
                          su nombre es Charmander, cuidalo mucho, ve y disfruta tu aventura`])
                          
                        }
                        houseTeacher_views()
                        playerBadges = 2;
                        primerPokemon = true;
                    }
                });
              }
          }

          if(startofplaceX < -435 && startofplaceX > -460 && startofplaceY < -115){
                showDialog(oak_conversation.parrafo1)
            }
      }
  });
  
}
