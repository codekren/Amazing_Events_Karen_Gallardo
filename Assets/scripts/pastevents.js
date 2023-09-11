const $contCards= document.getElementById('contCards') //html
const $contCategoria=document.getElementById('form')
const $check= document.getElementById('form')
const $search= document.getElementById('input-cont')
const $contSearch=document.getElementById('contSearch')


function createCard (event){
    return  `<div class="col d-flex justify-content-center pt-2 pb-2"> 
                  <div class="card text-center mb-3 border border-success p-2 mb-2 border-opacity-50" style="width: 16rem;">
                      <img src="${event.image}" class="card-img-top p-2 imgcard" alt="costume_party">
                      <div class="card-body d-flex flex-column justify-content-between">
                          <h5 class="card-title">${event.name}</h5>
                          <p class="card-text"> ${event.description}}</p>
                          <div class=" d-flex justify-content-between align-items-center bg-body-secondary">
                            <p class="mb-0">$${event.price}</p>
                            <a href="../pages/details.html?parametro=${event._id}" class="btn btn-primary">Details</a>
                          </div>  
                      </div>
                  </div>
            </div>`            
}

function printCard (past,contain){
    if(past.length>0){        
        let frontcard=""
        for (let evento of past) {    
           frontcard+=createCard (evento)   
        }
        contain.innerHTML=frontcard} 
    else{ $contCards.innerHTML= `<div class= "d-flex justify-content-center mt-5"> 
            <h5  class=" text-center" > Please,try other option</h5>
            </div> `

    }
}
printCard(filter(data),$contCards)

function filter (data){
    let past=data.events.filter(evento=>evento.date<data.currentDate)
    return past 
}

let categoria=data.events.map(elemento=> elemento.category)
let soloCategoria=categoria.filter((item,index)=> {
    return categoria.indexOf(item)===index
})

function createCategory(Categoria){
    return` <div class="form-check form-check-inline">
                <label class="form-check-label " for="inlineCheckbox1">${Categoria}</label>
                <input class="form-check-input " type="checkbox" id="inlineCheckbox1" value="${Categoria}">        
            </div>`
}
function printCategory(arraySoloCategoria,contain){
    let frontbox=""
    for (let categoria of arraySoloCategoria) {
        frontbox+=createCategory(categoria)
    }
    contain.innerHTML+=frontbox
    }
    printCategory(soloCategoria,$contCategoria)

$check.addEventListener('change',()=>{
    const returnCruzados=filtrosCruzados(filter(data),$search)
    printCard(returnCruzados, $contCards)})

function filtradoCheck(data){
    const checked=document.querySelectorAll("input[type=checkbox]:checked")
    const arrayChecked=Array.from(checked).map(checkbox=> checkbox.value)
    const seleccion= data.filter(evento => arrayChecked.includes(evento.category))
    console.log(seleccion)
    if(seleccion.length>0){
        return seleccion
     }
    else{ return data}
    }

    $contSearch.addEventListener('click',()=>{
    const returnCruzados=filtrosCruzados(filter(data),$search)
    printCard(returnCruzados,$contCards)})

    function filtradoSearch (data,$search) {    
        let selecSearch=data.filter(elemento=>elemento.name.toUpperCase().includes($search.value.toUpperCase()))
        if(selecSearch.length>0){
            return selecSearch
        }else { $contCards.innerHTML= `<div class= "d-flex justify-content-center mt-5"> 
        <h5  class=" text-center" > Please,try other option</h5>
        </div> ` }
             
    }
    function filtrosCruzados(data,$search){
        const arrayFiltradosChecked=filtradoCheck(data)
        const arrayFiltradosSearch= filtradoSearch(arrayFiltradosChecked,$search)
        return arrayFiltradosSearch
     }