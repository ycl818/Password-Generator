// sample an element in collection
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

function generatePassword(options) {
  // defiine things user might want..
  const lowerCaseLetters = "love";
  const upperCaseLetters = lowerCaseLetters.toLocaleUpperCase();
  const numbers = "5201314";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  // create a collection to store things user picked up
  let collection = [];

  if (options.lowercase === "on") {
    collection = collection.concat(lowerCaseLetters.split(""));
  }

  if (options.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }

  if (options.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }

  if (options.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  // remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(
      (character) => !options.excludeCharacters.includes(character)
    );
  }
  if (collection.length === 0) {
    return "There is no vaild characters in your selection";
  }

  // start generating password
  let password = "";
  for (let i = 1; i <= options.length; i++) {
    password += sample(collection);
  }

  // return password
  return password;
}

module.exports = generatePassword;
