export class Relogio {


    constructor(horas, minutos, dia) {
        this._horas = horas;
        this._minutos = minutos;
        this._dia = dia;
    }

    get horaAtual() {
        return `${this._horas}:${this._minutos}`

    }

    // set horaInicial(valor) {
    //     this._dia = 6;
    //     this._minutos = 30;
    //     this._dia = 1;
    // }

    set avancaHora(horas) {

        let minutos = (parseInt(horas) * 60)

        this._minutos += minutos;

        while (this._minutos >= 60) {
            this._minutos -= 60;
            this._horas += 1;


            if (this._horas >= 24) {
                this._horas = 1;
                this._dia += 1;
            }
        }
    }
};