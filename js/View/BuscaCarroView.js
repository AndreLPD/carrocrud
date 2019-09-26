class BuscaCarroView extends View{
    constructor($seletor){
        super($seletor);
    }
    getTemplate(model){
        return `
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Busque um carro">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="buttonBuscarCarro"><i class="fas fa-search"></i>Buscar</button>
        </div>
        </div>
        `;
    }
}