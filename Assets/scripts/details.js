const URL_API= 'https://mindhub-xj03.onrender.com/api/amazing'

let parametro=location.search

let params= new URLSearchParams (parametro) 

let idEvents =params.get("parametro") 

let cardDetails=document.getElementById("contDetails")

let eventos
let evento

fetch(URL_API)
.then(response=> response.json())
.then (({events}) => { 
  eventos=events 
  evento=eventos.find(detalle=>detalle._id==idEvents)
  crearCardDetail(cardDetails,evento)
})

.catch(err => console.log(err))


import {crearCardDetail} from '../modules/funciones.js'
