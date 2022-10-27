class Moto { 
    constructor(marca,potencia,combustivel){
        this.Marca=marca
        this.Potencia=potencia                                                                                                                                                                                                                                              
        this.Combustivel=combustivel
    
        
    }
    info(){
        console.log("Marca da Bicicleta" + this.Marca)
        console.log("Potencia" + this.Potencia)
        console.log("Tipo de combustível" + this.Combustivel)
        

        if(this.Marca==1){
            console.log("Marca da Moto: Honda")
        }
        
    }
}