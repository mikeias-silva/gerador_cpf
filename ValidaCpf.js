/**
 * validar cpf
 * verificar se é sequencia
 * verificar se é digito
 */
export default class ValidaCpf {

    constructor(cpfEnviado) {
        this.cpfLimpo = cpfEnviado.replace(/\D+/g, '');
    }

    validarSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) == this.cpfLimpo
    }

    validarDigito() {
        let cpfSemDigito = this.cpfLimpo.slice(0, -2);
        let primeiroDigito = ValidaCpf.gerarDigito(cpfSemDigito);
        let segundoDigito = ValidaCpf.gerarDigito(primeiroDigito);
        let cpfComDigito = segundoDigito;
        return cpfComDigito;
    }

  

    static gerarDigito(cpfSemDigito) {
        let total = 0;
        let reverso = cpfSemDigito.length + 1;
        for (let stringNumerica of cpfSemDigito) {
            total += reverso * Number(stringNumerica)
            reverso--;
        }

        return cpfSemDigito + String((11 - (total % 11)) > 9 ? 0 : 11 - (total % 11));
    }

    validar() {
        if (this.validarSequencia()) {
            return false;
        }
        if (this.validarDigito() === this.cpfLimpo) {
            return true
        } else {
            return false
        }
    }
}
