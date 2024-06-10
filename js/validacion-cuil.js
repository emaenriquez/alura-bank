
export default function esUnCuil(campo){
    const cuil = campo.value.replace(/[-\/]/g, "")
    // tieneNumerosRepetidos(cuil)
    // validarPrimerosDigitos(cuil)
    // validarDigitoValidador(cuil)
    if (tieneNumerosRepetidos(cuil)) {
        console.log('valores repetidos')
    } else {
        if(validarPrimerosDigitos(cuil) && validarDigitoValidador(cuil)){
            console.log("cuil no valido")
        } else {
            console.log("cuil no existe")
        }
    }
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

function validarDigitoValidador(cuil) {
    let acumulado = 0;
    const factores = [5,4,3,2,7,6,5,4,3,2];
    for (let i = 0; i < 10; i++) {
        acumulado += parseInt(cuil[i],10) * factores[i];        
    }
    let validadorTeorico = 11 - (acumulado % 11);
    
    if(validadorTeorico == 11) {
        validadorTeorico = 0;
    } else if(validadorTeorico == 10) {
        validadorTeorico = 9;
    }
    const digitoVerifidor = parseInt(cuil[10],10);
    return digitoVerifidor == validadorTeorico
}