
export default function esMayorEdad(campo){
    const fechaNacimiento = new date(campo.value);
    validarEdad(fechaNacimiento)
}

function validarEdad(fecha) {
    const fechaActual = new Date();
    const fechaMas18 = new Date(fecha.getUTCFullYear()+18,fecha.getUTCMonth(),
    fecha.getUTCDate())

    return fechaActual >= fechaMas18;
}