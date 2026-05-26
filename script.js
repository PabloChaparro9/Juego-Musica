const SelectEscalaHTML = document.getElementById("selectEscala");
const NotaAcordeHTML = document.getElementById("notaAcorde");
let intervalos = ['C','D','E','F','G','A','B'];
let respuestaFinal = ['C','','','','','','']
let tipoEscala = "Escala Mayor";
let notasAcordes = "Notas";
const CambiarEscala = () => {
    if(SelectEscalaHTML.innerHTML=="Escala Mayor"){
        SelectEscalaHTML.innerHTML = "Escala Menor";
        tipoEscala = "Escala Menor"
    }else{
        SelectEscalaHTML.innerHTML = "Escala Mayor";
        tipoEscala = "Escala Mayor"
    }
}
const CambiarNotaAcorde = () => {
    if(NotaAcordeHTML.innerHTML=="Notas"){
        NotaAcordeHTML.innerHTML = "Acordes";
        notasAcordes = "Acordes";
    }else{
        NotaAcordeHTML.innerHTML = "Notas";
        notasAcordes = "Notas";
    }
}
const CambiarGrado = (a,n) =>{
    let b;
    let nota;
    b = DetectarIntervalo(a);
    nota = DefinirNota(a);
    respuestaFinal[n] = nota;
    const CambiarAcordeHTML = document.getElementById(b);
    CambiarAcordeHTML.innerHTML = nota;
}
const DefinirNota = (a) => {
    switch (a) {
        case 'Im':
            return intervalos[0]
            break;
        case 'IM':
            return intervalos[0]+'#'
            break;
        case 'IIm':
            return intervalos[1]
            break;
        case 'IIM':
            return intervalos[1]+'#'
            break;
        case 'IIIm':
            return intervalos[2]
            break;
        case 'IIIM':
            return intervalos[2]+'#'
            break;
        case 'IVm':
            return intervalos[3]
            break;
        case 'IVM':
            return intervalos[3]+'#'
            break;
        case 'Vm':
            return intervalos[4]
            break;
        case 'VM':
            return intervalos[4]+'#'
            break;
        case 'VIm':
            return intervalos[5]
            break;
        case 'VIM':
            return intervalos[5]+'#'
            break;
        case 'VIIm':
            return intervalos[6]
            break;
        case 'VIIM':
            return intervalos[6]+'#'
            break;
    
        default:
            break;
    }
}
const DetectarIntervalo = (c) =>{
    switch (c) {
        case 'Im':
            return 'gradoI'
            break;
        case 'IM':
            return 'gradoI'
            break;
        case 'IIm':
            return 'gradoII'
            break;
        case 'IIM':
            return 'gradoII'
            break;
        case 'IIIm':
            return 'gradoIII'
            break;
        case 'IIIM':
            return 'gradoIII'
            break;
        case 'IVm':
            return 'gradoIV'
            break;
        case 'IVM':
            return 'gradoIV'
            break;
        case 'Vm':
            return 'gradoV'
            break;
        case 'VM':
            return 'gradoV'
            break;
        case 'VIm':
            return 'gradoVI'
            break;
        case 'VIM':
            return 'gradoVI'
            break;
        case 'VIIm':
            return 'gradoVII'
            break;
        case 'VIIM':
            return 'gradoVII'
            break;
    
        default:
            break;
    }
}
//Recordar agregar notas para continuar el trabajo donde quedo.
/* Las respuestas se deben escribir en las etiquetas div que tienen como id chordX reemplazando su innerHTML con un span con clase textAnswer para aplicar el estilo y el acorde correspondiente. Si las respuestas son correctas se agregara la clase correctAnswer y si son incorrectas wrongAnswer para aplicar estilos diferentes. Se debe imprimir el intervalo en la card respuesta.*/
const ObtenerRespuesta = () =>{
    let bandera = 0;
    let respuestaCorrecta = 0;
    respuestaFinal.forEach((intervalo,index)=>{
        if(intervalo==''){
            console.log('Falta el intervalo '+(index+1));
            bandera = bandera+1
        }
    })
    if(bandera == 0){
        intervalos.forEach((element,index) => {
        if(element != respuestaFinal[index]){
            console.log("Algo salio mal con el intervalo: "+(index+1));
            respuestaCorrecta = respuestaCorrecta+1;
        }
    });
    }else{
        console.log('faltan intervalos');
        respuestaCorrecta = respuestaCorrecta+1;
    }
    if(respuestaCorrecta == 0){
        console.log('Respuesta Correcta')
    }
}