const SelectEscalaHTML = document.getElementById("selectEscala");
const NotaAcordeHTML = document.getElementById("notaAcorde");
let intervalos = ['C','D','E','F','G','A','B'];
let respuestaFinal = [intervalos[0],'','','','','','']
let grados= ['chordI','chordII','chordIII','chordIV','chordV','chordVI','chordVII'];
let tipoEscala = "Escala Mayor";
let notasAcordes = "Notas";
document.getElementById(grados[0]).firstChild.innerHTML=intervalos[0];
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
    ComprobarEstadoBoton()
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
const ObtenerRespuesta = () =>{
    respuestaFinal.forEach((intervalo,index)=>{
        if(respuestaFinal[index]==''){
            const respuestaHTML = document.getElementById(grados[index]);
            respuestaHTML.innerHTML = `<span class="textAnsers">X</span>`;
            if(respuestaHTML.parentElement.classList.contains('correctAnswer')){
                respuestaHTML.parentElement.classList.toggle('correctAnswer')
            }
            respuestaHTML.parentElement.classList.add('wrongAnswer')
        }else{
            if(intervalo==intervalos[index]){
                const respuestaHTML = document.getElementById(grados[index]);
                respuestaHTML.innerHTML = `<span class="textAnsers">${intervalo}</span>`;
                if(respuestaHTML.parentElement.classList.contains('wrongAnswer')){
                    respuestaHTML.parentElement.classList.toggle('wrongAnswer')
                }
                respuestaHTML.parentElement.classList.add('correctAnswer')
            }else{
                const respuestaHTML = document.getElementById(grados[index]);
                respuestaHTML.innerHTML = `<span class="textAnsers">${intervalo}</span>`;
                if(respuestaHTML.parentElement.classList.contains('correctAnswer')){
                    respuestaHTML.parentElement.classList.toggle('correctAnswer')
                }
                respuestaHTML.parentElement.classList.add('wrongAnswer')
            }
        }
    })
    document.getElementById('comprobarRespuesta').disabled=true;
}
const ComprobarEstadoBoton = () =>{
    let flag = 0;
    respuestaFinal.forEach((intervalo)=>{
        if(intervalo==''){
            flag=flag+1;
        }
    })
    if(flag!=0){
        document.getElementById('comprobarRespuesta').disabled=true;
    }else{
        document.getElementById('comprobarRespuesta').disabled=false;
    }
}