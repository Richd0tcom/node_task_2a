const suggestions = document.querySelector('.menu-items')
const airportForm = document.querySelectorAll('.airport-form')
airportForm.forEach(item=> item.addEventListener('keyup',displayMatches));
airportForm.forEach(item=> item.addEventListener('input',displayMatches))

// let names = ["BTC","XRP","ETH","BCH","ADA","XEM","LTC","XLM","TRX","MIOTA","DASH","EOS","XMR","NEO","QTUM","BTG","ETC","ICX","LSK","XRB","OMG","SC","BCN","ZEC","XVG","BCC","DCN","BTS","PPT","DOGE","BNB","KCS","STRAT","ARDR","SNT","STEEM","USDT","WAVES","VEN","DGB","KMD","DRGN","HSR","KIN","ETN","GNT","REP","VERI","ETHOS"]
   
   async function getAirports(){
    const res = await fetch(`http://localhost:5000/airports`)
    console.log(res)
    const data = await res.json();
    console.log(data)
    return data.data
   }

const pp = getAirports()


function findMatches(wordToMatch, airports) {
    return airports.filter( port => {
    // here we need to figure out if the cat breed matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return port.name.match(regex);
    
});}


  function displayMatches() {
    console.log(this.value)
  const matchArray = findMatches(this.value, pp);
  const html = matchArray.map(pt => {


    // const regex = new RegExp(this.value, 'gi');
    // const catName = ct.name.replace(regex, `<span class="bg-[#ffc600]">${this.value}</span>`);
    return `
      <li class="dropdown-item port" data-uid="${pt.id}" data-value="${pt.name}">
        ${pt.name}
      </li>
    `;
    
  }).join('');
  suggestions.innerHTML = html;
 }

//  if (e.target.matches('.port')) {
        
//     airport.value = e.target.dataset.value;
//     catid.value = e.target.dataset.uid;
//     console.log(e.target.dataset.uid)
//     console.log(catid)
//   }
