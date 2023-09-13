const $contCards= document.getElementById('contCards')
const $contCategory=document.getElementById('form')
const $check= document.getElementById('form')
const $search= document.getElementById('input-cont')
const $contSearch=document.getElementById('contSearch')
const URL_API= 'https://mindhub-xj03.onrender.com/api/amazing'

let data
let checkCategoria
fetch(URL_API)
.then(response=> response.json())
.then(({events})=> { 
    data = events  
    checkCategoria= [...new Set (data.map(evento=>evento.category))]      
    printCard(data,$contCards)
    printCategory(checkCategoria,$contCategory)    
    }) 

.catch(err => console.log(err))

$check.addEventListener('change', ()=>{
    const returnCruzados=filtrosCruzados(data,$search)
    printCard(returnCruzados, $contCards)
    })
$contSearch.addEventListener('click',()=>{
    const returnCruzados=filtrosCruzados(data,$search)
   printCard(returnCruzados,$contCards)})


import { printCard, printCategory, filtrosCruzados } from '../modules/funciones.js'






