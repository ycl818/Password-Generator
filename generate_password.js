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
    excludeCharacters: "dd",
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

  console.log(collection);
  // remove things user do not need

  // start generating password

  // return password
  console.log("This func will generate password");
}

generatePassword();
