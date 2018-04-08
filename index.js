var katzDeli = [];


function takeANumber(katzDeliLine, newPerson){
    katzDeliLine[katzDeliLine.length] = newPerson;
    return katzDeliLine.length+1;
}

function nowServing(katzDeliLine){
  if (katzDeliLine>0){
    return katzDeliLine[0];
    katzDeliLine.shift();
  }
  else{
    
  }
}
