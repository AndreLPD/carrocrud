class View {
    constructor($seletor){
        this.$seletor = document.querySelector($seletor);
    }
    atualiza(model){
        this.$seletor.innerHTML = this.getTemplate(model);
    }
}