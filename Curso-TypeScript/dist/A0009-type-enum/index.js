"use strict";
var Cores;
(function (Cores) {
    Cores[Cores["VERMELHO"] = 10] = "VERMELHO";
})(Cores || (Cores = {}));
(function (Cores) {
    Cores[Cores["AZUL"] = 100] = "AZUL";
    Cores[Cores["AMARELO"] = 200] = "AMARELO";
    Cores["ROXO"] = "ROXO";
})(Cores || (Cores = {}));
function escolhaAcor(cor) {
    console.log(Cores[cor]);
}
//# sourceMappingURL=index.js.map