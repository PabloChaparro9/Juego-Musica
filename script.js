const SelectEscalaHTML = document.getElementById("selectEscala");
const NotaAcordeHTML = document.getElementById("notaAcorde");
let intervalos = ['C','D','E','F','G','A','B'];
let respuestaFinal = [intervalos[0],'','','','','','']
const idGrados= ['chordI','chordII','chordIII','chordIV','chordV','chordVI','chordVII'];
let tipoEscala = "Escala Mayor";
let notasAcordes = "Notas";
const seleccionHTML = document.querySelectorAll('.chordOptionContainer')
console.dir(seleccionHTML);
const obtenerEscala = (tipoEscala,a) =>{
    if(tipoEscala == "Escala Mayor"){
        a.forEach((intervalo,index)=>{
            intervalos[index]=intervalo;
        })
    }
    document.getElementById(idGrados[0]).firstChild.innerHTML=intervalos[0];
    ActualizarBotones(seleccionHTML);
}
fetch('./escalas.json')
    .then(response => response.json())
    .then(data=>{
        const indexEscala = Math.floor(Math.random()*8);
        obtenerEscala(data[indexEscala].Tipo,data[indexEscala].Intervalos);
    })
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
const ActualizarIntervalo = (a,b) =>{
    if(a.slice(-1)=='m' && b.slice(-1)=='#'){
        return b.slice(0,1)
    }else if(a.slice(-1)=='m' && b.slice(1,2)=='b'){
        return b.slice(0,2)
    }else if(a.slice(-1)=='M' && b.slice(1,2)=='b'){
        return b.slice(0,1)
    }else {
        return b.slice(0,2)
    }
}
const DefinirNota = (a) => {
    switch (a) {
        case 'Im':
            return ActualizarIntervalo('Im',intervalos[0])
            break;
        case 'IM':
            return ActualizarIntervalo('IM',intervalos[0]+'#')
            break;
        case 'IIm':
            return ActualizarIntervalo('IIm',intervalos[1])
            break;
        case 'IIM':
            return ActualizarIntervalo('IIM',intervalos[1]+'#')
            break;
        case 'IIIm':
            return ActualizarIntervalo('IIIm',intervalos[2])
            break;
        case 'IIIM':
            return ActualizarIntervalo('IIIM',intervalos[2]+'#')
            break;
        case 'IVm':
            return ActualizarIntervalo('IVm',intervalos[3])
            break;
        case 'IVM':
            return ActualizarIntervalo('IVM',intervalos[3]+'#')
            break;
        case 'Vm':
            return ActualizarIntervalo('Vm',intervalos[4])
            break;
        case 'VM':
            return ActualizarIntervalo('VM',intervalos[4]+'#')
            break;
        case 'VIm':
            return ActualizarIntervalo('VIm',intervalos[5])
            break;
        case 'VIM':
            return ActualizarIntervalo('VIM',intervalos[5]+'#')
            break;
        case 'VIIm':
            return ActualizarIntervalo('VIIm',intervalos[6])
            break;
        case 'VIIM':
            return ActualizarIntervalo('VIIM',intervalos[6]+'#')
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
            const respuestaHTML = document.getElementById(idGrados[index]);
            respuestaHTML.innerHTML = `<span class="textAnsers">X</span>`;
            if(respuestaHTML.parentElement.classList.contains('correctAnswer')){
                respuestaHTML.parentElement.classList.toggle('correctAnswer')
            }
            respuestaHTML.parentElement.classList.add('wrongAnswer')
        }else{
            if(intervalo==intervalos[index]){
                const respuestaHTML = document.getElementById(idGrados[index]);
                respuestaHTML.innerHTML = `<span class="textAnsers">${intervalo}</span>`;
                if(respuestaHTML.parentElement.classList.contains('wrongAnswer')){
                    respuestaHTML.parentElement.classList.toggle('wrongAnswer')
                }
                respuestaHTML.parentElement.classList.add('correctAnswer')
            }else{
                const respuestaHTML = document.getElementById(idGrados[index]);
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
const ActualizarBotones = (a) =>{
    a.forEach((elemento,index)=>{
        return elemento.innerHTML=DefinirNota(elemento.id,parseInt(index/2))
    })
        document.getElementById('gradoI').innerHTML=intervalos[0];

}
