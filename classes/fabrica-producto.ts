import { Agua, Gaseosa, ProductoGenerico } from "./producto";

export abstract class FabricaProducto {
    abstract crearProducto(): ProductoGenerico;
}

export class FabricaAgua extends FabricaProducto {

    crearProducto(): Agua {
        const p = new Agua(7);
        return p;
    }

}

export class FabricaGaseosa extends FabricaProducto {
    crearProducto(): Gaseosa {
        const p = new Gaseosa('Papaya');
        return p;
    }
}