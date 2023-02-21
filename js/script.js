/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina la concatenazione 
delle variabili + un numero a caso scelto da voi
*/

let userName = prompt("Qual è il tuo nome?");
console.log(userName);

let userSurname = prompt("Qual è il tuo cognome?");
console.log(userSurname);

let userFavouriteColor = prompt("Qual è il tuo colore preferito?");
console.log(userFavouriteColor);

document.writeln(userName + userSurname + userFavouriteColor + 17);
