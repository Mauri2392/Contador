/* 1 - Se declaran cuatro variables hr, min, sec, y ms, todas inicializadas con el valor de "0" + 0. 
Esto se hace para asegurarse de que todos los valores iniciales tengan dos dígitos, 
lo que facilita la presentación en pantalla más adelante.*/

/*2 - Se declara la variable startTimer sin inicializarla. 
Esta variable se utilizará para almacenar el identificador retornado por setInterval 
cuando se inicia el temporizador.*/ 

let hr = min = sec = ms ="0" + 0, startTimer; 

/* 3 - Se seleccionan tres botones HTML con las clases .start, .stop, y .reset 
utilizando document.querySelector. 
Estos elementos deben existir en tu HTML para que este código funcione correctamente.*/

const startBtn = document.querySelector(".start"), 
    stopBtn =document.querySelector(".stop"), 
    resetBtn = document.querySelector(".reset"); 

/*4 - Se agregan tres event listeners a los botones para que ejecuten funciones específicas 
cuando se hacen clic:

Cuando se hace clic en el botón con la clase .start, se llama a la función start.
Cuando se hace clic en el botón con la clase .stop, se llama a la función stop.
Cuando se hace clic en el botón con la clase .reset, se llama a la función reset.*/

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)

/* 5 - La función start se ejecuta cuando se hace clic en el botón "Start". 
Esta función agrega la clase "active" al botón de inicio y elimina la clase "stopActive" del botón 
de parada. Luego, se inicia un temporizador con setInterval que se ejecuta cada 10 milisegundos. 
En cada iteración del temporizador, los valores de milisegundos, segundos, minutos y horas 
se actualizan y se llama a la función putValue para mostrarlos en pantalla. */

function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive"); 

    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms;

        if(ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0; 
        }

        if(sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0; 
        }
        if(min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0; 
        }

        putValue();
        
    }, 10);
} 

/*6 - La función stop se ejecuta cuando se hace clic en el botón "Stop". 
Esta función elimina la clase "active" del botón de inicio y detiene el temporizador 
utilizando clearInterval.*/

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
}

/*7 - La función reset se ejecuta cuando se hace clic en el botón "Reset". 
Al igual que la función stop, elimina las clases "active" y "stopActive" de los botones y 
detiene el temporizador. Luego, restablece todos los valores de tiempo a "00" 
y llama a putValue para mostrar estos valores en pantalla.*/
function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer); 
    hr = min = sec = ms = "0" + 0; 
    putValue();
} 

/* 8 - La función putValue actualiza los elementos HTML con las clases .millisecond, .second, 
.minute, y .hour para mostrar los valores de milisegundos, segundos, minutos y horas.*/

function putValue() {
    document.querySelector('.millisecond').innerHTML = ms;
    document.querySelector('.second').innerHTML = sec;
    document.querySelector('.minute').innerHTML = min; 
    document.querySelector('.hour').innerHTML = hr;
}
















