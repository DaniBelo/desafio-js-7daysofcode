const numeroMaximo = 10;
const numeroMinimo = 0;

const numeroAleatorio = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt(`Tente adivinhar o número de ${numeroMinimo} a ${numeroMaximo}:`);
    if(chute == numeroAleatorio){
        alert(`Êeeh, você acertou! O número era ${numeroAleatorio}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Aaah, dessa vez você não acertou. O número era ${numeroAleatorio}!`);
}