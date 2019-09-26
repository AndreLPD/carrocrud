class FormCarroView extends View{
    constructor($seletor){
        super($seletor);
    }
    getTemplate(){
        return `
            <div class="form-group">
                <label for="">Nome</label>
                <input type="text" name="nome" value="">
            </div>
            <div class="form-group">
                <label for="">Marca</label>
                <input type="text" name="marca" value="">
            </div>
            <div class="form-group">
                <label for="">Placa</label>
                <input type="text" name="placa" value="">
            </div>
            <div class="form-group">
                <label for="">Ano</label>
                <input type="number" name="ano" value="">
            </div>
            <div class="form-group">
                <label for="">Cor</label>
                <input type="text" name="cor" value="">
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary" id="salvar-carro">Salvar</button>
                <button type="button" class="btn btn-danger" id="cancela-carro">Cancelar</button>
            </div>        
      `
    }
}