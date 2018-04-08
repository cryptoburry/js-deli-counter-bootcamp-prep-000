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

function currentLine(katzDeliLine){
  lineString = "The line is currently: "
  for(var i=0;i<katzDeliLine.length;i++){
    var spot = i+1;
    lineString += `${spot}. ${katzDeliLine[i]}`;
  }
}