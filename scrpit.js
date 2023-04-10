while (true) {
    let qntdCarta = prompt('Quantidade de cartas');
    if (qntdCarta <= 14 && qntdCarta >= 4 && qntdCarta % 2 === 0) {
        break;
    }
}


const papagaios = ['bobrossparrot.gi', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];


let carta1 = null;
let carta2 = null;
let idc1 = null;
let idc2 = null;

function viraCarta(carta) {
    if (carta1 != null && carta2 != null) {
        console.log('É indefinido poq ja tem 2 cartas em jogo');
        return undefined;
    }

    console.log('oxi inicial');

    //ID IDENTIFICADOR DE CADA CARTA
    let aid = carta.getAttribute('id')
    if (idc1 === null) {
        idc1 = aid;
    }
    else if (idc2 === null) {
        idc2 = aid;
    }
    console.log(`aid c1: ${idc1}`);
    console.log(`aid c2: ${idc2}`);

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
    }
    else {
        carta2 = carta;
        carta2.classList.add('flip');
        
    }
    setTimeout(verificaPar, 1500, carta1, carta2);
    //if (carta != null)
    console.log('oxi');
    
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
    console.log(gmi1);
    console.log(gmi2);
    if (gmi1 === gmi2) {
        carta1.removeAttribute('onclick');
        carta2.removeAttribute('onclick');
        carta1 = null;
        carta2 = null;
        idc1 = null;
        idc2 = null;
        //return alert('É par!!');
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