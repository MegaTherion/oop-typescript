import { IFigura } from "../interfaces/figura";

export default class Triangulo implements IFigura {
    lados: number;
    longitudLado: number;

    constructor(longitudLado: number) {
        this.lados = 3;
        this.longitudLado = longitudLado;
    }

    obtenerArea(): number {
        const area = this.longitudLado * this.longitudLado * Math.sqrt(3) / 4;
        return area;
    }

    obtenerPerimetro(): number {
        const perimetro = this.longitudLado * this.lados;
        return perimetro;
    }
}