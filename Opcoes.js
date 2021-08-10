import { Personagem } from './Personagem.js'
import { horario } from './Personagem.js' // aqui eu recebo a instancia de relogio q está sendo trabalhada em personagem

// usando a desestruturação atribuimos os valores respectivamente a cada variavel
let [energia, fome, saude, inteligencia, dinheiro, vivo] = [100, 0, 100, 0, 0, true]

// instanciando o objeto personagem
let personagem = new Personagem(energia, fome, saude, inteligencia, dinheiro, vivo)




export function opcoes() {

    return prompt(` 
        Seus atributos: ${personagem.monstraAtributos}

        São ${horario.horaAtual} horas, suas opções são:
        1: Tomar Café da manhã
        2: Fazer exercicios
        3: Ir trabalhar
        4: Estudar
        5: Dormir
        0: Sair
        `

    )

}


export function start() {
    while (personagem._vivo) {

        let opcao = parseInt(opcoes())

        if (opcao == 1) {
            personagem.cafeDaManha = true

        } else if (opcao == 2) {
            personagem.fazerExercicio = true

        } else if (opcao == 3) {
            personagem.trabalhar = true

        } else if (opcao == 4) {
            personagem.estudar = true

        } else if (opcao == 5) {
            personagem.dormir = true
        } else if (opcao == 0) {
            break
        }

    }

}