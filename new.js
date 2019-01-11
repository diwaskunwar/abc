//inputing value of kelvin
var kelvin = 299;
console.log(kelvin)
// calculating celsius
const celsius=kelvin - 273;
console.log(celsius)
//calculating fahrenheit
let fahrenheit = celsius * (9/5) + 32 ;
console.log(fahrenheit)
//rounding up  decimal number in fahrenheit.
fahrenheit=Math.floor(fahrenheit);
console.log(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
var userName = 'jane';
userName = 'jane'?
    console.log('hello,jane!'): console.log('Hello!')

var userQuestion='Magic Eight Ball'
userQuestion ? 
console.log(`The user asked: ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8);
let eightBall='';
switch(randomNumber){
    case 0:
    eightBall='It is certain'
    break;
    case 1:
    eightBall='It is decidedly so'
    break;
    case 2:
    eightBall='Reply hazy try again'
    break;
    case 3:
    eightBall='Cannot predict now'
    break;
    case 4:
    eightBall='Do not count on it'
    break;
    case 5:
    eightBall='My sources say no'
    break;
    case 6:
    eightBall='Outlook not so good'
    break;
    case 7:
    eightBall='Signs point to yes'
    break;
}

console.log(eightBall)
let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = false;
var runnerAge = 19;
if( registeredEarly === true && runnerAge > 18){
  console.log(`Racer ${raceNumber} will race at 9:30 AM`);}
else if( registeredEarly === false && runnerAge > 18 ) { console.log(`Racer ${raceNumber} will race at 11:00 AM`);}
else if( runnerAge < 18 ) { console.log(`Racer ${raceNumber} will race at 12:30 AM`);}
else if( runnerAge === 18 ) { console.log(`Racer ${raceNumber} will see registration desk`);}

//
function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns) {
    return monitorCount(rows , columns)*200;
  }
  const totalCost = costOfMonitors(5,4);
  console.log(totalCost);
00

0

const getUserChoice= (userInput)=>{ userInput =userInput.toLowerCase(); if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
{return userInput;}
else{ console.log("there is an error")
}
};

const getComputerChoice => {const randomNumber =Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
          case 2:
          return 'scissors';
      }}
const determineWinner =( userChoie , computerChoice) => {
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
}
  if (userChoice === 'rock') 
  {
    if(userChoice === 'paper')}
    {
    
    return "computer won!";
    }
  else{
    return"user won!"
  }


/////////////////////const getSleepHours = day => {
  
  

  switch (day) {
    case 'monday':
      return 8
        break;
    case 'tuesday':
      return 7
        break;
    case 'wednesday':
      return 8
        break;
    case 'thrusday':
      return 7
        break;
    case 'friday':
      return 8
        break;
    case 'saturday':
      return 7
        break;
    case 'sunday':
      return 8
        break;
    default:
      return"error!"
  }
     };
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') +  getSleepHours('thrusday') +  getSleepHours('friday') +  getSleepHours('saturday') + getSleepHours('sunday') 
  console.log(getSleepHours('monday'));
  console.log(getActualSleepHours())
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7
  }
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdeallSleepHours();
   if ( actualSLeepHours === idealSleepHours)
  { console.log('The user got the perfect amount ')
  }
  else if ( actualSLeepHours > idealSleepHours)
  { console.log(`${ actualSleepHours - idealSleepHours} hours more sleep`)
  } 
   else if ( actualSLeepHours < idealSleepHours)
  { console.log(` The use should get some rest you got ${idealSleepHours- actualSleepHours} hours less sleep`)
  } 
    else{
      console.log("error!")
    }
  } 
  const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some(word => {
  return word.length < 6;
}));
const interestingWords = words.filter((word) => {return word.length > 5});
console.log(interestingWords.every((word) => {return word.length > 5}));

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
// OR nums.some(num => num < 0);
