class CarroView extends View{
    constructor($seletor){
        super($seletor);
    }
    getTemplate(model){
        return `
        ${model.lista.map((carro,i) => `
        <tr>
        <th scope="row">${i}</th>
        <td>${carro.nome}</td>
        <td>${carro.marca}</td>
        <td>${carro.placa}</td>
        <td>${carro.ano}</td>
        <td>${carro.cor}</td>
        <td class="editar" value=${i}><a href="#">Editar</a></td>
        <td class="excluir" value=${i}><a href="#">Excluir</a></td>
        </tr>`)
        }
        `
    }
}