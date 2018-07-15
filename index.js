// Write your code in this file!
function scuberGreetingForFeet(inputInt) {
  if (inputInt <= 400) {
    return "This one is on me!"
  }
  else if (inputInt > 2000 && inputInt < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (inputInt > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(inputDestination) {
  let answer;
  inputDestination === 'NYC' ? answer = 'Ok, sounds good.' : answer = 'No go.'
  return answer
}

function switchOnCharmFromTip(inputTip) {
  switch (inputTip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default :
      return 'Bye.';
  }
}
