"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosService = void 0;
const common_1 = require("@nestjs/common");
const recado_entity_1 = require("./entities/recado.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pessoas_service_1 = require("../pessoas/pessoas.service");
let RecadosService = class RecadosService {
    recadoRepository;
    pessoasService;
    constructor(recadoRepository, pessoasService) {
        this.recadoRepository = recadoRepository;
        this.pessoasService = pessoasService;
    }
    throwNotFoundError() {
        throw new common_1.NotFoundException('Recado nao encontrado!');
    }
    async findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        const recados = await this.recadoRepository.find({
            take: limit,
            skip: offset,
            relations: ['de', 'para'],
            order: {
                id: 'desc',
            },
            select: {
                de: {
                    id: true,
                    nome: true,
                },
                para: {
                    id: true,
                    nome: true,
                },
            },
        });
        return recados;
    }
    async findOne(id) {
        const recado = await this.recadoRepository.findOne({
            where: { id },
            relations: ['de', 'para'],
            select: {
                de: {
                    id: true,
                    nome: true,
                },
                para: {
                    id: true,
                    nome: true,
                },
            },
        });
        if (!recado) {
            throw new common_1.NotFoundException('Recado nao encontrado');
        }
        return recado;
    }
    async create(createRecadoDto) {
        const { deId, paraId } = createRecadoDto;
        const de = await this.pessoasService.findOne(deId);
        const para = await this.pessoasService.findOne(paraId);
        const newRecado = {
            texto: createRecadoDto.texto,
            de: de,
            para: para,
            lido: false,
            data: new Date(),
        };
        const recado = this.recadoRepository.create(newRecado);
        await this.recadoRepository.save(recado);
        return {
            ...recado,
            de: {
                id: recado.de.id,
            },
            para: {
                id: recado.para.id,
            },
        };
    }
    async update(id, updateRecadoDto) {
        const recado = await this.findOne(id);
        recado.texto = updateRecadoDto?.texto ?? recado.texto;
        recado.lido = updateRecadoDto?.lido ?? recado.lido;
        return recado && (await this.recadoRepository.save(recado));
    }
    async remove(id) {
        const recado = await this.recadoRepository.findOneBy({ id });
        if (!recado)
            return this.throwNotFoundError();
        return this.recadoRepository.remove(recado);
    }
};
exports.RecadosService = RecadosService;
exports.RecadosService = RecadosService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.DEFAULT }),
    __param(0, (0, typeorm_1.InjectRepository)(recado_entity_1.Recado)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        pessoas_service_1.PessoasService])
], RecadosService);
//# sourceMappingURL=recados.service.js.map