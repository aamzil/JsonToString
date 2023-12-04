// l'appel de la fonction
const JsonToObject = require("jsonparser-demo");

// un exemple d'un JsonString
const jsonString = `
{
  "film": "John Wick",
  "date": 2022,
  "genre": ["Action", "Crime", "Drame"]
}
`;

// affichage d'output JSON --> String
console.log(JsonToObject(jsonString));
