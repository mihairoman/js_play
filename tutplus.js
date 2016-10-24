//1. An older way of writing cusotm html in JS
var customHtml = [
    '<div class="jumbotron">',
    '<h2 class="title">This is the title</h2>',
    '<div class="content">This is some quality content here.</div>',
    '</div>'
].join();
console.log(customHtml);

//////////NOW let's use TEMPLATE STRINGS
var title = "My New Title";

var htmlContent = `<div class="jumbotron">
                      <h2 class="title">${title}</h2>
                      <div class="content">This is some quality content here.</div>
                   </div>`;

console.log(htmlContent);

/************************************************/
/**2. Let's elimintate if/else conditions with hashmaps **/
//BAD WAY
function getWeatherCondition(condition) {
  if (condition === 'sunny') {
    console.log('sunny');
  } else if (condition === 'rainy') {
    console.log('rainy');
  } else if (condition === 'snow') {
    console.log('snow');
  } else {
    console.log('unknown condition');
  }
}

//Improved version. Using a condition map
function getWeatherConditionImprv(condition) {
  var conditionMap = {
    sunny: 'sunny',
    rainy: 'rainy',
    snow: 'snow'
  }
  return console.log(conditionMap[condition]) || 'unknown condition';
}
/** In case of a large number of conditions in the map  we can import the condition map from another file:
    import conditionMap from './conditions';
*/
getWeatherConditionImprv('sunny');

/************************************************/
//3. Convert multiple arguments of a function in a config object
//BAD way
function formatNumber(value, decimals, asPercent, prefix, suffix) {
  var formattedNumber = value;
  //some logic
  return formattedNumber;
}

formatNumber(10, 2, false, '', '%');

//BEtter way
function formatNumber({value = 0, decimals = 2, asPercent = false, prefix = '', suffix = ''}) {
  var formattedNumber = value;
  //some logic
  return formattedNumber;
}

var num = 22;
formatNumber({value: num, suffix: '%'});

/************************************************/
//4. Pre-bind arguments to functions
function doOperation(name = 'Default', args = {}) {
}

function findSport() {
  return Promise.resolve('Voleyball');
}

function getShoppingList() {
  return Promise.resolve({ milk: 1, eggs: 10, oranges:5});
}

findSport().then(args => {
  doOperation('playSport', args);
});

getShoppingList().then(args => {
  doOperation('buyGroceries', args);
});

/////Improved
var play = doOperation.bind(null, 'playSport');
var buy = doOperation.bind(null, 'buyGroceries');

findSport().then(play);
getShoppingList().then(buy);

/************************************************/
/**.5 Break complex conditionals */
/* IF SOME 'IF CONDITION' HAS SOME COMPLEX STATEMENTS WE CAN PLACE THEM IN AN ARRAY OF FUNTIONS */
var age;
var conditions = [
  ()=> { return age > 0 && age < 20; },
  ()=> { return age > 19 && age < 31; }
];
//The tutor then uses a function from the 'lodash' library '_.some(condtions,c=>c())' which takes an array of functions and
//a predicate function and will stop at the first one which returns true

/************************************************/
/*6. USE INLINE IIFE for complex initialization */
//Let's imagine we have some initialization code

function readSettings() {
  //read settings from somewhere
  return ;
}

var settings = readSettings();
var apiUrl = `https://${settings.apiDomain}:${settings.apiPort}/someApi`;

var defaultConfig = {
  apiUrl : apiUrl,
  timeZone  : settings.timeZone,
  account : settings.account,
  theme : settings.theme
}

//BETTER OPTION
var defaultConfig = (()=> {
  var settings = readSettings();
  var apiUrl = `https://${settings.apiDomain}:${settings.apiPort}/someApi`;
  return  {
    apiUrl : apiUrl,
    timeZone  : settings.timeZone,
    account : settings.account,
    theme : settings.theme
  };

  //we can move the readSettings() function in here as well
})();

/************************************************/
/*7. HOISTING TO FOCUS on important code */
//LONG STORY SHORT, WE CAN TAKE THE LONG CODE/LOGIC WRITTEN INSIDE SOME OTHER FUNCTION
//AND FORMAT IT AS OTHER SMALLER FUNCTIONS WHICH WE CAN PUT AT THE END OF THE MAIN LOGIC;
//BECAUSE OF JAVASCRIPT HOISTING, MEANING THAT THE ENGINE WILL ALWAYS HAVE ACCESS TO THOSE functions
//EVEN IF THEY ARE DECLARED AFTER THEY'RE BEING USED
