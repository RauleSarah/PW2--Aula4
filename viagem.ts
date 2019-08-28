class Viagem{
    //nome : String;
   
    constructor( public TempoGasto:number,public VelocidadeMedia:number, public RendimentoVeiculo:number){
        
        
       }
    
       Distancia():number{
           return this.TempoGasto * this.VelocidadeMedia;
           
       }
       Consumo():number{
        return this.Distancia() / this.RendimentoVeiculo;
        
    }


    /*   exibir(){
           console.log("Tempo Gasto: " + this.TempoGasto)
       }
   */
   
    
   }
   
   /*let Rogerio = new Aluno ("Rogerio de Morais"){
       Rogerio.nome= "Rogerio e Morais";
   } */