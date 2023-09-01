const contCards= document.getElementById('contUp') //html
function createCard (events){
    return  `<div class="col d-flex justify-content-center pt-2 pb-2"> 
                  <div class="card text-center mb-3 border border-success p-2 mb-2 border-opacity-50" style="width: 16rem;">
                      <img src="${events.image}" class="card-img-top p-2 imgcard" alt="costume_party">
                      <div class="card-body d-flex flex-column justify-content-between">
                          <h5 class="card-title">${events.name}</h5>
                          <p class="card-text"> ${events.description}}</p>
                          <div class=" d-flex justify-content-between align-items-center bg-body-secondary">
                            <p class="mb-0">$${events.price}</p>
                            <a href="../pages/details.html" class="btn btn-primary">Details</a>
                          </div>  
                      </div>
                  </div>
            </div>`            
}
function printCard (up,contain){
    let frontcard=""
for (let i = 0; i < up.length; i++) {    
   frontard+=createCard (up[i])   
}
contain.innerHTML=frontcard
}

printCard(filter(data),contCards)

function filter (data){
        let up=data.events.filter(evento=>evento.date>data.currentDate)
        return up 
}
console.log(filter(data))





