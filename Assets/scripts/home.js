const contCards= document.getElementById('contCards')
function createCard (events){
    return  `<div class="col d-flex justify-content-center pt-2 pb-2"> 
                  <div class="card text-center mb-3 border border-success p-2 mb-2 border-opacity-50" style="width: 16rem;">
                      <img src="${events.image}" class="card-img-top p-2 imgcard" alt="costume_party">
                      <div class="card-body d-flex flex-column justify-content-between">
                          <h5 class="card-title">${events.name}</h5>
                          <p class="card-text"> ${events.description}}</p>
                          <div class=" d-flex justify-content-between align-items-center bg-body-secondary">
                            <p class="mb-0">$${events.price}</p>
                            <a href="./Assets/pages/details.html" class="btn btn-primary">Details</a>
                          </div>  
                      </div>
                  </div>
            </div>`            
}
console.log(data.events)

function printCard (data,contain){
    let frontcard=""
for (let i = 0; i < data.events.length; i++) {    
   frontcard+=createCard (data.events[i])   
}
contain.innerHTML=frontcard
}
printCard(data,contCards)

