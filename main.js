var money,
  dairyNumber,
  dairyBreed, dairyRate, dairyPrice,
  milk,
  fields,
  milkPrice;
var dairyType = [];

//FUNCTIONS
//runs when game is opened
window.onload = function() {
  setTypes();
  setStart();
}

//runs every second
window.setInterval(function() {
  sellMilk();
}, 1000);

//prevents highlighting upon doubleclick
document.addEventListener('mousedown', function (event) {
   if (event.detail > 1) {
     event.preventDefault();
   }
 }, false);

 //sets the dairyType array
function setTypes() {
  dairyType.push({dairyBreed: 'Milking Shorthorn', dairyRate: 6.34, dairyPrice: 1000});
  dairyType.push({dairyBreed: 'Jersey', dairyRate: 6.85, dairyPrice: 1200});
  dairyType.push({dairyBreed: 'Guernsey', dairyRate: 7.47, dairyPrice: 1500});
  dairyType.push({dairyBreed: 'Ayrshire', dairyRate: 8.14, dairyPrice: 1900});
  dairyType.push({dairyBreed: 'Brown Swiss', dairyRate: 8.90, dairyPrice: 2400});
  dairyType.push({dairyBreed: 'Holstein', dairyRate: 9.88, dairyPrice: 3000});
}

//initializes new game
function setStart() {
  getDairyType(0);

  money = 0;
  dairyNumber = 1;
  fields = 1;
  milkPrice = 4;
  milk = 0;

  document.getElementById("milk").innerHTML = milk.toFixed(2);
  document.getElementById("money").innerHTML = money.toFixed(2);
  document.getElementById("dairyNumber").innerHTML = dairyNumber;
  document.getElementById("cowSpace").innerHTML = fields * 10;
}

//sets the dairy type attributes
function getDairyType(index) {
  var type = dairyType[index];
  dairyBreed = type.dairyBreed;
  dairyRate = type.dairyRate;
  dairyPrice = type.dairyPrice;
  document.getElementById("dairyBreed").innerHTML = dairyBreed;
  document.getElementById("dairyRate").innerHTML = dairyRate;
  document.getElementById("dairyPrice").innerHTML = dairyPrice;
}

//gets milk from cows
function milkCows() {
  milk += dairyNumber * dairyRate;
  document.getElementById("milk").innerHTML = milk.toFixed(2);
}

//buys another dairy cow
function buyDairy() {
  if (money >= dairyPrice) {
      dairyNumber += 1;
      money -= dairyPrice;
      document.getElementById("dairyNumber").innerHTML = dairyNumber;
      document.getElementById("money").innerHTML = money.toFixed(2);
  }
}

//automatically sells milk
function sellMilk() {
  var ran = Math.floor((Math.random() * 4) + 1)
  if (milk >= 1 && ran == 4) {
      money += milkPrice;
      milk--;
      document.getElementById("milk").innerHTML = milk.toFixed(2);
      document.getElementById("money").innerHTML = money.toFixed(2);
  }
}




