var jogadas = document.querySelector(".perso-infos1");
var infos = document.querySelector(".info-text");

var type = prompt("Qual personagem vc deseja? (entre Mago e Guerreiro)");

class Mago{
    constructor(nome,mana, vida, defesa){
        this.nome = nome;
        this.mana = mana;
        this.vida = vida;
        this.defesa = defesa;
    }
}

class Guerreiro{
    constructor(nome,mana, vida, defesa){
        this.nome = nome;
        this.mana = mana;
        this.vida = vida;
        this.defesa = defesa;
    }
}



//var corpo = document.querySelector(".mg");

var pos = 0;

function andaesq(){
    let id = null;

    clearInterval(id);
    id = setInterval(frame, 5);

    function frame(){
        if(pos === 0){
            pos = 0
        }else{
            pos--;
            corpo.style.right = pos + "px"
        }
       
    }
}

function andadir(){
    let id = null;


    clearInterval(id);
    id = setInterval(frame, 5);

    function frame(){
        if(pos === 1200){
            pos = 1200
        }else{
            pos++;
            corpo.style.left = pos + "px"
        } 
    }
}

if(type == "Guerreiro" || type == "guerreiro"){
    var p1 = new Guerreiro(prompt("Digite seu nome"),50, 100, 10);
} else if(type == "Mago" || type == "mago"){
    var p1 = new Mago(prompt("Digite seu nome"),30, 100, 70);
} else {
    alert("nada")
}




var dadosP = ["Nome: "+p1.nome, "Tipo de personagem:  " + type, "Vida: " + p1.vida , "Defesa: " + p1.defesa];
 
for(let i = 0; i < dadosP.length; i++){
    let dados = document.createElement("p");
    dados.append(dadosP[i]);
    infos.appendChild(dados);
}