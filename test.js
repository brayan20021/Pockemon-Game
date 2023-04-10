let primer_pokemon = 0;
let seleccionPokemon;

const pokemon_select = ({name = 'Principal', x = null, y = null, width = null, height = null, routeImage = null}) => ({

    name,
    x,
    y,
    width,
    height,
    routeImage,
    
              draw () {
    
                    var myImage = new Image();
                    myImage.src = routeImage;   
                    myImage.onload = function () {
    
                    selectcanvas.drawImage(myImage, width, height, 800, 600);
                    selectcanvas.strokeStyle = "blue";
                    selectcanvas.fillStyle = "rgba(255, 255, 255, 0.5)";
    
                    selectcanvas.fillRect(300, 200, 200, 200);
                    selectcanvas.strokeRect(300, 200, 200, 200);
    
    
                    } 
    
                    
                  }
     
    })
    