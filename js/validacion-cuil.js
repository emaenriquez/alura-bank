
export default function esUnCuil(campo){
    const cuil = campo.value.replace(/[-\/]/g, "")
    tieneNumerosRepetidos(cuil)
    validarPrimerosDigitos(cuil)
}


function tieneNumerosRepetidos(cuil) {
    const NumerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ]
    return NumerosRepetidos.includes(cuil)
}

function validarPrimerosDigitos(cuil) {
    let primerosDigitos = cuil.substr(0,2)
    let digitosValidados = ['20','22','24','27','30','33','34']
    return digitosValidados.includes(primerosDigitos)
}