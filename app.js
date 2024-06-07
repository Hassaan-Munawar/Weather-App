function weather(){
    var getinp = document.getElementById('inp')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getinp.value}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
    .then(function (data){
        return data.json()
    })
    .then(function (data){

        var getdiv = document.getElementById('show')
        getdiv.innerHTML = `<div class="row d-flex justify-content-center py-5">
        <div class="col-md-8 col-lg-6 col-xl-5">
      
          <div class="card text-body" style=" border-radius: 35px;">
            <div class="card-body p-4">
      
              <div class="d-flex">
                <h6 class="flex-grow-1">${data.name}</h6>
                <h6>Feels Like: ${data.main.feels_like}<sup>o</sup>C</h6>
              </div>
      
              <div class="d-flex flex-column text-center mt-5 mb-4">
                <h6 class="display-4 mb-0 font-weight-bold">${data.main.temp}<sup>o</sup>C</h6>
                <span class="small" style="color: #868B94">${data.weather[0].main}</span>
              </div>
      
              <div class="d-flex align-items-center">
                <div class="flex-grow-1" style="font-size: 1rem;">
                  <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.wind.speed}Km/h</span>
                  </div>
                  <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.main.humidity}%</span></div>
                  <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 0.2h </span></div>
                </div>
                <div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                    width="100px">
                </div>
              </div>
      
            </div>
          </div>
      
        </div>
      </div>`
      getinp.value =''
    })
    .catch(function (data){
      console.log(data)
    })
}