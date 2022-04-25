//Boas Vindas ao cliente
alert(`Bem vindo ao novo sistema de pedidos!`);

//Recebendo o nome do cliente
var nomeCliente;
if(nomeCliente = prompt(`Informe seu nome:`)){
    alert(`${nomeCliente}, faça cadastro para continuar!`);
}
while(nomeCliente == ""){
    alert(`Você ainda não informou seu nome!`);
    if(nomeCliente = prompt(`Informe seu nome para continuar:`)){
    break;
    }
}

//CADASTRO
var nomeUsuario = prompt(`Crie seu nome de usuário:`);
while(nomeUsuario == ""){
    alert(`Você ainda não criou seu nome de usuário!`);
    if(nomeUsuario = prompt(`Crie seu nome de usuário para continuar:`)){
    break;
    }
}

var senhaUsuario;
if(senhaUsuario = prompt(`Crie sua senha:`)){
    alert(`Você já pode fazer cadastro!`);
}
while(senhaUsuario == ""){
    alert(`Você ainda não criou sua senha!`);
    if(senhaUsuario = prompt(`Crie sua senha para continuar:`)){
        alert(`Você já pode fazer Login!`);
    break;
    }
}

//Login
var nomeUsuarioLogin = prompt(`Nome de usuário:`);
if(nomeUsuarioLogin == nomeUsuario){
}
while(nomeUsuarioLogin != nomeUsuario || nomeUsuarioLogin == ""){
    alert(`Nome de usuário incorreto ou não inserido!`);
    nomeUsuarioLogin = prompt(`Digite seu nome de usuário para continuar:`);
    if(nomeUsuarioLogin == nomeUsuario){
    break;
    }
}

var senhaLogin = prompt(`Senha:`);
if(senhaLogin == senhaUsuario){
    alert(`Bem vindo ${nomeCliente}!`);
    console.log(`O cliente ${nomeCliente}, está conectado.`);
}
while(senhaLogin != senhaUsuario || senhaLogin ==""){
    alert(`Senha incorreta ou não inserida!`);
    senhaLogin = prompt(`Digite sua senha para continuar:`);
    if(senhaLogin == senhaUsuario){
    alert(`Bem vindo ${nomeCliente}!`);
    console.log(`O cliente ${nomeCliente}, está conectado.`);
    break;
    }
}

// Cardápio Lanches
alert(`Cardápio:\n
       Lanche: Big Chease\n
       Lanche: Big Bacon\n
       Lanche: Big Master Bacon\n
       Lanche: Chease The Big`);

var lanches = ["Big Chease", "Big Bacon", "Big Master Bacon", "Chease The Big"];
var pedidoLanche = prompt(`Peça seu lanche:`);

var index_lanche = lanches.indexOf(pedidoLanche);

if(index_lanche != -1){
}

else{
while(index_lanche == -1){
    alert(`${nomeCliente}, peça algum lanche do cardápio!`);
    pedidoLanche = prompt(`Peça algum lanche do cardápio:`);
    index_lanche = lanches.indexOf(pedidoLanche);
    if(index_lanche != -1){
    break;
    }
}
}

//Cardápio Bebidas
alert(`Cardápio\n
       Bebida: Morango Refri\n
       Bebida: Coquinha\n
       Bebida: Fanta Guara
       Bebida: Uva Juice`);

var bebidas = ["Morango Refri", "Coquinha", "Fanta Guara", "Uva Juice"];
var pedidoBebida = prompt(`Peça sua bebida:`);

var index_bebidas = bebidas.indexOf(pedidoBebida);
if(index_bebidas != -1){
}

else{
while(index_bebidas == -1){
    alert(`${nomeCliente}, não temos essa bebida aqui!`);
    pedidoBebida = prompt(`Peça uma bebida do cardápio:`);
    index_bebidas = bebidas.indexOf(pedidoBebida);
    if(index_bebidas != -1){
    break;
    }
}
}

//Cardápio Sobremesas
alert(`Sobremesas\n
       Sobremesa: Chocolate\n
       Sobremesa: Sorvete Menta\n
       Sobremesa: Sorvete Flocos\n
       Sobremesa: Sorvete Choco Menta`);

var sobremesas = ["Chocolate", "Sorvete Menta","Sorvete Flocos","Sorvete Choco Menta"];
var pedidoSobremesa = prompt(`Peça sua sobremesa:`);

var index_sobremesa = bebidas.indexOf(pedidoSobremesa);
if(index_sobremesa != -1){
}

else{
    while(index_sobremesa == -1){
    alert(`${nomeCliente}, não temos essa sobremesa aqui!`);
    pedidoSobremesa = prompt(`Peça alguma sobremesa do cardápio:`);
    index_sobremesa = sobremesas.indexOf(pedidoSobremesa);
    if(index_sobremesa != -1){
    break;
    }
    }
}

//Localização
alert(`${nomeCliente}, informe a localização para a entrega do pedido!`);

var cidadeCliente = prompt(`Cidade:`);
while(cidadeCliente == ""){
    alert(`Você ainda não informou sua cidade!`);
    if(cidadeCliente = prompt(`Informe sua cidade para continuar:`)){
    break;
    }
}

var bairroCliente = prompt(`Bairro:`);
while(bairroCliente == ""){
    alert(`Você ainda não informou seu bairro!`);
    if(bairroCliente = prompt(`Informe seu bairro para continuar:`)){
    break;
    }
}

var ruaCliente = prompt(`Rua:`);
while(ruaCliente == ""){
    alert(`Você ainda não informou sua rua!`)
    if(ruaCliente = prompt(`Informe sua rua para continuar:`)){
    break;
    }
}

var numeroCasa = prompt(`Número:`);
while(numeroCasa == ""){
    alert(`Você ainda não informou o número da sua casa!`);
    if(numeroCasa = prompt(`Informe o número da sua casa:`)){
    break;
    }
}

//Onde entregar o pedido
console.log(`O cliente ${nomeCliente} fez um pedido.\n
             Um lanche: ${pedidoLanche}\n
             Uma bebida: ${pedidoBebida}\n
             E uma sobremesa: ${pedidoSobremesa}.`);

console.log(`Entregar em:\n
             Cidade: ${cidadeCliente}\n
             Bairro: ${bairroCliente}\n
             Rua: ${ruaCliente}\n
             Número: ${numeroCasa}`);