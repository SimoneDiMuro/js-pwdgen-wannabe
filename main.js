const name = prompt("Come ti chiami?")
const surname = prompt("Qual è il tuo cognome?")
const colour = prompt("Qual è il tuo colore preferito?")
const pw = name + surname +  colour

document.getElementById("pw_gen").innerHTML = pw + 21