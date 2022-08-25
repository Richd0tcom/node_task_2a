

const details = document.getElementById('weather-details')
const weatherForm = document.getElementById('weather-form')

const weatherValue = document.getElementById('inputLarge').value

async function displayWeather(e){
    const weatherValue = document.getElementById('inputLarge').value
    console.log(weatherValue);
    e.preventDefault()
     const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=3c6bb061f8d84eb3a5a134932222508&q=${weatherValue}`);
     
     const data = await res.json()
     console.log(data);

     const html =   `
     <table class="table table-hover">
     <thead>
       <tr>
         <th scope="col">Location</th>
         <th scope="col">${data.location.name}</th>
       </tr>
     </thead>
     <tbody>
       <tr class="">
         <th scope="row">Degree</th>
         <td>${data.current.temp_f}F</td>
         
       </tr>
       <tr>
         <th scope="row">Type of weather</th>
         <td>${data.current.condition.text}</td>
       </tr>
       <tr>
         <th scope="row">Humidity</th>
         <td>${data.current.humidity}</td>
       </tr>
       
     </tbody>
   </table>
     
     `

    details.innerHTML =html;
    this.reset()
}
weatherForm.addEventListener('submit',displayWeather);
