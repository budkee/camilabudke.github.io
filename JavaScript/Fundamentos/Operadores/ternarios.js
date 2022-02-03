// Operadores ternários,
// 1ra parte: expressão relacional.
// 2da parte: (?) resultado caso seja V.
// 3ra parte: (:) resultado caso seja F.

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// Ou

const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado(7.1))
console.log(resultado(6.2))

