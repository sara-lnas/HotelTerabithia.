
var hotel;
var nomeUsuario;
var nomeHospede;
var escolha;
var diarias;
var valorDiaria;
var valorTotal;


nomeHotel();

function nomeHotel() {

  hotel = prompt('Informe o nome do Hotel');
    alert(`O nome do Hotel é: ${hotel}`);   
    login();
  }
  

function login() {

  nomeUsuario = prompt('Por favor, informe seu nome ');
  var senha = parseInt(prompt('Por favor, informe a sua senha: '));

  if (senha == 2678) {
    alert(`Bem vindo ao Hotel  ${hotel}, senhor(a) ${nomeUsuario}. É um imenso prazer ter você por aqui!`);
    inicio();
	  
   } else {
    alert('Senha incorreta, tente novamente.');
    login();
   }
  }
   

function inicio() {

  var escolha = parseInt(prompt('Olá, o que deseja? \n 1 - Reservar quarto \n 2 - Cadastrar hóspedes\n 3 - Cadastrar e pesquisar \n 4 - Eventos \n 5 - Buffet \n 6 - Auditório \n 7 - Reservar restaurante \n 8 - Abastecer o carro \n 9 - Orçamento de ar-condicionado \n 10 - Sair'));

	switch (escolha){
		case 1:
			reservarQuartos();
			break;

		case 2:
			cadastrarHospedes();
			break;

		case 3:
			cadastrarPesquisar();
			break;

		case 4:
			eventos();
			break;

		case 5:
			buffet();
			break;

		case 6:
			auditorio();
			break;

		case 7:
			restaurante(); 
			break;

		case 8:
			abastecerCarro();
			break;

		case 9:
			arCondicionado();
			break;

		case 10:
			sairDoSistema();
			break;

		default:
			erro();
		break;
	    }
  }


function reservarQuartos() {

	valorDiaria = 50;
	diarias =  parseFloat(prompt("Digite o valor de uma diária: "));
	
	if (diarias <= 0 || diarias > 30) {
		alert(`Valor Inválido, ${nomeUsuario}`);
		reservarQuartos();
    }

    valorTotal = valorDiaria * diarias;
       alert(`O valor total da hospedagem é R$ ${valorTotal}.`);

    nomeHospede = prompt('Qual o nome do hóspede?');

    var confirmacao = confirm(`${nomeUsuario}, você confirma a hospedagem para ${nomeHospede}, por ${diarias} dias?`);
    if (confirmacao) {
       alert(`${nomeUsuario}, reserva efetuada para ${nomeHospede}. O valor total foi de R$ ${valorTotal}.`);
	   inicio();
    
	} else {
		reservarQuartos();
		inicio();
    }
   }

   
function cadastrarHospedes() {

	var valorDiaria = 50;
	var gratuidade = 0;
	var meia = 0;
	var integral = 0;
	var valorTotal = 0;


	alert(`Hotel ${hotel} - cadastro de hóspedes`);

	while (true) {
		var nomehospedes = prompt(`Informe o nome do hóspede (para cancelar a ação, digite: PARE. )`);
		if (nomehospedes.toUpperCase() === "PARE") {
			break;
		}

		var idade = parseInt(prompt(`Informe a idade do hóspede: `));

		var valorhospedagem = 0;
		if (idade < 6) {
			alert(`${nomehospedes}, possui gratuidade. `);
			gratuidade++;

		} else if (idade > 60) {
			valorhospedagem = valorDiaria / 2;
			alert(`${nomehospedes}, possui meia entrada. `);
			meia++;
			
		} else {
			valorhospedagem = valorDiaria;
			alert(`${nomehospedes}, paga valor integral. `);
			integral++;
		}
		valorTotal += valorhospedagem;
		alert(`Hóspede ${nomehospedes}, valor pago: R$ ` + valorhospedagem.toFixed(2));

	   alert(`A quantidade de gratuidade é: ${gratuidade}. \nA quantidade de meia hospedagem é: ${meia}.\nA quantidade da hospedagem integral é: ${integral}. `);
	   
	   alert(`O valor total é ${valorTotal.toFixed(2)}`);
	   inicio()
	 
	}   
   }


function cadastrarPesquisar() {
 
	let hospedes = [];
	let opcao;

	while (opcao !== '4') {
		opcao = prompt("Selecione uma opção: \n1 - Cadastrar hóspedes\n2 - Pesquisar hóspedes\n3 - Listar hóspedes\n4 - Sair");

	switch (opcao) {
		case '1':
		   if (hospedes.length < 15) { 
		   const nome = prompt(`Informe o nome do Hóspede: `);
		   hospedes.push(nome);
			 alert(`Hóspede cadastrado com sucesso! `);
		   } else {
			 alert(`Máximo de cadastros atingidos. `);
		   }
		   break;
		
		case '2':
			const nomebusca = prompt(`Informe o hóspede que deseja encontrar: `);
			const hospedeEncontrado = hospedes.find(hospede => hospede === nomebusca);
			if (hospedeEncontrado) { 
			  alert(`Hóspede ${nomebusca}, se encontra na lista.`);
			} else {
			  alert(`Hóspede não encontrado. `);
			}
			break;
		
		case '3':
			let listaHospedes = '';
			hospedes.forEach(hospede => { listaHospedes += `${hospede}\n` });

			alert(listaHospedes);
			break;

		case '4':
			alert(`Deseja sair? `);
			break;

		default:
			alert(`Opção inválida, tente novamente! `);
			break;
		   }
	    }
         inicio();

	}


function eventos() {

    var valorGarcons = 10.50;
    var valorTotalEvento = '';
   
	var horasEvento = parseFloat(prompt(`Qual será a duração do evento? `));
    var quantidadeGarcom = parseInt(prompt('Quantos garçons serão necessários? '));
   
    var valorTotalEvento = valorGarcons * quantidadeGarcom * horasEvento;
      alert(`O valor total do evento é: R$${valorTotalEvento}.`);
	 
    var confirmacao = confirm(`${nomeUsuario}, você gostaria de efetuar a reserva? `);
 
    if (confirmacao) {
	  alert(`${nomeUsuario}, reserva efetuada com sucesso! O valor total foi de R$ ${valorTotalEvento}.`);
	  inicio();

    } else {
	  alert('Reserva não efetuada.');
	  inicio();
    }

  }


function buffet() {
	alert(`Hotel ${hotel} - Buffet do hotel`);

    var convidados = parseInt(prompt('Qual o número de convidados para o evento?'));
	if (convidados > 350) {
		alert('Quantidade de convidados superior à capacidade máxima.');
		inicio();

    } else {
	var cafe = 0.2 * convidados;
	var agua =  0.5 * convidados;
	var salgados = 7 * convidados;
	var valor_total = (cafe * 0.80) + (agua * 0.40) + ((salgados / 100) * 34);
	var confirmar = confirm(`O evento precisará de ${cafe} litros de café, ${agua} litros de água, ${salgados} salgados. O custo total do evento será de R$${valor_total} . Gostaria de efetuar a reserva? `);
	
	if (confirmar) {
	   alert(`${nomeUsuario}, reserva efetuada com sucesso!`);
	   inicio();
	
	} else { 
	   alert('Reserva não efutuada.');
	   inicio();
    }
   }
  }


function auditorio() {

	alert(`Hotel ${hotel} - Auditório do hotel`);

   var convidado = parseInt(prompt('Qual o número de convidados para o seu evento? '));
   const laranja = 150;

   if (convidado <= 0) {
     alert("Número de convidados inválido.");
	 auditorio()
   
    } else if (convidado > 350) {
	 alert("Quantidade de convidados superior à capacidade máxima.");
	 auditorio()

    } else if (convidado > 220) {
	 alert("Use o auditório Colorado.");

    } else if (convidado <= 150) {
	 alert("Use o auditório Laranja.");
 
    } else {
	var conta = convidado - laranja;
	 alert(`Use o auditório Laranja (inclua mais ${conta} cadeiras)`);

    }

	var confirmar = confirm("Gostaria de efetuar a reserva?");
	if (confirmar) {
		alert(`${nomeUsuario}, reserva efetuada com sucesso!`);
	} else {
		alert(`${nomeUsuario}, reserva não efetuada.`);
	}
    
	inicio()
  }


function restaurante() {

	alert(`Hotel ${hotel} - Reservar Restaurante`);
  
    var dia = prompt('Qual é o dia do evento? ');
    var hora = parseInt(prompt('Qual é a hora do evento? '));
	
	if (isNaN(hora)) {
	 alert('Digite um número válido');
	 restaurante();

    } else if (dia == 'Sábado' || 'Domingo') {
		
	if (hora >= 7 && hora <= 15) {

	var nome = prompt('Qual o nome da empresa? ');
	 alert(`Restaurante reservado para ${nome}. ${dia} às ${hora} hs. `);
	 inicio();

    }
    else {
	 alert('Restaurante indisponível')
	 restaurante();
    }

    } else if (dia == 'Segunda-feria' || dia == 'Terça-feira'|| dia == 'Quarta-feira' ||dia == 'Quinta-feira'||dia == 'Sexta-feira') {
	
	 if (hora >= 7 && hora <= 23) {

    nome = prompt('Qual o nome da empresa? ')
     alert(`Restaurante reservado ${nome}. ${dia} às ${hora} hs. `)
     inicio();

	} else {
	 alert("Restaurante indisponível")
	 restaurante();
    }

    }
  }


function abastecerCarro() {

    var gasolinaWayne = parseFloat(prompt("Qual o preço da gasolina no posto Wayne Oil?"));
    var alcoolWayne = parseFloat(prompt("Qual o preço do álcool no posto Wayne Oil?"));
    var gasolinaStark = parseFloat(prompt("Qual o preço da gasolina no posto Stark Petrol?"));
    var alcoolStark = parseFloat(prompt("Qual o preço do álcool no posto Stark Petrol?"));
			
    if (gasolinaWayne <= 0 || alcoolWayne <= 0 || gasolinaStark <= 0 || alcoolStark <= 0 || !gasolinaWayne || !alcoolWayne || !gasolinaStark || !alcoolStark) {
	   alert('Valor inválido, tente novamente.');
	   abastecerCarro();
    }

    const [totalgasolinaWayne, totalalcoolWayne, totalgasolinaStark, totalalcoolStark] = [gasolinaWayne * 42, alcoolWayne * 42, gasolinaStark * 42, alcoolStark * 42];
	var combustivel;

    if ((gasolinaWayne / alcoolWayne) <= 0.7 || (alcoolStark / gasolinaWayne) <= 0.7) {
	combustivel = 'álcool';

    } else {
	combustivel = 'gasolina';
    }

    var posto;
    if(totalgasolinaWayne + totalalcoolWayne <= totalgasolinaStark + totalalcoolStark) {
	posto = "Wayne Oil";

    } else {
	posto = 'Stark Petrol';
    }

    alert(`${nomeUsuario}, é mais barato abastecer com ${combustivel} no posto ${posto}`);
    inicio();

  }


function arCondicionado() {
   
	let empresa = prompt("Qual o nome da empresa?");
	let valor = parseFloat(prompt("Qual o valor por aparelho?"));
	let quantidade = parseInt(prompt("Qual a quantidade de aparelhos?"));
	let desconto = parseFloat(prompt("Qual a porcentagem de desconto?"));
	let quantidadeDesconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

	if (isNaN(valor)|| isNaN(quantidade) || isNaN(desconto)|| isNaN(quantidadeDesconto)) {
 
	  alert("Digite um número");
	  arCondicionado();
	}

	let menu = valor * quantidade;
	  nomesem.push(empresa);
 
	if (quantidade >= quantidadeDesconto){
 
		let conta = desconto * quantidade;
		var calculo = menu - conta
		preco.push(calculo);
		alert(`O serviço de ${empresa} custará R$ ${calculo}`)

	} else {
	  alert(`O serviço de ${empresa} custará R$ ${menu}`)
	  preco.push(menu);
	}

	var valor_min = Math.min(...preco);
   
	let confirma = prompt(`Deseja informar novos dados, ${nomeUsuario}? (S/N)`)
	if(confirma == 's' || confirma == 'S'){

    arCondicionado();
	} else {
	  let i = parseInt(valores.indexOf(valor_min));
	  alert(`O orçamento de menor valor é o ${nomesem[i]} por R$ ${valor_min}`)
	  inicio();
	}

  }
  

function sairDoSistema() {

    var confirmar = confirm('Você deseja sair?');

    if (confirmar) {
		alert(`Muito obrigado e até logo, ${nomeUsuario}!`);
        window.close();

    } else {
        inicio();
    }
  }

function erro() {
    alert('Valor inválido, informe um número entre 1 e 10');
    inicio();
  }








