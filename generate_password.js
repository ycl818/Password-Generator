// sample an element in collection
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

function generatePassword() {
  // defiine things user might want..
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toLocaleUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  // define dummy data
  const options = {
    length: "12",
    lowercase: "on",
    uppercase: "on",
    numbers: "on",
    excludeCharacters: "13579",
  };
  console.log("options", options);

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

  // start generating password
  let password = "";
  for (let i = 1; i <= options.length; i++) {
    password += sample(collection);
  }
  console.log("password", password);

  // return password
  console.log("This func will generate password");
}

generatePassword();
