export default class ConnectionDb {
    private host: string;
    private database: string;
    private user: string;
    private password: string;

    private static instancia: ConnectionDb;

    private constructor(host: string, database: string, user: string, password: string) {
        this.host = host;
        this.database = database;
        this.user = user;
        this.password = password;
    }

    public static obtenerInstancia(): ConnectionDb {
        if (!ConnectionDb.instancia) {
            ConnectionDb.instancia = new ConnectionDb(
                '127.0.0.1',
                'productosDb',
                'pruebasingleton',
                '4b5er45g23d5e'
                );
        }
        return ConnectionDb.instancia;
    }

    public connect(): void {
        console.log('Base de datos conectada');
    }
}