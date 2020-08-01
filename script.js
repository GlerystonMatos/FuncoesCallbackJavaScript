// JavaScript é uma linguagem executada assincronamente;
// Isso acontece porque quando o interpretador executa um comando que dependa de uma informação externa,
// como uma requisição, ele não bloqueia o prosseguimento do programa. Essa característica do JavaScript é extremamente utilizada no Node.js.

setTimeout(() => alert("1"),5000);
alert("2");

// Ao executar esse código no navegador, as coisas acontecem na seguinte ordem:

// 1º: É apresentado um alerta com o conteúdo “2”;
// 2º: Após cinco segundos, o próximo alerta é exibido, com conteúdo “1”.

// As coisas não são executadas na ordem em que o código está escrito, pois como a função setTimeout espera 5 segundos para apresentar o alerta,
// o processamento segue, executando o alert(“2”) primeiro.
// Essa função, setTimeout, normalmente é utilizada por instrutores para simular uma requisição HTTP, ou um acesso ao banco de dados.

// Mas o que são funções callback?
// De forma simples, callback é uma função passada como parâmetro para outra função.
// Sem saber, você acabou de usar uma função callback no código acima.
// A função setTimeout recebe dois parâmetros: o primeiro é uma função callback, e o segundo é o tempo que o interpretador irá esperar até executar essa função.

// Na programação assíncrona, callbacks são passadas como funções para serem executadas após um certo evento.
// Por exemplo, um programa calcula o salário líquido a partir do bruto e faz algo com esse valor calculado. Nesse caso, podemos fazer da seguinte forma:

let salarioBruto = 3000;
let salarioLiquido;

getSalario(salarioBruto, (resultado) => {
    salarioLiquido = resultado;
    console.log('O salário liquido é ${salarioLiquido}');
});

function getSalario(salarioBruto, callback)
{
    let liquido = 0;
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    liquido = salarioBruto - descontos;
    
    return callback(liquido);
}

// Vamos começar pela declaração da função getSalario. Essa função recebe dois parâmetros: salarioBruto, que é o valor de entrada do cálculo e callback,
// que é uma função que será executada no return da função getSalario. Ainda não vamos nos preocupar com o que faz essa função de callback, apenas vamos entender
// que a função getSalario a recebe como parâmetro e a executa no return, passando como parâmetro para a callback o salário líquido calculado.

// Então, a função getSalario recebe um valor de salário bruto no primeiro parâmetro.
// Obtém o salário líquido subtraindo os descontos calculados.
// E então, executa a função recebida no segundo parâmetro.

// Na hora em que se está declarando a callback pode surgir a dúvida: “mas de onde vai vir esse valor ‘resultado’ que estou utilizando?”.
// A sacada está aí! A variável ‘resultado’ está na declaração da callback para representar um parâmetro, ou um valor se preferir,
// que será passado quando a função callback for invocada dentro da função getSalario.
// Portanto, quando a função callback for executada, ela será executada assim:

(liquido) => {
    salarioLiquido = liquido;
    console.log('O salário líquido é ${salarioLiquido}');}

// Nesse caso, líquido é o valor calculado na função getSalario.
// Portanto, uma callback é uma função que nos permite operar em cima do retorno de outras funções da forma que for necessário.

// Texto é exemplos obtidos no artigo: https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22