import { display, lista, control0, control1, control2 } from "./app.js";

class temporizador {
    constructor(ms, s, m, h, intervaloID) {
        this.ms = 0;
        this.s = 0;
        this.m = 0;
        this.h = 0;
        this.intervaloID;
    }

    actualizarTemporizador() {
        if (this.ms >= 100) {
            this.ms = 0;
            this.s++;
        }
        if (this.s >= 60) {
            this.s = 0;
            this.m++;
        }
        if (this.m >= 60) {
            this.m = 0;
            this.h++;
        }
    }

    actualizarDisplay() {
        if (this.h > 0) {
            display.innerText = `${this.h}:${this.m}:${this.s}`
        } else {
            display.innerText = `${this.m}:${this.s}.${this.ms}`
        }
    }

    iniciarTemporizador() {
        this.intervaloID = setInterval(()=>{
            this.ms++;
            this.actualizarTemporizador();
            this.actualizarDisplay();
        }, 10)
    }

    reiniciarTemporizador() {
        this.ms = 0;
        this.s = 0;
        this.m = 0;
        this.h = 0;
        this.actualizarDisplay();
    }

    detenerTemporizador() {
        clearInterval(this.intervaloID)
    }

    agregarVuelta() {
        let li = document.createElement('li');
        if (this.h > 0) {
            li.innerText = `${this.h}:${this.m}:${this.s}`
        } else {
            li.innerText = `${this.m}:${this.s}.${this.ms}`
        }
        lista.appendChild(li);
    }

    mostrarControl(mostrar,control){
        if(mostrar){
            control.classList.remove('ocultar')
        }else{
            control.classList.add('ocultar')
        }
    }

    iniciar(){
        this.iniciarTemporizador();
        this.mostrarControl(false,control0);
        this.mostrarControl(true,control1);
    }

    detener(){
        this.detenerTemporizador();
        this.mostrarControl(false,control1);
        this.mostrarControl(true,control2);
    }

    continuar(){
        this.iniciarTemporizador();
        this.mostrarControl(false,control2);
        this.mostrarControl(true,control1);
    }

    reinicar(){
        this.reiniciarTemporizador();
        lista.innerHTML = ''
        this.mostrarControl(false,control2);
        this.mostrarControl(true,control0);
    }
};

export default temporizador