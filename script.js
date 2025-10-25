function CalcularValor() {
const valorTabuada = document.querySelector("#tabuada").value;
let multi
    //let numero = 2;

    for(let i = 2; i<= 10; i++){
        multi= i * valorTabuada;
        console.log(i * valorTabuada);
        document.querySelector('.valor').innerHTML = multi;
       document.querySelector('.tb').innerHTML += `${valorTabuada} x ${i} = ${multi}<br>`;

    }
}
