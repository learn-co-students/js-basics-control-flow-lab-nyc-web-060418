// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  if (someValue < 200) {
    return "This one is on me!"
  } else if ( someValue > 2500) {
    return "No can do."
  } else {
    return "I will gladly take your thirty bucks."
  }
}


function ternaryCheckCity(city) {
 const message = (city === "NYC") ? "Ok, sounds good." : "No go.";
 return message;
}

function switchOnCharmFromTip(amount) {

  switch (amount) {
    case 'generous' :
    return "Thank you so much.";
    case 'not as generous' :
    return "Thank you.";
    default:
    return "Bye.";
  }

}
