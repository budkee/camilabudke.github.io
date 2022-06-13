// Função da divisão - Parâmetros (dividendo,divisor), Retorno (quociente, resto)
function Divisao(dividendo, divisor) {
    quoc = dividendo / divisor
    resto = dividendo % divisor
    return [quoc, resto]
}
console.log(Divisao(323, 2))