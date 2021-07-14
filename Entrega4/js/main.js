
//Funcion para crear un objeto de una determinada inversion
function activo(img, nombreInstrumento, id, cotizacion, rendimiento, grafico) {
  this.img = img;
  this.id = id;
  this.nombreInstrumento = nombreInstrumento;
  this.cotizacion = cotizacion;
  this.rendimiento = rendimiento;
  this.grafico = grafico;
}
//************************************************************* */
//creo los distintos objetos

//acciones
const appl = new activo("./photos/cards/appl.png","Apple", "APPL", 135, 40, "https://es.tradingview.com/symbols/NASDAQ-AAPL/");
const meli = new activo("./photos/cards/meli.jpg","Mercado Libre", "MELI", 1595, 20, "https://es.tradingview.com/symbols/NASDAQ-MELI/");
const tsla = new activo("./photos/cards/tsla.jpg","Tesla Corp.", "TSLA", 850, 35, "https://es.tradingview.com/symbols/NASDAQ-TSLA/");
const dis = new activo("./photos/cards/dis.png","Walt Disney World Co.", "DIS", 170, 15, "https://es.tradingview.com/symbols/NYSE-DIS/");
const fb = new activo("./photos/cards/fb.jpg","Facebook", "FB", 350, "0.25", "https://es.tradingview.com/symbols/NASDAQ-FB/");
//criptos
const btc = new activo("./photos/cards/btc.jpg","Bitcoin", "BTCUSD", 32300, 25, "https://es.tradingview.com/chart/?symbol=BITSTAMP%3ABTCUSD");
const ltc = new activo("./photos/cards/ltc.jpg","Litecoin", "LTCUSD", 165, 10, "https://es.tradingview.com/symbols/LTCUSD/");
const eth = new activo("./photos/cards/eth.jpg","Etherium", "ETHUSD", 2953, 15, "https://es.tradingview.com/chart/?symbol=BITSTAMP%3AETHUSD");
//dolar
const usdD = new activo("./photos/cards/usd.jpg","Dolar Divisa", "USDD", 98, 10, "https://es.tradingview.com/symbols/USDARS/");
const usdB = new activo("./photos/cards/usd.jpg","Dolar Billete", "USDB", 103, 10, "https://es.tradingview.com/symbols/USDARS/");
const usdBlue = new activo("./photos/cards/usd.jpg","Dolar Blue", "USDBLUE", 177, 10, "https://es.tradingview.com/symbols/USDARS/");
// Creo los Array con los distintos grupos de activos

let cardAccionArray = [appl, meli, tsla, dis, fb]
let cardCriptoArray = [btc, ltc, eth]
let cardDivisaArray = [usdD, usdB, usdBlue]

//contenedor de los Arrays

let cardsContainer = [cardAccionArray, cardCriptoArray, cardDivisaArray]

/* guardamos en variables los contenedores padre de las cards: */
const cardAccion = document.querySelector("#cardAccion");
const cardCripto = document.querySelector("#cardCripto");
const cardDivisa = document.querySelector("#cardDivisa");
// Crear un arreglo de contenedores para asociar con las cards
const containers = [cardAccion, cardCripto, cardDivisa]


//**************************************************************************** */
/* creamos dinamicamente las cards: */

for (i = 0; i <= cardsContainer.length; i++) {
  let htmlCode = "";
    for (cards in cardsContainer[i]) {
        let card = cardsContainer[i][cards];
        let img = card["img"];
        let nombreInstrumento = card["nombreInstrumento"];
        let id = card["id"];
        let cotizacion = card["cotizacion"];
        let rendimiento = card["rendimiento"];
        let grafico = card["grafico"];
        htmlCode += `


<div class="card" class="col-sm">
<div class="card h-100">
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">${nombreInstrumento}</div>
<img class="card__img" src="${img}"alt="">
<p class="card__content">Denominacion: ${id}</p>
<p class="card__content">Cotizacion: USD ${cotizacion}</p>
<p class="card__content">Rendimiento Estimado: ${rendimiento}%</p>

<a href="${grafico}" class="card__button">Ver Grafico</a>
</div>
</div>
</div>
`;
    };
    containers[i].innerHTML = htmlCode
}


//**************************************************************************************************** */

//Guardo las variables de los nombres de los activos para simular
const simulador = document.querySelector("#opcionActivos")
const simImpInv = document.querySelector("#importeInversion")
//agrego en la tarjeta de simulacion los ID de los activos en los que puedo invertir

/* for (i = 0; i <= cardsContainer.length; i++) {
  let htmlCode = "";
  for (cards in cardsContainer[i]) {
    let card = cardsContainer[i][cards];
    let id = card["id"];
    htmlCode += `
    
    <option>${id}</option>
`;
};
  simulador[i].innerHTML = htmlCode
} */

/* y por ultimo las agregamos al documento html: */



  //************************************************************************************* */
 

    
 //Funcion simulador   

    
 function getDataSim(){
  
  let seleccion = document.getElementById("activoSel").value.toLowerCase();
  let importeSel = document.getElementById("importeInversion").value;
  const rendimientoAct = {
    appl: appl.rendimiento,
    meli: meli.rendimiento,
    tsla: tsla.rendimiento,
    dis: dis.rendimiento,
    fb: fb.rendimiento,
    btc: btc.rendimiento,
    ltc: ltc.rendimiento,
    eth: eth.rendimiento,
    

  }
 const activoSimulado = rendimientoAct[seleccion] 
 const rendimientoInversion = (activoSimulado/100) * importeSel
console.log(rendimientoInversion)
  
  document.getElementById("act").innerHTML = seleccion.toUpperCase()
  document.getElementById("imp").innerHTML = `$ `+ importeSel
  document.getElementById("ren").innerHTML = `$ `+ rendimientoInversion
  
  
}





    