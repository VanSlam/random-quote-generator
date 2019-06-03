//Zach Van Slambrook
// Create the array of quote objects and name it quotes
let quotes = [
{
  quote : "Together we can change the world, just one random act of kindness at a time.",
  source : " Ron Hall",
  job : ', Journalist'
},
{
  quote : 'Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.',
  source : " Diana",
  job : ', Princess'
},
{
  quote : 'goals transfrom a random walk into a chase.',
  source : " Mihaly Csikszentmihalyi",
  job : ', psychologist'
},
{
  quote : 'The past cannot be changed. The future is yet in your power.',
  source : " Unknown",
  job : ' '
},
{
  quote : 'Only I can change my life. No one can do it for me.',
  source : " Carol Burnett",
  job : ', actress'
}
]


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);                           // Gets a random number between 0 and 4
  var randomQuote = quotes[randomNumber];                                     // Retrieves the random quote
  return randomQuote;
}
function getRandomColor(){
  var randomR = Math.floor(Math.random() * 255);                            // Gets a random number between 1  and 254
  var randomG = Math.floor(Math.random() * 255);
  var randomB = Math.floor(Math.random() * 255);
  var randomRGB = 'rgb(' + randomR + ',' + randomG + ',' + randomB + ')';   // Retrieves the RBG Value
  return randomRGB;
}

function timeout(){
  printQuote();                 // times out after 30 seconds and prints Quote again
}



// Create the printQuote funtion and name it printQuote
function printQuote(){
  var string = '<p class="quote">' + getRandomQuote().quote + '</p>' + '<p class="source">' + getRandomQuote().source + ' ' + getRandomQuote().job + '</p>';     // Structures sentence
  document.getElementById('quote-box').innerHTML = string;                                                                                              // Loads string
  document.body.style.backgroundColor = getRandomColor();
  
  var timeoutID = setTimeout(timeout, 30000);                                                                                              // Changes background color                                                                                                                                        // times out after 30 seconds
}




// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
