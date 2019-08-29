"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem(TempoGasto, VelocidadeMedia, RendimentoVeiculo) {
        this.TempoGasto = TempoGasto;
        this.VelocidadeMedia = VelocidadeMedia;
        this.RendimentoVeiculo = RendimentoVeiculo;
    }
    Viagem.prototype.Distancia = function () {
        return this.TempoGasto * this.VelocidadeMedia;
    };
    Viagem.prototype.Consumo = function () {
        return this.Distancia() / this.RendimentoVeiculo;
    };
    return Viagem;
}());
exports.Viagem = Viagem;
