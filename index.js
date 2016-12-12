function dwarfRollCall(dwarves) {
  var theList=("");
  for (var i=0; dwarves.length>i;i++){
  theList+=((i+1)+ ". " + dwarves[i]+" ")};
  return theList;
}

function summonCaptainPlanet(planeteerCalls){
var newCall=[];
for(var i=0; planeteerCalls.length>i;i++){
newCall.push(planeteerCalls[i].toUpperCase() + "!");}
return newCall;
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
  for(i=0;i<foods.length;i++){
    if(foods[i]==="cheddar"|| "gouda"|| "camembert")
      return arr[i]
      else{
        return "no cheese"
      }
    }
  }
}
