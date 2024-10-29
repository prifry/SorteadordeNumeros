//Creating the function to sortear the numbers. 
function sortear(){
    //getting the values entered by calling the id
   let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
   let deNumero = parseInt(document.getElementById('de').value);
   let ateNumero = parseInt(document.getElementById('ate').value);

   let sorteados = [];
   let numero;

   for(let i= 0; i < quantidadeNumeros; i++){
        numero = obterNumeroAleatorio(deNumero, ateNumero);

        //icludes() is an array function  to make sure there are no reapted numbers
        while(sorteados.includes(numero)){
            numero= obterNumeroAleatorio(deNumero, ateNumero);

        }

        //add the  ramdom values to the list sorteados by using push() function
        sorteados.push(numero);
   }

   //First we get the input with document,getElementById and Show result in the resultado label. innerHTML is going to update the  output and add values saved in the list 
   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
   alterrarStatusBotao();

}


function obterNumeroAleatorio(min, max){
    return Math.floor( Math.random() * (max - min + 1) )+ min;

}

function alterrarStatusBotao(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if(botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    }else{
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }

}
//This function clean the values and reestart
function reiniciar(){
    parseInt(document.getElementById('quantidade').value ='');
    parseInt(document.getElementById('de').value = '');
    parseInt(document.getElementById('ate').value ='');
    document.getElementById('resultado').innerHTML ='<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterrarStatusBotao();
}

