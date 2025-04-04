"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosService = void 0;
const common_1 = require("@nestjs/common");
let RecadosService = class RecadosService {
    lastId = 1;
    recados = [
        {
            id: 1,
            texto: 'Este é um recado de teste',
            de: 'Fulano',
            para: 'Ciclano',
            lido: false,
            data: new Date(),
        },
    ];
    throwNotFoundError() {
        throw new common_1.NotFoundException('Recado nao encontrado');
    }
    findAll() {
        return this.recados;
    }
    findOne(id) {
        const recado = this.recados.find(recado => recado.id === Number(id));
        if (recado)
            return recado;
        this.throwNotFoundError();
    }
    create(createRecadoDto) {
        this.lastId++;
        const id = this.lastId;
        const newRecado = {
            id,
            ...createRecadoDto,
            lido: false,
            data: new Date(),
        };
        this.recados.push(newRecado);
        return newRecado;
    }
    update(id, updateRecadoDto) {
        const recadoExistenteIndex = this.recados.findIndex(recado => recado.id === Number(id));
        if (recadoExistenteIndex < 0) {
            this.throwNotFoundError();
        }
        if (recadoExistenteIndex >= 0) {
            const recadoExistente = this.recados[recadoExistenteIndex];
            this.recados[recadoExistenteIndex] = {
                ...recadoExistente,
                ...updateRecadoDto,
            };
        }
        return this.recados[recadoExistenteIndex];
    }
    remove(id) {
        const recadoExistenteIndex = this.recados.findIndex(recado => recado.id === Number(id));
        if (recadoExistenteIndex < 0) {
            this.throwNotFoundError();
        }
        const recado = this.recados[recadoExistenteIndex];
        this.recados.splice(recadoExistenteIndex, 1);
        return recado;
    }
};
exports.RecadosService = RecadosService;
exports.RecadosService = RecadosService = __decorate([
    (0, common_1.Injectable)()
], RecadosService);
//# sourceMappingURL=recados.service.js.map