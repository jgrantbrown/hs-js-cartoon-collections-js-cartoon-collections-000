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
var cheese=["gouda","cheddar","camembert"];


for(var i=0;i<foods.length;i++){
for(var j=0;j<cheese.length;j++){
    if(foods[i]==cheese[j])
      return foods[i];


}
}
else{retun "no cheese!"}}
