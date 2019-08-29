"use strict";
exports.__esModule = true;
var Parking = /** @class */ (function () {
    function Parking(qtdHoras, valorHora, horaAdicional) {
        this.qtdHoras = qtdHoras;
        this.valorHora = valorHora;
        this.horaAdicional = horaAdicional;
    }
    Parking.prototype.total = function () {
        return this.valorHora + this.horaAdicional * (this.qtdHoras - 1);
    };
    return Parking;
}());
exports.Parking = Parking;
