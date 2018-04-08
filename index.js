var katzDeli = [];


function takeANumber(katzDeliLine, newPerson){
    katzDeliLine[katzDeliLine.length] = newPerson;
    return katzDeliLine.length+1;
}

function nowServing(katzDeliLine){
  if (katzDeliLine>0){
    firstInLine = katzDeliLine[0];
    katzDeliLine.shift
  }
}
