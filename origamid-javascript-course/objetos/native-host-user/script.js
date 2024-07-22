/* 
Native 
Host
User
*/

// Checks if the function or property (element) exists
if (typeof element !== "undefined") {
  console.log("Exists");
} else {
  console.log("Doesn't exists.");
}

// Exercises in portuguese: -----------------------------

// Liste 5 objetos nativos
// String, Boolean, Number, Object, Array, Function

// Liste 5 objetos do browser
// Window, history, Document, HTMLCollection, NodeList

// Liste 2 Métodos, Propriedades ou Objetos presentes no Chrome que não existem no Firefox
// webkitHidden, webkitVisibilityState

if (typeof document.webkitHidden !== "undefined") {
  console.log("Exists");
}
