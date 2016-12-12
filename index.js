function dwarfRollCall(dwarves) {
  var theList=("");
  for (var i=0; dwarves.length>i;i++){
  theList+=((i+1)+ ". " + dwarves[i]+" ")};
  return theList;
}

function summonCaptainPlanet(planeteerCalls){
var newCall=[];
for(var i=0; planeteerCalls.length>i;i++){
newCall+=(planeteerCalls[i] + "! ");}
return newCall.toUpperCase().slice(0,-1);
}


function longPlaneteerCalls(words) {
  for (var i=0;i<words.length;i++){
    if(words[i].length<=4)
    return false;
    else{
      return true
    }
  }
}

function findTheCheese (foods) {
}
