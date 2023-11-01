import temporizador from "./temporizador.js"

export const display = document.getElementById('display')
export const lista = document.getElementById('lista')

// Grupo de botones
export const control0 = document.getElementById('control-0')
export const control1 = document.getElementById('control-1')
export const control2 = document.getElementById('control-2')

const iniciar = document.getElementById('iniciar')
const reiniciar = document.getElementById('reiniciar')
const continuar = document.getElementById('continuar')
const detener = document.getElementById('detener')
const vuelta = document.getElementById('vuelta')

const tiempo = new temporizador;

iniciar.addEventListener('click',()=>{tiempo.iniciar()})

reiniciar.addEventListener('click',()=>{tiempo.reinicar()})
continuar.addEventListener('click',()=>{tiempo.continuar()})

detener.addEventListener('click',()=>{tiempo.detener()})
vuelta.addEventListener('click',()=>{tiempo.agregarVuelta()})