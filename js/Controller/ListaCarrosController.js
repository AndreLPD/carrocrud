class ListaCarrosController{
    constructor(model,view){
        this.model = model;
        this.view = view;
    }
    adicionarCarro(nome,marca,placa,ano,cor){
        this.model.adicionarCarro(new Carro(nome,marca,placa,ano,cor));
        this.view.atualiza(this.model);
    }
    editarCarro(_id){
        console.log(_id);
    }
    
}