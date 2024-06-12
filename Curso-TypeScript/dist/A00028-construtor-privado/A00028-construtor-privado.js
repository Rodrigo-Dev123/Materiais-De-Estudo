"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    constructor(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    connect() {
        console.log(`conectado: ${this.host}, ${this.user}, ${this.password}`);
    }
    static getDatabase(host, user, password) {
        if (Database.database) {
            console.log('Retornando instancia já criada.');
            return Database.database;
        }
        console.log('Criando nova instância .');
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}
exports.Database = Database;
const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();
const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();
const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();
console.log(db1 === db2);
//# sourceMappingURL=A00028-construtor-privado.js.map