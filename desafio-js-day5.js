let hortFrut = [];
let laticinios = [];
let doces = [];
let limpeza = [];
let item = "";
let categoria = "";

let adicionarItens = "sim";
while(adicionarItens != "não"){
    adicionarItens = prompt("Você deseja adicionar um ítem na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarItens != "sim" && adicionarItens != "não") {
	alert(`Operação não reconhecida!`);
        adicionarItens = prompt("Você deseja adicionar um ítem na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarItens === "não"){
        break;
    }
	
    item = prompt("Qual ítem você deseja inserir?");
    categoria = prompt("Em qual categoria esse ítem se encaixa: 'hort frut', 'laticínios', 'doces' ou 'limpeza'?");
    if(categoria === 'hort frut'){
        hortFrut.push(item);
    } else if (categoria === 'laticínios'){
        laticinios.push(item);
    } else if (categoria === 'doces'){
        doces.push(item);
    } else if (categoria === 'limpeza'){
        limpeza.push(item);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de compras:\n  hortFrut: ${hortFrut}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  limpeza: ${limpeza}`);
