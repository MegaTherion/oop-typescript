"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cuadrado_1 = __importDefault(require("./classes/cuadrado"));
const producto_1 = __importDefault(require("./classes/producto"));
const triangulo_1 = __importDefault(require("./classes/triangulo"));
const p1 = new producto_1.default(4.5, 'Buena', 'Sony', 'Walkman');
const p2 = new producto_1.default(8.0, 'Buena', 'Sony', 'PlayStation');
p1.mostrar();
p2.mostrar();
const miCuadrado = new cuadrado_1.default(6);
console.log(`El area es ${miCuadrado.obtenerArea()}`);
console.log(`El perimetro es ${miCuadrado.obtenerPerimetro()}`);
const unTriangulo = new triangulo_1.default(5);
console.log(`El area del triangulo es ${unTriangulo.obtenerArea()}`);
console.log(`El perimetro del triangulo es ${unTriangulo.obtenerPerimetro()}`);
