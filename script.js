const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = new Date('11 dec 2023 13:00')
//document.getElementById('dataFinal').innerHTML = lancamento
console.log(lancamento)
function countDown(){
    const hoje = new Date()
    const segFalta = Math.floor((lancamento - hoje)/1000)
    
    const diasFalta = ajustaNumbero(Math.floor(segFalta / 60 / 60 / 24))
    const horasFalta = ajustaNumbero(Math.floor(segFalta / 60 / 60) % 24)
    const minutosFalta = ajustaNumbero(Math.floor(segFalta / 60 ) % 60)
    const segundosFalta = ajustaNumbero(Math.floor(segFalta) % 60)

   // console.log(segFalta, diasFalta, horasFalta, minutosFalta, segundosFalta)
    dia.innerHTML = diasFalta
    hora.innerHTML = horasFalta
    minuto.innerHTML = minutosFalta
    segundo.innerHTML = segundosFalta



}

function ajustaNumbero(res){
    return res < 10 ? `0${res}` : `${res}`
}

countDown()
setInterval(countDown, 1000)