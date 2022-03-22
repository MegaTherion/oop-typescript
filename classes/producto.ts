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

export interface ProductoGenerico {
    tamanio: string;
}

export class Agua implements ProductoGenerico {
    ph: number;
    tamanio: string;

    constructor(ph: number) {
        this.ph = ph;
        this.tamanio = 'Grande';
    }
}
export class Gaseosa implements ProductoGenerico {
    sabor: string;
    tamanio: string;
    
    constructor(sabor: string) {
        this.sabor = sabor;
        this.tamanio = 'Pequeña';
    }
    
}


/*
Tipos en Typescript:

string
number
bool
Array

*/
