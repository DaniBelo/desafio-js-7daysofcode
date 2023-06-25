function fazerPergunta(pergunta) {
    return prompt(pergunta);
}

function mostrarEscolha(escolha) {
  console.log(`Você escolheu: ${escolha}\n`);
  alert(`Você escolheu: ${escolha}\n`);
}

function mostrarEspecializacao(area) {
  console.log(`Você decidiu se especializar em ${area}!\n`);
  alert(`Você decidiu se especializar em ${area}!\n`);
}

async function jogarJogo() {
  let areaEValida = false;
  while (!areaEValida){

      const area = await fazerPergunta('Você quer seguir para a área de Front-End(1) ou Back-End(2)? ');
    
      if (area === '1') {
        areaEValida = true;
        mostrarEscolha('Front-End');
    
        frameworkEValido = false;
        while (!frameworkEValido) {
            const framework = await fazerPergunta('Você quer aprender React(1) ou Vue(2)? ');
            if (framework === '1') {
                mostrarEscolha('React');
                frameworkEValido = true;
            } else if (framework === '2') {
                mostrarEscolha('Vue');
                frameworkEValido = true;
            } else {
                alert('Opção inválida!');
                console.log('Opção inválida!');
            }
        }
    
        let especializacaoEValida = false;
        while (!especializacaoEValida){
            const especializacao = await fazerPergunta('Você quer se especializar em Front-End(1) ou se tornar Fullstack(2)? ');
        
            if (especializacao === '1') {
              mostrarEspecializacao('Front-End');
              especializacaoEValida = true;
            } else if (especializacao === '2') {
              mostrarEspecializacao('Fullstack');
              especializacaoEValida = true;
            } else {
                alert('Opção inválida!');
                console.log('Opção inválida!');
            }
        }
      } else if (area === '2') {
        areaEValida = true;
        mostrarEscolha('Back-End');
    
        linguagemEValida = false;
        while (!linguagemEValida) {
            const linguagem = await fazerPergunta('Você quer aprender C#(1) ou Java(2)? ');
            if (linguagem === '1') {
                mostrarEscolha('C#');
                linguagemEValida = true;
            } else if (linguagem === '2') {
                mostrarEscolha('Java');
                linguagemEValida = true;
            } else {
                alert('Opção inválida!');
                console.log('Opção inválida!');
            }
        }
    
        let especializacaoEValida = false;
        while (!especializacaoEValida){
    
            const especializacao = await fazerPergunta('Você quer se especializar em Back-End(1) ou se tornar Fullstack(2)? ');
        
            if (especializacao === '1') {
              mostrarEspecializacao('Back-End');
              especializacaoEValida = true;
            } else if (especializacao === '2') {
              mostrarEspecializacao('Fullstack');
              especializacaoEValida = true;
            } else {
                alert('Opção inválida!');
                console.log('Opção inválida!');
            }
        }
      } else {
        alert('Opção inválida!');
        console.log('Opção inválida!');
      }
  }

  let maisTecnologias = true;

  while (maisTecnologias) {
    const tecnologia = await fazerPergunta('Qual tecnologia você gostaria de aprender? ');

    alert(`Você inseriu ${tecnologia}.\n`);
    console.log(`Você inseriu ${tecnologia}.\n`);
    alert(`${tecnologia} é uma ótima escolha para se aprofundar!\n`);
    console.log(`${tecnologia} é uma ótima escolha para se aprofundar!\n`);

    const resposta = await fazerPergunta('Tem mais alguma tecnologia que você gostaria de aprender? (s/n) ');

    if (resposta.toLowerCase() !== 's') {
      maisTecnologias = false;
    }
  }

  alert('Obrigado por jogar!');
  console.log('Obrigado por jogar!');
}

jogarJogo();
