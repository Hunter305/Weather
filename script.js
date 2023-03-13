async function getCountries(){
    let data=await fetch("https://restcountries.com/v2/all")
    let res=await data.json();
    
    for(let i=0;i<res.length;i++){
        document.querySelector(".row").innerHTML+=`<div class=col"><div class="card text-bg-light text-center" >
        <div class="card-header">${res[i].name}</div>
        <div class="card-body pcol">
          <img src="${res[i].flag}" class="card-img-top" alt="...">
          <h5 class="card-title">capital :${res[i].capital}</h5>
          <h5 class="card-title">region :${res[i].region}</h5>
          <h5 class="card-title">country code :${res[i].alpha3Code}</h5>
          <button class="btn btn-primary" onclick="getName(event)" value="${res[i].capital}">Click for Weather</button>  
        </div>
      </div>
      </div>`
    }
    
}
// need to change value kept it for testing
getCountries()
function getName(e){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=f0b263d32cde29f757f407f03b4ff622&units=metric`).then(res=>res.json()).then(data=>alert(`The temprature of it's capital is ${data.main.temp} celcius \nThe sky is ${data.weather[0].main} ` ))
  
}