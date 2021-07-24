//Carne - 400 gr por pessoa / se o evento durar mais de 6 horas são 650 gr
// Cerveja - 1200 ml por pessoa / + de 6 horas são 2000 ml
// Refrigerante/suco - 1000 ml por pessoa / + de 6 horas 1500 ml

//Crianças valem po 0,5


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
    if (duracao >= 6) {
        return 650;
    } else{
        return 400;
    } 
}

function cervejaPorPessoa(duracao){
    if (duracao >= 6) {
        return 2000;
    } else{
        return 1200;
    } 
}

function bebidaPorPessoa(duracao){
    if (duracao >=6) {
        return 1500;
    } else {
        return 1000;
    }
    
}