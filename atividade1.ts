/* Atividade 1 (30 pontos)
Faça um programa que tenha 3 funções:

1º Função recebe 5 números e retorne a média desses números (10 pontos)

2º Função recebe a média e define se esse número é PAR ou IMPAR, 
o retorno dessa função deve ser P para par e I para impar (10 pontos)

3º Função principal aonde: (10 pontos)
- o usuário digita os 5 números
- aonde é chamada a função que retorna a média
- aonde é chamada a função que retorna P ou I
- nessa função é exibido a mensagem com o valor médio e se o número 
é par ou impar
*/

const teclado = require(`prompt-sync`)();

function mediaCalc(n1:number, n2:number, n3:number, n4:number, n5:number): number{
    
    return (n1 + n2 + n3 + n4 + n5) / 5;
}

function verificar (mediaCalc:number): string{
    console.log(`Verificando se ${mediaCalc} é ímpar ou par...`);
    console.log(`Se o valor for par -> P; caso seja ímpar -> I`);

    let resto = mediaCalc % 2;
    
    if(resto == 0){
        return `P`;
    }
    else{
        return `I`;
    }
}
function principal(): void{
    console.clear

    const teclado = require(`prompt-sync`)();
    let n1 = parseInt(teclado(`Digite o 1º número: `));
    let n2 = parseInt(teclado(`Digite o 2º número: `));
    let n3 = parseInt(teclado(`Digite o 3º número: `));
    let n4 = parseInt(teclado(`Digite o 4º número: `));
    let n5 = parseInt(teclado(`Digite o 5º número: `));
    
    let media: number = mediaCalc (n1, n2, n3, n4, n5) / 5;
    let verificacao: string = verificar(media);
    
    console.log();
    console.log(`O valor da média dentre os números é ${media}.
    Portanto, ${media}, é um número ${verificacao}.`);
}
principal();