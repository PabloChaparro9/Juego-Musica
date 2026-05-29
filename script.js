const SelectEscalaHTML = document.getElementById("selectEscala");
const NotaAcordeHTML = document.getElementById("notaAcorde");
let intervalos = ['C','D','E','F','G','A','B'];
let respuestaFinal = [intervalos[0],'','','','','','']
let idGrados= ['chordI','chordII','chordIII','chordIV','chordV','chordVI','chordVII'];
let tipoEscala = "Escala Mayor";
let notasAcordes = "Notas";
fetch('./escalas.json')
    .then(response => response.json())
    .then(data=>{
        const indexEscala = Math.floor(Math.random()*8);
        obtenerEscala(data[indexEscala].Tipo,data[indexEscala].Intervalos);
        console.dir(data[indexEscala])
    })
document.getElementById(idGrados[0]).firstChild.innerHTML=intervalos[0];
const obtenerEscala = (tipoEscala,a) =>{
    if(tipoEscala == "Escala Mayor"){
        a.forEach((intervalo,index)=>{
            intervalos[index]=intervalo;
            console.log(intervalo)
        })
    }
}
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
const actualizarBotones = (a,b) =>{
    document.getElementById(a).innerHTML=b;
    console.log(b.slice(0,1));
    console.log(b.slice(1,2));
    if(b.slice(1,2)=='#'){
        return b.slice(0,1)
    }else{
        return b
    }
}
const DefinirNota = (a) => {
    switch (a) {
        case 'Im':
            return actualizarBotones('Im',intervalos[0])
            break;
        case 'IM':
            return actualizarBotones('IM',intervalos[0]+'#')
            break;
        case 'IIm':
            return actualizarBotones('IIm',intervalos[1])
            break;
        case 'IIM':
            return actualizarBotones('IIM',intervalos[1]+'#')
            break;
        case 'IIIm':
            return actualizarBotones('IIIm',intervalos[2])
            break;
        case 'IIIM':
            return actualizarBotones('IIIM',intervalos[2]+'#')
            break;
        case 'IVm':
            return actualizarBotones('IVm',intervalos[3])
            break;
        case 'IVM':
            return actualizarBotones('IVM',intervalos[3]+'#')
            break;
        case 'Vm':
            return actualizarBotones('Vm',intervalos[4])
            break;
        case 'VM':
            return actualizarBotones('VM',intervalos[4]+'#')
            break;
        case 'VIm':
            return actualizarBotones('VIm',intervalos[5])
            break;
        case 'VIM':
            return actualizarBotones('VIM',intervalos[5]+'#')
            break;
        case 'VIIm':
            return actualizarBotones('VIIm',intervalos[6])
            break;
        case 'VIIM':
            return actualizarBotones('VIIM',intervalos[6]+'#')
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