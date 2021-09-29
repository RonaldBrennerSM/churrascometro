// MODAL
function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add("mostrar")
        modal.addEventListener("click", (e) => {
            if(e.target.id == modalID || e.target.id == "fechar"){
                modal.classList.remove("mostrar")
            }
        })
    }
}

const logo = document.querySelector(".buttonModal");
buttonModal.addEventListener("click", () => iniciaModal("modalCalc"));

// RESULTADO
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdTotalCerveja = cervejaPP(duracao) * adultos;
    let qdTotalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);



    resultado.innerHTML = `<p> <img src="assets/carne.svg" width="25px" heigh="10px"> ${qdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p> <img src="assets/cerveja.svg" width="25px"> ${Math.ceil(qdTotalCerveja / 355)} Latas de ceverja</p>`
    resultado.innerHTML += `<p><img src="assets/refri.svg" width="25px"> ${Math.ceil(qdTotalbebidas / 2000)} Pet's de 2 litros</p>`
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}