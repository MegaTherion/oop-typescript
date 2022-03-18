import Cuadrado from "./classes/cuadrado";
import Producto from "./classes/producto";
import Triangulo from "./classes/triangulo";

const p1 = new Producto(4.5, 'Buena', 'Sony', 'Walkman');
const p2 = new Producto(8.0, 'Buena', 'Sony', 'PlayStation');


p1.mostrar();
p2.mostrar();

const miCuadrado = new Cuadrado(6);
console.log(`El area es ${miCuadrado.obtenerArea()}`);
console.log(`El perimetro es ${miCuadrado.obtenerPerimetro()}`);

const unTriangulo = new Triangulo(5);
console.log(`El area del triangulo es ${unTriangulo.obtenerArea()}`);
console.log(`El perimetro del triangulo es ${unTriangulo.obtenerPerimetro()}`);
