let qntdCarta;
let jogadas = 0;
let cartaCerta = 0;

while (true) {
    qntdCarta = prompt('Quantidade de cartas');
    if (qntdCarta <= 14 && qntdCarta >= 4 && qntdCarta % 2 === 0) {
        break;
    }
}

qntdCarta = Number(qntdCarta);



let papagaios = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];

let papaga = [];
for (i=0;i<qntdCarta/2;i++){
    papaga.push(papagaios[i]);
    papaga.push(papagaios[i]);
}


papaga.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

////console.log(papaga)

const cartas = document.querySelector('.cartas');
cartas.innerHTML = '';
for (i=0; i<papaga.length;i++){
    //console.log(i);
    cartas.innerHTML += `<div data-test="card" class="papa" id="${i}" onclick="viraCarta(this)"><div class="back face"><img data-test="face-down-image" src="./images/back.png" alt=""></div><div class="front face"><img class="carta" data-test="face-up-image" src="./images/${papaga[i]}" alt=""></div></div>`;
}





let carta1 = null;
let carta2 = null;
let idc1 = null;
let idc2 = null;

function viraCarta(carta) {
    //acabou();
    if (carta1 != null && carta2 != null) {
        //console.log('É indefinido poq ja tem 2 cartas em jogo');
        return undefined;
    }

    //console.log('oxi inicial');

    //ID IDENTIFICADOR DE CADA CARTA
    let aid = carta.getAttribute('id')
    if (idc1 === null) {
        idc1 = aid;
    }
    else if (idc2 === null) {
        idc2 = aid;
    }
    //console.log(`aid c1: ${idc1}`);
    //console.log(`aid c2: ${idc2}`);

    if (idc1 == idc2) {
        idc2 = null;
        return null;
    }

    
    
    if (carta1 != null && carta2 != null) {
        return null;
    }
    if (carta1 === null && carta2 == null) {
        carta1 = carta;
        carta.classList.add('flip');
        jogadas ++;
    }
    else {
        carta2 = carta;
        carta2.classList.add('flip');
        jogadas ++;
        
    }
    setTimeout(verificaPar, 1500, carta1, carta2);

    //if (carta != null)
    //console.log('oxi');

    
}

function verificaPar(c1=null, c2=null) {
    if (c1 === null || c2 === null){
        return undefined;
    }
    //verificar se o segundo elemento imagem das duas é igual
    let gmi1 = c1.lastElementChild.firstElementChild;
    gmi1 = gmi1.getAttribute('src');
    let gmi2 = c2.lastElementChild.firstElementChild;
    gmi2 = gmi2.getAttribute('src');
    //console.log(gmi1);
    //console.log(gmi2);
    if (gmi1 === gmi2) {
        cartaCerta ++;
        cartaCerta ++;
        carta1.removeAttribute('onclick');
        carta2.removeAttribute('onclick');
        carta1 = null;
        carta2 = null;
        idc1 = null;
        idc2 = null;
        //return alert('É par!!');
        //alert(`${qntdCarta}, ${cartaCerta}`);
        //console.log('acabou');
        if (cartaCerta === qntdCarta) {
            //console.log('RETORNA TRUE');
            alert(`Você ganhou em ${jogadas} jogadas!`)
        }
    }

    if (gmi1 != gmi2) {
        desviraCarta(carta1, carta2);
        carta1 = null;
        carta2 = null;
        idc1 = null;
        idc2 = null;
    }
}

function desviraCarta(carta1, carta2) {
    carta1.classList.remove('flip');
    carta2.classList.remove('flip');
}
