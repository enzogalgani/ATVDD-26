let n = Number(prompt("Números sequência de Fibonacci:"));

let antes = 0;
let agora = 1;
let depois = "";

for (let contador = 1; contador <= n; contador++) {
    depois += antes + " ";

    let proximo = antes + agora;
    antes = agora;
    agora = proximo;
}
 console.log("Os primeiros " + n + " números de Fibonacci: "+ depois);
 
