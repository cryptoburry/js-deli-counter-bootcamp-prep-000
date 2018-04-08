var katzDeli = [];


function takeANumber(katzDeliLine, newPerson){
    katzDeliLine[katzDeliLine.length] = newPerson;
    return katzDeliLine.length+1;
}

function nowServing(katzDeliLine){
  if (katzDeliLine>0){
    firstUp = katzDeliLine[0];
    katzDeliLine.shift();
    return firstUp;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function 