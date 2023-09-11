console.log([window])

let parametro=location.search


let params= new URLSearchParams (parametro) //acceder al metodo URL
console.log(params)

let idEvents =params.get("parametro") //retorna el primer valor asociado al parámetro espceficado

let evento= data.events.find( detalle=> detalle._id===idEvents)
console.log(evento)

let cardDetails=document.getElementById("contDetails")

function crearCardDetail(cardDetails,eventos){
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
crearCardDetail(cardDetails,evento)