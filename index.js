class Relogio {


    constructor(horas, minutos, dia) {
        this._horas = horas;
        this._minutos = minutos;
        this._dia = dia;
    }

    get horaAtual() {
        return `${this._horas}:${this._minutos}`
        
    }

    set avancaHora(horas){

        let minutos = (parseInt(horas) * 60)

        this._minutos += minutos;

        while(this._minutos >= 60){
            this._minutos -= 60;
            this._horas += 1;

            
            if (this._horas >= 24){
                this._horas = 1;
                this._dia += 1;
            }
        }    
    }
};

let horario = new Relogio(6, 30, 1)








class Personagem {

    constructor(energia, fome, saude, dinheiro){
        this._enegia = energia,
        this._fome = fome,
        this._saude = saude,
        this._dinheiro = dinheiro
    }

    get monstraAtributos() {
        return (`
        Energia: ${this._enegia}
        Fome: ${this._fome}
        Saude: ${this._saude}
        Dinheiro: ${this._dinheiro}
        
        `)
    }

    get verificaVivo(){
    // // (this._energia < 0 || this._fome > 100 || this._saude < 0) ? false : true;

        if (this._enegia < 0 || this._fome > 100  || this._saude < 0){
            return false
        } else {
            return true
        }

    }

    set trabalhar(valor){

        if(this.verificaVivo == true) {
            
            this._enegia -= 60,
            this._fome += 40,
            this._saude -= 30
            this._dinheiro = 250 
            horario.avancaHora = 8



        } else if (this.verificaVivo == false) {
            console.log('ta morto')

        }
        


    }

    set cafeDaManha(valor){
        this._energia += 20
        this._fome -= -35
        this._saude += 10
    }


}
let personagem = new Personagem(100, 0, 100, 0)



personagem.trabalhar = true // ativa o trablhar 

console.log(personagem.monstraAtributos);

console.log(horario.horaAtual);







