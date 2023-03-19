// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).



	var juagador1;
	// *********************************************INICIO DEL PROGRMA*****************************************
	var i = new Number();
	var cont = new Number();
	var opc = new Number();
	var opc1 = new Number();
	var opc2 = new Number();
	var opc3 = new Number();
	var opc4 = new Number();
	var opc5 = new Number();
	var opc6 = new Number();
	var win = new Number();
	var opcmipoke = new Number();
	var cantidadpoke = new Number();
	var lvl = new Number();
	var nombre = new String();
	var jugador1 = new String();
	var enemigo = new String();
	var enemigo1 = new String();
	var saliropc = new String();
	var salir = new Boolean();
	// Comienzo del juego
	var nombre = new Array(4);
	var enemigo = new Array(8);
	cont = 1;
	win = 0;
	nombre[0] = "GUALDO";
	nombre[1] = "ASH";
	nombre[2] = "JAIME";
	enemigo[7] = "AZUL";
	enemigo[0] = "GARY";
	enemigo[1] = "JUAN";
	enemigo[3] = "BENJAMIN";
	enemigo[4] = "EQUIPO XxX";
	enemigo[5] = "ANONIMO";
	enemigo[6] = "CARLOS";
	// *****************************************************************************************
	// *************************************ELEECION DE POKEMONES*******************************
	// *****************************************************************************************
	var nombrepokemon = new String();
	var pokemon = new String();
	var p = new Number();
	var z = new Number();
	// USUARIO PARTE X
	var mipoke = new String();
	var mipoket1 = new String();
	var mipoket2 = new String();
	var mipoket3 = new String();
	var mipoket4 = new String();
	var mipoket5 = new String();
	var mipoket6 = new String();
	// USUARIO PARTE X
	var mipokeh1 = new Number();
	var mipokeh2 = new Number();
	var mipokeh3 = new Number();
	var mipokeh4 = new Number();
	var mipokeh5 = new Number();
	var mipokeh6 = new Number();
	var error = new Number();
	var err = new Number();
	// CPU PARTE XI
	var enepoke = new String();
	var enepoket1 = new String();
	var enepoket2 = new String();
	var enepoket3 = new String();
	var enepoket4 = new String();
	var enepoket5 = new String();
	var enepoket6 = new String();
	// CPU PARTE XI
	var enepokeh1 = new Number();
	var enepokeh2 = new Number();
	var enepokeh3 = new Number();
	var enepokeh4 = new Number();
	var enepokeh5 = new Number();
	var enepokeh6 = new Number();
	var eleccionpoke = new Number();
	var error2 = new Number();
	var minivel = new Number();
	var enenivel = new Number();
	var minivel = new Array(6);
	var enenivel = new Array(6);
	// CPU PARTE XI
	var enepoke = new Array(6);
	var enepoket1 = new Array(2);
	var enepokeh1 = new Array(5);
	var enepoket2 = new Array(2);
	var enepokeh2 = new Array(5);
	var enepoket3 = new Array(2);
	var enepokeh3 = new Array(5);
	var enepoket4 = new Array(2);
	var enepokeh4 = new Array(5);
	var enepoket5 = new Array(2);
	var enepokeh5 = new Array(5);
	var enepoket6 = new Array(2);
	var enepokeh6 = new Array(5);
	// USUARIO PARTE X
	var mipoke = new Array(6);
	var mipoket1 = new Array(2);
	var mipokeh1 = new Array(5);
	var mipoket2 = new Array(2);
	var mipokeh2 = new Array(5);
	var mipoket3 = new Array(2);
	var mipokeh3 = new Array(5);
	var mipoket4 = new Array(2);
	var mipokeh4 = new Array(5);
	var mipoket5 = new Array(2);
	var mipokeh5 = new Array(5);
	var mipoket6 = new Array(2);
	var mipokeh6 = new Array(5);
	var nombrepokemon = new Array(80);
	var pokemon = new Array(7);
	var error = new Array(6);
	var error2 = new Array(6);
	// Asignar pokemon vacio
	mipoke[0] = "";
	// ELECCION DE POKEMON usuario
	error[5] = 0;
	error[0] = 0;
	error[1] = 0;
	error[2] = 0;
	error[3] = 0;
	error[4] = 0;
	// ELECCION DE POKEMON cpu
	error2[5] = 0;
	error2[0] = 0;
	error2[1] = 0;
	error2[2] = 0;
	error2[3] = 0;
	error2[4] = 0;
	// NO EXISTE ESTA POSICION DE POKEMON
	nombrepokemon[0] = "";
	// *************************************************************FIN ELECCION DE POKEMON**************************
	// **************************************************OPCION 2***************************************************
	// *********************************************** opcion1 1v1 *************************************************
	// descripcion: eleccion de pokemon que se enfrenta al 1vs1
	// USUARIO 
	var misaludpoke = new Number();
	var misalud = new Number();
	var miataquepoke = new Number();
	var midefensapoke = new Number();
	var mivelocidadpoke = new Number();
	var miespecialpoke = new Number();
	var minombrepoke = new String();
	var mitipo = new String();
	var mitipo = new Array(2);
	var misalud = new Array(6);
	// CPU
	var enesaludpoke = new Number();
	var enesalud = new Number();
	var eneataquepoke = new Number();
	var enedefensapoke = new Number();
	var enevelocidadpoke = new Number();
	var eneespecialpoke = new Number();
	var eneazar = new Number();
	var enenombrepoke = new String();
	var enetipo = new String();
	var enetipo = new Array(2);
	var enesalud = new Array(6);
	// ************************************************************************************************************
	// ************************************BATALLA ASIGNACION******************************************************
	var nombreataque = new String();
	var tipoataque = new String();
	var pp = new String();
	var efectivo = new String();
	var dano = new String();
	var nombreataque = new Array(4);
	var tipoataque = new Array(4);
	var pp = new Array(4);
	var efectivo = new Array(4);
	var dano = new Array(4);
	var nombrea1 = new String();
	var tipoa1 = new String();
	var nombrea2 = new String();
	var tipoa2 = new String();
	var nombrea3 = new String();
	var tipoa3 = new String();
	var nombrea4 = new String();
	var tipoa4 = new String();
	var nombrea5 = new String();
	var tipoa5 = new String();
	var nombrea6 = new String();
	var tipoa6 = new String();
	var ppa1 = new Number();
	var efectivoa1 = new Number();
	var danoa1 = new Number();
	var ppa2 = new Number();
	var efectivoa2 = new Number();
	var danoa2 = new Number();
	var ppa3 = new Number();
	var efectivoa3 = new Number();
	var danoa3 = new Number();
	var ppa4 = new Number();
	var efectivoa4 = new Number();
	var danoa4 = new Number();
	var ppa5 = new Number();
	var efectivoa5 = new Number();
	var danoa5 = new Number();
	var ppa6 = new Number();
	var efectivoa6 = new Number();
	var danoa6 = new Number();
	var contx = new Number();
	var nombrea1 = new Array(4);
	var tipoa1 = new Array(4);
	var nombrea2 = new Array(4);
	var tipoa2 = new Array(4);
	var nombrea3 = new Array(4);
	var tipoa3 = new Array(4);
	var nombrea4 = new Array(4);
	var tipoa4 = new Array(4);
	var nombrea5 = new Array(4);
	var tipoa5 = new Array(4);
	var nombrea6 = new Array(4);
	var tipoa6 = new Array(4);
	var ppa1 = new Array(4);
	var efectivoa1 = new Array(4);
	var danoa1 = new Array(4);
	var ppa2 = new Array(4);
	var efectivoa2 = new Array(4);
	var danoa2 = new Array(4);
	var ppa3 = new Array(4);
	var efectivoa3 = new Array(4);
	var danoa3 = new Array(4);
	var ppa4 = new Array(4);
	var efectivoa4 = new Array(4);
	var danoa4 = new Array(4);
	var ppa5 = new Array(4);
	var efectivoa5 = new Array(4);
	var danoa5 = new Array(4);
	var ppa6 = new Array(4);
	var efectivoa6 = new Array(4);
	var danoa6 = new Array(4);
	var nombree1 = new String();
	var tipoe1 = new String();
	var nombree2 = new String();
	var tipoe2 = new String();
	var nombree3 = new String();
	var tipoe3 = new String();
	var nombree4 = new String();
	var tipoe4 = new String();
	var nombree5 = new String();
	var tipoe5 = new String();
	var nombree6 = new String();
	var tipoe6 = new String();
	var ppe1 = new Number();
	var efectivoe1 = new Number();
	var danoe1 = new Number();
	var ppe2 = new Number();
	var efectivoe2 = new Number();
	var danoe2 = new Number();
	var ppe3 = new Number();
	var efectivoe3 = new Number();
	var danoe3 = new Number();
	var ppe4 = new Number();
	var efectivoe4 = new Number();
	var danoe4 = new Number();
	var ppe5 = new Number();
	var efectivoe5 = new Number();
	var danoe5 = new Number();
	var ppe6 = new Number();
	var efectivoe6 = new Number();
	var danoe6 = new Number();
	var nombree1 = new Array(4);
	var tipoe1 = new Array(4);
	var nombree2 = new Array(4);
	var tipoe2 = new Array(4);
	var nombree3 = new Array(4);
	var tipoe3 = new Array(4);
	var nombree4 = new Array(4);
	var tipoe4 = new Array(4);
	var nombree5 = new Array(4);
	var tipoe5 = new Array(4);
	var nombree6 = new Array(4);
	var tipoe6 = new Array(4);
	var ppe1 = new Array(4);
	var efectivoe1 = new Array(4);
	var danoe1 = new Array(4);
	var ppe2 = new Array(4);
	var efectivoe2 = new Array(4);
	var danoe2 = new Array(4);
	var ppe3 = new Array(4);
	var efectivoe3 = new Array(4);
	var danoe3 = new Array(4);
	var ppe4 = new Array(4);
	var efectivoe4 = new Array(4);
	var danoe4 = new Array(4);
	var ppe5 = new Array(4);
	var efectivoe5 = new Array(4);
	var danoe5 = new Array(4);
	var ppe6 = new Array(4);
	var efectivoe6 = new Array(4);
	var danoe6 = new Array(4);
	var pos = new Number();
	var misaludfija = new Number();
	var mifijopp = new Number();
	var enefijopp = new Number();
	var enesaludfija = new Number();
	var mifijopp = new Array(4);
	var enefijopp = new Array(4);
	// Atques
	var mipp = new Number();
	var enepp = new Number();
	var midano = new Number();
	var enedano = new Number();
	var opcionataque = new Number();
	var eneaumento = new Number();
	var miaumento = new Number();
	var minombreataque = new String();
	var enenombreataque = new String();
	var mitipoa = new String();
	var enetipoa = new String();
	var tipoe = new String();
	var tipox = new String();
	var miestado = new String();
	var miest = new String();
	var eneest = new String();
	var eneestado = new String();
	var minombreataque = new Array(4);
	var enenombreataque = new Array(4);
	var mipp = new Array(4);
	var enepp = new Array(4);
	var mitipoa = new Array(4);
	var enetipoa = new Array(4);
	var enedano = new Array(4);
	var midano = new Array(4);
	var milvl = new Number();
	var enelvl = new Number();
	var mihp = new Boolean();
	var enehp = new Boolean();
	var mitotaldano = new Number();
	var enetotaldano = new Number();
	var mipoderataque = new Number();
	var enepoderataque = new Number();
	var ataquepoke = new Number();
	var enev = new Number();
	var miv = new Number();
	var totalsalud = new Number();
	var enetotalsalud = new Number();
	var b = new Number();
	var v = new Number();
	var e = new Number();
	var mie = new Number();
	var miataque = new String();
	var eneataque = new String();
	// ***** pp Fijo y  salud Fija
	var ppfa1 = new Number();
	var ppfa2 = new Number();
	var ppfa3 = new Number();
	var ppfa4 = new Number();
	var ppfa5 = new Number();
	var ppfa6 = new Number();
	var ppfe1 = new Number();
	var ppfe2 = new Number();
	var ppfe3 = new Number();
	var ppfe4 = new Number();
	var ppfe5 = new Number();
	var ppfe6 = new Number();
	var ppfa1 = new Array(4);
	var ppfa2 = new Array(4);
	var ppfa3 = new Array(4);
	var ppfa4 = new Array(4);
	var ppfa5 = new Array(4);
	var ppfa6 = new Array(4);
	var ppfe1 = new Array(4);
	var ppfe2 = new Array(4);
	var ppfe3 = new Array(4);
	var ppfe4 = new Array(4);
	var ppfe5 = new Array(4);
	var ppfe6 = new Array(4);
	// ************************************************************************************************************
	// RESTANTES
	var paralizadoa = new Boolean();
	var paralizadoe = new Boolean();
	var start = new Boolean();
	paralizadoa = false;
	paralizadoe = false;
	start = false;
	var estadoa = new String();
	var estadoe = new String();
	var estadofe = new String();
	var estadofa = new String();
	var life = new String();
	var k_o = new Number();
	var suerte = new Number();
	var micontwin = new Number();
	var enecontwin = new Number();
	var drenado = new Number();
	var life = new Array(12);
	micontwin = 0;
	enecontwin = 0;
	estadoa = "";
	estadofe = "";
	estadofa = "";
	estadoe = "";
	// ************************************************************************************************************
	// ************************************************************************************************************
	console.log("");
	console.log("  D U O C  2 0 1 6               .::. ");
	console.log("                               .;:** ");
	console.log("                               `");
	console.log("   .:XHHHHk.              db.   .;;.     dH  MX  ");
	console.log("oMMMMMMMMMMM       ~MM  dMMP :MMMMMR   MMM  MR      ~MRMN");
	console.log("QMMMMMb   MMX       MMMMMMP  MX   M~   MMM MMM  .oo. XMMM   �MMM");
	console.log("  `MMMM.  )M> :X!Hk. MMMM   XMM.o   .  MMMMMMM X?XMMM MMM> !MMP");
	console.log("   �MMMb.dM! XM M�?M MMMMMX.`MMMMMMMM~ MM M MM XM `  MX MMX XMM");
	console.log("    ~MMMMM~ XMM. .XM XM` MMMb.~~MMMM~.MMX M  t MMbooMM XM MMMMP");
	console.log("     ?MMM>  YMMMMMM! MM   `?MMRb.    `       !L MMMMM XM  IMMM");
	console.log("      MMMX    MMMM   MM       ~%:            !Mh.  dMI     IMMP");
	console.log("      �MMM.                                                IMX");
	console.log("       ~M!M                                                 BMT");
	console.log("                      A M A R I L L O ");
	console.log("");
	//prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
	return;
	for (i=1;i<=2;i++) {
		console.log("_�___________���");
		console.log("_��__________�__�");
		console.log("�__�_________�___�");
		console.log("�___�________�___�");
		console.log("�____�_______�____������");
		console.log("�_____�______�__________��");
		console.log("�______���__�_��_________�������������");
		console.log("�_____�___��_����________________����");
		console.log("_�___�___��___��___________������");
		console.log("__�__�__�___�_____�___����_�");
		console.log("___�_�_�______________����_�");
		console.log("���__��_________����______�");
		console.log("�___�__�_________@�____�__�");
		console.log("_�___�_�_________________�");
		console.log("__�__�_�________________��");
		console.log("___�_��___________________��");
		console.log("____��_________________��___�");
		console.log("____�_________________�__�___�");
		console.log("___�_________________�____����");
		console.log("__�___________________�");
		console.log("__�____________________�");
		console.log("__�_____��������_______�");
		console.log("___�__��________��____�");
		console.log("___�__�___________�____��");
		console.log("__����_____________��������");
		console.log("Mantenga presionado cualquier boton hasta que carga completo");
		console.log("");
		console.log("                     CARGANDO ",cont,"%");
		cont = cont+5;
		//prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
		
		console.log("_�___________���");
		console.log("_��__________�__�");
		console.log("�__�_________�___�");
		console.log("�___�________�___�");
		console.log("�____�_______�____������");
		console.log("�_____�______�__________��");
		console.log("�______���__�_��_________�������������");
		console.log("�_____�___��_@���________________����");
		console.log("_�___�___��___��___________������");
		console.log("__�__�__�___�_____�___��@�_�");
		console.log("___�_�_�______________�@��_�");
		console.log("���__��_________����______�");
		console.log("�___�__�_________��____�__�___����");
		console.log("_�___�_�_________________�__��__�");
		console.log("__�__�_�________________����__�");
		console.log("___�_��_____________________�� ");
		console.log("____��_________________�����");
		console.log("____�_________________�");
		console.log("___�_________________�");
		console.log("__�___________________�");
		console.log("__�____________________�");
		console.log("__�_____��������_______�");
		console.log("___�__��________��____�");
		console.log("___�__�___________�____��");
		console.log("__����_____________��������");
		console.log("Mantenga presionado cualquier boton hasta que carga completo");
		console.log("");
		console.log("                     CARGANDO ",cont,"%");
		cont = cont+30;
		//prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
		
	}

	do {
		
		console.log("");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  1.-  J U E G O    N U E V O                 |");
		console.log(" |                                              |");
		console.log(" |  2.-  S A L I R                              |");
		console.log(" |                                              |");
		console.log(" @----------------------------------------------@");
		console.log("Eliga una opci�n : ");
		
		opc = Number(prompt());
	} while (!(opc==1 || opc==2 || opc==4 || opc==5 || opc==6));
	if (opc==1 || opc==4 || opc==5 || opc==6) {
		if (opc==4) {
			jugador1 = "Benjamin";
			enemigo1 = "Carlos";	
		}
		if (opc==5) {
			jugador1 = "Carlos";
			enemigo1 = "Gary";
			opc = 4;
			win = 100002312381283;
		}
		if (opc==6) {
			jugador1 = "�e";
			enemigo1 = "Chanchiwagui";
			opc = 4;
			win = 0;
		}
		salir = false;
	}
	if (opc==2) {
		salir = true;
	}
	// Saludos del maestro
	if (opc==1) {
		
		console.log("                           ");
		console.log("                    >MVM");
		console.log("                    M~ ~M ");
		console.log("                   �| _ |");
		console.log("                 __- \\_/-__");
		console.log("                |   ____   \\ ");
		console.log("                | |_|>  |  | |");
		console.log("                |___>___|| |");
		console.log("                  /  _  |<_|");
		console.log("                 |  / \\ \\ ");
		console.log("                 |__| |__\\ ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  �H o l a    a    t o d o s!                 |");
		console.log(" |                                              |");
		console.log(" |  �Bienvenidos al  mundo de POK�MON!          |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("                           ");
		console.log("                    >MVM");
		console.log("                    M~ ~M ");
		console.log("                   �| o |");
		console.log("                 __- \\_/-__");
		console.log("                |    ____   \\ ");
		console.log("                | |_|>  |  | |");
		console.log("                |___>___|| |");
		console.log("                  /  _  |<_|");
		console.log("                 |  / \\ \\ ");
		console.log("                 |__| |__\\ ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  �Me llamo AOK!                              |");
		console.log(" |                                              |");
		console.log(" |  �Pero la gente me llama el PROFESOR POK�Mon!|");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("                           ");
		console.log("                 ");
		console.log("                  __________");
		console.log("                 (Pika pika!) ");
		console.log("                 (/      ");
		console.log("         /\\_.._(\\   /z ");
		console.log("         (O^__^O) Z__7 ");
		console.log("         (v____v)Z 7    ");
		console.log("           v  v         ");
		console.log("   _____________________");
		console.log("              ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  �Este mundo est� habitado por unas          |");
		console.log(" |                                              |");
		console.log(" |  criaturas llamadas POK�Mon!                 |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("                           ");
		console.log("                 ");
		console.log("                  __________");
		console.log("                 (Pika pika!) ");
		console.log("                 (/      ");
		console.log("         /\\_.._(\\   /z ");
		console.log("         (O^__^O) Z__7 ");
		console.log("         (v____v)Z 7    ");
		console.log("           v  v         ");
		console.log("   _____________________");
		console.log("              ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  Para algunos, los POK�MON son mascotas.     |");
		console.log(" |                                              |");
		console.log(" |  Pero otros los usan para pelear.            |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("                           ");
		console.log("                 ");
		console.log("                  __________");
		console.log("                 (Pika pika!) ");
		console.log("                 (/      ");
		console.log("         /\\_.._(\\   /z ");
		console.log("         (O^__^O) Z__7 ");
		console.log("         (v____v)Z 7    ");
		console.log("           v  v         ");
		console.log("   _____________________");
		console.log("              ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  En cuanto a m�...                           |");
		console.log(" |                                              |");
		console.log(" |                                              |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("                           ");
		console.log("                 ");
		console.log("                  __________");
		console.log("                 (Pika pika!) ");
		console.log("                 (/      ");
		console.log("         /\\_.._(\\   /z ");
		console.log("         (O^__^O) Z__7 ");
		console.log("         (v____v)Z 7    ");
		console.log("           v  v         ");
		console.log("   _____________________");
		console.log("              ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  Estudio a los POK�MON como profesi�n.       |");
		console.log(" |                                              |");
		console.log(" |                                              |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		// ASHH CAMBIAR IMAGEN
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("    __ _              ");
		console.log("   /___\\_\\            ");
		console.log("   l___l__l          ");
		console.log("  /___/  \\            ");
		console.log("   l + ~/_/           ");
		console.log("   \\___/_/\\           ");
		console.log("   /l l l l\\          ");
		console.log("  / l l l l\\/\\        ");
		console.log(" / +l l l l \\ \\       ");
		console.log(" \\/\\l~__l l / /       ");
		console.log("  \\/l l l l l_l       ");
		console.log("    l_l l_l           ");
		console.log("    /_/ \\_\\           ");
		console.log("                      ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  Pero primero dime c�mo te llamas.           |");
		console.log(" |                                              |");
		console.log(" |                                              |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		do {
			
			console.log("                     ");
			console.log(" @----NOMBRE-------@ ");
			console.log(" |                 | ");
			console.log(" |   1.- NUEVO N.  | ");
			console.log(" |                 | ");
			console.log(" |   2.- GUALDO    | ");
			console.log(" |                 | ");
			console.log(" |   3.- ASH       | ");
			console.log(" |                 | ");
			console.log(" |   4.- JAIME     | ");
			console.log(" |                 | ");
			console.log(" @-----------------@");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			console.log(" |  Estudio a los POK�MON como profesi�n.       |");
			console.log(" |                                              |");
			console.log(" |                                              |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			console.log("Elegir la opci�n");
			opc1 = Number(prompt());
		} while (!(opc1==1 || opc1==2 || opc1==3 || opc1==4));
		
		if (opc1==1) {
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			console.log(" |  � TU NOMBRE                                 |");
			console.log(" |                _____________________         |");
			console.log(" |                                              |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			console.log("Escribe tu nombre: ");
			nombre[2] = prompt();
			jugador1 = nombre[2];
		}
		if (opc1==2) {
			jugador1 = nombre[-1];
		}
		if (opc1==3) {
			jugador1 = nombre[0];
		}
		if (opc1==4) {
			jugador1 = nombre[1];
		}
		// siguiente parte
		
		console.log("    __ _              ");
		console.log("   /___\\_\\            ");
		console.log("   l___l__l          ");
		console.log("  /___/  \\            ");
		console.log("   l + ~/_/           ");
		console.log("   \\___/_/\\           ");
		console.log("   /l l l l\\          ");
		console.log("  / l l l l\\/\\        ");
		console.log(" / +l l l l \\ \\       ");
		console.log(" \\/\\l~__l l / /       ");
		console.log("  \\/l l l l l_l       ");
		console.log("    l_l l_l           ");
		console.log("    /_/ \\_\\           ");
		console.log("                      ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  �Bien!  �Tu nombre es ",jugador1,"!        |");
		console.log(" |                                              |");
		console.log(" |                                              |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("                  __\\__        ");
		console.log("                 /     \\/\\_ _  ");
		console.log("                / __/\\/\\l /_/");
		console.log("                \\/l~ ~l/  l_l ");
		console.log("                  \\_u_/\\__\\ \\ ");
		console.log("                 /l   Q ___\\_\\ ");
		console.log("                 ll    l      ");
		console.log("                /_l  __l      ");
		console.log("                l_l__l__l     ");
		console.log("                  l l ~ l     ");
		console.log("                  l l l l     ");
		console.log("                  l l l l     ");
		console.log("                  /_/ \\_\\     ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  Este es mi nieto. �l ha sido tu rival desde |");
		console.log(" |                                              |");
		console.log(" |  que eras un ni�o.                           |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		do {
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			
			console.log("                     ");
			console.log(" @----NOMBRE-------@ ");
			console.log(" |                 | ");
			console.log(" |   1.- NUEVO N.  | ");
			console.log(" |                 | ");
			console.log(" |   2.- AZUL      | ");
			console.log(" |                 | ");
			console.log(" |   3.- GARY      | ");
			console.log(" |                 | ");
			console.log(" |   4.- JUAN      | ");
			console.log(" |                 | ");
			console.log(" @-----------------@");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			console.log(" |  ...Mmm, �podr�as decirme c�mo se llama?     |");
			console.log(" |                                              |");
			console.log(" |                                              |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			console.log("Elegir la opci�n");
			opc2 = Number(prompt());
		} while (!(opc2==1 || opc2==2 || opc2==3 || opc2==4));
		
		if (opc2==1) {
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			console.log(" |  �NOMBRE RIVAL?                                |");
			console.log(" |                _____________________         |");
			console.log(" |                                              |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			console.log("Escribe tu nombre: ");
			enemigo[2] = prompt();
			enemigo1 = enemigo[2];
		}
		if (opc2==2) {
			enemigo1 = enemigo[0];
		}
		if (opc2==3) {
			enemigo1 = enemigo[1];
		}
		if (opc2==4) {
			enemigo1 = enemigo[2];
		}
		
		console.log("                  __\\__        ");
		console.log("                 /     \\/\\_ _  ");
		console.log("                / __/\\/\\l /_/");
		console.log("                \\/l~ ~l/  l_l ");
		console.log("                  \\_u_/\\__\\ \\ ");
		console.log("                 /l   Q ___\\_\\ ");
		console.log("                 ll    l      ");
		console.log("                /_l  __l      ");
		console.log("                l_l__l__l     ");
		console.log("                  l l ~ l     ");
		console.log("                  l l l l     ");
		console.log("                  l l l l     ");
		console.log("                  /_/ \\_\\     ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  �Ah, s�!  !Ahora lo recuerdo!               |");
		console.log(" |                                              |");
		console.log(" |         �Se llama ",enemigo1,"!      |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		// Volver a la imagene de ASH
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("                           ");
		console.log("                 ");
		console.log("                  __________");
		console.log("                 (Pika pika!) ");
		console.log("                 (/      ");
		console.log("         /\\_.._(\\   /z ");
		console.log("         (O^__^O) Z__7 ");
		console.log("         (v____v)Z 7    ");
		console.log("           v  v         ");
		console.log("   _____________________");
		console.log("              ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  �",jugador1,"!   �Tu propia leyenda POK�MON |");
		console.log(" |                                              |");
		console.log(" |  est� a punto de comenzar!                   |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("                           ");
		console.log("                 ");
		console.log("                  __________");
		console.log("                 (Pika pika!) ");
		console.log("                 (/      ");
		console.log("         /\\_.._(\\   /z ");
		console.log("         (O^__^O) Z__7 ");
		console.log("         (v____v)Z 7    ");
		console.log("           v  v         ");
		console.log("   _____________________");
		console.log("              ");
		console.log("");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" |  �Te espera un mundo de sue�os y aventuras   |");
		console.log(" |                                              |");
		console.log(" |  con los POK�MON!                            |");
		console.log(" |                                         \\/   |");
		console.log(" @----------------------------------------------@");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		do {
			
			console.log("                     | v  v|                    ");
			console.log("                     |  v  |                    ");
			console.log("                     |   v |                    ");
			console.log("                     |     |                    ");
			console.log("���������������������� [4] ���������������������");
			console.log("�         ______             _________         �");
			console.log("�        /------\\           /---------\\        �");
			console.log("�       | [_][_] |         | [__] _[_] |       �");
			console.log("�   [1] |_||_____|     [2] !_____| |___!       �");
			console.log("�                                              �");
			console.log("�                                              �");
			console.log("�    �������[0]          _____________         �");
			console.log("�    ~v~v~v~    O       /             \\        �");
			console.log("�    v!v!v!v   -|-     /|_ _ _ _ _ _ _|\\       �");
			console.log("�              /l      \\/[][][] [][][]\\/       �");
			console.log("�                       | - - - - - - |        �");
			console.log("�     _______           |_RRRR_| |_RRR|        �");
			console.log("������///////�����������������������������������");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			console.log(" |  !VE RAPIDO A UNA PELEA!                     |");
			console.log(" |                        (OPCI�N 4)            |");
			console.log(" |                                              |");
			console.log(" |                                              |");
			console.log(" @----------------------------------------------@");
			opc3 = Number(prompt());
			if (opc3==1 || opc3==2 || opc3==3) {
				console.log("");
				console.log("");
				console.log("No puedes entrar, necesitas completar la historia");
				prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			}
		} while (opc3!==4);
		if (opc3==4) {
			
			console.log("                     | v  v|                    ");
			console.log("                     |  v  |                    ");
			console.log("                     |  v  |                    ");
			console.log("                     |     |                    ");
			console.log("����������������������     ���������������������");
			console.log("�         ______             _________         �");
			console.log("�        /------\\           /---------\\        �");
			console.log("�       | [_][_] |         | [__] _[_] |       �");
			console.log("�       |_||_____|         !_____| |___!       �");
			console.log("�                                              �");
			console.log("�                                              �");
			console.log("�    �������             _____________         �");
			console.log("�    ~v~v~v~            /             \\        �");
			console.log("�    v!v!v!v           /|_ _ _ _ _ _ _|\\       �");
			console.log("�                      \\/[][][] [][][]\\/       �");
			console.log("�                       | - - - - - - |        �");
			console.log("�     _______           |_RRRR_| |_RRR|        �");
			console.log("������///////�����������������������������������");
			console.log(" @----------------------------------------------@");
			console.log(" |  OAK: �HEY ALTO NO VAYAS!                    |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |           �Ufff! �Estuvo cerca!              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |    �En la hierba viven POK�MON salvajes!     |");
			console.log(" |                                              |");
			console.log(" |                                              |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			
			// PONER A PIkACHU CON ASH DE ESPALDA
			console.log("                           ");
			console.log("                 ");
			console.log("                  __________");
			console.log("                 (Pika pika!) ");
			console.log("                 (/      ");
			console.log("         /\\_.._(\\   /z ");
			console.log("         (O^__^O) Z__7 ");
			console.log("         (v____v)Z 7    ");
			console.log("           v  v         ");
			console.log("   _____________________");
			console.log("              ");
			console.log("");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  �Un PIKACHU salvaje aparecio!               |");
			console.log(" |                                              |");
			console.log(" |                                              |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			
			// PONER A PIkACHU CON ASH DE ESPALDA
			console.log("                           ");
			console.log("                 ");
			console.log("                  __________");
			console.log("                 (Pika pika!) ");
			console.log("                 (/      ");
			console.log("         /\\_.._(\\   /z ");
			console.log("         (O^__^O) Z__7 ");
			console.log("         (v____v)Z 7    ");
			console.log("           v  v         ");
			console.log("   _____________________");
			console.log("              ");
			console.log("");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  �El profesor ocupo pokeball!                |");
			console.log(" |                                              |");
			console.log(" |                                              |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			
			// PONER A PIkACHU CON ASH DE ESPALDA
			console.log("                           ");
			console.log("  PIKACHU                                ");
			console.log("      :N5                     � �      ");
			console.log(" | Ps:----------            �     �     ");
			console.log(" |______________\\          �-------� ");
			console.log("                            �     �  ");
			console.log("                              � � ");
			console.log("             ");
			console.log("                 ");
			console.log("                   ");
			console.log("              ");
			console.log("");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" | �Muy bien! �PIKACHU fue atrapado!            |");
			console.log(" |                                              |");
			console.log(" |                                              |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" | OAK: Vaya...                                 |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  �Necesitas a tu propio POK�MON como         |");
			console.log(" |                         protecci�n           |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" | �Yo lo s�!                                   |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  �Ven conmigo!                               |");
			console.log(" |                                              |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			
			console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
			console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
			console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
			console.log("XXXXXXXXXX|[___][____]       |--|--|--|XXXXXXXXXX");
			console.log("XXXXXXXXXX|                  |__|__|__|XXXXXXXXXX");
			console.log("XXXXXXXXXX|              P            |XXXXXXXXXX");
			console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
			console.log("XXXXXXXXXX|    (",enemigo1,")  (",jugador1,")          |XXXXXXXXXX");
			console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
			console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" | ",enemigo1,": �Abuelo! �Estoy harto de   |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  esperar!                                    |");
			console.log(" |  OAK: �",enemigo1,"?                      |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			
			console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
			console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
			console.log("XXXXX@-------------------------------@XXXXXXXXXX");
			console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
			console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
			console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
			console.log("XXXXX|                               |XXXXXXXXXX");
			console.log("XXXXX|    (",enemigo1,")  (",jugador1,")          |XXXXXXXXXX");
			console.log("XXXXX|                   |---------| |XXXXXXXXXX");
			console.log("XXXXX|                   |      O  | |XXXXXXXXXX");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" | OAK: �Hum? �Qu� haces aqu� ya?               |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  Te dije que vinieras m�s  tarde...          |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  �No importa!    Espera ah�.                 |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			
			console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
			console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
			console.log("XXXXX@-------------------------------@XXXXXXXXXX");
			console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
			console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
			console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
			console.log("XXXXX|                               |XXXXXXXXXX");
			console.log("XXXXX|    (",enemigo1,")  (",jugador1,")          |XXXXXXXXXX");
			console.log("XXXXX|                   |---------| |XXXXXXXXXX");
			console.log("XXXXX|                   |      O  | |XXXXXXXXXX");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" | OAK: �Mira, ",jugador1,"! �Ves la bola que    |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  est� en la mesa? Se llama POK�BALL.                           |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  Contiene un POK�MON en su interior.         |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			
			console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
			console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
			console.log("XXXXX@-------------------------------@XXXXXXXXXX");
			console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
			console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
			console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
			console.log("XXXXX|                               |XXXXXXXXXX");
			console.log("XXXXX|    (",enemigo1,")  (",jugador1,")          |XXXXXXXXXX");
			console.log("XXXXX|                   |---------| |XXXXXXXXXX");
			console.log("XXXXX|                   |      O  | |XXXXXXXXXX");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" | OAK: �Puedes cogerla!                        |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  �Es para ti!                                |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  ",enemigo1,": �Oye abuelo!                  |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			
			console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
			console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
			console.log("XXXXX@-------------------------------@XXXXXXXXXX");
			console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
			console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
			console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
			console.log("XXXXX|                               |XXXXXXXXXX");
			console.log("XXXXX|    (",enemigo1,")  (",jugador1,")          |XXXXXXXXXX");
			console.log("XXXXX|                   |---------| |XXXXXXXXXX");
			console.log("XXXXX|                   |      O  | |XXXXXXXXXX");
			console.log(" @----------------------------------------------@");
			console.log(" |                                              |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" | ",enemigo1,": �Y yo! �qu�?                  |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  OAK: �Tranquilo ",enemigo1,"! Te dare otro |                       |");
			prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
			console.log(" |  a ti mas tarde!                             |");
			console.log(" |                                         \\/   |");
			console.log(" @----------------------------------------------@");
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			do {
				
				console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
				console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
				console.log("XXXXX@-------------------------------@XXXXXXXXXX");
				console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
				console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
				console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
				console.log("XXXXX|                               |XXXXXXXXXX");
				console.log("XXXXX|    (",enemigo1,")  (",jugador1,")          |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                   |      O  | |XXXXXXXXXX");
				console.log(" @----------------------------------------------@");
				console.log(" |                                              |");
				prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
				console.log(" | OAK: �Adelante! �Es tuyo!                  |");
				console.log(" |                                              |");
				console.log(" |  (presiona 0 para obtener tu pokemon)        |");
				console.log(" |                                         \\/   |");
				console.log(" @----------------------------------------------@");
				opc4 = Number(prompt());
			} while (opc4!==0);
			if (opc4==0) {
				
				console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
				console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
				console.log("XXXXX@-------------------------------@XXXXXXXXXX");
				console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
				console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
				console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
				console.log("XXXXX|       [!]                     |XXXXXXXXXX");
				console.log("XXXXX|    (",enemigo1,")           |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                   |      O  | |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                   (",jugador1," ) |XXXXXXXX");
				console.log(" @----------------------------------------------@");
				prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
				
				console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
				console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
				console.log("XXXXX@---------------------------@XXXXXXXXXX");
				console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
				console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
				console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
				console.log("XXXXX|                               |XXXXXXXXXX");
				console.log("XXXXX|                 (",jugador1,") |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                   |      O  | |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                  (",enemigo1,")    |XXXXXXXX");
				console.log(" @----------------------------------------------@");
				console.log(" |                                              |");
				prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
				console.log(" | ",jugador1," �NO! �",enemigo1,", quiero a ese|");
				console.log(" |                                              |");
				console.log(" |  POK�MON!                                    |");
				console.log(" |           ",enemigo1," !Ha cogido el POK�MON!|");
				console.log(" @----------------------------------------------@");
				prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
				
				console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
				console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
				console.log("XXXXX@---------------------------@XXXXXXXXXX");
				console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
				console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
				console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
				console.log("XXXXX|                               |XXXXXXXXXX");
				console.log("XXXXX|                 (",jugador1,") |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                   |      O  | |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                  (",enemigo1,")    |XXXXXXXX");
				console.log(" @----------------------------------------------@");
				console.log(" |                                              |");
				console.log(" | OAK: �",enemigo1,"! �Que haces?       |");
				console.log(" | ",enemigo1," �Abuelo, yo quiero �ste!        |");
				prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
				console.log(" | OAK: Pero... Bueno. Vale.                    |");
				console.log(" |           Ese POK�MON es tuyo.               |");
				console.log(" @----------------------------------------------@");
				prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
				
				console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
				console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
				console.log("XXXXX@---------------------------@XXXXXXXXXX");
				console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
				console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
				console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
				console.log("XXXXX|                               |XXXXXXXXXX");
				console.log("XXXXX|                 (",jugador1,") |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                   |      O  | |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                  (",enemigo1,")    |XXXXXXXX");
				console.log(" @----------------------------------------------@");
				console.log(" |                                              |");
				console.log(" | OAK: Te iba a dar uno de todos modos...      |");
				prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
				console.log(" |  ",jugador1,", ven aqu�.                   |");
				console.log(" |                                              |");
				console.log(" |                                              |");
				console.log(" @----------------------------------------------@");
				prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
				
				console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
				console.log("XXXXXXXXXX     L A B O R A T O R I O  XXXXXXXXXXX");
				console.log("XXXXX@---------------------------@XXXXXXXXXX");
				console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
				console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
				console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
				console.log("XXXXX|            (",jugador1,")    |XXXXXXXXXX");
				console.log("XXXXX|                               |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                   |      O  | |XXXXXXXXXX");
				console.log("XXXXX|                   |---------| |XXXXXXXXXX");
				console.log("XXXXX|                  (",enemigo1,")    |XXXXXXXX");
				console.log(" @----------------------------------------------@");
				console.log(" |                                              |");
				console.log(" | OAK: ",jugador1,", �ste es el POK�MON que  |");
				console.log(" |  atrap� antes. Puedes tenerlo.               |");
				console.log(" |  Lo cog� en estado salvaje, asi que no es    |");
				console.log(" |  manso todav�a.                              |");
				console.log(" @----------------------------------------------@");
				prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			}
		}
	}
	if (opc!=2) {
		
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXX   L A B O R A T O R I O XXXXXXXXXXXXXXX");
		console.log("XXXXX@-------------------------------@XXXXXXXXXX");
		console.log("XXXXX|[___][____]        |--|--|--|--|XXXXXXXXXX");
		console.log("XXXXX|                   |__|__|__|__|XXXXXXXXXX");
		console.log("XXXXX|              (OAK)            |XXXXXXXXXX");
		console.log("XXXXX|            (",jugador1,")         |XXXXXXXXXX");
		console.log("XXXXX|                               |XXXXXXXXXX");
		console.log("XXXXX|                   |---------| |XXXXXXXXXX");
		console.log("XXXXX|                   |         | |XXXXXXXXXX");
		console.log("XXXXX|                   |---------| |XXXXXXXXXX");
		console.log("XXXXX|                  (",enemigo1,")O    |XXXXXXXX");
		console.log(" @----------------------------------------------@");
		console.log(" |                                              |");
		console.log(" | ",jugador1," !Has adquerido a PIKACHU!       |");
		console.log(" @----------------------------------------------@");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		// ***************************************************************
		// *******POKEMONES POR DEFECTO **********************************
		// ***************************************************************
		cantidadpoke = 1;
		// USUARIO SE LE ASIGNA PIKACHU
		nombrepokemon[9] = "PIKACHU";
		pokemon[0] = "ELECTRICO";
		pokemon[1] = "";
		// Salud
		pokemon[2] = "35";
		pokemon[3] = "55";
		pokemon[4] = "30";
		pokemon[5] = "90";
		pokemon[6] = "50";
		// Guarda el nombre del pokemon 1 que voy a ocupar
		mipoke[0] = "PIKACHU";
		// TIPO DEL POKE
		// Guarda el Tipo 1 del pokemon
		mipoket1[-1] = "ELECTRICO";
		// Guarda el Tipo 2
		mipoket1[0] = "";
		// Habilidad del poke 1
		// SALUD
		mipokeh1[0] = 35;
		// ATAQUE
		mipokeh1[1] = 55;
		// DEFENSA
		mipokeh1[2] = 30;
		// VELOCIDAD
		mipokeh1[3] = 90;
		// ESPECIAL  
		mipokeh1[4] = 50;
		misalud[0] = mipokeh1[0];
		nombreataque[0] = "Pu�o Trueno";
		tipoataque[0] = mipoket1[0];
		pp[0] = "15";
		efectivo[0] = "100";
		dano[0] = "75";
		nombreataque[1] = "Trueno";
		tipoataque[1] = mipoket1[0];
		pp[1] = "15";
		efectivo[1] = "70";
		dano[1] = "120";
		nombreataque[2] = "Impactrueno";
		tipoataque[2] = mipoket1[0];
		pp[2] = "30";
		efectivo[2] = "100";
		dano[2] = "40";
		nombreataque[3] = "Rayo";
		tipoataque[3] = mipoket1[0];
		pp[3] = "15";
		efectivo[3] = "100";
		dano[3] = "95";
		// Guarda el pokemon 1 antes
		for (contx=1;contx<=4;contx++) {
			nombrea1[contx-1] = nombreataque[contx-1];
			tipoa1[contx-1] = tipoataque[contx-1];
			ppa1[contx-1] = Number(pp[contx-1]);
			ppfa1[contx-1] = Number(pp[contx-1]);
			efectivoa1[contx-1] = Number(efectivo[contx-1]);
			danoa1[contx-1] = Number(dano[contx-1]);
		}
		// ***************************CPU SE LE ASIGNA EEVEE
		// Guarda el nombre del pokemon 1 que voy a ocupar
		enepoke[0] = "EEVEE";
		// TIPO DEL POKE
		// Guarda el Tipo 1 del pokemon
		enepoket1[0] = "NORMAL";
		// Guarda el Tipo 2
		enepoket1[1] = "";
		// Habilidad del poke 1
		// SALUD
		enepokeh1[0] = 55;
		// ATAQUE
		enepokeh1[1] = 55;
		// DEFENSA
		enepokeh1[2] = 50;
		// VELOCIDAD
		enepokeh1[3] = 55;
		// ESPECIAL 
		enepokeh1[4] = 65;
		enesalud[-1] = enepokeh1[-1];
		nombreataque[-1] = "Destructor";
		tipoataque[-1] = pokemon[-1];
		pp[-1] = "35";
		efectivo[-1] = "100";
		dano[-1] = "40";
		nombreataque[0] = "Ataque Arena";
		tipoataque[0] = "TIERRA";
		pp[0] = "15";
		efectivo[0] = "100";
		dano[0] = "0";
		nombreataque[1] = "Doble Bofeton";
		tipoataque[1] = pokemon[-1];
		pp[1] = "10";
		efectivo[1] = "85";
		dano[1] = "15";
		nombreataque[2] = "Placaje";
		tipoataque[2] = pokemon[-1];
		pp[2] = "15";
		efectivo[2] = "100";
		dano[2] = "95";
		// Guarda el pokemon 1 antes
		for (contx=0;contx<=3;contx++) {
			nombree1[contx-1] = nombreataque[contx-1];
			tipoe1[contx-1] = tipoataque[contx-1];
			ppe1[contx-1] = Number(pp[contx-1]);
			ppfe1[contx-1] = Number(pp[contx-1]);
			efectivoe1[contx-1] = Number(efectivo[contx-1]);
			danoe1[contx-1] = Number(dano[contx-1]);
		}
		// Niveles de los pokemones 
		do {
			minivel[-1] = Math.floor(Math.random()*31);
		} while (minivel[-1]<25);
		do {
			enenivel[-1] = Math.floor(Math.random()*31);
		} while (enenivel[-1]<25);
		// ***************************************************************
		// ********************JUEGO**************************************
		// ***************************************************************
		// Menu Principal
	}
	if (opc==1 || opc==4) {
		while (salir==false) {
			do {
				
				console.log("                       Exit                     ");
				console.log("���������������������� [4] ���������������������");
				console.log("�         ______             _________         �");
				console.log("�        /------\\           /---------\\        �");
				console.log("�       | [_][_] |         | [__] _[_] |       �");
				console.log("�   [1] |_||_____|     [2] !_____| |___!       �");
				console.log("�                                              �");
				console.log("�                                              �");
				console.log("�    �������[0]          _____________         �");
				console.log("�    ~v~v~v~    O       /             \\        �");
				console.log("�    v!v!v!v   -|-     /|_ _ _ _ _ _ _|\\       �");
				console.log("�           zO /l      \\/[][][] [][][]\\/       �");
				console.log("�                       | - - - - - - |        �");
				console.log("�     _______           |_RRRR_| |_RRR|        �");
				console.log("�    |///////|                                 �");
				console.log("�    |///////|          ��������[3]����        �");
				console.log("��   |///////|�         v~~v~i~~v~i~v~         �");
				console.log("������///////�����������������������������������");
				console.log(" @----------------------------------------------@");
				console.log(" |  0.- PUEBLO PALETA                           |");
				console.log(" |  1.- Casa de ",jugador1,"                         |");
				console.log(" |  2.- Casa de ",enemigo1,"                        |");
				console.log(" |  3.- LABORATORIO DE INVESTIGACI�N  de POK�MON|");
				console.log(" |             del PROFESOR OAK                 |");
				console.log(" |  99.- Ayuda �?                               |");
				console.log(" @----------------------------------------------@");
				opc3 = Number(prompt());
			} while (!(opc3==1 || opc3==2 || opc3==3 || opc3==4 || opc3==0 || opc3==99));
			if (opc3==0) {
				console.log(" Pueblo Paleta �Un lienzo en blanco de tu viaje!");
				prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			}
			if (opc3==99) {
				
				console.log(" @----------------------------------------------@");
				console.log(" |  Ayuda                                       |");
				console.log(" |                                              |");
				console.log(" |                 Opcion 1                      |");
				console.log(" |        - Curar a todos tus pokemones         |");
				console.log(" |           - Ver tus victorias                |");
				console.log(" |                                              |");
				console.log(" |                 Opcion 2                      |");
				console.log(" |          Enfrentamiento 1vs Cpu              |");
				console.log(" |           - Batalla uno solo                 |");
				console.log(" |           - 6 Pok�mon vs 6                   |");
				console.log(" |                                              |");
				console.log(" |                 Opcion 3                      |");
				console.log(" |            - Cambiar pokemon                 |");
				console.log(" |            - Reiniciar pp                    |");
				console.log(" |                                              |");
				console.log(" |                 Opcion 4                      |");
				console.log(" |           - Salir de juego                   |");
				console.log(" |                                              |");
				console.log(" |                                         \\/   |");
				console.log(" @----------------------------------------------@");
				prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
			}
			if (opc3==1) {
				do {
					
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|   1.- CURAR POKEMONES     |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|   2.- VER VICTORIAS       |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX [3] Volver XXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("Eliga una opci�n :");
					opc4 = Number(prompt());
				} while (!(opc4==1 || opc4==2 || opc4==3));
				if (opc4==1) {
					if (cantidadpoke==1) {
						
						console.log("");
						console.log("SALUD DE LOS POKEMONES ACTUALES");
						console.log("");
						console.log(" Inventario ",jugador1);
						console.log("1.- ",mipoke[-1],"  ",mipokeh1[-1]);
						console.log("");
						console.log("Inventario ",enemigo1);
						console.log("1.- ",enepoke[-1],"  ",enepokeh1[-1]);
						prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						mipokeh1[-1] = misalud[-1];
						enepokeh1[-1] = enesalud[-1];
						console.log("");
						console.log("Curando a tus pokemon ...");
						prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
						console.log("");
						console.log("Se han curado tus pokemones");
						prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
						
						console.log("");
						console.log(" V A  L O R E S     R E N O V A D O S ");
						console.log("");
						console.log(" Inventario ",jugador1);
						console.log("1.- ",mipoke[-1],"  ",mipokeh1[-1]);
						console.log("");
						console.log("Inventario ",enemigo1);
						console.log("1.- ",enepoke[-1],"  ",enepokeh1[-1]);
						prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					} else {
						
						console.log("");
						console.log("SALUD DE LOS POKEMONES ACTUALES");
						console.log("");
						console.log("Inventario ",jugador1);
						console.log("1.- ",mipoke[-1],"  ",mipokeh1[-1]);
						console.log("2.- ",mipoke[0],"  ",mipokeh2[-1]);
						console.log("3.- ",mipoke[1],"  ",mipokeh3[-1]);
						console.log("4.- ",mipoke[2],"  ",mipokeh4[-1]);
						console.log("5.- ",mipoke[3],"  ",mipokeh5[-1]);
						console.log("6.- ",mipoke[4],"  ",mipokeh6[-1]);
						console.log("");
						console.log("Inventario ",enemigo1);
						console.log("1.- ",enepoke[-1],"  ",enepokeh1[-1]);
						console.log("2.- ",enepoke[0],"  ",enepokeh2[-1]);
						console.log("3.- ",enepoke[1],"  ",enepokeh3[-1]);
						console.log("4.- ",enepoke[2],"  ",enepokeh4[-1]);
						console.log("5.- ",enepoke[3],"  ",enepokeh5[-1]);
						console.log("6.- ",enepoke[4],"  ",enepokeh6[-1]);
						prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						mipokeh1[-1] = misalud[-1];
						mipokeh2[-1] = misalud[0];
						mipokeh3[-1] = misalud[1];
						mipokeh4[-1] = misalud[2];
						mipokeh5[-1] = misalud[3];
						mipokeh6[-1] = misalud[4];
						enepokeh1[-1] = enesalud[-1];
						enepokeh2[-1] = enesalud[0];
						enepokeh3[-1] = enesalud[1];
						enepokeh4[-1] = enesalud[2];
						enepokeh5[-1] = enesalud[3];
						enepokeh6[-1] = enesalud[4];
						console.log("");
						console.log("Curando a tus pokemon");
						prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
						console.log("");
						console.log("Se han curado tus pokemones");
						prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						
						console.log(" V A  L O R E S     R E N O V A D O S ");
						console.log("");
						console.log("SALUD DE LOS POKEMONES ACTUALES");
						console.log("");
						console.log("Inventario ",jugador1);
						console.log("1.- ",mipoke[-1],"  ",mipokeh1[-1]);
						console.log("2.- ",mipoke[0],"  ",mipokeh2[-1]);
						console.log("3.- ",mipoke[1],"  ",mipokeh3[-1]);
						console.log("4.- ",mipoke[2],"  ",mipokeh4[-1]);
						console.log("5.- ",mipoke[3],"  ",mipokeh5[-1]);
						console.log("6.- ",mipoke[4],"  ",mipokeh6[-1]);
						console.log("");
						console.log("Inventario ",enemigo1);
						console.log("1.- ",enepoke[-1],"  ",enepokeh1[-1]);
						console.log("2.- ",enepoke[0],"  ",enepokeh2[-1]);
						console.log("3.- ",enepoke[1],"  ",enepokeh3[-1]);
						console.log("4.- ",enepoke[2],"  ",enepokeh4[-1]);
						console.log("5.- ",enepoke[3],"  ",enepokeh5[-1]);
						console.log("6.- ",enepoke[4],"  ",enepokeh6[-1]);
						prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					}
				}
				if (opc4==2) {
					
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|    V I C T O R I A S      |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|         ",win,"               |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
				}
			}
			// *************************************************************BATALLAS OPCION 2**********************************
			// *************************************************************BATALLAS OPCION 2**********************************
			// *************************************************************BATALLAS OPCION 2**********************************
			// ASignar pokemones al invertario 
			// ASignar pokemones al invertario 
			if (opc3==2) {
				if (mipoke[-1]!="") {
					do {
						
						console.log("CASA DE ",enemigo1);
						console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
						console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
						console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
						console.log("XXXXXXXXXX|       B A T A L L A       |XXXXXXXXXX");
						console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
						console.log("XXXXXXXXXX|   1.- 1 V/s 1             |XXXXXXXXXX");
						console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
						console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
						console.log("XXXXXXXXXX|   2.- Duelo 6 POK�MON     |XXXXXXXXXX");
						console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
						console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
						console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX [3] Volver XXXXXX");
						console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
						console.log("Eliga una opci�n :");
						opc6 = Number(prompt());
					} while (!(opc6==1 || opc6==2 || opc6==3));
					// ********************************************************************
					// ******************COMBATE 1VS1 *************************************
					// ********************************************************************
					if (cantidadpoke==1) {
						totalsalud = mipokeh1[-1];
						enetotalsalud = enepokeh1[-1];
					}
					if (cantidadpoke==6) {
						totalsalud = mipokeh1[-1]+mipokeh2[-1]+mipokeh3[-1]+mipokeh4[-1]+mipokeh5[-1]+mipokeh6[-1];
						enetotalsalud = enepokeh1[-1]+enepokeh2[-1]+enepokeh3[-1]+enepokeh4[-1]+enepokeh5[-1]+enepokeh6[-1];
					}
					if (cantidadpoke==1) {
						if (totalsalud==0) {
							console.log("Ve de inmediato a curar a tu Pok�mon");
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						}
						if (enetotalsalud==0 && totalsalud>0) {
							console.log("El Pok�mon de ",enemigo1," est� debilidato. ");
							console.log("Ve a Curar a tu Pikachu y curaras al EEVEE de ",enemigo1);
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						}
					}
					if (cantidadpoke==6) {
						if (totalsalud==0) {
							console.log("Ve de inmediato a curar a tus Pok�mon");
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						}
						if (enetotalsalud==0 && totalsalud>0) {
							console.log("Los Pok�mon de ",enemigo1," estan debilidatos");
							console.log("Ve a Curar los tuyos y curaras lo de el tambien");
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						}
						if (enetotalsalud>0 && totalsalud==0) {
							console.log("�",jugador1,"Tus Pok�mon estan debilidatos!");
							console.log("Ve a curarlos a tu casa");
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						}
					}
					if (opc6==2) {
						if (cantidadpoke==6) {
							if ((mipokeh1[-1]>0 && mipokeh2[-1]>0 && mipokeh3[-1]>0 && mipokeh4[-1]>0 && mipokeh5[-1]>0 && mipokeh6[-1]>0) && (enepokeh1[-1]>0 && enepokeh2[-1]>0 && enepokeh3[-1]>0 && enepokeh4[-1]>0 && enepokeh5[-1]>0 && enepokeh6[-1]>0)) {
								micontwin = 0;
								enecontwin = 0;
							} else {
								micontwin = 7;
								enecontwin = 7;
							}
						}
					}
					while ((opc6==1 || opc6==2) && (totalsalud>0 && enetotalsalud>0)) {
						if (opc6==1 && cantidadpoke==1) {
							do {
								
								console.log("");
								console.log("       �Que pokemon vas a usar?");
								console.log("");
								console.log("Lista de tus pokemones            |   Lista de los pokemones enemigos ");
								console.log("             Nivel                            Nivel");
								console.log("1.- ",mipoke[-1],"  ",minivel[-1],"            |          ",enepoke[-1],"  ",enenivel[-1]);
								console.log("");
								console.log("");
								console.log("                                                       Opcion 0 VOLVER ");
								opcmipoke = Number(prompt());
								start = true;
							} while (!(opcmipoke==1 || opcmipoke==0));
						}
						if (opc6==1 && cantidadpoke==6) {
							do {
								for (contx=0;contx<=11;contx++) {
									life[contx-1] = "O";
								}
								if (mipokeh1[-1]<=0) {
									life[-1] = "X";
								}
								if (mipokeh2[-1]<=0) {
									life[0] = "X";
								}
								if (mipokeh3[-1]<=0) {
									life[1] = "X";
								}
								if (mipokeh4[-1]<=0) {
									life[2] = "X";
								}
								if (mipokeh5[-1]<=0) {
									life[3] = "X";
								}
								if (mipokeh6[-1]<=0) {
									life[4] = "X";
								}
								if (enepokeh1[-1]<=0) {
									life[5] = "X";
								}
								if (enepokeh2[-1]<=0) {
									life[6] = "X";
								}
								if (enepokeh3[-1]<=0) {
									life[7] = "X";
								}
								if (enepokeh4[-1]<=0) {
									life[8] = "X";
								}
								if (enepokeh5[-1]<=0) {
									life[9] = "X";
								}
								if (enepokeh6[-1]<=0) {
									life[10] = "X";
								}
								
								console.log("");
								console.log("Que pokemon vas a usar                 (O=Diponible , X= Debilitado)");
								console.log("");
								console.log("Lista de tus pokemones            |   Lista de los pokemones enemigos ");
								console.log("          Nivel        Estado                   Nivel       Estado");
								console.log("1.- ",mipoke[-1],"  ",minivel[-1],"     ",life[-1],"        |          ",enepoke[-1],"  ",enenivel[-1],"     ",life[5]);
								console.log("2.- ",mipoke[0],"  ",minivel[0],"     ",life[0],"        |          ",enepoke[0],"  ",enenivel[0],"     ",life[6]);
								console.log("3.- ",mipoke[1],"  ",minivel[1],"     ",life[1],"        |          ",enepoke[1],"  ",enenivel[1],"     ",life[7]);
								console.log("4.- ",mipoke[2],"  ",minivel[2],"     ",life[2],"        |          ",enepoke[2],"  ",enenivel[2],"     ",life[8]);
								console.log("5.- ",mipoke[3],"  ",minivel[3],"     ",life[3],"        |          ",enepoke[3],"  ",enenivel[3],"     ",life[9]);
								console.log("6.- ",mipoke[4],"  ",minivel[4],"     ",life[4],"        |          ",enepoke[4],"  ",enenivel[4],"     ",life[10]);
								console.log("");
								console.log("");
								console.log("                                                  Opci�n 0 VOLVER");
								opcmipoke = Number(prompt());
								start = true;
								if (opcmipoke==1 && mipokeh1[-1]==0) {
									console.log("Pok�mon ",mipoke[-1]," debilitado, ve al laboratorio para Curarlo");
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
								if (opcmipoke==2 && mipokeh2[-1]==0) {
									console.log("Pok�mon ",mipoke[0]," debilitado, ve al laboratorio para Curarlo");
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
								if (opcmipoke==3 && mipokeh3[-1]==0) {
									console.log("Pok�mon ",mipoke[1]," debilitado, ve al laboratorio para Curarlo");
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
								if (opcmipoke==4 && mipokeh4[-1]==0) {
									console.log("Pok�mon ",mipoke[2]," debilitado, ve al laboratorio para Curarlo");
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
								if (opcmipoke==5 && mipokeh5[-1]==0) {
									console.log("Pok�mon ",mipoke[3]," debilitado, ve al laboratorio para Curarlo");
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
								if (opcmipoke==6 && mipokeh6[-1]==0) {
									console.log("Pok�mon ",mipoke[4]," debilitado, ve al laboratorio para Curarlo");
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
							} while (!(opcmipoke==1 && mipokeh1[-1]>0 || opcmipoke==2 && mipokeh2[-1]>0 || opcmipoke==3 && mipokeh3[-1]>0 || opcmipoke==4 && mipokeh4[-1]>0 || opcmipoke==5 && mipokeh5[-1]>0 || opcmipoke==6 && mipokeh6[-1]>0 || opcmipoke==0));
						}
						// ****************************************************************************************
						// ****************************************************************************************
						if (opc6==2) {
							if (cantidadpoke==6 && micontwin<=5 && enecontwin<=5) {
								do {
									for (contx=0;contx<=11;contx++) {
										life[contx-1] = "O";
									}
									if (mipokeh1[-1]<=0) {
										life[-1] = "X";
									}
									if (mipokeh2[-1]<=0) {
										life[0] = "X";
									}
									if (mipokeh3[-1]<=0) {
										life[1] = "X";
									}
									if (mipokeh4[-1]<=0) {
										life[2] = "X";
									}
									if (mipokeh5[-1]<=0) {
										life[3] = "X";
									}
									if (mipokeh6[-1]<=0) {
										life[4] = "X";
									}
									if (enepokeh1[-1]<=0) {
										life[5] = "X";
									}
									if (enepokeh2[-1]<=0) {
										life[6] = "X";
									}
									if (enepokeh3[-1]<=0) {
										life[7] = "X";
									}
									if (enepokeh4[-1]<=0) {
										life[8] = "X";
									}
									if (enepokeh5[-1]<=0) {
										life[9] = "X";
									}
									if (enepokeh6[-1]<=0) {
										life[10] = "X";
									}
									if (life[-1]=="O" && life[0]=="O" && life[1]=="O" && life[2]=="O" && life[3]=="O" && life[4]=="O" && life[5]=="O" && life[6]=="O" && life[7]=="O" && life[8]=="O" && life[9]=="O" && life[10]=="O") {
										
										console.log("");
										console.log("");
										console.log("");
										console.log("###################################################################");
										console.log("##                                                               ##");
										console.log("##                  B A T A L L A     6 vs 6                     ##");
										console.log("##                                                               ##");
										console.log("##               ",jugador1);
										console.log("##                         v/S                                   ##");
										console.log("##                              ",enemigo1);
										console.log("###################################################################");
										console.log("");
										console.log("");
										console.log("                                                         Cargando...");
										prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
									}
									
									console.log("");
									console.log("Que pokemon vas a usar                 (O=Diponible , X= Debilitado)");
									console.log("");
									console.log("          ",jugador1," : win ",micontwin," / ",enemigo1," : win ",enecontwin);
									console.log("");
									console.log("Lista de tus pokemones            |   Lista de los pokemones enemigos ");
									console.log("           Nivel              Estado                    Nivel           Estado");
									console.log("1.- ",mipoke[-1],"  ",minivel[-1],"     ",life[-1],"        |          ",enepoke[-1],"  ",enenivel[-1],"     ",life[5]);
									console.log("2.- ",mipoke[0],"  ",minivel[0],"     ",life[0],"        |          ",enepoke[0],"  ",enenivel[0],"     ",life[6]);
									console.log("3.- ",mipoke[1],"  ",minivel[1],"     ",life[1],"        |          ",enepoke[1],"  ",enenivel[1],"     ",life[7]);
									console.log("4.- ",mipoke[2],"  ",minivel[2],"     ",life[2],"        |          ",enepoke[2],"  ",enenivel[2],"     ",life[8]);
									console.log("5.- ",mipoke[3],"  ",minivel[3],"     ",life[3],"        |          ",enepoke[3],"  ",enenivel[3],"     ",life[9]);
									console.log("6.- ",mipoke[4],"  ",minivel[4],"     ",life[4],"        |          ",enepoke[4],"  ",enenivel[4],"     ",life[10]);
									console.log("");
									console.log("");
									console.log("                                                  Opci�n 0 VOLVER");
									opcmipoke = Number(prompt());
									start = true;
									if (opcmipoke==1 && mipokeh1[-1]==0) {
										console.log("Pok�mon ",mipoke[-1]," debilitado, ve al laboratorio para Curarlo");
										prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
									}
									if (opcmipoke==2 && mipokeh2[-1]==0) {
										console.log("Pok�mon ",mipoke[0]," debilitado, ve al laboratorio para Curarlo");
										prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
									}
									if (opcmipoke==3 && mipokeh3[-1]==0) {
										console.log("Pok�mon ",mipoke[1]," debilitado, ve al laboratorio para Curarlo");
										prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
									}
									if (opcmipoke==4 && mipokeh4[-1]==0) {
										console.log("Pok�mon ",mipoke[2]," debilitado, ve al laboratorio para Curarlo");
										prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
									}
									if (opcmipoke==5 && mipokeh5[-1]==0) {
										console.log("Pok�mon ",mipoke[3]," debilitado, ve al laboratorio para Curarlo");
										prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
									}
									if (opcmipoke==6 && mipokeh6[-1]==0) {
										console.log("Pok�mon ",mipoke[4]," debilitado, ve al laboratorio para Curarlo");
										prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
									}
								} while (!(opcmipoke==1 && mipokeh1[-1]>0 || opcmipoke==2 && mipokeh2[-1]>0 || opcmipoke==3 && mipokeh3[-1]>0 || opcmipoke==4 && mipokeh4[-1]>0 || opcmipoke==5 && mipokeh5[-1]>0 || opcmipoke==6 && mipokeh6[-1]>0 || opcmipoke==0));
							} else {
								if (cantidadpoke==1) {
									console.log(jugador1," tienes que tener 6 Pok�mon para poder jugar");
									prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
								}
								if (cantidadpoke==6) {
									console.log(jugador1,"�Los pokemones no tienen toda sus vidas!");
									prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
								}
								opcmipoke = 0;
								mihp = false;
								enehp = false;
								opc6 = 3;
							}
						}
						if (opcmipoke==0) {
							opc6 = 3;
							start = false;
							mihp = false;
							enehp = false;
						}
						if (start==true) {
							// SE CREA UNA NUEVA VARIABLE
							if (opcmipoke==1) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								minombrepoke = mipoke[-1];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								mitipo[-1] = mipoket1[-1];
								// Guarda el Tipo 2
								mitipo[0] = mipoket1[0];
								// Habilidad del poke 1
								// SALUD
								misaludpoke = mipokeh1[-1];
								// ATAQUE
								miataquepoke = mipokeh1[0];
								// DEFENSA
								midefensapoke = mipokeh1[1];
								// VELOCIDAD
								mivelocidadpoke = mipokeh1[2];
								// ESPECIAL 
								miespecialpoke = mipokeh1[3];
								// Ingresar los datos siguientes 
								for (pos=0;pos<=3;pos++) {
									minombreataque[pos-1] = nombrea1[pos-1];
									mitipoa[pos-1] = tipoa1[pos-1];
									mipp[pos-1] = ppa1[pos-1];
									// Se mostrara en el marcador
									mifijopp[pos-1] = ppfa1[pos-1];
									midano[pos-1] = danoa1[pos-1];
								}
								// Se mostrara en el marcador
								misaludfija = mipokeh1[-1];
								milvl = minivel[-1];
							}
							if (opcmipoke==2) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								minombrepoke = mipoke[0];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								mitipo[-1] = mipoket2[-1];
								// Guarda el Tipo 2
								mitipo[0] = mipoket2[0];
								// Habilidad del poke 1
								// SALUD
								misaludpoke = mipokeh2[-1];
								// ATAQUE
								miataquepoke = mipokeh2[0];
								// DEFENSA
								midefensapoke = mipokeh2[1];
								// VELOCIDAD
								mivelocidadpoke = mipokeh2[2];
								// ESPECIAL 
								miespecialpoke = mipokeh2[3];
								for (pos=0;pos<=3;pos++) {
									minombreataque[pos-1] = nombrea2[pos-1];
									mitipoa[pos-1] = tipoa2[pos-1];
									mipp[pos-1] = ppa2[pos-1];
									// Se mostrara en el marcador
									mifijopp[pos-1] = ppfa2[pos-1];
									midano[pos-1] = danoa2[pos-1];
								}
								// Se mostrara en el marcador
								misaludfija = mipokeh2[-1];
								milvl = minivel[0];
							}
							if (opcmipoke==3) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								minombrepoke = mipoke[1];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								mitipo[-1] = mipoket3[-1];
								// Guarda el Tipo 2
								mitipo[0] = mipoket3[0];
								// Habilidad del poke 1
								// SALUD
								misaludpoke = mipokeh3[-1];
								// ATAQUE
								miataquepoke = mipokeh3[0];
								// DEFENSA
								midefensapoke = mipokeh3[1];
								// VELOCIDAD
								mivelocidadpoke = mipokeh3[2];
								// ESPECIAL 
								miespecialpoke = mipokeh3[3];
								for (pos=0;pos<=3;pos++) {
									minombreataque[pos-1] = nombrea3[pos-1];
									mitipoa[pos-1] = tipoa3[pos-1];
									mipp[pos-1] = ppa3[pos-1];
									// Se mostrara en el marcador
									mifijopp[pos-1] = ppfa3[pos-1];
									midano[pos-1] = danoa3[pos-1];
								}
								// Se mostrara en el marcador
								misaludfija = mipokeh3[-1];
								milvl = minivel[1];
							}
							if (opcmipoke==4) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								minombrepoke = mipoke[2];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								mitipo[-1] = mipoket4[-1];
								// Guarda el Tipo 2
								mitipo[0] = mipoket4[0];
								// Habilidad del poke 1
								// SALUD
								misaludpoke = mipokeh4[-1];
								// ATAQUE
								miataquepoke = mipokeh4[0];
								// DEFENSA
								midefensapoke = mipokeh4[1];
								// VELOCIDAD
								mivelocidadpoke = mipokeh4[2];
								// ESPECIAL
								miespecialpoke = mipokeh4[3];
								for (pos=0;pos<=3;pos++) {
									minombreataque[pos-1] = nombrea4[pos-1];
									mitipoa[pos-1] = tipoa4[pos-1];
									mipp[pos-1] = ppa4[pos-1];
									// Se mostrara en el marcador
									mifijopp[pos-1] = ppfa4[pos-1];
									midano[pos-1] = danoa4[pos-1];
								}
								// Se mostrara en el marcador
								misaludfija = mipokeh4[-1];
								milvl = minivel[2];
							}
							if (opcmipoke==5) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								minombrepoke = mipoke[3];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								mitipo[-1] = mipoket5[-1];
								// Guarda el Tipo 2
								mitipo[0] = mipoket5[0];
								// Habilidad del poke 1
								// SALUD
								misaludpoke = mipokeh5[-1];
								// ATAQUE
								miataquepoke = mipokeh5[0];
								// DEFENSA
								midefensapoke = mipokeh5[1];
								// VELOCIDAD
								mivelocidadpoke = mipokeh5[2];
								// ESPECIAL
								miespecialpoke = mipokeh5[3];
								for (pos=0;pos<=3;pos++) {
									minombreataque[pos-1] = nombrea5[pos-1];
									mitipoa[pos-1] = tipoa5[pos-1];
									mipp[pos-1] = ppa5[pos-1];
									// Se mostrara en el marcador
									mifijopp[pos-1] = ppfa5[pos-1];
									midano[pos-1] = danoa5[pos-1];
								}
								milvl = minivel[3];
								// Se mostrara en el marcador
								misaludfija = mipokeh5[-1];
							}
							if (opcmipoke==6) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								minombrepoke = mipoke[4];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								mitipo[-1] = mipoket6[-1];
								// Guarda el Tipo 2
								mitipo[0] = mipoket6[0];
								// Habilidad del poke 1
								// SALUD
								misaludpoke = mipokeh6[-1];
								// ATAQUE
								miataquepoke = mipokeh6[0];
								// DEFENSA
								midefensapoke = mipokeh6[1];
								// VELOCIDAD
								mivelocidadpoke = mipokeh6[2];
								// ESPECIAL 
								miespecialpoke = mipokeh6[3];
								for (pos=0;pos<=3;pos++) {
									minombreataque[pos-1] = nombrea6[pos-1];
									mitipoa[pos-1] = tipoa6[pos-1];
									mipp[pos-1] = ppa6[pos-1];
									// Se mostrara en el marcador
									mifijopp[pos-1] = ppfa6[pos-1];
									midano[pos-1] = danoa6[pos-1];
								}
								// Se mostrara en el marcador
								misaludfija = mipokeh6[-1];
								milvl = minivel[4];
							}
							// ***************************************** 1vs1 eleccion enemiga **************************
							if (cantidadpoke==1) {
								eneazar = 1;
							} else {
								do {
									eneazar = Math.floor(Math.random()*7);
								} while (!(eneazar==1 && enepokeh1[-1]>0 || eneazar==2 && enepokeh2[-1]>0 || eneazar==3 && enepokeh3[-1]>0 || eneazar==4 && enepokeh4[-1]>0 || eneazar==5 && enepokeh5[-1]>0 || eneazar==6 && enepokeh6[-1]>0));
							}
							if (eneazar==1) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								enenombrepoke = enepoke[-1];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								enetipo[-1] = enepoket1[-1];
								// Guarda el Tipo 2
								enetipo[0] = enepoket1[0];
								// Habilidad del poke 1
								// SALUD
								enesaludpoke = enepokeh1[-1];
								// ATAQUE
								eneataquepoke = enepokeh1[0];
								// DEFENSA
								enedefensapoke = enepokeh1[1];
								// VELOCIDAD
								enevelocidadpoke = enepokeh1[2];
								// ESPECIAL 
								eneespecialpoke = enepokeh1[3];
								for (pos=0;pos<=3;pos++) {
									enenombreataque[pos-1] = nombree1[pos-1];
									enetipoa[pos-1] = tipoe1[pos-1];
									enepp[pos-1] = ppe1[pos-1];
									// Se mostrara en el marcador
									enefijopp[pos-1] = ppfe1[pos-1];
									enedano[pos-1] = danoe1[pos-1];
								}
								enelvl = enenivel[-1];
								// Se mostrara en el marcador
								enesaludfija = enepokeh1[-1];
							}
							if (eneazar==2) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								enenombrepoke = enepoke[0];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								enetipo[-1] = enepoket2[-1];
								// Guarda el Tipo 2
								enetipo[0] = enepoket2[0];
								// Habilidad del poke 1
								// SALUD
								enesaludpoke = enepokeh2[-1];
								// ATAQUE
								eneataquepoke = enepokeh2[0];
								// DEFENSA
								enedefensapoke = enepokeh2[1];
								// VELOCIDAD
								enevelocidadpoke = enepokeh2[2];
								// ESPECIAL 
								eneespecialpoke = enepokeh2[3];
								for (pos=0;pos<=3;pos++) {
									enenombreataque[pos-1] = nombree2[pos-1];
									enetipoa[pos-1] = tipoe2[pos-1];
									enepp[pos-1] = ppe2[pos-1];
									// Se mostrara en el marcador
									enefijopp[pos-1] = ppfe2[pos-1];
									enedano[pos-1] = danoe2[pos-1];
								}
								enelvl = enenivel[0];
								// Se mostrara en el marcador
								enesaludfija = enepokeh2[-1];
							}
							if (eneazar==3) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								enenombrepoke = enepoke[1];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								enetipo[-1] = enepoket3[-1];
								// Guarda el Tipo 2
								enetipo[0] = enepoket3[0];
								// Habilidad del poke 1
								// SALUD
								enesaludpoke = enepokeh3[-1];
								// ATAQUE
								eneataquepoke = enepokeh3[0];
								// DEFENSA
								enedefensapoke = enepokeh3[1];
								// VELOCIDAD
								enevelocidadpoke = enepokeh3[2];
								// ESPECIAL 
								eneespecialpoke = enepokeh3[3];
								for (pos=0;pos<=3;pos++) {
									enenombreataque[pos-1] = nombree3[pos-1];
									enetipoa[pos-1] = tipoe3[pos-1];
									enepp[pos-1] = ppe3[pos-1];
									// Se mostrara en el marcador
									enefijopp[pos-1] = ppfe3[pos-1];
									enedano[pos-1] = danoe3[pos-1];
								}
								enelvl = enenivel[1];
								// Se mostrara en el marcador
								enesaludfija = enepokeh3[-1];
							}
							if (eneazar==4) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								enenombrepoke = enepoke[2];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								enetipo[-1] = enepoket4[-1];
								// Guarda el Tipo 2
								enetipo[0] = enepoket4[0];
								// Habilidad del poke 1
								// SALUD
								enesaludpoke = enepokeh4[-1];
								// ATAQUE
								eneataquepoke = enepokeh4[0];
								// DEFENSA
								enedefensapoke = enepokeh4[1];
								// VELOCIDAD
								enevelocidadpoke = enepokeh4[2];
								// ESPECIAL 
								eneespecialpoke = enepokeh4[3];
								for (pos=0;pos<=3;pos++) {
									enenombreataque[pos-1] = nombree4[pos-1];
									enetipoa[pos-1] = tipoe4[pos-1];
									enepp[pos-1] = ppe4[pos-1];
									// Se mostrara en el marcador
									enefijopp[pos-1] = ppfe4[pos-1];
									enedano[pos-1] = danoe4[pos-1];
								}
								enelvl = enenivel[2];
								// Se mostrara en el marcador
								enesaludfija = enepokeh4[-1];
							}
							if (eneazar==5) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								enenombrepoke = enepoke[3];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								enetipo[-1] = enepoket5[-1];
								// Guarda el Tipo 2
								enetipo[0] = enepoket5[0];
								// Habilidad del poke 1
								// SALUD
								enesaludpoke = enepokeh5[-1];
								// ATAQUE
								eneataquepoke = enepokeh5[0];
								// DEFENSA
								enedefensapoke = enepokeh5[1];
								// VELOCIDAD
								enevelocidadpoke = enepokeh5[2];
								// ESPECIAL
								eneespecialpoke = enepokeh5[3];
								for (pos=0;pos<=3;pos++) {
									enenombreataque[pos-1] = nombree5[pos-1];
									enetipoa[pos-1] = tipoe5[pos-1];
									enepp[pos-1] = ppe5[pos-1];
									// Se mostrara en el marcador
									enefijopp[pos-1] = ppfe5[pos-1];
									enedano[pos-1] = danoe5[pos-1];
								}
								enelvl = enenivel[3];
								// Se mostrara en el marcador
								enesaludfija = enepokeh5[-1];
							}
							if (eneazar==6) {
								// Guarda el nombre del pokemon 1 que voy a ocupar
								enenombrepoke = enepoke[4];
								// TIPO DEL POKE
								// Guarda el Tipo 1 del pokemon
								enetipo[-1] = enepoket6[-1];
								// Guarda el Tipo 2
								enetipo[0] = enepoket6[0];
								// Habilidad del poke 1
								// SALUD
								enesaludpoke = enepokeh6[-1];
								// ATAQUE
								eneataquepoke = enepokeh6[0];
								// DEFENSA
								enedefensapoke = enepokeh6[1];
								// VELOCIDAD
								enevelocidadpoke = enepokeh6[2];
								// ESPECIAL 
								eneespecialpoke = enepokeh6[3];
								for (pos=0;pos<=3;pos++) {
									enenombreataque[pos-1] = nombree6[pos-1];
									enetipoa[pos-1] = tipoe6[pos-1];
									enepp[pos-1] = ppe6[pos-1];
									// Se mostrara en el marcador
									enefijopp[pos-1] = ppfe6[pos-1];
									enedano[pos-1] = danoe6[pos-1];
								}
								enelvl = enenivel[4];
								// Se mostrara en el marcador
								enesaludfija = enepokeh6[-1];
							}
							if (opcmipoke==0) {
								mihp = false;
								enehp = false;
							}
							if (opcmipoke!=0) {
								// Primera Batalla :3 27/06/2016 Despues de dos semanas por fin llegando casi al final :3 by Benjamin Mora
								// ------------------------------------------------------------------------------------
								// **********************************Subir Por nivel***********************************
								// ------------------------------------------------------------------------------------
								eneaumento = enelvl*(enedefensapoke*0.2);
								miaumento = milvl*(midefensapoke*0.3);
								midefensapoke = midefensapoke+miaumento;
								enedefensapoke = enedefensapoke+eneaumento;
								enehp = false;
								mihp = false;
								if (enesaludpoke<=0) {
									enesaludpoke = 0;
									enesaludfija = enesaludpoke;
									console.log("Pok�mon enemigo bajo de vida");
									prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
								} else {
									enesaludpoke = enesaludpoke+((enelvl-1)*3);
									enesaludfija = enesaludpoke;
									enehp = true;
								}
								if (misaludpoke<=0) {
									misaludpoke = 0;
									misaludfija = misaludpoke;
									console.log("Pok�mon Bajo de vida ",jugador1);
									prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
								} else {
									misaludpoke = misaludpoke+((milvl-1)*3);
									misaludfija = misaludpoke;
									mihp = true;
								}
								// miSaludPoke=10000000;
								// eneSaludPoke=10000000;
								miaumento = 0;
								eneaumento = 0;
								for (v=0;v<=milvl;v++) {
									miaumento = miaumento+Math.floor(Math.random()*3);
								}
								for (v=0;v<=enelvl;v++) {
									eneaumento = eneaumento+Math.floor(Math.random()*3);
								}
								mivelocidadpoke = mivelocidadpoke+miaumento;
								enevelocidadpoke = enevelocidadpoke+eneaumento;
								// *****************************************************************
								if (mihp==true && enehp==true) {
									
									console.log("                                            ");
									console.log("|----------------------");
									console.log("| ");
									console.log("|    ");
									console.log("|    ");
									console.log("|----------------------");
									console.log("");
									console.log("");
									console.log("");
									console.log("");
									console.log("");
									console.log("                             |-----------------");
									console.log("                             | ");
									console.log("                             |       ");
									console.log("                             | ");
									console.log("                             |-----------------");
									console.log("�------------------------------------------------�");
									console.log("|   ",enemigo1," Envi� a ",enenombrepoke);
									console.log("|   ");
									console.log("�------------------------------------------------�");
									prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
								}
							}
						}
						while (mihp==true && enehp==true) {
							// Visual grafico
							do {
								
								console.log("                                 0 = Pok�dex (Ayuda)");
								console.log("|----------------------");
								console.log("| ",enenombrepoke);
								console.log("|              Nv ",enelvl);
								console.log("|    Ps: ",enesaludpoke,"                        ________ ");
								console.log("|----------------------            \\/    \\/ ");
								console.log("                                   / ^  ^ \\ ");
								console.log("                                   I\\____/I ");
								console.log("                                  /_\\    /_\\  ");
								console.log("       ________                     |    |");
								console.log("       \\/    \\/                    /_\\__/_\\ ");
								console.log("       /  ^^  \\              |-----------------");
								console.log("      I   ^^   I             | ",minombrepoke);
								console.log("     /_\\      /_\\            |        Nv ",milvl);
								console.log("       |      |              | Ps : ",misaludpoke,"/",misaludfija);
								console.log("      /_\\____/_\\             |-----------------");
								console.log("�------------------------------------------------�");
								console.log("|   [1]",minombreataque[-1],"(",mipp[-1],"/",mifijopp[-1],")        [2]",minombreataque[0],"(",mipp[0],"/",mifijopp[0],")");
								console.log("|   [3]",minombreataque[1],"(",mipp[1],"/",mifijopp[1],")        [4]",minombreataque[2],"(",mipp[2],"/",mifijopp[2],")");
								console.log("�------------------------------------------------�");
								opcionataque = Number(prompt());
								if (opcionataque==0) {
									
									console.log("");
									console.log("         P O K E D E X - R E S U M E N");
									console.log("",enemigo1);
									console.log("Pokemon Enemigo :",enenombrepoke," Nivel ",enelvl);
									console.log("         Tipo pokemon: ",enetipo[-1],"/",enetipo[0],"    Ps: ",enesaludpoke);
									console.log("                        Defensa: ",enedefensapoke,"  Velocidad: ",enevelocidadpoke);
									console.log("ATAQUES Pok�mon");
									console.log("1.- ",enenombreataque[-1]," | Tipo : ",enetipoa[-1]," | pp : ",enepp[-1],"  da�o: ",enedano[-1]);
									console.log("2.- ",enenombreataque[0]," | Tipo : ",enetipoa[0]," | pp : ",enepp[0],"  da�o: ",enedano[0]);
									console.log("3.- ",enenombreataque[1]," | Tipo : ",enetipoa[1]," | pp : ",enepp[1],"  da�o: ",enedano[1]);
									console.log("4.- ",enenombreataque[2]," | Tipo : ",enetipoa[2]," | pp : ",enepp[2],"  da�o: ",enedano[2]);
									console.log("");
									console.log("",jugador1);
									console.log("Nombre Pok�mon:",minombrepoke," Nivel ",milvl);
									console.log("         Tipo pokemon: ",mitipo[-1],"/",mitipo[0],"      Ps: ",misaludpoke);
									console.log("                          Defensa: ",midefensapoke,"  Velocidad: ",mivelocidadpoke);
									console.log("ATAQUES Pok�mon");
									console.log("1.- ",minombreataque[-1]," | Tipo : ",mitipoa[-1]," | pp : ",mipp[-1],"  da�o: ",midano[-1]);
									console.log("2.- ",minombreataque[0]," | Tipo : ",mitipoa[0]," | pp : ",mipp[0],"  da�o: ",midano[0]);
									console.log("3.- ",minombreataque[1]," | Tipo : ",mitipoa[1]," | pp : ",mipp[1],"  da�o: ",midano[1]);
									console.log("4.- ",minombreataque[2]," | Tipo : ",mitipoa[2]," | pp : ",mipp[2],"  da�o: ",midano[2]);
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
								if (opcionataque==1 && mipp[-1]==0) {
									console.log("No tienes pp para hacer el ataque ",mitipoa[-1]);
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
								if (opcionataque==2 && mipp[0]==0) {
									console.log("No tienes pp para hacer el ataque ",mitipoa[0]);
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
								if (opcionataque==3 && mipp[1]==0) {
									console.log("No tienes pp para hacer el ataque ",mitipoa[1]);
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
								if (opcionataque==4 && mipp[2]==0) {
									console.log("No tienes pp para hacer el ataque ",mitipoa[2]);
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
								}
							} while (!(opcionataque==1 && mipp[-1]>0 || opcionataque==2 && mipp[0]>0 || opcionataque==3 && mipp[1]>0 || opcionataque==4 && mipp[2]>0));
							if (paralizadoa==true) {
								opcionataque = 99;
							}
							if (opcionataque==99) {
								miataque = "";
								mipoderataque = 0;
								mitipoa[-1] = "";
								mitipoa[0] = "";
								mitipo[-1] = "";
								mitipo[0] = "";
								b = 0;
								ataquepoke = 0;
								tipoe = "";
								mipp = 0;
							}
							// *************** OPCION DE ATAQUE **********************
							b = 1;
							// ****  U S U A R I O *************
							if (opcionataque==1) {
								// Se guarda el primer nombre
								miataque = minombreataque[-1];
								mipoderataque = midano[-1];
								// bono
								if (mitipoa[-1]==mitipo[-1] || mitipoa[-1]==mitipo[0]) {
									b = 1.5;
								}
								if (mitipoa[-1]!="NORMAL") {
									ataquepoke = miespecialpoke;
								} else {
									ataquepoke = miataquepoke;
								}
								// Asginacion de efectividad
								tipoe = mitipoa[-1];
								mipp[-1] = mipp[-1]-1;
							}
							if (opcionataque==2) {
								// Se guarda el primer nombre
								miataque = minombreataque[0];
								mipoderataque = midano[0];
								// Bono
								if (mitipoa[0]==mitipo[-1] || mitipoa[0]==mitipo[0]) {
									b = 1.5;
								}
								if (mitipoa[0]!="NORMAL") {
									ataquepoke = miespecialpoke;
								} else {
									ataquepoke = miataquepoke;
								}
								// Asginacion de efectividad
								tipoe = mitipoa[0];
								mipp[0] = mipp[0]-1;
							}
							if (opcionataque==3) {
								// Se guarda el primer nombre
								miataque = minombreataque[1];
								mipoderataque = midano[1];
								// Bono  
								if (mitipoa[1]==mitipo[-1] || mitipoa[1]==mitipo[0]) {
									b = 1.5;
								}
								if (mitipoa[1]!="NORMAL") {
									ataquepoke = miespecialpoke;
								} else {
									ataquepoke = miataquepoke;
								}
								// Asginacion de efectividad
								tipoe = mitipoa[1];
								mipp[1] = mipp[1]-1;
							}
							if (opcionataque==4) {
								// Se guarda el primer nombre
								miataque = minombreataque[2];
								mipoderataque = midano[2];
								// Bono
								if (mitipoa[2]==mitipo[-1] || mitipoa[2]==mitipo[0]) {
									b = 1.5;
								}
								if (mitipoa[2]!="NORMAL") {
									ataquepoke = miespecialpoke;
								} else {
									ataquepoke = miataquepoke;
								}
								// Asginacion de efectividad
								tipoe = mitipoa[2];
								mipp[2] = mipp[2]-1;
							}
							// Variacion 
							do {
								v = Math.floor(Math.random()*101);
							} while (!(v==85 || v==100));
							// Efectividad 0.025 , 0.5 , 1 , 2 y 4
							// SOLO POR QUE TIENEN X, #, 0, porque los que tienen 1 estan por defecto en el caso si no dentran al algoritmo de abajo
							mie = 1;
							suerte = Math.floor(Math.random()*101);
							if (tipoe=="AGUA") {
								if (enetipo[-1]=="AGUA" || enetipo[0]=="AGUA" || enetipo[-1]=="DRAGON" || enetipo[0]=="DRAGON" || enetipo[-1]=="PLANTA" || enetipo[0]=="PLANTA") {
									mie = 0.5;
								}
								if (enetipo[-1]=="FUEGO" || enetipo[0]=="FUEGO" || enetipo[-1]=="ROCA" || enetipo[0]=="ROCA" || enetipo[-1]=="TIERRA" || enetipo[0]=="TIERRA") {
									mie = 2;
								}
							}
							if (tipoe=="BICHO") {
								if (enetipo[-1]=="FANTASMA" || enetipo[0]=="FANTASMA" || enetipo[-1]=="FUEGO" || enetipo[0]=="FUEGO" || enetipo[-1]=="LUCHA" || enetipo[0]=="LUCHA" || enetipo[-1]=="VENENO" || enetipo[0]=="VENENO") {
									mie = 0.5;
								}
								if (enetipo[-1]=="PLANTA" || enetipo[0]=="PLANTA" || enetipo[-1]=="PSIQUICO" || enetipo[0]=="PSIQUICO") {
									mie = 0;
								}
							}
							if (tipoe=="DRAGON") {
								if (enetipo[-1]==tipoe || enetipo[0]==tipoe) {
									mie = 2;
								}
							}
							if (tipoe=="ELECTRICO") {
								if (enetipo[-1]=="DRAGON" || enetipo[0]=="DRAGON" || enetipo[-1]=="ELECTRICO" || enetipo[0]=="ELECTRICO" || enetipo[-1]=="PLANTA" || enetipo[0]=="PLANTA") {
									mie = 0.5;
								}
								if (enetipo[-1]=="ELECTRICO" || enetipo[0]=="ELECTRICO" || enetipo[-1]=="VOLADOR" || enetipo[0]=="VOLADOR") {
									mie = 2;
								}
								if (enetipo[-1]=="TIERRA" || enetipo[-1]=="TIERRA") {
									mie = 0;
								}
							}
							if (tipoe=="FANTASMA") {
								if (enetipo[-1]=="FANTASMA" || enetipo[0]=="FANTASMA") {
									mie = 2;
								}
								if (enetipo[-1]=="NORMAL" || enetipo[-1]=="NORMAL") {
									mie = 0;
								}
							}
							if (tipoe=="FUEGO") {
								if (enetipo[-1]=="AGUA" || enetipo[0]=="AGUA" || enetipo[-1]=="DRAGON" || enetipo[0]=="DRAGON" || enetipo[-1]=="FUEGO" || enetipo[0]=="FUEGO" || enetipo[-1]=="ROCA" || enetipo[0]=="ROCA") {
									mie = 0.5;
								}
								if (enetipo[-1]=="BICHO" || enetipo[0]=="BICHO" || enetipo[-1]=="HIELO" || enetipo[0]=="HIELO" || enetipo[-1]=="PLANTA" || enetipo[0]=="PLANTA") {
									mie = 2;
								}
							}
							if (tipoe=="HIELO") {
								if (enetipo[-1]=="AGUA" || enetipo[0]=="AGUA" || enetipo[-1]=="FUEGO" || enetipo[0]=="FUEGO" || enetipo[-1]=="HIELO" || enetipo[0]=="HIELO") {
									mie = 0.5;
								}
								if (enetipo[-1]=="PLANTA" || enetipo[0]=="PLANTA" || enetipo[-1]=="TIERRA" || enetipo[0]=="TIERRA" || enetipo[-1]=="VOLADOR" || enetipo[0]=="VOLADOR") {
									mie = 2;
								}
							}
							if (tipoe=="LUCHA") {
								if (enetipo[-1]=="BICHO" || enetipo[0]=="BICHO" || enetipo[-1]=="PSIQUICO" || enetipo[0]=="PSIQUICO" || enetipo[-1]=="VENENO" || enetipo[0]=="VENENO" || enetipo[-1]=="VOLADOR" || enetipo[0]=="VOLADOR") {
									mie = 0.5;
								}
								if (enetipo[-1]=="HIELO" || enetipo[0]=="HIELO" || enetipo[-1]=="NOMRAL" || enetipo[0]=="NORMAL" || enetipo[-1]=="ROCA" || enetipo[-1]=="ROCA") {
									mie = 2;
								}
								if (enetipo[-1]=="FANTASMA" || enetipo[-1]=="FANTASMA") {
									mie = 0;
								}
							}
							if (tipoe=="NORMAL") {
								if (enetipo[-1]=="FANTASMA" || enetipo[0]=="FANTASMA") {
									mie = 0;
								}
							}
							if (tipoe=="PLANTA") {
								if (enetipo[-1]=="BICHO" || enetipo[0]=="BICHO" || enetipo[-1]=="FUEGO" || enetipo[0]=="FUEGO" || enetipo[-1]=="PLANTA" || enetipo[0]=="PLANTA" || enetipo[-1]=="VENENO" || enetipo[0]=="VENENO" || enetipo[-1]=="VOLADOR" || enetipo[0]=="VOLADOR") {
									mie = 0.5;
								}
								if (enetipo[-1]=="AGUA" || enetipo[0]=="AGUA" || enetipo[-1]=="ROCA" || enetipo[0]=="ROCA" || enetipo[-1]=="TIERRA" || enetipo[0]=="TIERRA") {
									mie = 2;
								}
							}
							if (tipoe=="PSIQUICO") {
								if (enetipo[-1]=="PSIQUICO" || enetipo[0]=="PSIQUICO") {
									mie = 0.5;
								}
								if (enetipo[-1]=="LUCHA" || enetipo[0]=="LUCHA" || enetipo[-1]=="VENENO" || enetipo[-1]=="VENENO") {
									mie = 2;
								}
							}
							if (tipoe=="ROCA") {
								if (enetipo[-1]=="LUCHA" || enetipo[0]=="LUCHA" || enetipo[-1]=="TIERRA" || enetipo[0]=="TIERRA") {
									mie = 0.5;
								}
								if (enetipo[-1]=="BICHO" || enetipo[0]=="BICHO" || enetipo[-1]=="FUEGO" || enetipo[0]=="FUEGO" || enetipo[-1]=="HIELO" || enetipo[0]=="HIELO" || enetipo[-1]=="VOLADOR" || enetipo[0]=="VOLADOR") {
									mie = 2;
								}
							}
							if (tipoe=="TIERRA") {
								if (enetipo[-1]=="BICHO" || enetipo[0]=="BICHO" || enetipo[-1]=="PLANTA" || enetipo[-1]=="PLANTA") {
									mie = 0.5;
								}
								if (enetipo[-1]=="ELECTRICO" || enetipo[0]=="ELECTRICO" || enetipo[-1]=="ROCA" || enetipo[0]=="ROCA" || enetipo[-1]=="VENENO" || enetipo[-1]=="ROCA") {
									mie = 2;
								}
								if (enetipo[-1]=="VOLADOR" || enetipo[0]=="VOLADOR") {
									mie = 0;
								}
							}
							if (tipoe=="VENENO") {
								if (enetipo[-1]=="LUCHA" || enetipo[0]=="LUCHA" || enetipo[-1]=="ROCA" || enetipo[0]=="ROCA" || enetipo[-1]=="TIERRA" || enetipo[0]=="TIERRA" || enetipo[-1]=="VENENO" || enetipo[-1]=="VENENO") {
									mie = 0.5;
								}
								if (enetipo[-1]=="PLANTA" || enetipo[-1]=="PLANTA") {
									mie = 2;
								}
							}
							if (tipoe=="VOLADOR") {
								if (enetipo[-1]=="ELECTRICO" || enetipo[0]=="ELECTRICO" || enetipo[-1]=="ROCA" && enetipo[0]=="ROCA") {
									mie = 0.5;
								}
								if (enetipo[-1]=="BICHO" || enetipo[0]=="BICHO" || enetipo[-1]=="LUCHA" || enetipo[0]=="LUCHA" || enetipo[-1]=="PLANTA" || enetipo[-1]=="PLANTA") {
									mie = 2;
								}
							}
							if (mie==0) {
								miestado = "El pokemon enemigo es inmune a tu Tipo de Ataque";
							}
							if (mie==0.5) {
								miestado = "Poco Eficaz";
							}
							if (mie==1) {
								miestado = "Da�o normal";
							}
							if (mie==2) {
								miestado = "Muy Efectivo";
							}
							// eneDefensaPoke = Defensa del pokemon
							// definir tipo de ataque, especial o normal
							// ################################################################################################
							// ########################### D A � O   P O R  EL TIPO #########################
							// ################################################################################################
							// ################################################################################################
							estadoa = "";
							suerte = Math.floor(Math.random()*101);
							estadofe = "";
							estadofa = "";
							// mi Estado favorable;
							miest = "";
							// Estado favorable para el enemigo
							eneest = "";
							if (tipoe=="FUEGO" && miataque!="Giro Fuego" && (enetipo[-1]!="FUEGO" || enetipo[0]!="FUEGO")) {
								if ((miataque=="Ascuas" || miataque=="Lanza Llamas" || miataque=="Pu�o Fuego") && suerte<=30) {
									estadoa = "Quemado";
								}
							}
							// Disparo demoras baja un nivel de velocidad del pokemon enemigo, osea le resta "1".
							if (miataque=="Disparo Demoras") {
								estadoa = "menosVelocidad";
							}
							// PARALIZAR   F  y V o v
							if (tipoe=="ELECTRICO") {
								if (enetipo[-1]!="TIERRA" || enetipo[0]!="TIERRA") {
									if (miataque=="Onda Trueno") {
										suerte = Math.floor(Math.random()*101);
										if (suerte<=20) {
											estadoa = "Paralizado";
										}
									}
									suerte = Math.floor(Math.random()*101);
									if (suerte<=20 && miataque=="Pu�o Trueno") {
										estadoa = "Paralizado";
									}
									if (suerte<=30 && miataque=="Rayo") {
										estadoa = "Paralizado";
									}
									if (miataque=="Trueno" && suerte<=15) {
										estadoa = "Paralizado";
									}
								}
							}
							// CONGELAR
							if (tipoe=="HIELO") {
								if ((miataque=="Rayo Hielo" || miataque=="Vendisca" || miataque=="Pu�o Hielo") && suerte<=29 && (enetipo[-1]!="HIELO" || enetipo[0]!="HIELO")) {
									estadoa = "Congelado";
								}
							}
							if (tipoe=="VENENO") {
								if ((mitipo[-1]=="VENENO" || mitipo[0]=="VENENO") && miataque=="Toxico" && (enetipo[-1]!="VENENO" || enetipo[0]!="VENENO")) {
									estadoa = "Envenenado";
								} else {
									if ((mitipo[-1]!="VENENO" || mitipo[0]!="VENENO") && miataque=="Toxico" && (enetipo[-1]!="VENENO" || enetipo[0]!="VENENO") && suerte<=90) {
										estadoa = "Envenenado";
									}
								}
								if (miataque=="Polvo Veneno" && (enetipo[-1]!="VENENO" || enetipo[0]!="VENENO")) {
									estadoa = "Envenenado";
								}
								if ((miataque=="Picotazo Venenoso" || miataque=="Residuos") && (enetipo[-1]!="VENENO" || enetipo[0]!="VENENO") && suerte<=30) {
									estadoa = "Envenenado";
								}
								if (miataque=="Gas Venenoso" && (enetipo[-1]!="VENENO" || enetipo[0]!="VENENO") && suerte<=55) {
									estadoa = "Envenenado";
								}
								if (miataque=="Acido" && (enetipo[-1]!="VENENO" || enetipo[0]!="VENENO") && suerte<=10) {
									estadoa = "Envenenado";
								}
								if (miataque=="Polucion" && (enetipo[-1]!="VENENO" || enetipo[0]!="VENENO") && suerte<=40) {
									estadoa = "Envenenado";
								}
							}
							// DORMIR
							if (tipoe=="NORMAL") {
								if (miataque=="Canto") {
									estadoa = "Dormido";
								}
							}
							// K.O SEGURO ;)
							// Precicion=[(U-O)+30]%
							// U=Nivel del Pokemon Usuario
							// O=Nivel del Pokemon Objetivo
							k_o = Math.floor(Math.random()*3);
							if (miataque=="Fisura" && suerte<=30 && k_o<=1) {
								estadoa = "Debilitado";
							}
							// DRENAJE
							// eL Drenaje es un estado donde se te resta Energia a Cada Turno
							if (tipoe=="PLANTA") {
								if (miataque=="Drenadoras" && (enetipo[-1]!="PLANTA" && enetipo[0]!="PLANTA")) {
									estadoa = "Drenando";
								}
								if (miataque=="Agotamiento") {
									estadoa = "Agotamiento";
								}
								if (miataque=="Absorber") {
									estadoa = "Absorber";
								}
							}
							// Armadura Acida 
							// Armadura Acida suebe en 2 niveles los puntos de defensa del pokemon
							if (miataque=="Armadura Acida") {
								estadoa = "masDefensa";
							}
							if (miataque=="Chirridos") {
								estadoa = "menosDefensa";
							}
							if (miataque=="Patada Salto" && suerte<=30) {
								mipoderataque = 70;
							} else {
								if (miataque=="Patada Salto" && suerte>30) {
									miest = "Me hice da�o";
									misaludpoke = misaludpoke-(misaludpoke/8);
									misaludpoke = Math.trunc(misaludpoke);
								}
							}
							// Descanso
							// descanso es un ataque tipo psiquico que te duerme durante 2 turnos
							// mientras duermes recuperas todos tus puntos de salud(ps), puedes ser atacado en estos 2 turnos
							// depsues de 2 turnos el pokemon despierta solo
							if (miataque=="Descanso") {
								estadoa = "Dormido";
							}
							// Amnesia
							// Amnesia es un ataque tipo Psiquico que al usarlo, sube el especial en 2 puntos
							if (miataque=="Amnesia") {
								estadoa = "masVelocidad";
							}
							// Golpe Karate 
							// Golpe Karate es Tipo Normal en esta generacion y tiene un alto porcentaje de da�o critico
							if (miataque=="Golpe Karate") {
								if (suerte>=60) {
									miest = "ha hecho un Critico favorable";
									mie = 6;
								}
							}
							// Tienieblas
							// Tienielas es un ataque tipo fantasma que hace un da�o al enemigo, igual al del nivel del atacante
							if (miataque=="Tinieblas" && (enetipo[-1]!="NORMAL" || enetipo[0]!="NORMAL")) {
								enesaludpoke = enesaludpoke-milvl;
								enesaludpoke = Math.trunc(enesaludpoke);
							}
							// Rayo Aurora
							// Rayo Aurora es un ataque tipo Hielo que tiene 10% de probabilidad de Congelar
							if (miataque=="Rayo Aurora " && suerte<=29) {
								estadoa = "Congelado";
							}
							// Ataque Psiquico 
							// Ataque Psiquico o simplemente "Psiquico" es un ataque tipo PSIQUICO que tiene 10% de probabilidades de confundir
							if (miataque=="Ataque Psiquico" && suerte<=10) {
								estadoa = "Confundido";
							}
							// Ataque Arena
							// en esta genracion Ataque Arena es Tipo NORMAL 
							// Ataque Arena baja la precicion en 2 puntos
							if (miataque=="Ataque Arena") {
								estadofa = "ha disminuido la presicion";
								enevelocidadpoke = enevelocidadpoke-(enevelocidadpoke/4);
								enevelocidadpoke = Math.trunc(enevelocidadpoke);
							}
							// Transformacion
							// Transformacion es un ataque del tipo normal que permite al ususario trasformarce en el pokemon enemigo
							if (miataque=="Transformacion") {
								miest = miataque;
								for (contx=0;contx<=3;contx++) {
									minombreataque[contx-1] = enenombreataque[contx-1];
									mipp[contx-1] = enepp[contx-1];
									mitipoa[contx-1] = enetipoa[contx-1];
									mifijopp[contx-1] = enefijopp[contx-1];
									midano[contx-1] = enedano[contx-1];
								}
							}
							// ################################################################################################
							// ################################################################################################
							if (estadoa=="masDefensa") {
								midefensapoke = midefensapoke+30;
								miest = " ha aumentado la Defensa";
							}
							if (estadoa=="menosDefensa") {
								enedefensapoke = enedefensapoke-30;
								estadofe = " ha bajado la Defensa";
							}
							if (estadoa=="Absorber") {
								drenado = enesaludpoke*0.15;
								misaludpoke = misaludpoke+drenado;
								enesaludpoke = enesaludpoke-drenado;
								misaludpoke = Math.trunc(misaludpoke);
								enesaludpoke = Math.trunc(enesaludpoke);
								estadofe = "ha absorvido al enemigo";
							}
							if (estadoa=="Agotamiento") {
								drenado = enesaludpoke*0.1;
								misaludpoke = misaludpoke+drenado;
								enesaludpoke = enesaludpoke-drenado;
								misaludpoke = Math.trunc(misaludpoke);
								enesaludpoke = Math.trunc(enesaludpoke);
								estadofe = " ha agotado al enemigo";
							}
							if (estadoa=="menosVelocidad") {
								estadofe = "ha bajado la Velocidad";
								enevelocidadpoke = enevelocidadpoke-20;
							}
							if (estadoa=="masVelocidad") {
								miest = "ha subido la Velocidad";
								mivelocidadpoke = mivelocidadpoke+20;
							}
							if (estadoa=="Quemado") {
								enesaludpoke = enesaludpoke-(enesaludpoke*0.125);
								estadofe = "esta Quemado";
							}
							if (estadoa=="Paralizado") {
								paralizadoe = true;
								estadofe = "Paralizado";
							}
							if (estadoa=="Congelado") {
								paralizadoe = true;
								estadofe = "Congelado";
							}
							if (estadoa=="Envenenado") {
								enesaludpoke = enesaludpoke-(enesaludpoke*0.125);
								enesaludpoke = Math.trunc(enesaludpoke);
								estadofe = "esta Envenenado";
							}
							if (estadoa=="Dormido") {
								paralizadoe = true;
								estadofe = "esta Dormido";
							}
							if (estadoa=="Drenado") {
								drenado = enesaludpoke*0.07;
								misaludpoke = misaludpoke+drenado;
								enesaludpoke = enesaludpoke-drenado;
								misaludpoke = Math.trunc(misaludpoke);
								enesaludpoke = Math.trunc(enesaludpoke);
								estadofe = "ha drenado vida oponente";
							}
							if (estadoa=="Debilitado") {
								enesaludpoke = 0;
								estadofe = "El Pok�mon enemigo esta debilitado";
								paralizadoe = true;
							}
							if (estadoa=="Confundido") {
								estadofe = "esta confundido";
								suerte = Math.floor(Math.random()*2);
								if (suerte==0) {
									enesaludpoke = enesaludpoke-(enesaludpoke*0.1);
									enesaludpoke = Math.trunc(enesaludpoke);
								}
							}
							// ################################################################################################
							// ################################################################################################
							// Calculo del da�o
							mitotaldano = 0.01*b*mie*v*((((0.2+milvl+1)*ataquepoke*mipoderataque)/(25*enedefensapoke))+2);
							mitotaldano = Math.trunc(mitotaldano);
							// ************************* Enemigo  CALCULO DE DA�O
							do {
								opcionataque = Math.floor(Math.random()*5);
							} while (!(opcionataque==1 && enepp[-1]>0 || opcionataque==2 && enepp[0]>0 || opcionataque==3 && enepp[1]>0 || opcionataque==4 && enepp[2]>0));
							b = 1;
							if (paralizadoe==true) {
								opcionataque = 99;
							}
							if (opcionataque==99) {
								eneataque = "";
								enepoderataque = 0;
								enetipoa[-1] = "";
								enetipoa[0] = "";
								enetipo[-1] = "";
								enetipo[0] = "";
								b = 0;
								ataquepoke = 0;
								tipox = "";
							}
							if (opcionataque==1) {
								// Se guarda el primer nombre
								eneataque = enenombreataque[-1];
								enepoderataque = enedano[-1];
								// Bono  
								if (enetipoa[-1]==enetipo[-1] || enetipoa[-1]==enetipo[0]) {
									b = 1.5;
								}
								if (enetipoa[-1]!="NORMAL") {
									ataquepoke = eneespecialpoke;
								} else {
									ataquepoke = eneataquepoke;
								}
								tipox = enetipoa[-1];
								enepp[-1] = enepp[-1]-1;
							}
							if (opcionataque==2) {
								// Se guarda el primer nombre
								eneataque = enenombreataque[0];
								enepoderataque = enedano[0];
								// Bono  
								if (enetipoa[0]==enetipo[-1] || enetipoa[0]==enetipo[0]) {
									b = 1.5;
								}
								if (enetipoa[0]!="NORMAL") {
									ataquepoke = eneespecialpoke;
								} else {
									ataquepoke = eneataquepoke;
								}
								enepp[0] = enepp[0]-1;
								tipox = enetipoa[0];
							}
							if (opcionataque==3) {
								// Se guarda el primer nombre
								eneataque = enenombreataque[1];
								enepoderataque = enedano[1];
								// Bono  
								if (enetipoa[1]==enetipo[-1] || enetipoa[1]==enetipo[0]) {
									b = 1.5;
								}
								if (enetipoa[1]!="NORMAL") {
									ataquepoke = eneespecialpoke;
								} else {
									ataquepoke = eneataquepoke;
								}
								tipox = enetipoa[1];
								enepp[1] = enepp[1]-1;
							}
							if (opcionataque==4) {
								// Se guarda el primer nombre
								eneataque = enenombreataque[2];
								enepoderataque = enedano[2];
								// Bono  
								if (enetipoa[2]==enetipo[-1] || enetipoa[2]==enetipo[0]) {
									b = 1.5;
								}
								if (enetipoa[2]!="NORMAL") {
									ataquepoke = eneespecialpoke;
								} else {
									ataquepoke = eneataquepoke;
								}
								tipox = enetipoa[2];
								enepp[2] = enepp[2]-1;
							}
							// Efectividad 0.025 , 0.5 , 1 , 2 y 4
							// SOLO POR QUE TIENEN X, #, 0, porque los que tienen 1 estan por defecto en el caso si no dentran al algoritmo de abajo
							mie = 1;
							if (tipox=="AGUA") {
								if (mitipo[-1]=="AGUA" || mitipo[0]=="AGUA" || mitipo[-1]=="DRAGON" || mitipo[0]=="DRAGON" || mitipo[-1]=="PLANTA" || mitipo[0]=="PLANTA") {
									mie = 0.5;
								}
								if (mitipo[-1]=="FUEGO" || mitipo[0]=="FUEGO" || mitipo[-1]=="ROCA" || mitipo[0]=="ROCA" || mitipo[-1]=="TIERRA" || mitipo[0]=="TIERRA") {
									mie = 2;
								}
							}
							if (tipox=="BICHO") {
								if (mitipo[-1]=="FANTASMA" || mitipo[0]=="FANTASMA" || mitipo[-1]=="FUEGO" || mitipo[0]=="FUEGO" || mitipo[-1]=="LUCHA" || mitipo[0]=="LUCHA" || mitipo[-1]=="VENENO" || mitipo[0]=="VENENO") {
									mie = 0.5;
								}
								if (mitipo[-1]=="PLANTA" || mitipo[0]=="PLANTA" || mitipo[-1]=="PSIQUICO" || mitipo[0]=="PSIQUICO") {
									mie = 0;
								}
							}
							if (tipox=="DRAGON") {
								if (mitipo[-1]==tipox || mitipo[0]==tipox) {
									mie = 2;
								}
							}
							if (tipox=="ELECTRICO") {
								if (mitipo[-1]=="DRAGON" || mitipo[0]=="DRAGON" || mitipo[-1]=="ELECTRICO" || mitipo[0]=="ELECTRICO" || mitipo[-1]=="PLANTA" || mitipo[0]=="PLANTA") {
									mie = 0.5;
								}
								if (mitipo[-1]=="ELECTRICO" || mitipo[0]=="ELECTRICO" || mitipo[-1]=="VOLADOR" || mitipo[0]=="VOLADOR") {
									mie = 2;
								}
								if (mitipo[-1]=="TIERRA" || mitipo[-1]=="TIERRA") {
									mie = 0;
								}
							}
							if (tipox=="FANTASMA") {
								if (mitipo[-1]=="FANTASMA" || mitipo[0]=="FANTASMA") {
									mie = 2;
								}
								if (mitipo[-1]=="NORMAL" || mitipo[-1]=="NORMAL") {
									mie = 0;
								}
							}
							if (tipox=="FUEGO") {
								if (mitipo[-1]=="AGUA" || mitipo[0]=="AGUA" || mitipo[-1]=="DRAGON" || mitipo[0]=="DRAGON" || mitipo[-1]=="FUEGO" || mitipo[0]=="FUEGO" || mitipo[-1]=="ROCA" || mitipo[0]=="ROCA") {
									mie = 0.5;
								}
								if (mitipo[-1]=="BICHO" || mitipo[0]=="BICHO" || mitipo[-1]=="HIELO" || mitipo[0]=="HIELO" || mitipo[-1]=="PLANTA" || mitipo[0]=="PLANTA") {
									mie = 2;
								}
							}
							if (tipox=="HIELO") {
								if (mitipo[-1]=="AGUA" || mitipo[0]=="AGUA" || mitipo[-1]=="FUEGO" || mitipo[0]=="FUEGO" || mitipo[-1]=="HIELO" || mitipo[0]=="HIELO") {
									mie = 0.5;
								}
								if (mitipo[-1]=="PLANTA" || mitipo[0]=="PLANTA" || mitipo[-1]=="TIERRA" || mitipo[0]=="TIERRA" || mitipo[-1]=="VOLADOR" || mitipo[0]=="VOLADOR") {
									mie = 2;
								}
							}
							if (tipox=="LUCHA") {
								if (mitipo[-1]=="BICHO" || mitipo[-1]=="BICHO" || mitipo[-1]=="PSIQUICO" || mitipo[0]=="PSIQUICO" || mitipo[-1]=="VENENO" || mitipo[-1]=="VENENO" || mitipo[-1]=="VOLADOR" || mitipo[-1]=="VOLADOR") {
									mie = 0.5;
								}
								if (mitipo[-1]=="HIELO" || mitipo[0]=="HIELO" || mitipo[-1]=="NOMRAL" || mitipo[0]=="NORMAL" || mitipo[-1]=="ROCA" || mitipo[-1]=="ROCA") {
									mie = 2;
								}
								if (mitipo[-1]=="FANTASMA" || mitipo[-1]=="FANTASMA") {
									mie = 0;
								}
							}
							if (tipox=="NORMAL") {
								if (mitipo[-1]=="FANTASMA" || mitipo[0]=="FANTASMA") {
									mie = 0;
								}
							}
							if (tipox=="PLANTA") {
								if (mitipo[-1]=="BICHO" || mitipo[0]=="BICHO" || mitipo[-1]=="FUEGO" || mitipo[0]=="FUEGO" || mitipo[-1]=="PLANTA" || mitipo[0]=="PLANTA" || mitipo[-1]=="VENENO" || mitipo[0]=="VENENO" || mitipo[-1]=="VOLADOR" || mitipo[0]=="VOLADOR") {
									mie = 0.5;
								}
								if (mitipo[-1]=="AGUA" || mitipo[0]=="AGUA" || mitipo[-1]=="ROCA" || mitipo[0]=="ROCA" || mitipo[-1]=="TIERRA" || mitipo[0]=="TIERRA") {
									mie = 2;
								}
							}
							if (tipox=="PSIQUICO") {
								if (mitipo[-1]=="PSIQUICO" || mitipo[0]=="PSIQUICO") {
									mie = 0.5;
								}
								if (mitipo[-1]=="LUCHA" || mitipo[0]=="LUCHA" || mitipo[-1]=="VENENO" || mitipo[-1]=="VENENO") {
									mie = 2;
								}
							}
							if (tipox=="ROCA") {
								if (mitipo[-1]=="LUCHA" || mitipo[0]=="LUCHA" || mitipo[-1]=="TIERRA" || mitipo[0]=="TIERRA") {
									mie = 0.5;
								}
								if (mitipo[-1]=="BICHO" || mitipo[0]=="BICHO" || mitipo[-1]=="FUEGO" || mitipo[0]=="FUEGO" || mitipo[-1]=="HIELO" || mitipo[0]=="HIELO" || mitipo[-1]=="VOLADOR" || mitipo[0]=="VOLADOR") {
									mie = 2;
								}
							}
							if (tipox=="TIERRA") {
								if (mitipo[-1]=="BICHO" || mitipo[0]=="BICHO" || mitipo[-1]=="PLANTA" || mitipo[-1]=="PLANTA") {
									mie = 0.5;
								}
								if (mitipo[-1]=="ELECTRICO" || mitipo[0]=="ELECTRICO" || mitipo[-1]=="ROCA" || mitipo[0]=="ROCA" || mitipo[-1]=="VENENO" || mitipo[-1]=="ROCA") {
									mie = 2;
								}
								if (mitipo[-1]=="VOLADOR" || mitipo[0]=="VOLADOR") {
									mie = 0;
								}
							}
							if (tipox=="VENENO") {
								if (mitipo[-1]=="LUCHA" || mitipo[0]=="LUCHA" || mitipo[-1]=="ROCA" || mitipo[0]=="ROCA" || mitipo[-1]=="TIERRA" || mitipo[0]=="TIERRA" || mitipo[-1]=="VENENO" || mitipo[-1]=="VENENO") {
									mie = 0.5;
								}
								if (mitipo[-1]=="PLANTA" || mitipo[-1]=="PLANTA") {
									mie = 2;
								}
							}
							if (tipox=="VOLADOR") {
								if (mitipo[-1]=="ELECTRICO" || mitipo[0]=="ELECTRICO" || mitipo[-1]=="ROCA" && mitipo[0]=="ROCA") {
									mie = 0.5;
								}
								if (mitipo[-1]=="BICHO" || mitipo[0]=="BICHO" || mitipo[-1]=="LUCHA" || mitipo[0]=="LUCHA" || mitipo[-1]=="PLANTA" || mitipo[-1]=="PLANTA") {
									mie = 2;
								}
							}
							if (mie==0) {
								eneestado = "Tu pokemon es inmune al Ataque enemigo";
							}
							if (mie==0.5) {
								eneestado = "Poco Eficaz";
							}
							if (mie==1) {
								eneestado = "Da�o normal";
							}
							if (mie==2) {
								eneestado = "Muy Efectivo";
							}
							// definir tipo de ataque, especial o normal
							// ################################################################################################
							// ########################### D A � O   P O R  EL TIPO #########################
							// ################################################################################################
							// ################################################################################################
							estadoe = "";
							suerte = Math.floor(Math.random()*101);
							estadofa = "";
							// Estado favorable para el enemigo
							eneest = "";
							if (tipox=="FUEGO" && eneataque!="Giro Fuego" && (mitipo[-1]!="FUEGO" || mitipo[0]!="FUEGO")) {
								if ((eneataque=="Ascuas" || eneataque=="Lanza Llamas" || eneataque=="Pu�o Fuego") && suerte<=30) {
									estadoe = "Quemado";
								}
							}
							// Disparo demoras baja un nivel de velocidad del pokemon enemigo, osea le resta "1".
							if (eneataque=="Disparo Demoras") {
								estadoe = "menosVelocidad";
							}
							// PARALIZAR   F  y V o v
							if (tipox=="ELECTRICO") {
								if (mitipo[-1]!="TIERRA" || mitipo[0]!="TIERRA") {
									if (eneataque=="Onda Trueno") {
										suerte = Math.floor(Math.random()*101);
										if (suerte<=20) {
											estadoe = "Paralizado";
										}
									}
									suerte = Math.floor(Math.random()*101);
									if (suerte<=20 && eneataque=="Pu�o Trueno") {
										estadoe = "Paralizado";
									}
									if (suerte<=30 && eneataque=="Rayo") {
										estadoe = "Paralizado";
									}
									if (eneataque=="Trueno" && suerte<=15) {
										estadoe = "Paralizado";
									}
								}
							}
							if (tipox=="PLANTA") {
								if (eneataque=="Paralizador") {
									estadoe = "Paralizado";
								}
							}
							// CONGELAR
							if (tipox=="HIELO") {
								if ((eneataque=="Rayo Hielo" || eneataque=="Vendisca" || eneataque=="Pu�o Hielo") && suerte<=29 && (mitipo[-1]!="HIELO" || mitipo[0]!="HIELO")) {
									estadoe = "Congelado";
								}
							}
							if (tipox=="VENENO") {
								if ((enetipo[-1]=="VENENO" || enetipo[0]=="VENENO") && eneataque=="Toxico" && (mitipo[-1]!="VENENO" || mitipo[0]!="VENENO")) {
									estadoe = "Envenenado";
								} else {
									if ((enetipo[-1]!="VENENO" || enetipo[0]!="VENENO") && eneataque=="Toxico" && (mitipo[-1]!="VENENO" || mitipo[0]!="VENENO") && suerte<=90) {
										estadoe = "Envenenado";
									}
								}
								if (eneataque=="Polvo Veneno" && (mitipo[-1]!="VENENO" || mitipo[0]!="VENENO")) {
									estadoe = "Envenenado";
								}
								if ((eneataque=="Picotazo Venenoso" || eneataque=="Residuos") && (mitipo[-1]!="VENENO" || mitipo[0]!="VENENO") && suerte<=30) {
									estadoe = "Envenenado";
								}
								if (eneataque=="Gas Venenoso" && (mitipo[-1]!="VENENO" || mitipo[0]!="VENENO") && suerte<=55) {
									estadoe = "Envenenado";
								}
								if (eneataque=="Acido" && (mitipo[-1]!="VENENO" || mitipo[0]!="VENENO") && suerte<=10) {
									estadoe = "Envenenado";
								}
								if (eneataque=="Polucion" && (mitipo[-1]!="VENENO" || mitipo[0]!="VENENO") && suerte<=40) {
									estadoe = "Envenenado";
								}
							}
							// DORMIR
							if (tipox=="NORMAL") {
								if (eneataque=="Canto") {
									estadoe = "Dormido";
								}
							}
							// K.O SEGURO ;)
							// Precicion=[(U-O)+30]%
							// U=Nivel del Pokemon Usuario
							// O=Nivel del Pokemon Objetivo
							k_o = Math.floor(Math.random()*3);
							if (eneataque=="Fisura" && suerte<=30 && k_o<=1) {
								estadoe = "Debilitado";
							}
							// DRENAJE
							// eL Drenaje es un estado donde se te resta Energia a Cada Turno
							if (tipox=="PLANTA") {
								if (eneataque=="Drenadoras" && (mitipo[-1]!="PLANTA" && mitipo[0]!="PLANTA")) {
									estadoe = "Drenando";
								}
								if (eneataque=="Agotamiento") {
									estadoe = "Agotamiento";
								}
								if (eneataque=="Absorber") {
									estadoe = "Absorber";
								}
							}
							// Armadura Acida 
							// Armadura Acida suebe en 2 niveles los puntos de defensa del pokemon
							if (eneataque=="Armadura Acida") {
								estadoe = "masDefensa";
							}
							if (eneataque=="Chirridos") {
								estadoe = "menosDefensa";
							}
							if (eneataque=="Patada Salto" && suerte<=30) {
								enepoderataque = 70;
							} else {
								if (eneataque=="Patada Salto" && suerte>30) {
									eneest = "se ha hecho da�o";
									enesaludpoke = enesaludpoke-(enesaludpoke/8);
									enesaludpoke = Math.trunc(enesaludpoke);
								}
							}
							// Descanso
							// descanso es un ataque tipo psiquico que te duerme durante 2 turnos
							// mientras duermes recuperas todos tus puntos de salud(ps), puedes ser atacado en estos 2 turnos
							// depsues de 2 turnos el pokemon despierta solo
							if (eneataque=="Descanso") {
								estadoe = "Dormido";
							}
							// Amnesia
							// Amnesia es un ataque tipo Psiquico que al usarlo, sube el especial en 2 puntos
							if (eneataque=="Amnesia") {
								estadoe = "masVelocidad";
							}
							// Golpe Karate 
							// Golpe Karate es Tipo Normal en esta generacion y tiene un alto porcentaje de da�o critico
							if (eneataque=="Golpe Karate") {
								if (suerte>=60) {
									eneest = "ha hecho un Critico";
									mie = 6;
								}
							}
							// Tienieblas
							// Tienielas es un ataque tipo fantasma que hace un da�o al enemigo, igual al del nivel del atacante
							if (eneataque=="Tinieblas" && (mitipo[-1]!="NORMAL" || mitipo[0]!="NORMAL")) {
								misaludpoke = misaludpoke-enelvl;
								misaludpoke = Math.trunc(misaludpoke);
							}
							// Rayo Aurora
							// Rayo Aurora es un ataque tipo Hielo que tiene 10% de probabilidad de Congelar
							if (eneataque=="Rayo Aurora " && suerte<=29) {
								estadoe = "Congelado";
							}
							// Ataque Psiquico 
							// Ataque Psiquico o simplemente "Psiquico" es un ataque tipo PSIQUICO que tiene 10% de probabilidades de confundir
							if (eneataque=="Ataque Psiquico" && suerte<=10) {
								estadoe = "Confundido";
							}
							// Ataque Arena
							// en esta genracion Ataque Arena es Tipo NORMAL 
							// Ataque Arena baja la precicion en 2 puntos
							if (eneataque=="Ataque Arena") {
								estadofe = "ha disminuido la presicion";
								mivelocidadpoke = mivelocidadpoke-(mivelocidadpoke/4);
								mivelocidadpoke = Math.trunc(mivelocidadpoke);
							}
							// Transformacion
							// Transformacion es un ataque del tipo normal que permite al ususario trasformarce en el pokemon enemigo
							if (eneataque=="Transformacion") {
								eneest = eneataque;
								for (contx=0;contx<=3;contx++) {
									enenombreataque[contx-1] = minombreataque[contx-1];
									enepp[contx-1] = mipp[contx-1];
									enetipoa[contx-1] = mitipoa[contx-1];
									enefijopp[contx-1] = mifijopp[contx-1];
									enedano[contx-1] = midano[contx-1];
								}
							}
							// ################################################################################################
							// ################################################################################################
							if (estadoe=="masDefensa") {
								enedefensapoke = enedefensapoke+30;
								eneest = "ha Aumentado la Defensa";
							}
							if (estadoe=="menosDefensa") {
								midefensapoke = midefensapoke-30;
								estadofa = "ha Bajado la Defensa";
							}
							if (estadoe=="Absorber") {
								drenado = misaludpoke*0.15;
								enesaludpoke = enesaludpoke+drenado;
								misaludpoke = misaludpoke-drenado;
								enesaludpoke = Math.trunc(enesaludpoke);
								misaludpoke = Math.trunc(misaludpoke);
								estadofa = "ha abosorvido";
							}
							if (estadoe=="Agotamiento") {
								drenado = misaludpoke*0.1;
								enesaludpoke = enesaludpoke+drenado;
								misaludpoke = misaludpoke-drenado;
								enesaludpoke = Math.trunc(enesaludpoke);
								misaludpoke = Math.trunc(misaludpoke);
								estadofa = estadoe;
							}
							if (estadoe=="menosVelocidad") {
								estadofa = "ha Bajado Velocidad";
								mivelocidadpoke = mivelocidadpoke-20;
							}
							if (estadoe=="masVelocidad") {
								eneest = "ha subido Velocidad";
								enevelocidadpoke = enevelocidadpoke+20;
							}
							if (estadoe=="Quemado") {
								misaludpoke = misaludpoke-(misaludpoke*0.125);
								misaludpoke = Math.trunc(misaludpoke);
								estadofa = "esta Quemado";
							}
							if (estadoe=="Paralizado") {
								paralizadoa = true;
								estadofa = "Paralizado";
							}
							if (estadoe=="Congelado") {
								paralizadoa = true;
								estadofa = "Congelado";
							}
							if (estadoe=="Envenenado") {
								misaludpoke = misaludpoke-(misaludpoke*0.125);
								misaludpoke = Math.trunc(misaludpoke);
								estadofa = "esta Envenenado";
							}
							if (estadoe=="Dormido") {
								paralizadoa = true;
								estadofa = "Esta Dormido";
							}
							if (estadoe=="Drenado") {
								drenado = misaludpoke*0.07;
								enesaludpoke = enesaludpoke+drenado;
								misaludpoke = misaludpoke-drenado;
								enesaludpoke = Math.trunc(enesaludpoke);
								misaludpoke = Math.trunc(misaludpoke);
								estadofa = "ha drenado vida";
							}
							if (estadoe=="Debilitado") {
								misaludpoke = 0;
								estadofa = "El Pok�mon enemigo esta debilitado";
								paralizadoa = true;
							}
							if (estadoe=="Confundido") {
								estadofa = "esta confundido";
								suerte = Math.floor(Math.random()*2);
								if (suerte==0) {
									misaludpoke = misaludpoke-(misaludpoke*0.1);
									misaludpoke = Math.trunc(misaludpoke);
								}
							}
							// ################################################################################################
							// ################################################################################################
							enetotaldano = 0.01*b*mie*v*((((0.2+enelvl+1)*ataquepoke*enepoderataque)/(25*midefensapoke))+2);
							enetotaldano = Math.trunc(enetotaldano);
							// �Quien Ataca Primero ? 
							miv = Math.floor(Math.random()*mivelocidadpoke+1);
							enev = Math.floor(Math.random()*enevelocidadpoke+1);
							if (paralizadoa==false && paralizadoe==false) {
								if (miv>=enev) {
									console.log("Has Ganado en velocidad");
									enesaludpoke = enesaludpoke-mitotaldano;
									console.log("�",minombrepoke," us� ",miataque,"!");
									prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
									if (miest!="") {
										console.log("�mi Pok�mon ",minombrepoke," ",miest,"!");
										prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
									}
									if (estadofe!="") {
										console.log("�El Pok�mon ",enenombrepoke," ",estadofe,"!");
										prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
									}
									if (enesaludpoke<=0) {
										// Batalla termino
										console.log("ha muerto el pokemon enemigo");
										enehp = false;
										win = win+1;
										enesaludpoke = 0;
									}
									if (enesaludpoke>0) {
										misaludpoke = misaludpoke-enetotaldano;
										console.log("�Enemigo ",enenombrepoke," us� ",eneataque,"!");
										prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
										if (eneest!="") {
											console.log("�Enemigo Pok�mon ",enenombrepoke," ",eneest,"!");
											prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
										}
										if (estadofa!="") {
											console.log("�mi Pok�mon ",minombrepoke," ",estadofa,"!");
											prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
										}
										if (misaludpoke<=0) {
											console.log("Ha muerto tu pokemon");
											mihp = false;
											misaludpoke = 0;
										}
									}
								}
								if (enev>miv) {
									console.log("El ha Ganado en velocidad");
									misaludpoke = misaludpoke-enetotaldano;
									console.log("�Enemigo ",enenombrepoke," us� ",eneataque,"!");
									prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
									if (eneest!="") {
										console.log("�Enemigo Pok�mon ",enenombrepoke," ",eneest,"!");
										prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
									}
									if (estadofa!="") {
										console.log("�mi Pok�mon ",minombrepoke," ",estadofa,"!");
										prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
									}
									if (misaludpoke<=0) {
										// Batalla termino
										console.log("ha muerto tu pokemon");
										misaludpoke = 0;
										mihp = false;
									}
									if (misaludpoke>0) {
										enesaludpoke = enesaludpoke-mitotaldano;
										console.log("�",minombrepoke," us� ",miataque,"!");
										prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
										if (miest!="") {
											console.log("�mi Pok�mon ",minombrepoke," ",miest,"!");
											prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
										}
										if (estadofe!="") {
											console.log("�El Pok�mon ",enenombrepoke," ",estadofe,"!");
											prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
										}
										if (enesaludpoke<=0) {
											console.log("Ha muerto el pokemon enemigo");
											enehp = false;
											win = win+1;
											enesaludpoke = 0;
										}
									}
								}
							}
							// paralizadoA = Yo estoy paralizado Verdadero=Cuando esta
							// paralizadoE = enemigo paralizado  Falso= cuando no esta
							// EL ATACA
							if (paralizadoa==true && paralizadoe==false) {
								console.log("�Estas ",estadofa,"!");
								misaludpoke = misaludpoke-enetotaldano;
								console.log("�Enemigo ",enenombrepoke," us� ",eneataque,"!");
								// Esperar 2 Segundos;        
								if (misaludpoke<0) {
									console.log("Ha muerto tu Pok�mon");
									mihp = false;
									misaludpoke = 0;
								}
								paralizadoa = false;
								paralizadoe = false;
								estadofa = "";
							}
							// YO ATACO
							if (paralizadoa==false && paralizadoe==true) {
								// en el caso que yo 
								console.log("�",enenombrepoke," esta ",estadofe,"!");
								enesaludpoke = enesaludpoke-mitotaldano;
								console.log("�",minombrepoke," us� ",miataque,"!");
								// Esperar 2 Segundos;
								if (enesaludpoke<=0) {
									console.log("Ha muerto el pokemon enemigo");
									enehp = false;
									win = win+1;
									enesaludpoke = 0;
								}
								paralizadoa = false;
								paralizadoe = false;
								estadofe = "";
							}
							// LOS DOS ESTAMOS DORMIDOS
							if (paralizadoa==true && paralizadoe==true) {
								console.log("�",enenombrepoke," esta ",estadofe,"!");
								console.log("�",minombrepoke," esta ",estadofa,"!");
								paralizadoa = false;
								paralizadoe = false;
								estadofe = "";
								estadofa = "";
							}
							// Volver a los valores
							if (misaludpoke==0 || enesaludpoke==0) {
								if (enesaludpoke==0) {
									if (opc6==2) {
										micontwin = micontwin+1;
									}
									
									console.log("  ");
									console.log("|----------------------");
									console.log("| ",enenombrepoke);
									console.log("|              Nv ",enelvl);
									console.log("|    Ps: 0                         ________ ");
									console.log("|----------------------            \\/    \\/ ");
									console.log("                                   / X  X \\ ");
									console.log("                                   I\\____/I ");
									console.log("                                  /_\\    /_\\  ");
									console.log("       ________                     |    |");
									console.log("       \\/    \\/                    /_\\__/_\\ ");
									console.log("       /  ^^  \\              |-----------------");
									console.log("      I   ^^   I             | ",minombrepoke);
									console.log("     /_\\      /_\\            |        Nv ",milvl);
									console.log("       |      |              | Ps : ",misaludpoke,"/",misaludfija);
									console.log("      /_\\____/_\\             |-----------------");
									console.log("�------------------------------------------------�");
									console.log("|  �Pok�mon ",enenombrepoke," debilitado!");
									prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
									console.log("|   �",jugador1," has ganado este combate!");
									console.log("�------------------------------------------------�");
								}
								if (misaludpoke==0) {
									if (opc6==2) {
										enecontwin = enecontwin+1;
									}
									
									console.log("  ");
									console.log("|----------------------");
									console.log("| ",enenombrepoke);
									console.log("|              Nv ",enelvl);
									console.log("|    Ps:  ",enesaludpoke,"                       ________ ");
									console.log("|----------------------            \\/    \\/ ");
									console.log("                                   / O  O \\ ");
									console.log("                                   I\\____/I ");
									console.log("                                  /_\\    /_\\  ");
									console.log("                                    |    |");
									console.log("                                   /_\\__/_\\ ");
									console.log("       ________              |-----------------");
									console.log("       \\/    \\/    </3       | ",minombrepoke);
									console.log("       /  !   \\              |        Nv ",milvl);
									console.log("      I     !  I             | Ps : 0/",misaludfija);
									console.log("     /_\\  !   /_\\            |-----------------");
									console.log("�------------------------------------------------�");
									console.log("|  �Tu Pok�mon ",minombrepoke," se ha debilitado!");
									prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
									console.log("|   �",enemigo1," ha ganado este combate!");
									console.log("�------------------------------------------------�");
								}
								if (opcmipoke==1) {
									mipokeh1[-1] = misaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppa1[contx-1] = mipp[contx-1];
									}
								}
								if (eneazar==1) {
									enepokeh1[-1] = enesaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppe1[contx-1] = enepp[contx-1];
									}
								}
								if (opcmipoke==2) {
									mipokeh2[-1] = misaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppa2[contx-1] = mipp[contx-1];
									}
								}
								if (eneazar==2) {
									enepokeh2[-1] = enesaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppe2[contx-1] = enepp[contx-1];
									}
								}
								if (opcmipoke==3) {
									mipokeh3[-1] = misaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppa3[contx-1] = mipp[contx-1];
									}
								}
								if (eneazar==3) {
									enepokeh3[-1] = enesaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppe3[contx-1] = enepp[contx-1];
									}
								}
								if (opcmipoke==4) {
									mipokeh4[-1] = misaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppa4[contx-1] = mipp[contx-1];
									}
								}
								if (eneazar==4) {
									enepokeh4[-1] = enesaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppe4[contx-1] = enepp[contx-1];
									}
								}
								if (opcmipoke==5) {
									mipokeh5[-1] = misaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppa5[contx-1] = mipp[contx-1];
									}
								}
								if (eneazar==5) {
									enepokeh5[-1] = enesaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppe5[contx-1] = enepp[contx-1];
									}
								}
								if (opcmipoke==6) {
									mipokeh6[-1] = misaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppa6[contx-1] = mipp[contx-1];
									}
								}
								if (eneazar==6) {
									enepokeh6[-1] = enesaludpoke;
									for (contx=0;contx<=3;contx++) {
										ppe6[contx-1] = enepp[contx-1];
									}
								}
								if (cantidadpoke==1) {
									totalsalud = mipokeh1[-1];
									enetotalsalud = enepokeh1[-1];
								}
								if (cantidadpoke==6) {
									totalsalud = mipokeh1[-1]+mipokeh2[-1]+mipokeh3[-1]+mipokeh4[-1]+mipokeh5[-1]+mipokeh6[-1];
									enetotalsalud = enepokeh1[-1]+enepokeh2[-1]+enepokeh3[-1]+enepokeh4[-1]+enepokeh5[-1]+enepokeh6[-1];
								}
							}
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						}
					}
					if (micontwin==6) {
						
						console.log("  ");
						console.log("|----------------------");
						console.log("| ",enemigo1);
						console.log("|           ");
						console.log("|    P E R D E D O R               ________ ");
						console.log("|----------------------            \\/    \\/ ");
						console.log("                                   / X  X \\ ");
						console.log("                                   I\\____/I ");
						console.log("                                  /_\\    /_\\  ");
						console.log("       ________                     |    |");
						console.log("       \\/    \\/                    /_\\__/_\\ ");
						console.log("       /  ^^  \\              |-----------------");
						console.log("      I   ^^   I             | ",jugador1);
						console.log("     /_\\      /_\\            |       ");
						console.log("       |      |              | G A N A D O R ");
						console.log("      /_\\____/_\\             |-----------------");
						console.log("�------------------------------------------------�");
						console.log("|  ",enemigo1,": �Maldito! �me has ganado!");
						prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
						console.log("|  �Nos volveremos a encontrar y te pateare el trasero!");
						console.log("�------------------------------------------------�");
						prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						micontwin = 0;
						enecontwin = 0;
					}
					if (enecontwin==6) {
						
						console.log("  ");
						console.log("|----------------------");
						console.log("| ",enemigo1);
						console.log("|              ");
						console.log("|  G A N A D O R                   ________ ");
						console.log("|----------------------            \\/    \\/ ");
						console.log("                                   / -  O \\ ");
						console.log("                                   I\\____/I ");
						console.log("                                  /_\\    /_\\  ");
						console.log("                                    |    |");
						console.log("                                   /_\\__/_\\ ");
						console.log("       ________              |-----------------");
						console.log("       \\/    \\/    </3       | ",juagador1);
						console.log("       /  !   \\              | ");
						console.log("      I     !  I             |  P E R D E D O R ");
						console.log("     /_\\  !   /_\\            |-----------------");
						console.log("�------------------------------------------------�");
						console.log("|  �Te he ganado ",jugador1,", eres muy malo!");
						prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
						console.log("|   �Nos volveremos a ver, sigue entrenando !");
						console.log("�------------------------------------------------�");
						prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
						micontwin = 0;
						enecontwin = 0;
					}
				} else {
					// ERROR POR NO ASIGNAR POKEMONES AL INVENTARIO
					
					console.log("");
					console.log("Te Falta asignar pokemones a tu inventario");
					console.log("");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
				}
			}
			// **********************************************************LABORATORIO**** OPCION 3 **************************
			// **********************************************************LABORATORIO**** OPCION 3 **************************
			// **********************************************************LABORATORIO**** OPCION 3 **************************
			if (opc3==3) {
				do {
					
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
					console.log("XXXXXXXXXX| L A B O R A T O R I O     |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|   1.- ELEGIR POKEMON      |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX|   2.- REINICIAR PP        |XXXXXXXXXX");
					console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
					console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX [3] Volver XXXXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("Eliga una opci�n :");
					opc5 = Number(prompt());
				} while (!(opc5==1 || opc5==2 || opc5==3));
				if (opc5==2) {
					if (cantidadpoke==1) {
						console.log("");
						console.log("�Reiniciando PP tu Pok�mon ",jugador1,"!");
						prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
						console.log("");
						console.log("�Reiniciando PP de los Pok�mon ",enemigo1,"!");
						prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
						for (contx=0;contx<=3;contx++) {
							ppa1[contx-1] = ppfa1[contx-1];
							ppe1[contx-1] = ppfe1[contx-1];
						}
					}
					if (cantidadpoke==6) {
						console.log("");
						console.log("�Reiniciando PP de tus Pok�mon ",jugador1,"!");
						prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
						console.log("");
						console.log("�Reiniciando PP de los Pok�mon ",enemigo1,"!");
						prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
						for (contx=0;contx<=3;contx++) {
							ppa1[contx-1] = ppfa1[contx-1];
							ppa2[contx-1] = ppfa2[contx-1];
							ppa3[contx-1] = ppfa3[contx-1];
							ppa4[contx-1] = ppfa4[contx-1];
							ppa5[contx-1] = ppfa5[contx-1];
							ppa6[contx-1] = ppfa6[contx-1];
							ppe1[contx-1] = ppfe1[contx-1];
							ppe2[contx-1] = ppfe2[contx-1];
							ppe3[contx-1] = ppfe3[contx-1];
							ppe4[contx-1] = ppfe4[contx-1];
							ppe5[contx-1] = ppfe5[contx-1];
							ppe6[contx-1] = ppfe6[contx-1];
						}
					}
				}
				if (opc5==1) {
					
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("");
					console.log("");
					console.log("SUGERENCIA ANOTAR POKEMON DEL QUE VA A USAR EN UN PAPEL");
					console.log("");
					console.log("");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
					console.log("");
					console.log("       PRESIONES CUALQUIER TECLA PARA CONTINUAR");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					// ***************************************************************LISTA DE POKEMONES**************************
					
					console.log("            INVENTARIO                             POKEDEX                   INVENTARIO");
					console.log("@-----------------------------------------------------------------------------------------------------------@");
					console.log("| N�MERO |  NOMBRE     |  TIPO 1  | TIPO 2  | SALUD   |  ATAQUE  | DEFENSA | VELOCIDAD | ESPECIAL | TOTAL   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #1     | BULBASAUR   |  PLANTA  |  VENENO |   45    |   49     |   49    |    45     |    65    |   253   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #2     | CHARMANDER  |  FUEGO   |         |   39    |   52     |   43    |    65     |    50    |   249   |");
					console.log("@-----------------------------------------------------------------------------------------------------------|");
					console.log("| #3     | SQUITLE     |  AGUA    |         |   44    |   48     |   65    |    43     |    50    |   250   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #4     | CATERPIE    |  BICHO   |         |   45    |   30     |   35    |    45     |    20    |   175   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #5     | WEEDLE      |  BICHO   | VENENO  |   40    |   35     |   30    |    50     |    20    |   175   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #6     | PIDGEY      |  NORMAL  | VOLADOR |   40    |   45     |   40    |    56     |    35    |   216   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #7     | RATTTATA    |  NORMAL  |         |   30    |   56     |   35    |    72     |    25    |   218   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #8     | SPEAROW     |  NORMAL  | VOLADOR |   40    |   60     |   30    |    70     |    31    |   231   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #9     | EKANS       |  VENENO  |         |   35    |   60     |   44    |    55     |    40    |   234   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #10    | PIKACHU     | ELECTRICO|         |   35    |   55     |   30    |    90     |    50    |   260   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("PRESIONES CUALQUIER TECLA PARA CONTINUAR                                                             P�g 1/8");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					
					console.log("@-----------------------------------------------------------------------------------------------------------@");
					console.log("| N�MERO |  NOMBRE     |  TIPO 1  | TIPO 2  | SALUD   |  ATAQUE  | DEFENSA | VELOCIDAD | ESPECIAL | TOTAL   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #11    | SANDSHREW   |  TIERRA  |         |   50    |   75     |   85    |    40     |    30    |   280   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #12    | NIDORAN F   |  VENENO  |         |   55    |   47     |   52    |    41     |    40    |   235   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #13    | NIDORAN M   |  VENENO  |         |   46    |   57     |   40    |    50     |    40    |   233   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #14    | CLEFAIRY    |  NORMAL  |         |   70    |   45     |   48    |    35     |    60    |   258   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #15    | VULPIX      |  FUEGO   |         |   38    |   41     |   40    |    65     |    65    |   249   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #16    | JIGGLYPUFF  |  NORMAL  |         |   115   |   45     |   20    |    20     |    25    |   225   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #17    | ZUBAT       |  VENENO  |  VOLADOR|   40    |   45     |   35    |    55     |    40    |   215   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #18    | ODDISH      |  PLANTA  |  VENENO |   45    |   50     |   55    |    30     |    75    |   255   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #19    | PARAS       |  BICHO   |  PLANTA |   35    |   70     |   55    |    25     |    55    |   240   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #20    | VENONAT     |  BICHO   |  VENENO |   60    |   55     |   50    |    45     |    40    |   250   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("PRESIONES CUALQUIER TECLA PARA CONTINUAR                                                             P�g 2/8");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					
					console.log("@-----------------------------------------------------------------------------------------------------------@");
					console.log("| N�MERO |  NOMBRE     |  TIPO 1  | TIPO 2  | SALUD   |  ATAQUE  | DEFENSA | VELOCIDAD | ESPECIAL | TOTAL   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #21    | DIGLETT     |  TIERRA  |         |   10    |   55     |   25    |    95     |    45    |   230   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #22    | MEOWTH      |  NORMAL  |         |   40    |   45     |   35    |    90     |    40    |   250   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #23    | PSYDUCK     |  AGUA    |         |   50    |   52     |   48    |    55     |    50    |   255   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #24    | MANKEY      |  LUCHA   |         |   40    |   80     |   35    |    70     |    35    |   260   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #25    | GROWLITHE   |  FUEGO   |         |   55    |   70     |   45    |    60     |    50    |   280   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #26    | POLIWAG     |  AGUA    |         |   40    |   50     |   40    |    90     |    40    |   260   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #27    | ABRA        |  PSIQUICO|         |   25    |   20     |   15    |    90     |    105   |   255   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #28    | MACHOP      |  LUCHA   |         |   70    |   80     |   50    |    35     |    35    |   270   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #29    | BELLSPROUT  |  PLATNA  |   VENENO|   50    |   75     |   35    |    40     |    70    |   270   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #30    | TENTACOOL   |  AGUA    |   VENENO|    40    |   40     |   35    |    70     |    100   |   285   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("PRESIONES CUALQUIER TECLA PARA CONTINUAR                                                             P�g 3/8");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					
					console.log("@-----------------------------------------------------------------------------------------------------------@");
					console.log("| N�MERO |  NOMBRE     |  TIPO 1  | TIPO 2  | SALUD   |  ATAQUE  | DEFENSA | VELOCIDAD | ESPECIAL | TOTAL   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #31    | GEODUDE     |  ROCA    |   TIERRA|   40    |   80     |   100   |    20     |    30    |   270   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #32    | PONYTA      |  FUEGO   |         |   50    |   85     |   55    |    90     |    65    |   345   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #33    | SLOWPOKE    |  AGUA    | PSIQUICO|   90    |   65     |   65    |    15     |    40    |   275   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #34    | MAGNEMITE   | ELECTRICO|         |   25    |   35     |   70    |    45     |    95    |   270   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #35    | FARFETC�D   |  NORMAL  |  VOLADOR|   52    |   65     |   55    |    60     |    58    |   290   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #36    | DODUO       |  NORMAL  |  VOLADOR|   35    |   85     |   45    |    75     |    35    |   275   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #37    | SEEL        |  AGUA    |         |   65    |   45     |   55    |    45     |    70    |   280   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #38    | GRIMER      |  VENENO  |         |   80    |   80     |   50    |    25     |    70    |   280   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #39    | SHELLDER    |  AGUA    |   HIELO |   30    |   65     |   100   |    40     |    40    |   275   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #40    | GASTLY      |  FANTASMA|   VENENO|   30    |   35     |   30    |    80     |    45    |   280   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("PRESIONES CUALQUIER TECLA PARA CONTINUAR                                                             P�g 4/8");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					
					console.log("@-----------------------------------------------------------------------------------------------------------@");
					console.log("| N�MERO |  NOMBRE     |  TIPO 1  | TIPO 2  | SALUD   |  ATAQUE  | DEFENSA | VELOCIDAD | ESPECIAL | TOTAL   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #41    | ONIX        |  ROCA    |   TIERRA|   35    |   45     |   160   |    70     |    100   |   275   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #42    | DROWZEE     |  SPIQUICO|         |   60    |   48     |   45    |    42     |    30    |   340   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #43    | KRABBY      |  AGUA    |         |   30    |   105    |   90    |    50     |    90    |   285   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #44    | VOLTROD     |  ELECTICO|         |   40    |   30     |   50    |   100     |    55    |   275   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #45    | EXEGGUTE    |  PLANTA  | PSIQUICO|   60    |   40     |   80    |    40     |    25    |   300   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #46    | CUBONE      |  TIERRA  |         |   50    |   50     |   95    |    35     |    55    |   275   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #47    | HITMONLEE   |  LUCHA   |         |   50    |   120    |   53    |    87     |    60    |   289   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #48    | HITMONCHAN  |  LUCHA   |         |   50    |   105    |   79    |    76     |    40    |   270   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #49    | LICKITUNG   |  NORMAL  |         |   90    |   55     |   75    |    30     |    35    |   345   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #50    | KOFFING     |  VENENO  |         |   40    |   65     |   95    |    35     |    35    |   345   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("PRESIONES CUALQUIER TECLA PARA CONTINUAR                                                             P�g 5/8");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					
					console.log("@-----------------------------------------------------------------------------------------------------------@");
					console.log("| N�MERO |  NOMBRE     |  TIPO 1  | TIPO 2  | SALUD   |  ATAQUE  | DEFENSA | VELOCIDAD | ESPECIAL | TOTAL   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #51    | RHYHORN     |  ROCA    |   TIERRA|   80    |   85     |   95    |    25     |    60    |   310   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #52    | CHANSEY     |  NORMAL  |         |   250   |   5      |   5     |    50     |    60    |   265   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #53    | TANGELA     |  PLANTA  |   VENENO|   65    |   55     |   115   |    60     |    30    |   315   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #54    | KANGASKHAN  |  NORMAL  |         |   105   |   95     |   80    |    90     |    105   |   215   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #55    | HORSEA      |  AGUA    |         |   30    |   40     |   70    |    60     |    100   |   395   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #56    | GOLDEEN     |  AGUA    |         |   45    |   67     |   60    |    63     |    40    |   410   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #57    | STARYU      |  AGUA    |         |   30    |   45     |   55    |    85     |    70    |   270   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #58    | MR.MIME     |  PSIQUICO|         |   40    |   45     |   65    |    90     |    50    |   285   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #59    | SCYTHER     |  BICHO   |  VOLADOR|   70    |   110    |   80    |    105    |    70    |   285   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #60    | JYNX        |  HIELO   | PSIQUICO|   65    |   50     |   35    |    95     |    100   |   340   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("PRESIONES CUALQUIER TECLA PARA CONTINUAR                                                             P�g 6/8");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					
					console.log("@-----------------------------------------------------------------------------------------------------------@");
					console.log("| N�MERO |  NOMBRE     |  TIPO 1  | TIPO 2  | SALUD   |  ATAQUE  | DEFENSA | VELOCIDAD | ESPECIAL | TOTAL   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #61    | ELECTABUZZ  | ELECTRICO|         |   65    |   83     |   57    |    105    |    55    |   420   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #62    | MAGMAR      |  FUEGO   |         |   65    |   95     |   57    |    93     |    85    |   395   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #63    | PINSIR      |  BICHO   |         |   65    |   125    |   100   |    85     |    55    |   430   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #64    | TAUROS      |  NORMAL  |         |   75    |   100    |   95    |    110    |    70    |   450   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #65    | MAGIKARP    |  AGUA    |         |   20    |   10     |   55    |    80     |    20    |   185   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #66    | LAPRAS      |  AGUA    |  HIELO  |   103   |   85     |   80    |    60     |    95    |   450   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #67    | DITTO       |  NORMAL  |         |   48    |   48     |   48    |    48     |    48    |   240   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #68    | EEVEE       |  NORMAL  |         |   55    |   55     |   50    |    55     |    65    |   280   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #69    | PORYGON     |  NORMAL  |         |   65    |   60     |   70    |    40     |    75    |   310   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #70    | OMANYTE     |  ROCA    |  AGUA   |   35    |   40     |   100   |    35     |    90    |   300   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("PRESIONES CUALQUIER TECLA PARA CONTINUAR                                                             P�g 7/8");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					
					console.log("@-----------------------------------------------------------------------------------------------------------@");
					console.log("| N�MERO |  NOMBRE     |  TIPO 1  | TIPO 2  | SALUD   |  ATAQUE  | DEFENSA | VELOCIDAD | ESPECIAL | TOTAL   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #71    | KABUTO      |  ROCA    |     AGUA|   30    |   80     |   90    |    55     |    45    |   300   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #72    | AERODACTYL  |  ROCA    |  VOLADOR|   80    |   105    |   65    |    130    |    60    |   440   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #73    | SNORLAX     |  NORMAL  |         |   160   |   110    |   65    |    30     |    65    |   430   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #74    | ARTICUNO    |  HIELO   |  VOLADOR|   90    |   85     |   100   |    85     |    125   |   485   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #75    | ZAPDOS      | ELECTRICO|  VOLADOR|   90    |   90     |   85    |    100    |    125   |   490   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #76    | MOLTRES     |  FUEGO   |  VOLADOR|   90    |   100    |   90    |    90     |    125   |   495   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #77    | DRATINI     |  DRAGON  |         |   41    |   64     |   45    |    50     |    50    |   250   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #78    | MEWTWO      |  PSIQUICO|         |   106   |   110    |   90    |    130    |    154   |   590   |");
					console.log("|-----------------------------------------------------------------------------------------------------------|");
					console.log("| #79    | MEW         |  PSIQUICO|         |   100   |   100    |   100   |    100    |    100   |   500   |");
					console.log("@-----------------------------------------------------------------------------------------------------------@");
					console.log("PRESIONES CUALQUIER TECLA PARA CONTINUAR                                                             P�g 8/8");
					prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
					err = 0;
					for (z=2;z<=6;z++) {
						// OPCION DE POSICION DE POKEMON "USUARIO"
						do {
							if (z>=3) {
								
							}
							console.log("");
							console.log("Elegir un pokemon ",z);
							console.log("");
							console.log("");
							p = Number(prompt());
						} while (!(p>=1 && p!=10 && p<=79 && p!=error[-1] && p!=error[0] && p!=error[1] && p!=error[2] && p!=error[3] && p!=error[4]));
						error[err-1] = p;
						// *******************************************LISTA DE POKEMONES USUARIO********************
						// POKEMON 1
						if (p==1) {
							nombrepokemon[0] = "BULBASAUR";
							// Tipo1
							pokemon[-1] = "PLANTA";
							// Tipo2
							pokemon[0] = "VENENO";
							// SALUD
							pokemon[1] = "45";
							// ATAQUE
							pokemon[2] = "49";
							// DEFENSA
							pokemon[3] = "49";
							// VELOCIDAD
							pokemon[4] = "45";
							// ESPECIAL
							pokemon[5] = "65";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Latigo Cepa";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "35";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[0];
							pp[2] = "95";
							efectivo[2] = "20";
							dano[2] = "65";
						}
						// POKEMON 2
						if (p==2) {
							nombrepokemon[1] = "CHARMANDER";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "39";
							pokemon[2] = "52";
							pokemon[3] = "43";
							pokemon[4] = "65";
							pokemon[5] = "50";
							nombreataque[-1] = "Ascuas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Lanza Llamas";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Giro Fuego";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "70";
							dano[1] = "15";
							nombreataque[2] = "Pu�o Fuego";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "75";
						}
						// POKEMON 3
						if (p==3) {
							nombrepokemon[2] = "SQUIRTLE";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "44";
							pokemon[2] = "48";
							pokemon[3] = "65";
							pokemon[4] = "43";
							pokemon[5] = "50";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Surf";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 4 
						if (p==4) {
							nombrepokemon[3] = "CATERPIE";
							pokemon[-1] = "BICHO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "45";
							pokemon[2] = "30";
							pokemon[3] = "35";
							pokemon[4] = "45";
							pokemon[5] = "20";
							nombreataque[-1] = "Doble Ataque";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "25";
							nombreataque[0] = "Pin Misille";
							tipoataque[0] = pokemon[-1];
							pp[0] = "20";
							efectivo[0] = "85";
							dano[0] = "14";
							nombreataque[1] = "Disparo Demoras";
							tipoataque[1] = pokemon[-1];
							pp[1] = "40";
							efectivo[1] = "95";
							dano[1] = "0";
							nombreataque[2] = "Chupa Vidas";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "20";
						}
						// POKEMON 5
						if (p==5) {
							nombrepokemon[4] = "WEEDLE";
							pokemon[-1] = "BICHO";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "35";
							pokemon[3] = "30";
							pokemon[4] = "50";
							pokemon[5] = "20";
							nombreataque[-1] = "Doble Ataque";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "25";
							nombreataque[0] = "Picotazo Venenoso";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "15";
							nombreataque[1] = "Disparo Demoras";
							tipoataque[1] = pokemon[-1];
							pp[1] = "40";
							efectivo[1] = "95";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 6
						if (p==6) {
							nombrepokemon[5] = "PIDGEY";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "45";
							pokemon[3] = "40";
							pokemon[4] = "56";
							pokemon[5] = "35";
							nombreataque[-1] = "Ataque Aereo";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "5";
							efectivo[-1] = "90";
							dano[-1] = "140";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Vuelo";
							tipoataque[2] = pokemon[0];
							pp[2] = "15";
							efectivo[2] = "95";
							dano[2] = "30";
						}
						// POKEMON 7
						if (p==7) {
							nombrepokemon[6] = "RATTATA";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "56";
							pokemon[3] = "35";
							pokemon[4] = "72";
							pokemon[5] = "25";
							nombreataque[-1] = "Desctructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ara�azo";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 8
						if (p==8) {
							nombrepokemon[7] = "SPEAROW";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "60";
							pokemon[3] = "30";
							pokemon[4] = "70";
							pokemon[5] = "31";
							nombreataque[-1] = "Ataque Aereo";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "5";
							efectivo[-1] = "90";
							dano[-1] = "140";
							nombreataque[0] = "Vuelo";
							tipoataque[0] = pokemon[0];
							pp[0] = "15";
							efectivo[0] = "95";
							dano[0] = "90";
							nombreataque[1] = "Ataque Ala";
							tipoataque[1] = pokemon[0];
							pp[1] = "35";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 9
						if (p==9) {
							nombrepokemon[8] = "EKANS";
							pokemon[-1] = "VENENO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "60";
							pokemon[3] = "44";
							pokemon[4] = "55";
							pokemon[5] = "40";
							nombreataque[-1] = "�cido";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "30";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "70";
							dano[0] = "0";
							nombreataque[1] = "Residuos";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "95";
							dano[1] = "65";
							nombreataque[2] = "Picotazo Venenoso";
							tipoataque[2] = pokemon[-1];
							pp[2] = "30";
							efectivo[2] = "100";
							dano[2] = "15";
						}
						// POKEMON 9
						if (p==10) {
							nombrepokemon[9] = "PIKACHU";
							pokemon[-1] = "ELECTRICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "55";
							pokemon[3] = "30";
							pokemon[4] = "90";
							pokemon[5] = "50";
							nombreataque[-1] = "Pu�o Trueno";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "100";
							dano[-1] = "75";
							nombreataque[0] = "Trueno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "70";
							dano[0] = "120";
							nombreataque[1] = "Impactrueno";
							tipoataque[1] = pokemon[-1];
							pp[1] = "30";
							efectivo[1] = "100";
							dano[1] = "40";
							nombreataque[2] = "Rayo";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON  11
						if (p==11) {
							nombrepokemon[10] = "SANDSHREW";
							pokemon[-1] = "TIERRA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "75";
							pokemon[3] = "85";
							pokemon[4] = "40";
							pokemon[5] = "30";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "100";
							nombreataque[0] = "Hueso Bumerang";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "90";
							dano[0] = "50";
							nombreataque[1] = "Excavar";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Fisura";
							tipoataque[2] = pokemon[-1];
							pp[2] = "5";
							efectivo[2] = "30";
							dano[2] = "0";
						}
						// POKEMON 12
						if (p==12) {
							nombrepokemon[11] = "NIDORAN F";
							pokemon[-1] = "VENENO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "55";
							pokemon[2] = "47";
							pokemon[3] = "52";
							pokemon[4] = "41";
							pokemon[5] = "40";
							nombreataque[-1] = "Armadura Acida";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "40";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "Acido";
							tipoataque[0] = pokemon[-1];
							pp[0] = "30";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Polvo Veneno";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "75";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 13
						if (p==13) {
							nombrepokemon[12] = "NIDORAN M";
							pokemon[-1] = "VENENO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "46";
							pokemon[2] = "57";
							pokemon[3] = "40";
							pokemon[4] = "50";
							pokemon[5] = "40";
							nombreataque[-1] = "Armadura Acida";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "40";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "Smog";
							tipoataque[0] = pokemon[-1];
							pp[0] = "20";
							efectivo[0] = "70";
							dano[0] = "20";
							nombreataque[1] = "Polvo Veneno";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "75";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 14
						if (p==14) {
							nombrepokemon[13] = "CLEFAIRY";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "70";
							pokemon[2] = "45";
							pokemon[3] = "48";
							pokemon[4] = "35";
							pokemon[5] = "60";
							nombreataque[-1] = "Mega Pu�o";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Destructor";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Placaje";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "95";
							dano[1] = "35";
							nombreataque[2] = "Chirridos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "85";
							dano[2] = "0";
						}
						// POKEMON 15
						if (p==15) {
							nombrepokemon[14] = "VULPIX";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "38";
							pokemon[2] = "41";
							pokemon[3] = "40";
							pokemon[4] = "65";
							pokemon[5] = "65";
							nombreataque[-1] = "Asucas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Lanza LLamas";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Giro Fuego";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "70";
							dano[1] = "15";
							nombreataque[2] = "Pu�o Fuego";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "75";
						}
						// POKEMON 16
						if (p==16) {
							nombrepokemon[15] = "JIGGLYPUFF";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "115";
							pokemon[2] = "45";
							pokemon[3] = "20";
							pokemon[4] = "20";
							pokemon[5] = "25";
							nombreataque[-1] = "Canto";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "55";
							dano[-1] = "0";
							nombreataque[0] = "Ara�aso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Placaje";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "95";
							dano[1] = "35";
							nombreataque[2] = "Chirridos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "85";
							dano[2] = "0";
						}
						// POKEMON 17 
						if (p==17) {
							nombrepokemon[16] = "ZUBAT";
							pokemon[-1] = "VENENO";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "45";
							pokemon[3] = "35";
							pokemon[4] = "55";
							pokemon[5] = "40";
							nombreataque[-1] = "Acido";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "30";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Picotazo Venenoso";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "100";
							dano[1] = "15";
							nombreataque[2] = "Tornado";
							tipoataque[2] = pokemon[0];
							pp[2] = "35";
							efectivo[2] = "100";
							dano[2] = "40";
						}
						// POKEMON 18
						if (p==18) {
							nombrepokemon[17] = "ODDISH";
							pokemon[-1] = "PLANTA";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "45";
							pokemon[2] = "50";
							pokemon[3] = "55";
							pokemon[4] = "30";
							pokemon[5] = "75";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Agotamiento";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Polvo Veneno";
							tipoataque[1] = pokemon[0];
							pp[1] = "35";
							efectivo[1] = "75";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 19
						if (p==19) {
							nombrepokemon[18] = "PARAS";
							pokemon[-1] = "BICHO";
							pokemon[0] = "PLANTA";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "70";
							pokemon[3] = "55";
							pokemon[4] = "25";
							pokemon[5] = "55";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Agotamiento";
							tipoataque[0] = pokemon[0];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Disparo Demoras";
							tipoataque[1] = pokemon[-1];
							pp[1] = "40";
							efectivo[1] = "95";
							dano[1] = "0";
							nombreataque[2] = "Chupa Vidas";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "20";
						}
						// POKEMON 20
						if (p==20) {
							nombrepokemon[19] = "VENONAT";
							pokemon[-1] = "BICHO";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "60";
							pokemon[2] = "55";
							pokemon[3] = "50";
							pokemon[4] = "45";
							pokemon[5] = "40";
							nombreataque[-1] = "Doble Ataque";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "25";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Disparo Demoras";
							tipoataque[1] = pokemon[-1];
							pp[1] = "40";
							efectivo[1] = "95";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 21
						if (p==21) {
							nombrepokemon[20] = "DIGLETT";
							pokemon[-1] = "TIERRA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "10";
							pokemon[2] = "55";
							pokemon[3] = "25";
							pokemon[4] = "95";
							pokemon[5] = "45";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "100";
							nombreataque[0] = "Ataque Arena";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Excavar";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Fisura";
							tipoataque[2] = pokemon[-1];
							pp[2] = "5";
							efectivo[2] = "30";
							dano[2] = "0";
						}
						// POKEMON 22
						if (p==22) {
							nombrepokemon[21] = "MEOWTH";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "45";
							pokemon[3] = "35";
							pokemon[4] = "90";
							pokemon[5] = "40";
							nombreataque[-1] = "Mega Pu�o";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Ara�aso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 23
						if (p==23) {
							nombrepokemon[22] = "PSYDUCK";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "52";
							pokemon[3] = "48";
							pokemon[4] = "55";
							pokemon[5] = "50";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Surf";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 24
						if (p==24) {
							nombrepokemon[23] = "MANKEY";
							pokemon[-1] = "LUCHA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "80";
							pokemon[3] = "35";
							pokemon[4] = "70";
							pokemon[5] = "35";
							nombreataque[-1] = "Golpe Karate";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "50";
							nombreataque[0] = "Doble Patada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "30";
							efectivo[0] = "100";
							dano[0] = "30";
							nombreataque[1] = "Patada Giro";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "85";
							dano[1] = "60";
							nombreataque[2] = "Pata Salto";
							tipoataque[2] = pokemon[-1];
							pp[2] = "25";
							efectivo[2] = "95";
							dano[2] = "85";
						}
						// POKEMON 25 
						if (p==25) {
							nombrepokemon[24] = "GROWLITHE";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "55";
							pokemon[2] = "70";
							pokemon[3] = "45";
							pokemon[4] = "60";
							pokemon[5] = "50";
							nombreataque[-1] = "Ascuas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Lanza Llamas";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Giro Fuego";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "70";
							dano[1] = "15";
							nombreataque[2] = "Pu�o Fuego";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "75";
						}
						// POKEMON 26
						if (p==26) {
							nombrepokemon[25] = "POLIWAG";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "50";
							pokemon[3] = "40";
							pokemon[4] = "90";
							pokemon[5] = "40";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Surf";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 
						if (p==27) {
							nombrepokemon[26] = "ABRA";
							pokemon[-1] = "PSIQUICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "25";
							pokemon[2] = "20";
							pokemon[3] = "15";
							pokemon[4] = "90";
							pokemon[5] = "105";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Descanso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Ataque Psiquico";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "90";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 28
						if (p==28) {
							nombrepokemon[27] = "MACHOP";
							pokemon[-1] = "LUCHA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "70";
							pokemon[2] = "80";
							pokemon[3] = "50";
							pokemon[4] = "35";
							pokemon[5] = "35";
							nombreataque[-1] = "Golpe Karate";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "50";
							nombreataque[0] = "Doble Patada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "30";
							efectivo[0] = "100";
							dano[0] = "30";
							nombreataque[1] = "Patada Giro";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "85";
							dano[1] = "60";
							nombreataque[2] = "Patada Salto";
							tipoataque[2] = pokemon[-1];
							pp[2] = "25";
							efectivo[2] = "95";
							dano[2] = "85";
						}
						// POKEMON 29 
						if (p==29) {
							nombrepokemon[28] = "BELLSPROUT";
							pokemon[-1] = "PLANTA";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "75";
							pokemon[3] = "35";
							pokemon[4] = "40";
							pokemon[5] = "70";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Latigo Cepa";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "35";
							nombreataque[2] = "Acido";
							tipoataque[2] = pokemon[0];
							pp[2] = "30";
							efectivo[2] = "100";
							dano[2] = "40";
						}
						// POKEMON 30
						if (p==30) {
							nombrepokemon[29] = "TENTACOOL";
							pokemon[-1] = "AGUA";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "40";
							pokemon[3] = "35";
							pokemon[4] = "70";
							pokemon[5] = "100";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Picotazo Venenoso";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "15";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Surf";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 31
						if (p==31) {
							nombrepokemon[30] = "GEODUDE";
							pokemon[-1] = "ROCA";
							pokemon[0] = "TIERRA";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "80";
							pokemon[3] = "100";
							pokemon[4] = "20";
							pokemon[5] = "30";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "100";
							nombreataque[0] = "Hueso Bumerang";
							tipoataque[0] = pokemon[0];
							pp[0] = "10";
							efectivo[0] = "90";
							dano[0] = "50";
							nombreataque[1] = "Lanza Roca";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "90";
							dano[1] = "50";
							nombreataque[2] = "Avalancha";
							tipoataque[2] = pokemon[-1];
							pp[2] = "10";
							efectivo[2] = "90";
							dano[2] = "75";
						}
						// POKEMON 32
						if (p==32) {
							nombrepokemon[31] = "PONYTA";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "85";
							pokemon[3] = "55";
							pokemon[4] = "90";
							pokemon[5] = "65";
							nombreataque[-1] = "Ascuas";
							tipoataque[-1] = "NORMAL";
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Lanza Llamas";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Giro Fuego";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "70";
							dano[1] = "15";
							nombreataque[2] = "Pu�o Fuego";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "75";
						}
						// POKEMON 33
						if (p==33) {
							nombrepokemon[32] = "SLOWPOKE";
							pokemon[-1] = "AGUA";
							pokemon[0] = "PSIQUICO";
							// Salud
							pokemon[1] = "90";
							pokemon[2] = "65";
							pokemon[3] = "65";
							pokemon[4] = "15";
							pokemon[5] = "40";
							nombreataque[-1] = "Psico rayo";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 34
						if (p==34) {
							nombrepokemon[33] = "MAGNEMITE";
							pokemon[-1] = "ELECTRICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "25";
							pokemon[2] = "35";
							pokemon[3] = "70";
							pokemon[4] = "45";
							pokemon[5] = "95";
							nombreataque[-1] = "Pu�o Trueno";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "100";
							dano[-1] = "75";
							nombreataque[0] = "Trueno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "70";
							dano[0] = "120";
							nombreataque[1] = "Impactrueno";
							tipoataque[1] = pokemon[-1];
							pp[1] = "30";
							efectivo[1] = "100";
							dano[1] = "40";
							nombreataque[2] = "Rayo";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 35
						if (p==35) {
							nombrepokemon[34] = "FARFECTC D";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "52";
							pokemon[2] = "65";
							pokemon[3] = "55";
							pokemon[4] = "60";
							pokemon[5] = "58";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Tornado";
							tipoataque[2] = pokemon[0];
							pp[2] = "35";
							efectivo[2] = "100";
							dano[2] = "40";
						}
						// POKEMON 36
						if (p==36) {
							nombrepokemon[35] = "DODUO";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "85";
							pokemon[3] = "45";
							pokemon[4] = "75";
							pokemon[5] = "35";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Chirridos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "85";
							dano[2] = "0";
						}
						// POKEMON 37
						if (p==37) {
							nombrepokemon[36] = "SEEL";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "45";
							pokemon[3] = "55";
							pokemon[4] = "45";
							pokemon[5] = "70";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Surf";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "95";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 38
						if (p==38) {
							nombrepokemon[37] = "GRIMER";
							pokemon[-1] = "VENENO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "80";
							pokemon[2] = "80";
							pokemon[3] = "50";
							pokemon[4] = "25";
							pokemon[5] = "40";
							nombreataque[-1] = "Armadura Acida";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "40";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Picotazo Venenoso";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "100";
							dano[1] = "15";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "95";
							efectivo[2] = "20";
							dano[2] = "65";
						}
						// POKEMON 39
						if (p==39) {
							nombrepokemon[38] = "SHELLDER";
							pokemon[-1] = "AGUA";
							pokemon[0] = "HIELO";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "65";
							pokemon[3] = "100";
							pokemon[4] = "40";
							pokemon[5] = "45";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Rayo Hielo";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "95";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 40
						if (p==40) {
							nombrepokemon[39] = "GASTLY";
							pokemon[-1] = "FANTASMA";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "35";
							pokemon[3] = "30";
							pokemon[4] = "80";
							pokemon[5] = "100";
							nombreataque[-1] = "Acido";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "30";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Tinieblas";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 41
						if (p==41) {
							nombrepokemon[40] = "ONIX";
							pokemon[-1] = "ROCA";
							pokemon[0] = "TIERRA";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "45";
							pokemon[3] = "160";
							pokemon[4] = "70";
							pokemon[5] = "30";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Ataque Arena";
							tipoataque[0] = pokemon[0];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Lanza Rocas";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "90";
							dano[1] = "50";
							nombreataque[2] = "Avalancha";
							tipoataque[2] = pokemon[-1];
							pp[2] = "10";
							efectivo[2] = "90";
							dano[2] = "75";
						}
						// POKEMON 42
						if (p==42) {
							nombrepokemon[41] = "DROWZEE";
							pokemon[-1] = "PSIQUICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "60";
							pokemon[2] = "48";
							pokemon[3] = "45";
							pokemon[4] = "42";
							pokemon[5] = "90";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Descanso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Ataque Psiquico";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "90";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 43 
						if (p==43) {
							nombrepokemon[42] = "KRABBY";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "105";
							pokemon[3] = "90";
							pokemon[4] = "50";
							pokemon[5] = "25";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Surf";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "95";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 44
						if (p==44) {
							nombrepokemon[43] = "VOLTORD";
							pokemon[-1] = "ELECTRICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "30";
							pokemon[3] = "50";
							pokemon[4] = "100";
							pokemon[5] = "55";
							nombreataque[-1] = "Pu�o Trueno";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "100";
							dano[-1] = "75";
							nombreataque[0] = "Trueno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "70";
							dano[0] = "120";
							nombreataque[1] = "Impactrueno";
							tipoataque[1] = pokemon[-1];
							pp[1] = "30";
							efectivo[1] = "100";
							dano[1] = "40";
							nombreataque[2] = "Rayo";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 45
						if (p==45) {
							nombrepokemon[44] = "EXEGGUTE";
							pokemon[-1] = "PLANTA";
							pokemon[0] = "PSIQUICO";
							// Salud
							pokemon[1] = "60";
							pokemon[2] = "40";
							pokemon[3] = "80";
							pokemon[4] = "40";
							pokemon[5] = "60";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Psico Rayo";
							tipoataque[0] = pokemon[0];
							pp[0] = "25";
							efectivo[0] = "100";
							dano[0] = "";
							nombreataque[1] = "Ataque Psiquico";
							tipoataque[1] = pokemon[0];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "90";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 46
						if (p==46) {
							nombrepokemon[45] = "CUBONE";
							pokemon[-1] = "TIERRA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "50";
							pokemon[3] = "95";
							pokemon[4] = "35";
							pokemon[5] = "40";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Hueso Bumerag";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "90";
							dano[0] = "50";
							nombreataque[1] = "Excabar";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Fisura";
							tipoataque[2] = pokemon[-1];
							pp[2] = "5";
							efectivo[2] = "30";
							dano[2] = "0";
						}
						// POKEMON 47
						if (p==47) {
							nombrepokemon[46] = "HITMONLEE";
							pokemon[-1] = "LUCHA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "105";
							pokemon[3] = "79";
							pokemon[4] = "76";
							pokemon[5] = "35";
							nombreataque[-1] = "Golpe Karate";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "50";
							nombreataque[0] = "Doble Patada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "30";
							efectivo[0] = "100";
							dano[0] = "30";
							nombreataque[1] = "Patada Giro";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "85";
							dano[1] = "60";
							nombreataque[2] = "Patada Salto";
							tipoataque[2] = pokemon[-1];
							pp[2] = "25";
							efectivo[2] = "95";
							dano[2] = "85";
						}
						// POKEMON 48
						if (p==48) {
							nombrepokemon[47] = "HITMONCHAN";
							pokemon[-1] = "LUCHA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "105";
							pokemon[3] = "79";
							pokemon[4] = "76";
							pokemon[5] = "35";
							nombreataque[-1] = "Golpe Karate";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "50";
							nombreataque[0] = "Contador";
							tipoataque[0] = pokemon[-1];
							pp[0] = "20";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Patada Giro";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "85";
							dano[1] = "60";
							nombreataque[2] = "Patada Salto";
							tipoataque[2] = pokemon[-1];
							pp[2] = "25";
							efectivo[2] = "95";
							dano[2] = "85";
						}
						// POKEMON 49
						if (p==49) {
							nombrepokemon[48] = "LICKITUNG";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "90";
							pokemon[2] = "55";
							pokemon[3] = "75";
							pokemon[4] = "30";
							pokemon[5] = "60";
							nombreataque[-1] = "Mega Pu�o";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Destructor";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Placaje";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "95";
							dano[1] = "35";
							nombreataque[2] = "Chirridos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "85";
							dano[2] = "0";
						}
						// POKEMON 50
						if (p==50) {
							nombrepokemon[49] = "KOFFING";
							pokemon[-1] = "VENENO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "65";
							pokemon[3] = "95";
							pokemon[4] = "35";
							pokemon[5] = "60";
							nombreataque[-1] = "Acido";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "30";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Residuos";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "95";
							dano[1] = "65";
							nombreataque[2] = "Armadura Acida";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 51
						if (p==51) {
							nombrepokemon[50] = "RHYHORN";
							pokemon[-1] = "ROCA";
							pokemon[0] = "TIERRA";
							// Salud
							pokemon[1] = "80";
							pokemon[2] = "85";
							pokemon[3] = "95";
							pokemon[4] = "25";
							pokemon[5] = "30";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Avalancha";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "90";
							dano[0] = "75";
							nombreataque[1] = "Excavar";
							tipoataque[1] = pokemon[0];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Lanza Rocas";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "90";
							dano[2] = "50";
						}
						// POKEMON 52
						if (p==52) {
							nombrepokemon[51] = "CHANSEY";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "250";
							pokemon[2] = "5";
							pokemon[3] = "5";
							pokemon[4] = "5";
							pokemon[5] = "50";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ara�aso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Chirridos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "85";
							dano[2] = "0";
						}
						// POKEMON
						if (p==53) {
							nombrepokemon[52] = "TANGELA";
							pokemon[-1] = "PLANTA";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "55";
							pokemon[3] = "115";
							pokemon[4] = "60";
							pokemon[5] = "100";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Agotamiento";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Polvo Veneno";
							tipoataque[1] = pokemon[0];
							pp[1] = "35";
							efectivo[1] = "75";
							dano[1] = "0";
							nombreataque[2] = "Drenadoras";
							tipoataque[2] = pokemon[-1];
							pp[2] = "10";
							efectivo[2] = "90";
							dano[2] = "0";
						}
						// POKEMON
						if (p==54) {
							nombrepokemon[53] = "KANGASKHAN";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "105";
							pokemon[2] = "95";
							pokemon[3] = "80";
							pokemon[4] = "90";
							pokemon[5] = "40";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ara�aso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 
						if (p==55) {
							nombrepokemon[54] = "HORSEA";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "40";
							pokemon[3] = "70";
							pokemon[4] = "60";
							pokemon[5] = "70";
							nombreataque[-1] = "Pistol de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Surf";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "95";
							dano[2] = "100";
						}
						// POKEMON 
						if (p==56) {
							nombrepokemon[55] = "GOLDEEN";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "45";
							pokemon[2] = "67";
							pokemon[3] = "60";
							pokemon[4] = "63";
							pokemon[5] = "50";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Surf";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "95";
							dano[1] = "100";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 
						if (p==57) {
							nombrepokemon[56] = "STARYU";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "45";
							pokemon[3] = "55";
							pokemon[4] = "85";
							pokemon[5] = "70";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Surf";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 
						if (p==58) {
							nombrepokemon[57] = "MR.MIME";
							pokemon[-1] = "PSIQUICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "45";
							pokemon[3] = "65";
							pokemon[4] = "90";
							pokemon[5] = "100";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Descanso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Ataque Psiquico";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "90";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 
						if (p==59) {
							nombrepokemon[58] = "SCYTHER";
							pokemon[-1] = "BICHO";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "70";
							pokemon[2] = "110";
							pokemon[3] = "80";
							pokemon[4] = "105";
							pokemon[5] = "55";
							nombreataque[-1] = "Doble Ataque";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "80";
							nombreataque[0] = "Pin Misile";
							tipoataque[0] = pokemon[-1];
							pp[0] = "20";
							efectivo[0] = "85";
							dano[0] = "14";
							nombreataque[1] = "Disparo Demora";
							tipoataque[1] = pokemon[-1];
							pp[1] = "40";
							efectivo[1] = "95";
							dano[1] = "0";
							nombreataque[2] = "Ataque Ala";
							tipoataque[2] = pokemon[0];
							pp[2] = "35";
							efectivo[2] = "100";
							dano[2] = "60";
						}
						// POKEMON 
						if (p==60) {
							nombrepokemon[59] = "JYNX";
							pokemon[-1] = "HIELO";
							pokemon[0] = "PSIQUICO";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "50";
							pokemon[3] = "35";
							pokemon[4] = "95";
							pokemon[5] = "95";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Pu�o Hielo";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "15";
							nombreataque[1] = "Amnesia";
							tipoataque[1] = pokemon[0];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Doble Bofeton";
							tipoataque[2] = "NORMAL";
							pp[2] = "10";
							efectivo[2] = "85";
							dano[2] = "15";
						}
						// POKEMON 
						if (p==61) {
							nombrepokemon[60] = "ELECTABUZZ";
							pokemon[-1] = "ELECTRICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "83";
							pokemon[3] = "57";
							pokemon[4] = "105";
							pokemon[5] = "85";
							nombreataque[-1] = "Pu�o Trueno";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "100";
							dano[-1] = "75";
							nombreataque[0] = "Golpe Karate";
							tipoataque[0] = "LUCHA";
							pp[0] = "25";
							efectivo[0] = "100";
							dano[0] = "50";
							nombreataque[1] = "Mega Pu�o";
							tipoataque[1] = "NORMAL";
							pp[1] = "20";
							efectivo[1] = "85";
							dano[1] = "80";
							nombreataque[2] = "Rayo";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 
						if (p==62) {
							nombrepokemon[61] = "MAGMAR";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "95";
							pokemon[3] = "57";
							pokemon[4] = "93";
							pokemon[5] = "85";
							nombreataque[-1] = "Ascuas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Lanza LLamas";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Pu�o Fuego";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "75";
							nombreataque[2] = "Placaje";
							tipoataque[2] = "NORMAL";
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 
						if (p==63) {
							nombrepokemon[62] = "PINSIR";
							pokemon[-1] = "BICHO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "125";
							pokemon[3] = "100";
							pokemon[4] = "85";
							pokemon[5] = "55";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = "NORMAL";
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Pin Misille";
							tipoataque[0] = pokemon[-1];
							pp[0] = "20";
							efectivo[0] = "85";
							dano[0] = "14";
							nombreataque[1] = "Cornada";
							tipoataque[1] = "NORMAL";
							pp[1] = "25";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Placaje";
							tipoataque[2] = "NORMAL";
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON
						if (p==64) {
							nombrepokemon[63] = "TAUROS";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "75";
							pokemon[2] = "100";
							pokemon[3] = "95";
							pokemon[4] = "110";
							pokemon[5] = "70";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = "TIERRA";
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Destructor";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Descanso";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "95";
						}
						// POKEMON 
						if (p==65) {
							nombrepokemon[64] = "MAGIKARP";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "20";
							pokemon[2] = "10";
							pokemon[3] = "55";
							pokemon[4] = "80";
							pokemon[5] = "20";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Descanso";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Placaje";
							tipoataque[2] = "NORMAL";
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "95";
						}
						// POKEMON 
						if (p==66) {
							nombrepokemon[65] = "LAPRAS";
							pokemon[-1] = "AGUA";
							pokemon[0] = "HIELO";
							// Salud
							pokemon[1] = "130";
							pokemon[2] = "85";
							pokemon[3] = "80";
							pokemon[4] = "60";
							pokemon[5] = "95";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Descanso";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Rayo Aurora";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 
						if (p==67) {
							nombrepokemon[66] = "DITTO";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "48";
							pokemon[2] = "48";
							pokemon[3] = "48";
							pokemon[4] = "48";
							pokemon[5] = "48";
							nombreataque[-1] = "Transformacion";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "";
							tipoataque[0] = "";
							pp[0] = "";
							efectivo[0] = "";
							dano[0] = "";
							nombreataque[1] = "";
							tipoataque[1] = "";
							pp[1] = "";
							efectivo[1] = "";
							dano[1] = "";
							nombreataque[2] = "";
							tipoataque[2] = "";
							pp[2] = "";
							efectivo[2] = "";
							dano[2] = "";
						}
						// POKEMON 
						if (p==68) {
							nombrepokemon[67] = "EEVEE";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "55";
							pokemon[2] = "55";
							pokemon[3] = "50";
							pokemon[4] = "55";
							pokemon[5] = "65";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ataque Arena";
							tipoataque[0] = "TIERRA";
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 
						if (p==69) {
							nombrepokemon[68] = "PORYGON";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "60";
							pokemon[3] = "70";
							pokemon[4] = "40";
							pokemon[5] = "75";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = "PSIQUICO";
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Destructor";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Amnesia";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Impactrueno";
							tipoataque[2] = "ELECTRICO";
							pp[2] = "30";
							efectivo[2] = "100";
							dano[2] = "40";
						}
						// POKEMON 
						if (p==70) {
							nombrepokemon[69] = "OMANYTE";
							pokemon[-1] = "ROCA";
							pokemon[0] = "AGUA";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "40";
							pokemon[3] = "100";
							pokemon[4] = "35";
							pokemon[5] = "90";
							nombreataque[-1] = "Hidro Bomba";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "5";
							efectivo[-1] = "80";
							dano[-1] = "120";
							nombreataque[0] = "Absorber";
							tipoataque[0] = "PLANTA";
							pp[0] = "25";
							efectivo[0] = "100";
							dano[0] = "20";
							nombreataque[1] = "Excavar";
							tipoataque[1] = "TIERRA";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Lanza Rocas";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "90";
							dano[2] = "50";
						}
						// POKEMON 
						if (p==71) {
							nombrepokemon[70] = "KABUTO";
							pokemon[-1] = "ROCA";
							pokemon[0] = "AGUA";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "80";
							pokemon[3] = "90";
							pokemon[4] = "55";
							pokemon[5] = "45";
							nombreataque[-1] = "Hidro Bomba";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "5";
							efectivo[-1] = "80";
							dano[-1] = "120";
							nombreataque[0] = "Absorber";
							tipoataque[0] = "PLANTA";
							pp[0] = "25";
							efectivo[0] = "100";
							dano[0] = "20";
							nombreataque[1] = "Surf";
							tipoataque[1] = pokemon[0];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "95";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 
						if (p==72) {
							nombrepokemon[71] = "AERODACTYL";
							pokemon[-1] = "ROCA";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "80";
							pokemon[2] = "105";
							pokemon[3] = "65";
							pokemon[4] = "130";
							pokemon[5] = "60";
							nombreataque[-1] = "Ataque Ala";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "60";
							nombreataque[0] = "Lanza LLamas";
							tipoataque[0] = "FUEGO";
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Lanza Rocas";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "90";
							dano[1] = "50";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = "PSIQUICO";
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 
						if (p==73) {
							nombrepokemon[72] = "SNORLAX";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "160";
							pokemon[2] = "110";
							pokemon[3] = "65";
							pokemon[4] = "30";
							pokemon[5] = "65";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Descanso";
							tipoataque[0] = "PSIQUICO";
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Placaje";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "95";
							dano[1] = "35";
							nombreataque[2] = "Doble Bofeton";
							tipoataque[2] = pokemon[-1];
							pp[2] = "10";
							efectivo[2] = "85";
							dano[2] = "15";
						}
						// POKEMON 
						if (p==74) {
							nombrepokemon[73] = "ARTICUNO";
							pokemon[-1] = "HIELO";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "90";
							pokemon[2] = "85";
							pokemon[3] = "100";
							pokemon[4] = "85";
							pokemon[5] = "125";
							nombreataque[-1] = "Rayo Hielo";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "16";
							efectivo[-1] = "100";
							dano[-1] = "90";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Descanso";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Rayo Aurora";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 
						if (p==75) {
							nombrepokemon[74] = "ZAPDOS";
							pokemon[-1] = "ELECTRICO";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "90";
							pokemon[2] = "90";
							pokemon[3] = "85";
							pokemon[4] = "100";
							pokemon[5] = "125";
							nombreataque[-1] = "Trueno";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "70";
							dano[-1] = "120";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Amnesia";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Impactrueno";
							tipoataque[2] = pokemon[-1];
							pp[2] = "10";
							efectivo[2] = "100";
							dano[2] = "90";
						}
						// POKEMON 
						if (p==76) {
							nombrepokemon[75] = "MOLTRES";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "90";
							pokemon[2] = "100";
							pokemon[3] = "90";
							pokemon[4] = "90";
							pokemon[5] = "125";
							nombreataque[-1] = "Lanza LLamas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "100";
							dano[-1] = "95";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Descanso";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Ataque Psiquico";
							tipoataque[2] = "PSIQUICO";
							pp[2] = "10";
							efectivo[2] = "100";
							dano[2] = "90";
						}
						// POKEMON 
						if (p==77) {
							nombrepokemon[76] = "DRATINI";
							pokemon[-1] = "DRAGON";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "41";
							pokemon[2] = "64";
							pokemon[3] = "45";
							pokemon[4] = "50";
							pokemon[5] = "50";
							nombreataque[-1] = "Furia Dragon";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "Descanso";
							tipoataque[0] = "PSIQUICO";
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Placaje";
							tipoataque[1] = "NORMAL";
							pp[1] = "35";
							efectivo[1] = "95";
							dano[1] = "35";
							nombreataque[2] = "Surf";
							tipoataque[2] = "AGUA";
							pp[2] = "15";
							efectivo[2] = "95";
							dano[2] = "100";
						}
						// POKEMON 
						if (p==78) {
							nombrepokemon[77] = "MEWTWO";
							pokemon[-1] = "PSIQUICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "106";
							pokemon[2] = "110";
							pokemon[3] = "90";
							pokemon[4] = "130";
							pokemon[5] = "154";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "";
							efectivo[-1] = "";
							dano[-1] = "65";
							nombreataque[0] = "Mega Pu�o";
							tipoataque[0] = "NORMAL";
							pp[0] = "20";
							efectivo[0] = "85";
							dano[0] = "80";
							nombreataque[1] = "Ataque Psiquico";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "90";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 
						if (p==79) {
							nombrepokemon[78] = "MEW";
							pokemon[-1] = "PSIQUICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "100";
							pokemon[2] = "100";
							pokemon[3] = "100";
							pokemon[4] = "100";
							pokemon[5] = "100";
							nombreataque[-1] = "Transformacion";
							tipoataque[-1] = "NORMAL";
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "Psico Rayo";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "65";
							nombreataque[1] = "Mega Pu�o";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "85";
							dano[1] = "80";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// ******PARTE X **********
						// OPCION DE POSICION DE POKEMON "USUARIO"
						if (z==2) {
							// Guarda el nombre del pokemon 1 que voy a ocupar
							mipoke[0] = nombrepokemon[p-1];
							// TIPO DEL POKE
							// Guarda el Tipo 1 del pokemon
							mipoket2[-1] = pokemon[-1];
							// Guarda el Tipo 2
							mipoket2[0] = pokemon[0];
							// Habilidad del poke 1
							// SALUD
							mipokeh2[-1] = Number(pokemon[1]);
							// ATAQUE
							mipokeh2[0] = Number(pokemon[2]);
							// DEFENSA
							mipokeh2[1] = Number(pokemon[3]);
							// VELOCIDAD
							mipokeh2[2] = Number(pokemon[4]);
							// ESPECIAL
							mipokeh2[3] = Number(pokemon[5]);
							// Guarda la salud y es fijo
							misalud[0] = mipokeh2[-1];
							// NombreAtaque[0]="Absorber";   TipoAtaque[0]=pokemon[0] ;  pp[0]="25"; efectivo[0]="100"; Dano[0]="20";
							for (contx=0;contx<=3;contx++) {
								nombrea2[contx-1] = nombreataque[contx-1];
								tipoa2[contx-1] = tipoataque[contx-1];
								ppa2[contx-1] = Number(pp[contx-1]);
								ppfa2[contx-1] = Number(pp[contx-1]);
								efectivoa2[contx-1] = Number(efectivo[contx-1]);
								danoa2[contx-1] = Number(dano[contx-1]);
							}
						}
						if (z==3) {
							// Guarda el nombre del pokemon 1 que voy a ocupar
							mipoke[1] = nombrepokemon[p-1];
							// TIPO DEL POKE 3
							// Guarda el Tipo 1 del pokemon
							mipoket3[-1] = pokemon[-1];
							// Guarda el Tipo 2
							mipoket3[0] = pokemon[0];
							// Habilidad del poke 3
							// SALUD
							mipokeh3[-1] = Number(pokemon[1]);
							// ATAQUE
							mipokeh3[0] = Number(pokemon[2]);
							// DEFENSA
							mipokeh3[1] = Number(pokemon[3]);
							// VELOCIDAD
							mipokeh3[2] = Number(pokemon[4]);
							// ESPECIAL
							mipokeh3[3] = Number(pokemon[5]);
							misalud[1] = mipokeh3[-1];
							for (contx=0;contx<=3;contx++) {
								nombrea3[contx-1] = nombreataque[contx-1];
								tipoa3[contx-1] = tipoataque[contx-1];
								ppa3[contx-1] = Number(pp[contx-1]);
								ppfa3[contx-1] = Number(pp[contx-1]);
								efectivoa3[contx-1] = Number(efectivo[contx-1]);
								danoa3[contx-1] = Number(dano[contx-1]);
							}
						}
						if (z==4) {
							// Guarda el nombre del pokemon 1 que voy a ocupar
							mipoke[2] = nombrepokemon[p-1];
							// TIPO DEL POKE
							// Guarda el Tipo 1 del pokemon
							mipoket4[-1] = pokemon[-1];
							// Guarda el Tipo 2
							mipoket4[0] = pokemon[0];
							// Habilidad del poke 1
							// SALUD
							mipokeh4[-1] = Number(pokemon[1]);
							// ATAQUE
							mipokeh4[0] = Number(pokemon[2]);
							// DEFENSA
							mipokeh4[1] = Number(pokemon[3]);
							// VELOCIDAD
							mipokeh4[2] = Number(pokemon[4]);
							// ESPECIAL
							mipokeh4[3] = Number(pokemon[5]);
							misalud[2] = mipokeh4[-1];
							for (contx=0;contx<=3;contx++) {
								nombrea4[contx-1] = nombreataque[contx-1];
								tipoa4[contx-1] = tipoataque[contx-1];
								ppa4[contx-1] = Number(pp[contx-1]);
								ppfa4[contx-1] = Number(pp[contx-1]);
								efectivoa4[contx-1] = Number(efectivo[contx-1]);
								danoa4[contx-1] = Number(dano[contx-1]);
							}
						}
						if (z==5) {
							// Guarda el nombre del pokemon 1 que voy a ocupar
							mipoke[3] = nombrepokemon[p-1];
							// TIPO DEL POKE
							// Guarda el Tipo 1 del pokemon
							mipoket5[-1] = pokemon[-1];
							// Guarda el Tipo 2
							mipoket5[0] = pokemon[0];
							// Habilidad del poke 1
							// SALUD
							mipokeh5[-1] = Number(pokemon[1]);
							// ATAQUE
							mipokeh5[0] = Number(pokemon[2]);
							// DEFENSA
							mipokeh5[1] = Number(pokemon[3]);
							// VELOCIDAD
							mipokeh5[2] = Number(pokemon[4]);
							// ESPECIAL
							mipokeh5[3] = Number(pokemon[5]);
							misalud[3] = mipokeh5[-1];
							for (contx=0;contx<=3;contx++) {
								nombrea5[contx-1] = nombreataque[contx-1];
								tipoa5[contx-1] = tipoataque[contx-1];
								ppa5[contx-1] = Number(pp[contx-1]);
								ppfa5[contx-1] = Number(pp[contx-1]);
								efectivoa5[contx-1] = Number(efectivo[contx-1]);
								danoa5[contx-1] = Number(dano[contx-1]);
							}
						}
						if (z==6) {
							// Guarda el nombre del pokemon 1 que voy a ocupar
							mipoke[4] = nombrepokemon[p-1];
							// TIPO DEL POKE
							// Guarda el Tipo 1 del pokemon
							mipoket6[-1] = pokemon[-1];
							// Guarda el Tipo 2
							mipoket6[0] = pokemon[0];
							// Habilidad del poke 1
							// SALUD
							mipokeh6[-1] = Number(pokemon[1]);
							// ATAQUE
							mipokeh6[0] = Number(pokemon[2]);
							// DEFENSA
							mipokeh6[1] = Number(pokemon[3]);
							// VELOCIDAD
							mipokeh6[2] = Number(pokemon[4]);
							// ESPECIAL
							mipokeh6[3] = Number(pokemon[5]);
							misalud[4] = mipokeh6[-1];
							for (contx=0;contx<=3;contx++) {
								nombrea6[contx-1] = nombreataque[contx-1];
								tipoa6[contx-1] = tipoataque[contx-1];
								ppa6[contx-1] = Number(pp[contx-1]);
								ppfa6[contx-1] = Number(pp[contx-1]);
								efectivoa6[contx-1] = Number(efectivo[contx-1]);
								danoa6[contx-1] = Number(dano[contx-1]);
							}
							cantidadpoke = 6;
						}
						// ***PARTE XI ***
						// Defino nivel para ambos
						for (lvl=1;lvl<=5;lvl++) {
							do {
								minivel[lvl-1] = Math.floor(Math.random()*31);
							} while (minivel[lvl-1]<25);
							do {
								enenivel[lvl-1] = Math.floor(Math.random()*31);
							} while (enenivel[lvl-1]<25);
						}
						// ASIGNACION 
						// OPCION DE POSICION DE POKEMON "CPU"
						do {
							eleccionpoke = Math.floor(Math.random()*79);
						} while (!(eleccionpoke>0 && eleccionpoke!=68 && eleccionpoke!=error2[-1] && eleccionpoke!=error2[0] && eleccionpoke!=error2[1] && eleccionpoke!=error2[2] && eleccionpoke!=error2[3]));
						error2[err-1] = eleccionpoke;
						err = err+1;
						// PONER ABAJO LA LISTA COMPLETA
						// POKEMON 1
						// POKEMON 1
						if (eleccionpoke==1) {
							nombrepokemon[0] = "BULBASAUR";
							// Tipo1
							pokemon[-1] = "PLANTA";
							// Tipo2
							pokemon[0] = "VENENO";
							// SALUD
							pokemon[1] = "45";
							// ATAQUE
							pokemon[2] = "49";
							// DEFENSA
							pokemon[3] = "49";
							// VELOCIDAD
							pokemon[4] = "45";
							// ESPECIAL
							pokemon[5] = "65";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Latigo Cepa";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "35";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[0];
							pp[2] = "95";
							efectivo[2] = "20";
							dano[2] = "65";
						}
						// POKEMON 2
						if (eleccionpoke==2) {
							nombrepokemon[1] = "CHARMANDER";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "39";
							pokemon[2] = "52";
							pokemon[3] = "43";
							pokemon[4] = "65";
							pokemon[5] = "50";
							nombreataque[-1] = "Ascuas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Lanza Llamas";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Giro Fuego";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "70";
							dano[1] = "15";
							nombreataque[2] = "Pu�o Fuego";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "75";
						}
						// POKEMON 3
						if (eleccionpoke==3) {
							nombrepokemon[2] = "SQUIRTLE";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "44";
							pokemon[2] = "48";
							pokemon[3] = "65";
							pokemon[4] = "43";
							pokemon[5] = "50";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Surf";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 4 
						if (eleccionpoke==4) {
							nombrepokemon[3] = "CATERPIE";
							pokemon[-1] = "BICHO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "45";
							pokemon[2] = "30";
							pokemon[3] = "35";
							pokemon[4] = "45";
							pokemon[5] = "20";
							nombreataque[-1] = "Doble Ataque";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "25";
							nombreataque[0] = "Pin Misille";
							tipoataque[0] = pokemon[-1];
							pp[0] = "20";
							efectivo[0] = "85";
							dano[0] = "14";
							nombreataque[1] = "Disparo Demoras";
							tipoataque[1] = pokemon[-1];
							pp[1] = "40";
							efectivo[1] = "95";
							dano[1] = "0";
							nombreataque[2] = "Chupa Vidas";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "20";
						}
						// POKEMON 5
						if (eleccionpoke==5) {
							nombrepokemon[4] = "WEEDLE";
							pokemon[-1] = "BICHO";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "35";
							pokemon[3] = "30";
							pokemon[4] = "50";
							pokemon[5] = "20";
							nombreataque[-1] = "Doble Ataque";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "25";
							nombreataque[0] = "Picotazo Venenoso";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "15";
							nombreataque[1] = "Disparo Demoras";
							tipoataque[1] = pokemon[-1];
							pp[1] = "40";
							efectivo[1] = "95";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 6
						if (eleccionpoke==6) {
							nombrepokemon[5] = "PIDGEY";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "45";
							pokemon[3] = "40";
							pokemon[4] = "56";
							pokemon[5] = "35";
							nombreataque[-1] = "Ataque Aereo";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "5";
							efectivo[-1] = "90";
							dano[-1] = "140";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Vuelo";
							tipoataque[2] = pokemon[0];
							pp[2] = "15";
							efectivo[2] = "95";
							dano[2] = "30";
						}
						// POKEMON 7
						if (eleccionpoke==7) {
							nombrepokemon[6] = "RATTATA";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "56";
							pokemon[3] = "35";
							pokemon[4] = "72";
							pokemon[5] = "25";
							nombreataque[-1] = "Desctructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ara�azo";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 8
						if (eleccionpoke==8) {
							nombrepokemon[7] = "SPEAROW";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "60";
							pokemon[3] = "30";
							pokemon[4] = "70";
							pokemon[5] = "31";
							nombreataque[-1] = "Ataque Aereo";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "5";
							efectivo[-1] = "90";
							dano[-1] = "140";
							nombreataque[0] = "Vuelo";
							tipoataque[0] = pokemon[0];
							pp[0] = "15";
							efectivo[0] = "95";
							dano[0] = "90";
							nombreataque[1] = "Ataque Ala";
							tipoataque[1] = pokemon[0];
							pp[1] = "35";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 9
						if (eleccionpoke==9) {
							nombrepokemon[8] = "EKANS";
							pokemon[-1] = "VENENO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "60";
							pokemon[3] = "44";
							pokemon[4] = "55";
							pokemon[5] = "40";
							nombreataque[-1] = "�cido";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "30";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "";
							dano[0] = "";
							nombreataque[1] = "Residuos";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "95";
							dano[1] = "65";
							nombreataque[2] = "Picotazo Venenoso";
							tipoataque[2] = pokemon[-1];
							pp[2] = "30";
							efectivo[2] = "100";
							dano[2] = "15";
						}
						// POKEMON 9
						if (eleccionpoke==10) {
							nombrepokemon[9] = "PIKACHU";
							pokemon[-1] = "ELECTRICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "55";
							pokemon[3] = "30";
							pokemon[4] = "90";
							pokemon[5] = "50";
							nombreataque[-1] = "Pu�o Trueno";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "100";
							dano[-1] = "75";
							nombreataque[0] = "Trueno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "70";
							dano[0] = "120";
							nombreataque[1] = "impactrueno";
							tipoataque[1] = pokemon[-1];
							pp[1] = "30";
							efectivo[1] = "100";
							dano[1] = "40";
							nombreataque[2] = "Rayo";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON  11
						if (eleccionpoke==11) {
							nombrepokemon[10] = "SANDSHREW";
							pokemon[-1] = "TIERRA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "75";
							pokemon[3] = "85";
							pokemon[4] = "40";
							pokemon[5] = "30";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "100";
							nombreataque[0] = "Hueso Bumerang";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "90";
							dano[0] = "50";
							nombreataque[1] = "Excavar";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Fisura";
							tipoataque[2] = pokemon[-1];
							pp[2] = "5";
							efectivo[2] = "30";
							dano[2] = "0";
						}
						// POKEMON 12
						if (eleccionpoke==12) {
							nombrepokemon[11] = "NIDORAN F";
							pokemon[-1] = "VENENO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "55";
							pokemon[2] = "47";
							pokemon[3] = "52";
							pokemon[4] = "41";
							pokemon[5] = "40";
							nombreataque[-1] = "Armadura Acida";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "40";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "Acido";
							tipoataque[0] = pokemon[-1];
							pp[0] = "30";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Polvo Veneno";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "75";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 13
						if (eleccionpoke==13) {
							nombrepokemon[12] = "NIDORAN M";
							pokemon[-1] = "VENENO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "46";
							pokemon[2] = "57";
							pokemon[3] = "40";
							pokemon[4] = "50";
							pokemon[5] = "40";
							nombreataque[-1] = "Armadura Acida";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "40";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "Smog";
							tipoataque[0] = pokemon[-1];
							pp[0] = "20";
							efectivo[0] = "70";
							dano[0] = "20";
							nombreataque[1] = "Polvo Veneno";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "75";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 14
						if (eleccionpoke==14) {
							nombrepokemon[13] = "CLEFAIRY";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "70";
							pokemon[2] = "45";
							pokemon[3] = "48";
							pokemon[4] = "35";
							pokemon[5] = "60";
							nombreataque[-1] = "Mega Pu�o";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Destructor";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Placaje";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "95";
							dano[1] = "35";
							nombreataque[2] = "Chirridos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "85";
							dano[2] = "0";
						}
						// POKEMON 15
						if (eleccionpoke==15) {
							nombrepokemon[14] = "VULPIX";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "38";
							pokemon[2] = "41";
							pokemon[3] = "40";
							pokemon[4] = "65";
							pokemon[5] = "65";
							nombreataque[-1] = "Asucas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Lanza LLamas";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Giro Fuego";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "70";
							dano[1] = "15";
							nombreataque[2] = "Pu�o Fuego";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "75";
						}
						// POKEMON 16
						if (eleccionpoke==16) {
							nombrepokemon[15] = "JIGGLYPUFF";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "115";
							pokemon[2] = "45";
							pokemon[3] = "20";
							pokemon[4] = "20";
							pokemon[5] = "25";
							nombreataque[-1] = "Canto";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "55";
							dano[-1] = "0";
							nombreataque[0] = "Ara�aso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Placaje";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "95";
							dano[1] = "35";
							nombreataque[2] = "Chirridos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "85";
							dano[2] = "0";
						}
						// POKEMON 17 
						if (eleccionpoke==17) {
							nombrepokemon[16] = "ZUBAT";
							pokemon[-1] = "VENENO";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "45";
							pokemon[3] = "35";
							pokemon[4] = "55";
							pokemon[5] = "40";
							nombreataque[-1] = "Acido";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "30";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Picotazo Venenoso";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "100";
							dano[1] = "15";
							nombreataque[2] = "Tornado";
							tipoataque[2] = pokemon[0];
							pp[2] = "35";
							efectivo[2] = "100";
							dano[2] = "40";
						}
						// POKEMON 18
						if (eleccionpoke==18) {
							nombrepokemon[17] = "ODDISH";
							pokemon[-1] = "PLANTA";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "45";
							pokemon[2] = "50";
							pokemon[3] = "55";
							pokemon[4] = "30";
							pokemon[5] = "75";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Agotamiento";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Polvo Veneno";
							tipoataque[1] = pokemon[0];
							pp[1] = "35";
							efectivo[1] = "75";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 19
						if (eleccionpoke==19) {
							nombrepokemon[18] = "PARAS";
							pokemon[-1] = "BICHO";
							pokemon[0] = "PLANTA";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "70";
							pokemon[3] = "55";
							pokemon[4] = "25";
							pokemon[5] = "55";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Agotamiento";
							tipoataque[0] = pokemon[0];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Disparo Demoras";
							tipoataque[1] = pokemon[-1];
							pp[1] = "40";
							efectivo[1] = "95";
							dano[1] = "0";
							nombreataque[2] = "Chupa Vidas";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "20";
						}
						// POKEMON 20
						if (eleccionpoke==20) {
							nombrepokemon[19] = "VENONAT";
							pokemon[-1] = "BICHO";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "60";
							pokemon[2] = "55";
							pokemon[3] = "50";
							pokemon[4] = "45";
							pokemon[5] = "40";
							nombreataque[-1] = "Doble Ataque";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "25";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Disparo Demoras";
							tipoataque[1] = pokemon[-1];
							pp[1] = "40";
							efectivo[1] = "95";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 21
						if (eleccionpoke==21) {
							nombrepokemon[20] = "DIGLETT";
							pokemon[-1] = "TIERRA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "10";
							pokemon[2] = "55";
							pokemon[3] = "25";
							pokemon[4] = "95";
							pokemon[5] = "45";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "100";
							nombreataque[0] = "Ataque Arena";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Excavar";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Fisura";
							tipoataque[2] = pokemon[-1];
							pp[2] = "5";
							efectivo[2] = "30";
							dano[2] = "0";
						}
						// POKEMON 22
						if (eleccionpoke==22) {
							nombrepokemon[21] = "MEOWTH";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "45";
							pokemon[3] = "35";
							pokemon[4] = "90";
							pokemon[5] = "40";
							nombreataque[-1] = "Mega Pu�o";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Ara�aso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 23
						if (eleccionpoke==23) {
							nombrepokemon[22] = "PSYDUCK";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "52";
							pokemon[3] = "48";
							pokemon[4] = "55";
							pokemon[5] = "50";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Surf";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 24
						if (eleccionpoke==24) {
							nombrepokemon[23] = "MANKEY";
							pokemon[-1] = "LUCHA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "80";
							pokemon[3] = "35";
							pokemon[4] = "70";
							pokemon[5] = "35";
							nombreataque[-1] = "Golpe Karate";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "50";
							nombreataque[0] = "Doble Patada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "30";
							efectivo[0] = "100";
							dano[0] = "30";
							nombreataque[1] = "Patada Giro";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "85";
							dano[1] = "60";
							nombreataque[2] = "Pata Salto";
							tipoataque[2] = pokemon[-1];
							pp[2] = "25";
							efectivo[2] = "95";
							dano[2] = "85";
						}
						// POKEMON 25 
						if (eleccionpoke==25) {
							nombrepokemon[24] = "GROWLITHE";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "55";
							pokemon[2] = "70";
							pokemon[3] = "45";
							pokemon[4] = "60";
							pokemon[5] = "50";
							nombreataque[-1] = "Ascuas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Lanza Llamas";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Giro Fuego";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "70";
							dano[1] = "15";
							nombreataque[2] = "Pu�o Fuego";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "75";
						}
						// POKEMON 26
						if (eleccionpoke==26) {
							nombrepokemon[25] = "POLIWAG";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "50";
							pokemon[3] = "40";
							pokemon[4] = "90";
							pokemon[5] = "40";
							nombreataque[-1] = "Pistla de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Surf";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 
						if (eleccionpoke==27) {
							nombrepokemon[26] = "ABRA";
							pokemon[-1] = "PSIQUICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "25";
							pokemon[2] = "20";
							pokemon[3] = "15";
							pokemon[4] = "90";
							pokemon[5] = "105";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Descanso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Ataque Psiquico";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "90";
							nombreataque[2] = "amnesia";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 28
						if (eleccionpoke==28) {
							nombrepokemon[27] = "MACHOP";
							pokemon[-1] = "LUCHA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "70";
							pokemon[2] = "80";
							pokemon[3] = "50";
							pokemon[4] = "35";
							pokemon[5] = "35";
							nombreataque[-1] = "Golpe Karate";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "50";
							nombreataque[0] = "Doble Patada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "30";
							efectivo[0] = "100";
							dano[0] = "30";
							nombreataque[1] = "Patada Giro";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "85";
							dano[1] = "60";
							nombreataque[2] = "Patada Salto";
							tipoataque[2] = pokemon[-1];
							pp[2] = "25";
							efectivo[2] = "95";
							dano[2] = "85";
						}
						// POKEMON 29 
						if (eleccionpoke==29) {
							nombrepokemon[28] = "BELLSPROUT";
							pokemon[-1] = "PLANTA";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "75";
							pokemon[3] = "35";
							pokemon[4] = "40";
							pokemon[5] = "70";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Latigo Cepa";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "35";
							nombreataque[2] = "Acido";
							tipoataque[2] = pokemon[0];
							pp[2] = "30";
							efectivo[2] = "100";
							dano[2] = "40";
						}
						// POKEMON 30
						if (eleccionpoke==30) {
							nombrepokemon[29] = "TENTACOOL";
							pokemon[-1] = "AGUA";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "40";
							pokemon[3] = "35";
							pokemon[4] = "70";
							pokemon[5] = "100";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Picotazo Venenoso";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "15";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Surf";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 31
						if (eleccionpoke==31) {
							nombrepokemon[30] = "GEODUDE";
							pokemon[-1] = "ROCA";
							pokemon[0] = "TIERRA";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "80";
							pokemon[3] = "100";
							pokemon[4] = "20";
							pokemon[5] = "30";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "100";
							nombreataque[0] = "Hueso Bumerang";
							tipoataque[0] = pokemon[0];
							pp[0] = "10";
							efectivo[0] = "90";
							dano[0] = "50";
							nombreataque[1] = "Lanza Roca";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "90";
							dano[1] = "50";
							nombreataque[2] = "Avalancha";
							tipoataque[2] = pokemon[-1];
							pp[2] = "10";
							efectivo[2] = "90";
							dano[2] = "75";
						}
						// POKEMON 32
						if (eleccionpoke==32) {
							nombrepokemon[31] = "PONYTA";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "85";
							pokemon[3] = "55";
							pokemon[4] = "90";
							pokemon[5] = "65";
							nombreataque[-1] = "Ascuas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Lanza Llamas";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Giro Fuego";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "70";
							dano[1] = "15";
							nombreataque[2] = "Pu�o Fuego";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "75";
						}
						// POKEMON 33
						if (eleccionpoke==33) {
							nombrepokemon[32] = "SLOWPOKE";
							pokemon[-1] = "AGUA";
							pokemon[0] = "PSIQUICO";
							// Salud
							pokemon[1] = "90";
							pokemon[2] = "65";
							pokemon[3] = "65";
							pokemon[4] = "15";
							pokemon[5] = "40";
							nombreataque[-1] = "Psico rayo";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 34
						if (eleccionpoke==34) {
							nombrepokemon[33] = "MAGNEMITE";
							pokemon[-1] = "ELECTRICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "25";
							pokemon[2] = "35";
							pokemon[3] = "70";
							pokemon[4] = "45";
							pokemon[5] = "95";
							nombreataque[-1] = "Pu�o Trueno";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "100";
							dano[-1] = "75";
							nombreataque[0] = "Trueno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "70";
							dano[0] = "120";
							nombreataque[1] = "Impactrueno";
							tipoataque[1] = pokemon[-1];
							pp[1] = "30";
							efectivo[1] = "100";
							dano[1] = "40";
							nombreataque[2] = "Rayo";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 35
						if (eleccionpoke==35) {
							nombrepokemon[34] = "FARFECTC D";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "52";
							pokemon[2] = "65";
							pokemon[3] = "55";
							pokemon[4] = "60";
							pokemon[5] = "58";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Tornado";
							tipoataque[2] = pokemon[0];
							pp[2] = "35";
							efectivo[2] = "100";
							dano[2] = "40";
						}
						// POKEMON 36
						if (eleccionpoke==36) {
							nombrepokemon[35] = "DODUO";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "85";
							pokemon[3] = "45";
							pokemon[4] = "75";
							pokemon[5] = "35";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Chirridos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "85";
							dano[2] = "0";
						}
						// POKEMON 37
						if (eleccionpoke==37) {
							nombrepokemon[36] = "SEEL";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "45";
							pokemon[3] = "55";
							pokemon[4] = "45";
							pokemon[5] = "70";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Surf";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "95";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 38
						if (eleccionpoke==38) {
							nombrepokemon[37] = "GRIMER";
							pokemon[-1] = "VENENO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "80";
							pokemon[2] = "80";
							pokemon[3] = "50";
							pokemon[4] = "25";
							pokemon[5] = "40";
							nombreataque[-1] = "Armadura Acida";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "40";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Picotazo Venenoso";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "100";
							dano[1] = "15";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "95";
							efectivo[2] = "20";
							dano[2] = "65";
						}
						// POKEMON 39
						if (eleccionpoke==39) {
							nombrepokemon[38] = "SHELLDER";
							pokemon[-1] = "AGUA";
							pokemon[0] = "HIELO";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "65";
							pokemon[3] = "100";
							pokemon[4] = "40";
							pokemon[5] = "45";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Rayo Hielo";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "95";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 40
						if (eleccionpoke==40) {
							nombrepokemon[39] = "GASTLY";
							pokemon[-1] = "FANTASMA";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "35";
							pokemon[3] = "30";
							pokemon[4] = "80";
							pokemon[5] = "100";
							nombreataque[-1] = "Acido";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "30";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Tinieblas";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Residuos";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "95";
							dano[2] = "65";
						}
						// POKEMON 41
						if (eleccionpoke==41) {
							nombrepokemon[40] = "ONIX";
							pokemon[-1] = "ROCA";
							pokemon[0] = "TIERRA";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "45";
							pokemon[3] = "160";
							pokemon[4] = "70";
							pokemon[5] = "30";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Ataque Arena";
							tipoataque[0] = pokemon[0];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Lanza Rocas";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "90";
							dano[1] = "50";
							nombreataque[2] = "Avalancha";
							tipoataque[2] = pokemon[-1];
							pp[2] = "10";
							efectivo[2] = "90";
							dano[2] = "75";
						}
						// POKEMON 42
						if (eleccionpoke==42) {
							nombrepokemon[41] = "DROWZEE";
							pokemon[-1] = "PSIQUICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "60";
							pokemon[2] = "48";
							pokemon[3] = "45";
							pokemon[4] = "42";
							pokemon[5] = "90";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Descanso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Ataque Psiquico";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "90";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 43 
						if (eleccionpoke==43) {
							nombrepokemon[42] = "KRABBY";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "105";
							pokemon[3] = "90";
							pokemon[4] = "50";
							pokemon[5] = "25";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Surf";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "95";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 44
						if (eleccionpoke==44) {
							nombrepokemon[43] = "VOLTORD";
							pokemon[-1] = "ELECTRICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "30";
							pokemon[3] = "50";
							pokemon[4] = "100";
							pokemon[5] = "55";
							nombreataque[-1] = "Pu�o Trueno";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "100";
							dano[-1] = "75";
							nombreataque[0] = "Trueno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "70";
							dano[0] = "120";
							nombreataque[1] = "Impactrueno";
							tipoataque[1] = pokemon[-1];
							pp[1] = "30";
							efectivo[1] = "100";
							dano[1] = "40";
							nombreataque[2] = "Rayo";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 45
						if (eleccionpoke==45) {
							nombrepokemon[44] = "EXEGGUTE";
							pokemon[-1] = "PLANTA";
							pokemon[0] = "PSIQUICO";
							// Salud
							pokemon[1] = "60";
							pokemon[2] = "40";
							pokemon[3] = "80";
							pokemon[4] = "40";
							pokemon[5] = "60";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Psico Rayo";
							tipoataque[0] = pokemon[0];
							pp[0] = "25";
							efectivo[0] = "100";
							dano[0] = "";
							nombreataque[1] = "Ataque Psiquico";
							tipoataque[1] = pokemon[0];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "90";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 46
						if (eleccionpoke==46) {
							nombrepokemon[45] = "CUBONE";
							pokemon[-1] = "TIERRA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "50";
							pokemon[3] = "95";
							pokemon[4] = "35";
							pokemon[5] = "40";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Hueso Bumerag";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "90";
							dano[0] = "50";
							nombreataque[1] = "Excabar";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Fisura";
							tipoataque[2] = pokemon[-1];
							pp[2] = "5";
							efectivo[2] = "30";
							dano[2] = "0";
						}
						// POKEMON 47
						if (eleccionpoke==47) {
							nombrepokemon[46] = "HITMONLEE";
							pokemon[-1] = "LUCHA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "105";
							pokemon[3] = "79";
							pokemon[4] = "76";
							pokemon[5] = "35";
							nombreataque[-1] = "Golpe Karate";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "50";
							nombreataque[0] = "Doble Patada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "30";
							efectivo[0] = "100";
							dano[0] = "30";
							nombreataque[1] = "Patada Giro";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "85";
							dano[1] = "60";
							nombreataque[2] = "Patada Salto";
							tipoataque[2] = pokemon[-1];
							pp[2] = "25";
							efectivo[2] = "95";
							dano[2] = "85";
						}
						// POKEMON 48
						if (eleccionpoke==48) {
							nombrepokemon[47] = "HITMONCHAN";
							pokemon[-1] = "LUCHA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "50";
							pokemon[2] = "105";
							pokemon[3] = "79";
							pokemon[4] = "76";
							pokemon[5] = "35";
							nombreataque[-1] = "Golpe Karate";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "50";
							nombreataque[0] = "Contador";
							tipoataque[0] = pokemon[-1];
							pp[0] = "20";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Patada Giro";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "85";
							dano[1] = "60";
							nombreataque[2] = "Patada Salto";
							tipoataque[2] = pokemon[-1];
							pp[2] = "25";
							efectivo[2] = "95";
							dano[2] = "85";
						}
						// POKEMON 49
						if (eleccionpoke==49) {
							nombrepokemon[48] = "LICKITUNG";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "90";
							pokemon[2] = "55";
							pokemon[3] = "75";
							pokemon[4] = "30";
							pokemon[5] = "60";
							nombreataque[-1] = "Mega Pu�o";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Destructor";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Placaje";
							tipoataque[1] = pokemon[-1];
							pp[1] = "35";
							efectivo[1] = "95";
							dano[1] = "35";
							nombreataque[2] = "Chirridos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "85";
							dano[2] = "0";
						}
						// POKEMON 50
						if (eleccionpoke==50) {
							nombrepokemon[49] = "KOFFING";
							pokemon[-1] = "VENENO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "65";
							pokemon[3] = "95";
							pokemon[4] = "35";
							pokemon[5] = "60";
							nombreataque[-1] = "Acido";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "30";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Polvo Veneno";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "75";
							dano[0] = "0";
							nombreataque[1] = "Residuos";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "95";
							dano[1] = "65";
							nombreataque[2] = "Armadura Acida";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 51
						if (eleccionpoke==51) {
							nombrepokemon[50] = "RHYHORN";
							pokemon[-1] = "ROCA";
							pokemon[0] = "TIERRA";
							// Salud
							pokemon[1] = "80";
							pokemon[2] = "85";
							pokemon[3] = "95";
							pokemon[4] = "25";
							pokemon[5] = "30";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Avalancha";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "90";
							dano[0] = "75";
							nombreataque[1] = "Excavar";
							tipoataque[1] = pokemon[0];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Lanza Rocas";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "90";
							dano[2] = "50";
						}
						// POKEMON 52
						if (eleccionpoke==52) {
							nombrepokemon[51] = "CHANSEY";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "250";
							pokemon[2] = "5";
							pokemon[3] = "5";
							pokemon[4] = "5";
							pokemon[5] = "50";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ara�aso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Chirridos";
							tipoataque[2] = pokemon[-1];
							pp[2] = "40";
							efectivo[2] = "85";
							dano[2] = "0";
						}
						// POKEMON
						if (eleccionpoke==53) {
							nombrepokemon[52] = "TANGELA";
							pokemon[-1] = "PLANTA";
							pokemon[0] = "VENENO";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "55";
							pokemon[3] = "115";
							pokemon[4] = "60";
							pokemon[5] = "100";
							nombreataque[-1] = "Absorber";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "20";
							nombreataque[0] = "Agotamiento";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Polvo Veneno";
							tipoataque[1] = pokemon[0];
							pp[1] = "35";
							efectivo[1] = "75";
							dano[1] = "0";
							nombreataque[2] = "Drenadoras";
							tipoataque[2] = pokemon[-1];
							pp[2] = "10";
							efectivo[2] = "90";
							dano[2] = "0";
						}
						// POKEMON
						if (eleccionpoke==54) {
							nombrepokemon[53] = "KANGASKHAN";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "105";
							pokemon[2] = "95";
							pokemon[3] = "80";
							pokemon[4] = "90";
							pokemon[5] = "40";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ara�aso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 
						if (eleccionpoke==55) {
							nombrepokemon[54] = "HORSEA";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "40";
							pokemon[3] = "70";
							pokemon[4] = "60";
							pokemon[5] = "70";
							nombreataque[-1] = "Pistol de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Rayo Burbuja";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Surf";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "95";
							dano[2] = "100";
						}
						// POKEMON 
						if (eleccionpoke==56) {
							nombrepokemon[55] = "GOLDEEN";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "45";
							pokemon[2] = "67";
							pokemon[3] = "60";
							pokemon[4] = "63";
							pokemon[5] = "50";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Surf";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "95";
							dano[1] = "100";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 
						if (eleccionpoke==57) {
							nombrepokemon[56] = "STARYU";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "45";
							pokemon[3] = "55";
							pokemon[4] = "85";
							pokemon[5] = "70";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Cascada";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "100";
							dano[0] = "80";
							nombreataque[1] = "Surf";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 
						if (eleccionpoke==58) {
							nombrepokemon[57] = "MR.MIME";
							pokemon[-1] = "PSIQUICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "40";
							pokemon[2] = "45";
							pokemon[3] = "65";
							pokemon[4] = "90";
							pokemon[5] = "100";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Descanso";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Ataque Psiquico";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "90";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 
						if (eleccionpoke==59) {
							nombrepokemon[58] = "SCYTHER";
							pokemon[-1] = "BICHO";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "70";
							pokemon[2] = "110";
							pokemon[3] = "80";
							pokemon[4] = "105";
							pokemon[5] = "55";
							nombreataque[-1] = "Doble Ataque";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "80";
							nombreataque[0] = "Pin Misile";
							tipoataque[0] = pokemon[-1];
							pp[0] = "20";
							efectivo[0] = "85";
							dano[0] = "14";
							nombreataque[1] = "Disparo Demora";
							tipoataque[1] = pokemon[-1];
							pp[1] = "40";
							efectivo[1] = "95";
							dano[1] = "0";
							nombreataque[2] = "Ataque Ala";
							tipoataque[2] = pokemon[0];
							pp[2] = "35";
							efectivo[2] = "100";
							dano[2] = "60";
						}
						// POKEMON 
						if (eleccionpoke==60) {
							nombrepokemon[59] = "JYNX";
							pokemon[-1] = "HIELO";
							pokemon[0] = "PSIQUICO";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "50";
							pokemon[3] = "35";
							pokemon[4] = "95";
							pokemon[5] = "95";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Pu�o Hielo";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "15";
							nombreataque[1] = "Amnesia";
							tipoataque[1] = pokemon[0];
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Doble Bofeton";
							tipoataque[2] = "NORMAL";
							pp[2] = "10";
							efectivo[2] = "85";
							dano[2] = "15";
						}
						// POKEMON 
						if (eleccionpoke==61) {
							nombrepokemon[60] = "ELECTABUZZ";
							pokemon[-1] = "ELECTRICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "83";
							pokemon[3] = "57";
							pokemon[4] = "105";
							pokemon[5] = "85";
							nombreataque[-1] = "Pu�o Trueno";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "100";
							dano[-1] = "75";
							nombreataque[0] = "Golpe Karate";
							tipoataque[0] = "LUCHA";
							pp[0] = "25";
							efectivo[0] = "100";
							dano[0] = "50";
							nombreataque[1] = "Mega Pu�o";
							tipoataque[1] = "NORMAL";
							pp[1] = "20";
							efectivo[1] = "85";
							dano[1] = "80";
							nombreataque[2] = "Rayo";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 
						if (eleccionpoke==62) {
							nombrepokemon[61] = "MAGMAR";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "95";
							pokemon[3] = "57";
							pokemon[4] = "93";
							pokemon[5] = "85";
							nombreataque[-1] = "Ascuas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Lanza LLamas";
							tipoataque[0] = pokemon[-1];
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Pu�o Fuego";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "75";
							nombreataque[2] = "Placaje";
							tipoataque[2] = "NORMAL";
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "35";
						}
						// POKEMON 
						if (eleccionpoke==63) {
							nombrepokemon[62] = "PINSIR";
							pokemon[-1] = "BICHO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "125";
							pokemon[3] = "100";
							pokemon[4] = "85";
							pokemon[5] = "55";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = "NORMAL";
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Pin Misille";
							tipoataque[0] = pokemon[-1];
							pp[0] = "20";
							efectivo[0] = "85";
							dano[0] = "14";
							nombreataque[1] = "Cornada";
							tipoataque[1] = "NORMAL";
							pp[1] = "25";
							efectivo[1] = "100";
							dano[1] = "65";
							nombreataque[2] = "Placaje";
							tipoataque[2] = "NORMAL";
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON
						if (eleccionpoke==64) {
							nombrepokemon[63] = "TAUROS";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "75";
							pokemon[2] = "100";
							pokemon[3] = "95";
							pokemon[4] = "110";
							pokemon[5] = "70";
							nombreataque[-1] = "Terremoto";
							tipoataque[-1] = "TIERRA";
							pp[-1] = "20";
							efectivo[-1] = "85";
							dano[-1] = "80";
							nombreataque[0] = "Destructor";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Descanso";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "95";
						}
						// POKEMON 
						if (eleccionpoke==65) {
							nombrepokemon[64] = "MAGIKARP";
							pokemon[-1] = "AGUA";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "20";
							pokemon[2] = "10";
							pokemon[3] = "55";
							pokemon[4] = "80";
							pokemon[5] = "20";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Hidro Bomba";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Descanso";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Placaje";
							tipoataque[2] = "NORMAL";
							pp[2] = "35";
							efectivo[2] = "95";
							dano[2] = "95";
						}
						// POKEMON 
						if (eleccionpoke==66) {
							nombrepokemon[65] = "LAPRAS";
							pokemon[-1] = "AGUA";
							pokemon[0] = "HIELO";
							// Salud
							pokemon[1] = "130";
							pokemon[2] = "85";
							pokemon[3] = "80";
							pokemon[4] = "60";
							pokemon[5] = "95";
							nombreataque[-1] = "Pistola de Agua";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "25";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "HIDRO BOMBA";
							tipoataque[0] = pokemon[-1];
							pp[0] = "5";
							efectivo[0] = "80";
							dano[0] = "120";
							nombreataque[1] = "Descanso";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Rayo Aurora";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 
						if (eleccionpoke==67) {
							nombrepokemon[66] = "DITTO";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "48";
							pokemon[2] = "48";
							pokemon[3] = "48";
							pokemon[4] = "48";
							pokemon[5] = "48";
							nombreataque[-1] = "Transformacion";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "";
							tipoataque[0] = "";
							pp[0] = "";
							efectivo[0] = "";
							dano[0] = "";
							nombreataque[1] = "";
							tipoataque[1] = "";
							pp[1] = "";
							efectivo[1] = "";
							dano[1] = "";
							nombreataque[2] = "";
							tipoataque[2] = "";
							pp[2] = "";
							efectivo[2] = "";
							dano[2] = "";
						}
						// POKEMON 
						if (eleccionpoke==68) {
							nombrepokemon[67] = "EEVEE";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "55";
							pokemon[2] = "55";
							pokemon[3] = "50";
							pokemon[4] = "55";
							pokemon[5] = "65";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Ataque Arena";
							tipoataque[0] = "TIERRA";
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Doble Bofeton";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "85";
							dano[1] = "15";
							nombreataque[2] = "Placaje";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "100";
							dano[2] = "95";
						}
						// POKEMON 
						if (eleccionpoke==69) {
							nombrepokemon[68] = "PORYGON";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "65";
							pokemon[2] = "60";
							pokemon[3] = "70";
							pokemon[4] = "40";
							pokemon[5] = "75";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = "PSIQUICO";
							pp[-1] = "20";
							efectivo[-1] = "100";
							dano[-1] = "65";
							nombreataque[0] = "Destructor";
							tipoataque[0] = pokemon[-1];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "40";
							nombreataque[1] = "Amnesia";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Impactrueno";
							tipoataque[2] = "ELECTRICO";
							pp[2] = "30";
							efectivo[2] = "100";
							dano[2] = "40";
						}
						// POKEMON 
						if (eleccionpoke==70) {
							nombrepokemon[69] = "OMANYTE";
							pokemon[-1] = "ROCA";
							pokemon[0] = "AGUA";
							// Salud
							pokemon[1] = "35";
							pokemon[2] = "40";
							pokemon[3] = "100";
							pokemon[4] = "35";
							pokemon[5] = "90";
							nombreataque[-1] = "Hidro Bomba";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "5";
							efectivo[-1] = "80";
							dano[-1] = "120";
							nombreataque[0] = "Absorber";
							tipoataque[0] = "PLANTA";
							pp[0] = "25";
							efectivo[0] = "100";
							dano[0] = "20";
							nombreataque[1] = "Excavar";
							tipoataque[1] = "TIERRA";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "60";
							nombreataque[2] = "Lanza Rocas";
							tipoataque[2] = pokemon[-1];
							pp[2] = "15";
							efectivo[2] = "90";
							dano[2] = "50";
						}
						// POKEMON 
						if (eleccionpoke==71) {
							nombrepokemon[70] = "KABUTO";
							pokemon[-1] = "ROCA";
							pokemon[0] = "AGUA";
							// Salud
							pokemon[1] = "30";
							pokemon[2] = "80";
							pokemon[3] = "90";
							pokemon[4] = "55";
							pokemon[5] = "45";
							nombreataque[-1] = "Hidro Bomba";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "5";
							efectivo[-1] = "80";
							dano[-1] = "120";
							nombreataque[0] = "Absorber";
							tipoataque[0] = "PLANTA";
							pp[0] = "25";
							efectivo[0] = "100";
							dano[0] = "20";
							nombreataque[1] = "Surf";
							tipoataque[1] = pokemon[0];
							pp[1] = "15";
							efectivo[1] = "100";
							dano[1] = "95";
							nombreataque[2] = "Rayo Burbuja";
							tipoataque[2] = pokemon[0];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 
						if (eleccionpoke==72) {
							nombrepokemon[71] = "AERODACTYL";
							pokemon[-1] = "ROCA";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "80";
							pokemon[2] = "105";
							pokemon[3] = "65";
							pokemon[4] = "130";
							pokemon[5] = "60";
							nombreataque[-1] = "Ataque Ala";
							tipoataque[-1] = pokemon[0];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "60";
							nombreataque[0] = "Lanza LLamas";
							tipoataque[0] = "FUEGO";
							pp[0] = "15";
							efectivo[0] = "100";
							dano[0] = "95";
							nombreataque[1] = "Lanza Rocas";
							tipoataque[1] = pokemon[-1];
							pp[1] = "15";
							efectivo[1] = "90";
							dano[1] = "50";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = "PSIQUICO";
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 
						if (eleccionpoke==73) {
							nombrepokemon[72] = "SNORLAX";
							pokemon[-1] = "NORMAL";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "160";
							pokemon[2] = "110";
							pokemon[3] = "65";
							pokemon[4] = "30";
							pokemon[5] = "65";
							nombreataque[-1] = "Destructor";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "35";
							efectivo[-1] = "100";
							dano[-1] = "40";
							nombreataque[0] = "Descanso";
							tipoataque[0] = "PSIQUICO";
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Placaje";
							tipoataque[1] = pokemon[-1];
							pp[1] = "";
							efectivo[1] = "";
							dano[1] = "";
							nombreataque[2] = "Doble Bofeton";
							tipoataque[2] = pokemon[-1];
							pp[2] = "10";
							efectivo[2] = "85";
							dano[2] = "15";
						}
						// POKEMON 
						if (eleccionpoke==74) {
							nombrepokemon[73] = "ARTICUNO";
							pokemon[-1] = "HIELO";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "90";
							pokemon[2] = "85";
							pokemon[3] = "100";
							pokemon[4] = "85";
							pokemon[5] = "125";
							nombreataque[-1] = "Rayo Hielo";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "16";
							efectivo[-1] = "100";
							dano[-1] = "90";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Descanso";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Rayo Aurora";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "65";
						}
						// POKEMON 
						if (eleccionpoke==75) {
							nombrepokemon[74] = "ZAPDOS";
							pokemon[-1] = "ELECTRICO";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "90";
							pokemon[2] = "90";
							pokemon[3] = "85";
							pokemon[4] = "100";
							pokemon[5] = "125";
							nombreataque[-1] = "Trueno";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "70";
							dano[-1] = "120";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Amnesia";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "20";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Impactrueno";
							tipoataque[2] = pokemon[-1];
							pp[2] = "10";
							efectivo[2] = "100";
							dano[2] = "90";
						}
						// POKEMON 
						if (eleccionpoke==76) {
							nombrepokemon[75] = "MOLTRES";
							pokemon[-1] = "FUEGO";
							pokemon[0] = "VOLADOR";
							// Salud
							pokemon[1] = "90";
							pokemon[2] = "100";
							pokemon[3] = "90";
							pokemon[4] = "90";
							pokemon[5] = "125";
							nombreataque[-1] = "Lanza LLamas";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "15";
							efectivo[-1] = "100";
							dano[-1] = "95";
							nombreataque[0] = "Ataque Ala";
							tipoataque[0] = pokemon[0];
							pp[0] = "35";
							efectivo[0] = "100";
							dano[0] = "60";
							nombreataque[1] = "Descanso";
							tipoataque[1] = "PSIQUICO";
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "0";
							nombreataque[2] = "Ataque Psiquico";
							tipoataque[2] = "PSIQUICO";
							pp[2] = "10";
							efectivo[2] = "100";
							dano[2] = "90";
						}
						// POKEMON 
						if (eleccionpoke==77) {
							nombrepokemon[76] = "DRATINI";
							pokemon[-1] = "DRAGON";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "41";
							pokemon[2] = "64";
							pokemon[3] = "45";
							pokemon[4] = "50";
							pokemon[5] = "50";
							nombreataque[-1] = "Furia Dragon";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "Descanso";
							tipoataque[0] = "PSIQUICO";
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "0";
							nombreataque[1] = "Placaje";
							tipoataque[1] = "NORMAL";
							pp[1] = "35";
							efectivo[1] = "95";
							dano[1] = "35";
							nombreataque[2] = "Surf";
							tipoataque[2] = "AGUA";
							pp[2] = "15";
							efectivo[2] = "95";
							dano[2] = "100";
						}
						// POKEMON 
						if (eleccionpoke==78) {
							nombrepokemon[77] = "MEWTWO";
							pokemon[-1] = "PSIQUICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "106";
							pokemon[2] = "110";
							pokemon[3] = "90";
							pokemon[4] = "130";
							pokemon[5] = "154";
							nombreataque[-1] = "Psico Rayo";
							tipoataque[-1] = pokemon[-1];
							pp[-1] = "";
							efectivo[-1] = "";
							dano[-1] = "65";
							nombreataque[0] = "Mega Pu�o";
							tipoataque[0] = "NORMAL";
							pp[0] = "20";
							efectivo[0] = "85";
							dano[0] = "80";
							nombreataque[1] = "Ataque Psiquico";
							tipoataque[1] = pokemon[-1];
							pp[1] = "10";
							efectivo[1] = "100";
							dano[1] = "90";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// POKEMON 
						if (eleccionpoke==79) {
							nombrepokemon[78] = "MEW";
							pokemon[-1] = "PSIQUICO";
							pokemon[0] = "";
							// Salud
							pokemon[1] = "100";
							pokemon[2] = "100";
							pokemon[3] = "100";
							pokemon[4] = "100";
							pokemon[5] = "100";
							nombreataque[-1] = "Transformacion";
							tipoataque[-1] = "NORMAL";
							pp[-1] = "10";
							efectivo[-1] = "100";
							dano[-1] = "0";
							nombreataque[0] = "Psico Rayo";
							tipoataque[0] = pokemon[-1];
							pp[0] = "10";
							efectivo[0] = "100";
							dano[0] = "65";
							nombreataque[1] = "Mega Pu�o";
							tipoataque[1] = pokemon[-1];
							pp[1] = "20";
							efectivo[1] = "85";
							dano[1] = "80";
							nombreataque[2] = "Amnesia";
							tipoataque[2] = pokemon[-1];
							pp[2] = "20";
							efectivo[2] = "100";
							dano[2] = "0";
						}
						// LISTA DE POKEMONES USUARIO
						// BUSQUEDA DE POKEMON ENEMIGO
						if (z==2) {
							// Guarda el nombre del pokemon 1 que voy a ocupar
							enepoke[0] = nombrepokemon[eleccionpoke-1];
							// TIPO DEL POKE
							// Guarda el Tipo 1 del pokemon
							enepoket2[-1] = pokemon[-1];
							// Guarda el Tipo 2
							enepoket2[0] = pokemon[0];
							// Habilidad del poke 1
							// SALUD
							enepokeh2[-1] = Number(pokemon[1]);
							// ATAQUE
							enepokeh2[0] = Number(pokemon[2]);
							// DEFENSA
							enepokeh2[1] = Number(pokemon[3]);
							// VELOCIDAD
							enepokeh2[2] = Number(pokemon[4]);
							// ESPECIAL
							enepokeh2[3] = Number(pokemon[5]);
							enesalud[0] = enepokeh2[-1];
							for (contx=0;contx<=3;contx++) {
								nombree2[contx-1] = nombreataque[contx-1];
								tipoe2[contx-1] = tipoataque[contx-1];
								ppe2[contx-1] = Number(pp[contx-1]);
								efectivoe2[contx-1] = Number(efectivo[contx-1]);
								ppfe2[contx-1] = Number(pp[contx-1]);
								danoe2[contx-1] = Number(dano[contx-1]);
							}
						}
						if (z==3) {
							// Guarda el nombre del pokemon 1 que voy a ocupar
							enepoke[1] = nombrepokemon[eleccionpoke-1];
							// TIPO DEL POKE
							// Guarda el Tipo 1 del pokemon
							enepoket3[-1] = pokemon[-1];
							// Guarda el Tipo 2
							enepoket3[0] = pokemon[0];
							// Habilidad del poke 1
							// SALUD
							enepokeh3[-1] = Number(pokemon[1]);
							// ATAQUE
							enepokeh3[0] = Number(pokemon[2]);
							// DEFENSA
							enepokeh3[1] = Number(pokemon[3]);
							// VELOCIDAD
							enepokeh3[2] = Number(pokemon[4]);
							// ESPECIAL 
							enepokeh3[3] = Number(pokemon[5]);
							enesalud[1] = enepokeh3[-1];
							for (contx=0;contx<=3;contx++) {
								nombree3[contx-1] = nombreataque[contx-1];
								tipoe3[contx-1] = tipoataque[contx-1];
								ppe3[contx-1] = Number(pp[contx-1]);
								ppfe3[contx-1] = Number(pp[contx-1]);
								efectivoe3[contx-1] = Number(efectivo[contx-1]);
								danoe3[contx-1] = Number(dano[contx-1]);
							}
						}
						if (z==4) {
							// Guarda el nombre del pokemon 1 que voy a ocupar
							enepoke[2] = nombrepokemon[eleccionpoke-1];
							// TIPO DEL POKE
							// Guarda el Tipo 1 del pokemon
							enepoket4[-1] = pokemon[-1];
							// Guarda el Tipo 2
							enepoket4[0] = pokemon[0];
							// Habilidad del poke 1
							// SALUD
							enepokeh4[-1] = Number(pokemon[1]);
							// ATAQUE
							enepokeh4[0] = Number(pokemon[2]);
							// DEFENSA
							enepokeh4[1] = Number(pokemon[3]);
							// VELOCIDAD
							enepokeh4[2] = Number(pokemon[4]);
							// ESPECIAL 
							enepokeh4[3] = Number(pokemon[5]);
							enesalud[2] = enepokeh4[-1];
							for (contx=0;contx<=3;contx++) {
								nombree4[contx-1] = nombreataque[contx-1];
								tipoe4[contx-1] = tipoataque[contx-1];
								ppe4[contx-1] = Number(pp[contx-1]);
								ppfe4[contx-1] = Number(pp[contx-1]);
								efectivoe4[contx-1] = Number(efectivo[contx-1]);
								danoe4[contx-1] = Number(dano[contx-1]);
							}
						}
						if (z==5) {
							// Guarda el nombre del pokemon 1 que voy a ocupar
							enepoke[3] = nombrepokemon[eleccionpoke-1];
							// TIPO DEL POKE
							// Guarda el Tipo 1 del pokemon
							enepoket5[-1] = pokemon[-1];
							// Guarda el Tipo 2
							enepoket5[0] = pokemon[0];
							// Habilidad del poke 1
							// SALUD
							enepokeh5[-1] = Number(pokemon[1]);
							// ATAQUE
							enepokeh5[0] = Number(pokemon[2]);
							// DEFENSA
							enepokeh5[1] = Number(pokemon[3]);
							// VELOCIDAD
							enepokeh5[2] = Number(pokemon[4]);
							// ESPECIAL
							enepokeh5[3] = Number(pokemon[5]);
							enesalud[3] = enepokeh5[-1];
							for (contx=0;contx<=3;contx++) {
								nombree5[contx-1] = nombreataque[contx-1];
								tipoe5[contx-1] = tipoataque[contx-1];
								ppe5[contx-1] = Number(pp[contx-1]);
								ppfe5[contx-1] = Number(pp[contx-1]);
								efectivoe5[contx-1] = Number(efectivo[contx-1]);
								danoe5[contx-1] = Number(dano[contx-1]);
							}
						}
						if (z==6) {
							// Guarda el nombre del pokemon 1 que voy a ocupar
							enepoke[4] = nombrepokemon[eleccionpoke-1];
							// TIPO DEL POKE
							// Guarda el Tipo 1 del pokemon
							enepoket6[-1] = pokemon[-1];
							// Guarda el Tipo 2
							enepoket6[0] = pokemon[0];
							// Habilidad del poke 1
							// SALUD
							enepokeh6[-1] = Number(pokemon[1]);
							// ATAQUE
							enepokeh6[0] = Number(pokemon[2]);
							// DEFENSA
							enepokeh6[1] = Number(pokemon[3]);
							// VELOCIDAD
							enepokeh6[2] = Number(pokemon[4]);
							// ESPECIAL 
							enepokeh6[3] = Number(pokemon[5]);
							enesalud[4] = enepokeh6[-1];
							for (contx=0;contx<=3;contx++) {
								nombree6[contx-1] = nombreataque[contx-1];
								tipoe6[contx-1] = tipoataque[contx-1];
								ppe6[contx-1] = Number(pp[contx-1]);
								efectivoe6[contx-1] = Number(efectivo[contx-1]);
								ppfe6[contx-1] = Number(pp[contx-1]);
								danoe6[contx-1] = Number(dano[contx-1]);
							}
						}
					}
				}
			}
			// ***************************************************************************
			// ***     xxxxxx  xx   xx xx xxxxxxxxx    ***********************************
			// ***     xx       xx xx  xx    xx        ***********************************
			// ***     xxxxxx    xxx   xx    xx        ***********************************
			// ***     xx       xx xx  xx    xx        ***********************************
			// ***     xxxxxx  xx   xx xx    xx        ***********************************
			// ***************************************************** OPCION 4 *************************************
			// ******************************************************SALIR DEL JUEGO*******************************
			// ******************************************************SALIR DEL JUEGO*******************************
			if (opc3==4) {
				do {
					console.log("�Estas seguro que quieres salir?, si o no ");
					saliropc = prompt();
				} while (!(saliropc=="si" || saliropc=="SI" || saliropc=="no" || saliropc=="NO"));
				if (saliropc=="SI" || saliropc=="si") {
					opc = 2;
				}
			}
		}
	}
	if (opc==2) {
		console.log("");
		console.log("");
		console.log("");
		console.log("                 Fin del Juego");
		console.log("");
		if (win>0) {
			console.log("        Partidas Guardadas ",win);
		} else {
			console.log("");
		}
		console.log("");
		console.log("");
		prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
		
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|        D  U  O  C         |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|   S A N  B E R N A R D O  |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|        2  0  1  6         |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|        D  U  O  C         |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|   S A N  B E R N A R D O  |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|        2  0  1  6         |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|      A N A L I S I S      |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX| CARLOS ORELLANA           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|            &              |XXXXXXXXXX");
		console.log("XXXXXXXXXX|              CARLOS CERDA |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX| P R O G R A M A D O R E S |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX| BENJAMIN MORA             |XXXXXXXXXX");
		console.log("XXXXXXXXXX|            &              |XXXXXXXXXX");
		console.log("XXXXXXXXXX|           CARLOS ORELLANA |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|  L I S T A D O  P O K E   |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|       MELANIE ORDEN       |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible
		
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|       P R O F E S O R     |XXXXXXXXXX");
		console.log("XXXXXXXXXX|                           |XXXXXXXXXX");
		console.log("XXXXXXXXXX|          IGNACIO V.       |XXXXXXXXXX");
		console.log("XXXXXXXXXX| PROGRAMCION               |XXXXXXXXXX");
		console.log("XXXXXXXXXX|             DE            |XXXXXXXXXX");
		console.log("XXXXXXXXXX|               ALGORITMO   |XXXXXXXXXX");
		console.log("XXXXXXXXXX@---------------------------@XXXXXXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxxxxxxxXXXXX");
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
		prompt(); // no hay una forma simple de esperar un tiempo en javascript sin separar esta funci�n (vease setTimeOut), lo cual no siempre es posible
	}
	
	console.log("");
	console.log("  D U O C  2 0 1 6               .::. ");
	console.log("                               .;:** ");
	console.log("                               `");
	console.log("   .:XHHHHk.              db.   .;;.     dH  MX  ");
	console.log("oMMMMMMMMMMM       ~MM  dMMP :MMMMMR   MMM  MR      ~MRMN");
	console.log("QMMMMMb   MMX       MMMMMMP  MX   M~   MMM MMM  .oo. XMMM   �MMM");
	console.log("  `MMMM.  )M> :X!Hk. MMMM   XMM.o   .  MMMMMMM X?XMMM MMM> !MMP");
	console.log("   �MMMb.dM! XM M�?M MMMMMX.`MMMMMMMM~ MM M MM XM `  MX MMX XMM");
	console.log("    ~MMMMM~ XMM. .XM XM` MMMb.~~MMMM~.MMX M  t MMbooMM XM MMMMP");
	console.log("     ?MMM>  YMMMMMM! MM   `?MMRb.    `       !L MMMMM XM  IMMM");
	console.log("      MMMX    MMMM   MM       ~%:            !Mh.  dMI     IMMP");
	console.log("      �MMM.                                                IMX");
	console.log("       ~M!M                                                 BMT");
	console.log("                      A M A R I L L O ");
	console.log("");
	prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta funci�n (vease document.onKeyUp), lo cual no siempre es posible