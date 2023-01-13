import ValidaCpf from "./ValidaCpf.js";

export default class GeraCpf {

    numeroAleatorio(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geradorCpf() {
        const semDigito = this.numeroAleatorio();
        const digito1 = ValidaCpf.gerarDigito(semDigito);
        const digito2 = ValidaCpf.gerarDigito(digito1);

        return digito2;
    }

};
