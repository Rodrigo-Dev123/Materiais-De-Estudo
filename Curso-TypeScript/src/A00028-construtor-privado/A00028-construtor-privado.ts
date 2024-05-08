// Singleton - GoF | Factory method - Gof
export class Database {
  private static database: Database;

  private constructor(
    // O constructor privado só permite usar o (new) dentro da classe
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instancia já criada.');
      return Database.database;
    }
    console.log('Criando nova instância .');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

console.log(db1 === db2);
