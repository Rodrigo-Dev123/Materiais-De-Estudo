"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRecadoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_recado_tdo_1 = require("./create-recado.tdo");
class UpdateRecadoDto extends (0, mapped_types_1.PartialType)(create_recado_tdo_1.CreateRecadoTdo) {
}
exports.UpdateRecadoDto = UpdateRecadoDto;
//# sourceMappingURL=update-recado.tdo.js.map