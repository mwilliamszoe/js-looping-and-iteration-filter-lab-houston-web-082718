// ## Write a Function To Case-insensitively Match `string`s

// Write `findMatching`- This function takes an array of `drivers` and a `string` as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}


// Write `fuzzyMatch` - This function takes an array of `drivers` and a `string` as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

// Write `matchName` - This function takes an array of `drivers` and a `string` as arguments. In this function, each element of the `drivers` array is a JavaScript object that has a property of `name`. The function should return each element whose `name` property matches the provided `string` argument.


function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

