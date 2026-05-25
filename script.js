const SelectEscalaHTML = document.getElementById("selectEscala");
const NotaAcordeHTML = document.getElementById("notaAcorde");
const CambiarEscala = () => {
    if(SelectEscalaHTML.innerHTML=="Escala Mayor"){
        SelectEscalaHTML.innerHTML = "Escala Menor";
    }else{
        SelectEscalaHTML.innerHTML = "Escala Mayor";
    }
}
const CambiarNotaAcorde = () => {
    if(NotaAcordeHTML.innerHTML=="Notas"){
        NotaAcordeHTML.innerHTML = "Acordes";
    }else{
        NotaAcordeHTML.innerHTML = "Notas";
    }
}
const CambiarGrado = (a) =>{
    console.log('grado'+a)
}