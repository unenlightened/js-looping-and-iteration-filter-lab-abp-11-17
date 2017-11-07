// Code your solution in this file

function findMatching(collection, name){
  const matching = collection.filter(function(name){return name===name;});
  return matching;
}
