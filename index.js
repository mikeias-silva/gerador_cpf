/**
 * Fazer gerador de CPF validos usando o arquivo que ja foi feito para gerar digito
 * mandar numeros aleatorios sem o digito e gerar o digito dele
 * retornar na tela o cpf com digito já formatado
 */

import GeraCpf from "./GeraCpf.js";
const btn = document.querySelector('#btn-novo');
const cpf = document.querySelector('#cpf');

function formatador(novoCpf) {
    return novoCpf.slice(0, 3) + '.' +
        novoCpf.slice(3, 6) + '.' +
        novoCpf.slice(6, 9) + '-' +
        novoCpf.slice(9, 11);
}
function cpfAleatorio() {
    const newCpf = new GeraCpf();
    const novoCpf = newCpf.geradorCpf();
    return formatador(novoCpf);
}

btn.addEventListener("click", function () {
    cpfAleatorio()
    cpf.innerHTML = cpfAleatorio();
})