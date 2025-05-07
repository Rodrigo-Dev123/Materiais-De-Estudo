"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosModule = void 0;
const common_1 = require("@nestjs/common");
const recados_controller_1 = require("./recados.controller");
const recados_service_1 = require("./recados.service");
const typeorm_1 = require("@nestjs/typeorm");
const recado_entity_1 = require("./entities/recado.entity");
const pessoas_module_1 = require("../pessoas/pessoas.module");
const racados_utils_1 = require("./racados.utils");
const server_name_constants_1 = require("../common/constants/server-name.constants");
const regex_protocol_1 = require("../common/regex/regex.protocol");
const remove_spaces_regex_1 = require("../common/regex/remove-spaces.regex");
const only_lowercase_letters_regex_1 = require("../common/regex/only-lowercase-letters.regex");
let RecadosModule = class RecadosModule {
};
exports.RecadosModule = RecadosModule;
exports.RecadosModule = RecadosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([recado_entity_1.Recado]), pessoas_module_1.PessoasModule],
        controllers: [recados_controller_1.RecadosController],
        providers: [
            recados_service_1.RecadosService,
            {
                provide: racados_utils_1.RecadosUtils,
                useValue: new racados_utils_1.RecadosUtilsMock(),
            },
            {
                provide: server_name_constants_1.SERVER_NAME,
                useValue: 'My Name Is NestJS',
            },
            {
                provide: regex_protocol_1.RegexProtocal,
                useClass: 1 === 1 ? remove_spaces_regex_1.RemoveSpacesRegex : only_lowercase_letters_regex_1.OnlyLowercaseLettersRegex,
            },
        ],
        exports: [racados_utils_1.RecadosUtils, server_name_constants_1.SERVER_NAME],
    })
], RecadosModule);
//# sourceMappingURL=recados.module.js.map