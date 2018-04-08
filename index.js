var katzDeli = [];


function takeANumber(katzDeliLine, newPerson){
    katzDeliLine[katzDeliLine.length] = newPerson;
    return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var firstUp = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstUp}.`;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var lineString = "The line is currently: ";
  for(i=0;i<katzDeliLine.length;i++){
    if(i===0){
      lineString+=`1. ${katzDeliLine[i]} `;
    }
    elseif(i===katzDeliLine.length-1){
      
    }
  }
}