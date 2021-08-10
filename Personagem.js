import { Relogio } from './Relogio.js';

export let horario = new Relogio(6, 30, 1);

export class Personagem {

    constructor(energia, fome, saude, inteligencia, dinheiro, vivo) {
        this._enegia = energia,
            this._fome = fome,
            this._saude = saude,
            this._inteligencia = inteligencia,
            this._dinheiro = dinheiro,
            this._vivo = vivo
    }

    get monstraAtributos() {
        return (`
        Energia: ${this._enegia}
        Fome: ${this._fome}
        Saude: ${this._saude}
        Inteligência: ${this._inteligencia}
        Dinheiro: ${this._dinheiro}
        
        `)
    }

    get verificaVivo() {

        if (this._enegia < 0 || this._fome > 100 || this._saude < 0) {
            this._vivo = false;
            return false
        } else {
            return true
        }

    }

    set trabalhar(valor) {

        if (this.verificaVivo == true) {

            this._enegia -= 60;
            this._fome += 40;
            this._saude -= 30;
            this._dinheiro = (this._inteligencia * 35);
            horario.avancaHora = 8;
            console.log("Você trabalhou");



        } else if (this.verificaVivo == false) {
            console.log('Seus atributos vitais foram comprometidos, você morreu!')

        }

    }

    set cafeDaManha(valor) {
        this._energia += 20;
        this._fome -= -35;
        this._saude += 10;
        horario.avancaHora = 0.3;
        console.log("Você tomou café da manhã");

    }

    set fazerExercicio(valor) {
        this._enegia += 45;
        this._fome += 15;
        this._saude += 25;
        horario.avancaHora = 1;
        console.log("Você praticou exercicio");



    }

    set dormir(valor) {
        this._enegia += 60;
        this._fome += 45;
        this._saude += 20;
        horario.avancaHora = 8;
        console.log("Você dormiu")


    }

    set estudar(valor) {
        this._inteligencia += 10;
        this._enegia -= 20;
        this._fome += 15;
        this._saude += 5;
        horario.avancaHora = 3;
        console.log("Você estudou");

    }

}