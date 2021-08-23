//Carne - 500 gr por pessoa / se o evento durar mais de 4 horas são 1000 gr
// Cerveja - 2100 ml por pessoa / + de 4 horas são 4200 ml
// Refrigerante/suco - 1000 ml por pessoa / + de 4 horas 1500 ml

//Crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = (inputAdultos.value);
    let criancas = (inputCriancas.value);
    let duracao = (inputDuracao.value);

    let qdtTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qdtTotalBebidas = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>` 
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 350)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Refrigerante</p>`

}


function carnePorPessoa(duracao){
    if (duracao >= 4) {
        return 1000;
    } else{
        return 500;
    } 
}

function cervejaPorPessoa(duracao){
    if (duracao >= 4) {
        return 4200;
    } else{
        return 2100;
    } 
}

function bebidaPorPessoa(duracao){
    if (duracao >=4) {
        return 1500;
    } else {
        return 1000;
    }
    
}