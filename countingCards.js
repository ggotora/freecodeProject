var count = 0;
var msg = "";

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 7:
    case 8:
    case 9:
      count = count + 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
     count--;
     break;
  }
  if (count > 0){
    msg = "Bet"
  }else {
    msg = "Hold"
  }
  
  return count + " "+msg;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');