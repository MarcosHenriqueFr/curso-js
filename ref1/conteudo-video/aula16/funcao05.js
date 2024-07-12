/*
Função recursiva é a que chama ela mesma
função para um fatorial

4! = 4 x 3 x 2 x 1
ou
4! = 4 x 3!

n! = n x (n-1)!

*/

function fatorial(n) {
    if (n == 1 | n == 0) {
        return 1
    } else {
        return n*fatorial(n-1)
    }
}

console.log(fatorial(6))