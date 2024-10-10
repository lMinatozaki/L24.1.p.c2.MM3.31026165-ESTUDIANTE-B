import Cl_estudiante from './Cl_estudiante.js';

export default class Cl_deportista extends Cl_estudiante {
    constructor(nombre, acumuladoNotas, cantidadMaterias, deporte, edad) {
        super(nombre, acumuladoNotas, cantidadMaterias);
        this.deporte = deporte;
        this.edad = edad;
    }

    esAdmitido() {
        const promedio = this.promedio();
        if (this.deporte === 1) { 
            if (promedio > 14 && this.edad >= 21) {
                return 'admitido en béisbol';
            } else {
                return 'no es admitido en béisbol';
            }   
        } else if (this.deporte === 2) { 
            if (promedio >= 12 && this.edad >= 19) {
                return 'admitido en fútbol';
            } else {
                return 'no es admitido en fútbol';
            }
        } else {
        return 'deporte no válido';
        }
    }
}