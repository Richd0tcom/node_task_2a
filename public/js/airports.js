

const suggestion1 = document.querySelector('.menuItem1')
const suggestion2 = document.querySelector('.menuItem2')
suggestion1.addEventListener('click', calculate1)
suggestion2.addEventListener('click', calculate)
const airportForm = document.querySelectorAll('.airport-form')


// let names = ["BTC","XRP","ETH","BCH","ADA","XEM","LTC","XLM","TRX","MIOTA","DASH","EOS","XMR","NEO","QTUM","BTG","ETC","ICX","LSK","XRB","OMG","SC","BCN","ZEC","XVG","BCC","DCN","BTS","PPT","DOGE","BNB","KCS","STRAT","ARDR","SNT","STEEM","USDT","WAVES","VEN","DGB","KMD","DRGN","HSR","KIN","ETN","GNT","REP","VERI","ETHOS"]
let pp = [];
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
      <li class="dropdown-item port" data-uid="${pt.id}" data-long="${pt.longitude_deg} data-lat="${pt.latitude_deg}">
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

function calculate1(e){
  let longitude = e.target.dataset.long 
  let latitude = e.target.dataset.lat
    
}
function calculate1(e){}
//   e.target.datatset.long
// }
airportForm.forEach(item=> item.addEventListener('keyup',displayMatches));
airportForm.forEach(item=> item.addEventListener('input',displayMatches));
