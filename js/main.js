
import { esUnCuil } from "./validacion-cuil.js";

const campoFormulario = document.querySelectorAll('[required]');

campoFormulario.forEach((campo)=>{
    campo.addEventListener('blur',()=> verificarCampo(campo))
})


function verificarCampo(campo) {
    if(campo.name == 'cuil' && campo.value.length >= 11) {
        esUnCuil(campo)
    }
}