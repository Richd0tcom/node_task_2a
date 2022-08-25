

const suggestion1 = document.querySelector('.menuItem1')
const suggestion2 = document.querySelector('.menuItem2')

const airData = document.getElementById('airline-data');

const airportForm = document.querySelectorAll('.airport-form')


// let names = ["BTC","XRP","ETH","BCH","ADA","XEM","LTC","XLM","TRX","MIOTA","DASH","EOS","XMR","NEO","QTUM","BTG","ETC","ICX","LSK","XRB","OMG","SC","BCN","ZEC","XVG","BCC","DCN","BTS","PPT","DOGE","BNB","KCS","STRAT","ARDR","SNT","STEEM","USDT","WAVES","VEN","DGB","KMD","DRGN","HSR","KIN","ETN","GNT","REP","VERI","ETHOS"]
let pp = [];
let from;
let to;
// let html;

   async function getAirports(){
    const res = await fetch(`http://localhost:5000/airports`)
    console.log(res)
    const data = await res.json();
    console.log(data)
    pp.push(...data.data)
    console.log(pp)
   }


getAirports()


function findMatches(wordToMatch, airports) {
    return airports.filter( port => {
    // here we need to figure out if the cat breed matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return port.iso_country.match(regex);

    
});}


  function displayMatches() {
    console.log(this.value)
    console.log(this.id)
  const matchArray = findMatches(this.value, pp);
  console.log(matchArray)
  const html = matchArray.map(pt => {

    return `
      <li class="dropdown-item port" data-name="${pt.name}" data-long="${pt.longitude_deg}" data-lat="${pt.latitude_deg}">
        ${pt.name}
      </li>
    `;
    
  }).join('');

  console.log(typeof html)
  if(this.id == 'from'){
    suggestion1.innerHTML = html
    return
  }else if(this.id =="to"){
    suggestion2.innerHTML = html
    return
  }
 }
 
//  if (e.target.matches('.port')) {
        
//     airport.value = e.target.dataset.value;
//     catid.value = e.target.dataset.uid;
//     console.log(e.target.dataset.uid)
//     console.log(catid)
//   }

function updateUI(fm, too){
      
  if(fm!= undefined && too!=undefined && fm!== null && too!== null){
    const dist = calcCrow(parseInt(fm[1]), parseInt(fm[0]), parseInt(too[1]), parseInt(too[0]))
    const ammountToPay  = dist*10
    localStorage.setItem('ammountToPay', ammountToPay.toString())
    airData.innerHTML = `
    <tr class="table-active" >
    <th scope="row">${fm[2]}</th>
    <td>${too[2]}</td>
    <td>${dist}</td>
    <td>$${ammountToPay}</td>
    </tr>
    `
  }
  return
}

function calculate1(e){
  console.log(e.target.dataset)
  let longitude = e.target.dataset.long;
  let latitude = e.target.dataset.lat;
  let name = e.target.dataset.name;
  from = [longitude, latitude, name ]
  updateUI(from, to);
}
function calculate2(e){
  console.log(e.target.dataset)
  let long2 = e.target.dataset.long;
  let lat2 = e.target.dataset.lat;
  let name = e.target.dataset.name;
  to = [long2, lat2, name]
  updateUI(from, to);
}

function toRad(Value) 
    {
        return Value * Math.PI / 180;
    }

function calcCrow(lat1, lon1, lat2, lon2) 
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    

    
    
    

// updateUI(from, to);
airportForm.forEach(item=> item.addEventListener('keyup',displayMatches));
airportForm.forEach(item=> item.addEventListener('input',displayMatches));
suggestion1.addEventListener('click', (e)=>{
  calculate1(e)
  updateUI()
})
suggestion2.addEventListener('click', (e)=>{
  calculate2(e)
  updateUI()
})



