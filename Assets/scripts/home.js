const $contCards= document.getElementById('contCards')
const $contCategory=document.getElementById('form')
const $check= document.getElementById('form')
const $search= document.getElementById('input-cont')
const $contSearch=document.getElementById('contSearch')

function createCard (events){
    return  `<div class="col d-flex justify-content-center pt-2 pb-2"> 
                  <div class="card text-center mb-3 border border-success p-2 mb-2 border-opacity-50" style="width: 16rem;">
                      <img src="${events.image}" class="card-img-top p-2 imgcard" alt="costume_party">
                      <div class="card-body d-flex flex-column justify-content-between">
                          <h5 class="card-title">${events.name}</h5>
                          <p class="card-text"> ${events.description}</p>
                          <div class=" d-flex justify-content-between align-items-center bg-body-secondary">
                            <p class="mb-0">$${events.price}</p>
                            <a href="./Assets/pages/details.html?parametro=${events._id}" class="btn btn-primary">Details</a>
                          </div>  
                      </div>
                  </div>
            </div>`            
}

function printCard (data,contain){
    if(data.length>0){        
        let frontcard=""
        for (let evento of data) {    
           frontcard+=createCard (evento)   
        }
        contain.innerHTML=frontcard} 
    else{ $contCards.innerHTML= `<div class= "d-flex justify-content-center mt-5"> 
            <h5  class=" text-center" > Please,try other option</h5>
            </div> `

    }
}
printCard(data.events,$contCards)

let categoria=data.events.map(elemento=> elemento.category)
let soloCategoria=categoria.filter((item,index)=> {
    return categoria.indexOf(item)===index
})


function createCategory(Categoria){
    return` <div class="form-check form-check-inline">
                <label class="form-check-label " for="inlineCheckbox_${Categoria}">${Categoria}</label>
                <input class="form-check-input " type="checkbox" id="inlineCheckbox_${Categoria}" value="${Categoria}">        
            </div>`
}

function printCategory(arraySoloCategoria,contain){
    let frontbox=""
    for (let categoria of arraySoloCategoria) {    
       frontbox+=createCategory (categoria)         
    }    
    contain.innerHTML+=frontbox
    }
printCategory(soloCategoria,$contCategory)

$check.addEventListener('change', ()=>{
    const returnCruzados=filtrosCruzados(data.events,$search)
    // const returnFiltradoCheck= filtradoCheck(data.events)
printCard(returnCruzados, $contCards)
})

function filtradoCheck(data){
    const checked=document.querySelectorAll("input[type='checkbox']:checked")
    const arrayChecked=Array.from(checked).map(checkbox=> checkbox.value)
    const seleccion= data.filter(evento => arrayChecked.includes(evento.category))
    console.log(seleccion)
    if(seleccion.length>0){
        return seleccion
    }
    else{ return data}
}

$contSearch.addEventListener('click',()=>{
    const returnCruzados=filtrosCruzados(data.events,$search)
   //    const returnSearchFiltrado= filtradoSearch(data.events,$search)
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





















// $form.addEventListener('change',(e)=>{
//     let elegidos=soloCheckFiltrado(data.events)
//     printCard(elegidos,$contCards)
// })
// function soloCheckFiltrado(data){
//     const checked=document.querySelectorAll('input[type=checkbox]:checked')
//     const arrayChecked=Array.from(checked).map(checkbox=> checkbox.value)
//     console.log(arrayChecked)
//     if(arrayChecked.length==0){
//         return (data)
//     }
//     let seleccion= data.filter(evento => arrayChecked.includes(evento.category))
//     return (seleccion)
// }

// $contSearch.addEventListener('click',(e)=>{
//     console.log($search.value)
//     searchFiltrado(data.events,$search)
//     })

// function searchFiltrado (data,contSearch) {    
//         let selecSearch=data.filter(elemento=>elemento.name.toUpperCase().includes(contSearch.value.toUpperCase()))
//         if(selecSearch.length>0){           
//             printCard(selecSearch,$contCards)
//         } else {
//             $contCards.innerHTML= `<div class= "d-flex justify-content-center mt-5"> 
//             <h5  class=" text-center" > Please,try other option</h5>
//           </div> `            
//         } 
// }

// function filtroCruzado(data,){

//     let filtradoChecked= soloCheckFiltrado(data)
//     let filtradoSearch=searchFiltrado (filtradoChecked,contSearch)
//     let filtroCruzado=soloCheckFiltrado.filter(checked => checked.name.toUpperCase().includes(contSearch.value.toUpperCase()) )
//     console.log(filtroCruzado)
//     }










