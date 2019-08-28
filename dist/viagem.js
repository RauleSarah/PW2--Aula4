var Viagem = /** @class */ (function () {
    //nome : String;
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
/*let Rogerio = new Aluno ("Rogerio de Morais"){
    Rogerio.nome= "Rogerio e Morais";
} */ 
