// Code your solution in this file

function findMatching(collection, name) {
  return collection.filter(function(check) {
    return check.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(collection, name){
  return collection.filter(function(check) {
    return check.toLowerCase().indexOf(name.toLowerCase()) === 0;
  });
}

function matchName(collection, name) {
  return collection.filter(function(check){
      return console.log(collection);
  });

}
