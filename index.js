// Code your solution in this file

function findMatching(collection, check) {
  return collection.filter(function(name) {
    return name.toLowerCase() === check.toLowerCase();
  });
}

function fuzzyMatch(collection, check){
  return collection.filter(function(name) {
    return name.toLowerCase().indexOf(check.toLowerCase()) === 0 ;
  });
}
