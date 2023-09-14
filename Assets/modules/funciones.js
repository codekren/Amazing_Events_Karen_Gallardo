
export function createCard (events,urlDetails){
    return  `<div class="col d-flex justify-content-center pt-2 pb-2"> 
                  <div class="card text-center mb-3 border border-success p-2 mb-2 border-opacity-50" style="width: 16rem;">
                      <img src="${events.image}" class="card-img-top p-2 imgcard" alt="costume_party">
                      <div class="card-body d-flex flex-column justify-content-between">
                          <h5 class="card-title">${events.name}</h5>
                          <p class="card-text"> ${events.description}</p>
                          <div class=" d-flex justify-content-between align-items-center bg-body-secondary">
                            <p class="mb-0">$${events.price}</p>
                            <a href="${urlDetails}?parametro=${events._id}" class="btn btn-primary">Details</a>
                          </div>  
                      </div>
                  </div>
            </div>`            
}



export function printCard (data,contain,urlDetails){
    if(data.length>0){        
        let frontcard=""
        for (let evento of data) {    
           frontcard+=createCard (evento, urlDetails)   
        }
        contain.innerHTML=frontcard} 
    else{ contain.innerHTML= `<div class= "d-flex justify-content-center mt-5"> 
            <h5  class=" text-center" > Please,try other option</h5>
            </div> `

    }
}

export function createCategory(Categoria){
    return` <div class="form-check form-check-inline">
                <label class="form-check-label " for="inlineCheckbox_${Categoria}">${Categoria}</label>
                <input class="form-check-input " type="checkbox" id="inlineCheckbox_${Categoria}" value="${Categoria}">        
            </div>`
}

export function printCategory(arraySoloCategoria,contain){
    let frontbox=""
    for (let categoria of arraySoloCategoria) {    
       frontbox+=createCategory (categoria)         
    }    
    contain.innerHTML+=frontbox
}

export function filtradoCheck(data){
    const checked=document.querySelectorAll("input[type='checkbox']:checked")
    const arrayChecked=Array.from(checked).map(checkbox=> checkbox.value)
    const seleccion= data.filter(evento => arrayChecked.includes(evento.category))
    console.log(seleccion)
    if(seleccion.length>0){
        return seleccion
    }
    else{ return data}
}

export function filtradoSearch (data,$search) {           
        let selecSearch=data.filter(elemento=>elemento.name.toUpperCase().includes($search.value.toUpperCase()))
        if(selecSearch.length>0){
            return selecSearch
        }else { return [ ] 
        }             
}
 
export function filtrosCruzados(data,$search){
   const arrayFiltradosChecked=filtradoCheck(data)
   const arrayFiltradosSearch= filtradoSearch(arrayFiltradosChecked,$search)
   return arrayFiltradosSearch
}
export function crearCardDetail(cardDetails,eventos){
    cardDetails.innerHTML +=`
    <div class="row d-flex justify-content-center ">
        <div class="col-md-6 d-flex align-items-center border border-success p-2 border-opacity-50 ">
          <img src="${eventos.image}" class="img-fluid object-fit-cover border rounded-start p-2 h-100" alt="food_fair">
        </div>
        <div class="col-md-4 ">
          <div class="card-body border border-success p-2 border-opacity-50  h-100">
            <h5 class="card-title"> ${eventos.name}</h5>
            <p class="card-text">  Date: ${eventos.date}</p>
            <p class="card-text">  Description: ${eventos.description}</p>
            <p class="card-text">  Category:${eventos.category}</p> 
            <p class="card-text">  Place: ${eventos.place}</p> 
            <p class="card-text">  Capacity: ${eventos.capacity}</p> 
            <p class="card-text">  Assistance:${eventos.assistance || eventos.estimate} </p>
            <p class="card-text"> Price:$ ${eventos.price}</p>             
          </div>
        </div>
    </div
    `
}


