class ListaCarro{
    constructor(lista){
        this.lista = (lista) ? [].concat(lista) : [];
    }
    adicionarCarro(carro){
        this.lista.push(carro);
    }
    editarCarro(_id){
        
    }
}