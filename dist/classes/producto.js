"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor(precio, calidad, marca, nombre) {
        this.precio = precio;
        this.calidad = calidad;
        this.marca = marca;
        this.nombre = nombre;
    }
    mostrar() {
        console.log(`Producto: ${this.nombre}. Precio: ${this.precio}. Marca: ${this.marca}. Calidad: ${this.calidad}`);
    }
}
exports.default = Producto;
/*
Tipos en Typescript:

string
number
bool
Array

*/
