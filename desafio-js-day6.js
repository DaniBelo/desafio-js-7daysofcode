let hortFrut = [];
let laticinios = [];
let doces = [];
let limpeza = [];
let item = "";
let categoria = "";
let remover = "";

let adicionarItens = "sim"; 
while(adicionarItens != "não"){
    if(hortFrut.length === 0 && laticinios.length === 0 && doces.length === 0 && limpeza.length === 0){
        adicionarItens = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        adicionarItens = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
	
    while (adicionarItens != "sim" && adicionarItens != "não" && adicionarItens != "remover") {  
	alert(`Operação não reconhecida!`);
        adicionarItens = prompt("Você deseja adicionar um item na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarItens === "não"){  
	break;
    }
	
    if(adicionarItens === "sim"){
        item = prompt("Qual item você deseja inserir?");
        categoria = prompt("Em qual categoria esse item se encaixa: 'hort frut', 'laticínios', 'doces' ou 'limpeza'?");
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
    } else if(adicionarItens === "remover"){
	if(hortFrut.length === 0 && laticinios.length === 0 && doces.length === 0 && limpeza.length === 0){  //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
		alert(`A lista está vazia!`);
	} else {  //se a lista não estiver vazia
		remover = prompt(`Lista de compras:\n  Hort Frut: ${hortFrut}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Limpeza: ${limpeza}\n\nQual produto você deseja remover?`);
		if(hortFrut.indexOf(remover) != -1){
			hortFrut.splice(hortFrut.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (limpeza.indexOf(remover) != -1){
			limpeza.splice(limpeza.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Hort Frut: ${hortFrut}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Limpeza: ${limpeza}`);