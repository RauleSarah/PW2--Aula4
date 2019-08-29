 export class Parking{

   
    constructor( public qtdHoras:number,public valorHora:number, public horaAdicional:number){
        
        
       }
    
       total():number{
           return this.valorHora + this.horaAdicional * (this.qtdHoras -1);
           
       }
   }
   
