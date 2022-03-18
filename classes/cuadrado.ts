import { IFigura } from "../interfaces/figura";

export default class Cuadrado implements IFigura {
    lados: number;
    longitudLado: number;

    constructor(longitudLado: number) {
        this.lados = 4;
        this.longitudLado = longitudLado;
    }

    obtenerArea(): number {
        const area = this.longitudLado * this.longitudLado;
        return area;
    }

    obtenerPerimetro(): number {
        const perimetro = this.longitudLado * this.lados;
        return perimetro;
    }

}