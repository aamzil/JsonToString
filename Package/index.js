// JsonToObject une fonction qui prend en paramètre un jsonString et le convertir en String pour une manipulation de données facile

function JsonToObject(jsonString) {
  // try catch pour gérer les exceptions en cas d'un erreur au niveau de la conversion
  try {
    const obj = JSON.parse(jsonString);
    return obj;
  } catch (error) {
    console.log(error.message);
  }
}

// exportation de la foction pour l'utilisation au fichier ../Test/script.js
module.exports = JsonToObject;
