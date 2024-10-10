/**
 * ESTUDIANTE-B
    El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
    Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
    Un estudiante deportista es admitido en el equipo universitario de beisbol si su promedio de
    notas es superior a 14 y tiene más de 21 años; para el equipo de fútbol ingresa con 19 años y
    promedio mínimo de 12 (1=beisbol - 2=fútbol).
    Diseñe las clases Cl_estudiante y Cl_deportista, usando herencia, de manera que procese un
    estudiante y reporte si es admitido en el equipo que solicita.
 */

import Cl_deportista from './Cl_deportista.js';

export default class Cl_main {
    constructor() {
    const estudiante1 = new Cl_deportista('Juan', 132, 8, 1, 21);
    const estudiante2 = new Cl_deportista('Félix', 110, 10, 2, 20);

    const salida = document.getElementById('salida');
    salida.innerHTML = `
        Nombre del estudiante: ${estudiante1.nombre}
        <br>
        Acumulado de notas: ${estudiante1.acumuladoNotas}
        <br>
        Cantidad de materias: ${estudiante1.cantidadMaterias}
        <br>
        Deporte (1=beisbol - 2=fútbol): ${estudiante1.deporte}
        <br>
        Edad: ${estudiante1.edad}
        <br>
        Nota promedio: ${estudiante1.promedio().toFixed(2)}
        <br>
        ${estudiante1.nombre} ${estudiante1.esAdmitido()}
        <br>

        <br>
        Nombre del estudiante: ${estudiante2.nombre}
        <br>
        Acumulado de notas: ${estudiante2.acumuladoNotas}
        <br>
        Cantidad de materias: ${estudiante2.cantidadMaterias}
        <br>
        Deporte (1=beisbol - 2=fútbol): ${estudiante2.deporte}
        <br>
        Edad: ${estudiante2.edad}<br>
        Nota promedio: ${estudiante2.promedio().toFixed(2)}
        <br>
        ${estudiante2.nombre} ${estudiante2.esAdmitido()}
    `;
    }
}