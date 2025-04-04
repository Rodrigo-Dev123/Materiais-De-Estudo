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
exports.RecadosController = void 0;
const common_1 = require("@nestjs/common");
const recados_service_1 = require("./recados.service");
const create_recado_tdo_1 = require("./dto/create-recado.tdo");
const update_recado_tdo_1 = require("./dto/update-recado.tdo");
let RecadosController = class RecadosController {
    recadosService;
    constructor(recadosService) {
        this.recadosService = recadosService;
    }
    findAll(pagination) {
        const { limit = 10, offset = 0 } = pagination;
        return this.recadosService.findAll();
    }
    findOne(id) {
        return this.recadosService.findOne(id);
    }
    create(createRecadoDto) {
        return this.recadosService.create(createRecadoDto);
    }
    update(id, updateRecadoDto) {
        return this.recadosService.update(id, updateRecadoDto);
    }
    remove(id) {
        return this.recadosService.remove(id);
    }
};
exports.RecadosController = RecadosController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecadosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecadosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recado_tdo_1.CreateRecadoTdo]),
    __metadata("design:returntype", void 0)
], RecadosController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_recado_tdo_1.UpdateRecadoDto]),
    __metadata("design:returntype", void 0)
], RecadosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecadosController.prototype, "remove", null);
exports.RecadosController = RecadosController = __decorate([
    (0, common_1.Controller)('recados'),
    __metadata("design:paramtypes", [recados_service_1.RecadosService])
], RecadosController);
//# sourceMappingURL=recados.controller.js.map