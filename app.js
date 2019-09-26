let listaCarros = new ListaCarro();
let carroView = new CarroView(".lista-carros");
let formCarroView = new FormCarroView(".formAdicionarOuEditarCarro");
let buscaCarroView = new BuscaCarroView(".buscaCarros");
buscaCarroView.atualiza(listaCarros);

const novoCarro = document.querySelector("#novo-carro");
novoCarro.addEventListener("click", novoCarroForm);
function novoCarroForm(){
    novoCarro.disabled = true;
    formCarroView.atualiza();
    salvaCarro();
    cancelCarro();
}

function salvaCarro(){
    const salvarCarro = document.querySelector("#salvar-carro");
    salvarCarro.addEventListener("click", SalvarCarroForm);
    function SalvarCarroForm(){
        novoCarro.disabled = false;
        let inputs = document.querySelectorAll(".formAdicionarOuEditarCarro input");
        let carro = [];
        Array.prototype.forEach.call(inputs, function(input){
            carro.push(input.value);
        });
        let listaCarrosController = new ListaCarrosController(listaCarros,carroView);
        listaCarrosController.adicionarCarro(...carro);
    }
}

function cancelCarro(){
    let cancelaSalvarCarro = document.querySelector("#cancela-carro");
    cancelaSalvarCarro.addEventListener("click", CancelaCarro);
    function CancelaCarro(){
        novoCarro.disabled = false;
        limparForm(formCarroView);
    }
}

function limparForm(form){
    
}