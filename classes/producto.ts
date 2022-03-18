export default class Producto {
    precio: number;
    calidad: string;
    marca: string;
    nombre: string;

    constructor(precio: number, calidad: string, marca: string, nombre: string) {
        this.precio = precio;
        this.calidad = calidad;
        this.marca = marca;
        this.nombre = nombre;
    }

    mostrar() {
        console.log(`Producto: ${this.nombre}. Precio: ${this.precio}. Marca: ${this.marca}. Calidad: ${this.calidad}`);
    }
}

/*
Tipos en Typescript:

string
number
bool
Array

*/
