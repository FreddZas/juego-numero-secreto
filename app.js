let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del Numero Secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); // Se utiliza para obtener un elemento por el ID

        console.log(intentos);
    if ( numeroDeUsuario === numeroSecreto ) { // sirve para comparar si son del mismo tipo y el mismo numero ingresado, si es asi, te mostrara TRUE en consola y sino, FALSE.
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`); //operador ternario para cambiar palabra de "veces" dependiendo de la cantidad de aciertos
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es mayor")
        } else {
            asignarTextoElemento("p","El numero secreto es menor");
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput() {
   document.querySelector("#valorUsuario").value = ""; //querySelector("#...") es lo mismo que utilizar getElementById("...")
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados)
    console.log(numeroGenerado)

    //Si ya sorteamos todos los numeros hasta el numero maximo 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    } else {
        // Si el numero generado esta incluido en la lista :
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    // limpiar caja
    limpiarInput();
    // Indicar mensaje de intervalo de numeros
    // Generar el numero secreto aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales();
    // Desactivar boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
    

}

condicionesIniciales();


