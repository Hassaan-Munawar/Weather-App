function weather(){
  var getinp = document.getElementById('inp')
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getinp.value}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
  .then(function (response){
      return response.json()
  })
  .then(function (data){

      var getdiv = document.getElementById('show')
      getdiv.innerHTML = `<div class="row d-flex justify-content-center py-2">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card text-body">
          <div class="card-body p-4">
    
            <div class="d-flex">
              <h6 class="flex-grow-1">${data.name}, ${data.sys.country}</h6>
              <h6>Feels Like: <span class="highlight">${data.main.feels_like}<sup>o</sup>C</span></h6>
            </div>
    
            <div class="d-flex flex-column text-center mt-5 mb-4">
              <h6 class="display-4 mb-0 font-weight-bold">${data.main.temp}<sup>o</sup>C</h6>
              <span class="small">${data.weather[0].description}</span>
            </div>
    
            <div class="d-flex align-items-center">
              <div class="flex-grow-1" style="font-size: 1rem;">
                <div><i class="fas fa-wind fa-fw" style="color: #666;"></i> <span class="ms-1">${data.wind.speed} Km/h</span></div>
                <div><i class="fas fa-tint fa-fw" style="color: #666;"></i> <span class="ms-1">${data.main.humidity}% Humidity</span></div>
                <div><i class="fas fa-compress-arrows-alt fa-fw" style="color: #666;"></i> <span class="ms-1">${data.main.pressure} hPa</span></div>
                <div><i class="fas fa-sun fa-fw" style="color: #666;"></i> <span class="ms-1">Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</span></div>
                <div><i class="fas fa-moon fa-fw" style="color: #666;"></i> <span class="ms-1">Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span></div>
              </div>
              <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="100px">
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </div>`
    getinp.value =''
  })
  .catch(function (error){
    console.log(error)
  })
}
