export class Singleton {
    private static instancia: Singleton;

    private contador: number;
    
    private constructor() {
        this.contador = 0;
    }

    public static getInstancia(): Singleton {
        if (!Singleton.instancia) {
            Singleton.instancia = new Singleton();
        }
        return Singleton.instancia;
    }

    incrementarContador() {
        this.contador ++;
        console.log(`El contador ahora es ${this.contador}`);
    }

}