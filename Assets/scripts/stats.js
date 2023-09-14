const URL_API= 'https://mindhub-xj03.onrender.com/api/amazing'

let eventos
let datos
let eventoPast
let eventoUp
fetch (URL_API)
.then(response =>response.json())
.then(data=>{
    eventos=data.events
    datos=data
    eventoPast= eventos.filter(evento=>evento.date<datos.currentDate)    
    eventoUp=eventos.filter(evento=>evento.date>datos.currentDate)
    masAsistencia(eventoPast)
    menorAsistencia (eventoPast)
    masCapacidad(eventos)
    imprimirPrimeraTabla()
    imprimirSegundaTabla(eventoUp)
    imprimirSegundaTabla(eventoPast)
   
})
.catch(err => console.log (err))

function masAsistencia (eventoPast){
let mayorAsistencia=0
let eventoMayorAsistencia 
    for(let evento of eventoPast){    
    let asistencia =(evento.assistance*100/evento.capacity)
    if(asistencia> mayorAsistencia){
        mayorAsistencia = asistencia
        eventoMayorAsistencia=evento
    }    
}
return eventoMayorAsistencia
}
function menorAsistencia (eventoPast){
    let menorAsistencia=0
    let eventoMenorAsistencia  
    for(let evento of eventoPast){    
    let asistencia = (evento.assistance*100/evento.capacity)
    if(menorAsistencia==0 || asistencia < menorAsistencia){
        menorAsistencia = asistencia
        eventoMenorAsistencia=evento
    }    
}
return eventoMenorAsistencia

}
function masCapacidad(eventos){
    let masCapacidad=0
    let eventoCapacidad  
    for(let evento of eventos){    
    if(evento.capacity > masCapacidad){
        masCapacidad = evento.capacity
        eventoCapacidad=evento
    }    
}
return eventoCapacidad
}
function imprimirPrimeraTabla(){
    let conMayorAsistencia = masAsistencia(eventoPast)
    let conMenorAsistencia = menorAsistencia(eventoPast)
    let conMasCapacidad = masCapacidad(eventos)

    let template= `
    <td class="p-1">${conMayorAsistencia.name} with ${((conMayorAsistencia.assistance*100)/conMayorAsistencia.capacity).toFixed(1)}</td>
    <td class="p-1">${conMenorAsistencia.name} with ${((conMenorAsistencia.assistance*100)/(conMenorAsistencia.capacity)).toFixed(1)}</td>
    <td class="p-1">${conMasCapacidad.name} with ${((conMasCapacidad.capacity).toLocaleString())}</td>`
    
    document.getElementById("tabla1").innerHTML = template  
}
function imprimirSegundaTabla(array){
    let datosCompletos=[]
    let categorias=Array.from(new Set(array.map(evento=>evento.category)))
    let revenues=[]
    let ofAsistencia = []
    for (let categoria of categorias){
        let capacidad = 0
        let total = 0
        let estimado = 0
        for (let evento of array){          
               if(evento.category == categoria){                
                total += ((evento.estimate)||(evento.assistance)) * evento.price 
                estimado += ((evento.estimate)||(evento.assistance))
                capacidad += evento.capacity                            
            }            
        }
        revenues.push(total)  
        ofAsistencia.push(estimado*100/capacidad)                
    }
datosCompletos.push(categorias, revenues, ofAsistencia)
        console.log(datosCompletos)
    }














































