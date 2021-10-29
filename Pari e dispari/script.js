let sceltaUtente = parseInt(prompt('scegli pari o dispari'))

let numUtente = parseInt(prompt('scegli un numero da 1 a 5'))
console.log('Num. Utente:', numUtente);

let numCpu = randomNum(1,5)
console.log('Num. Cpu:', numCpu);

let somma = numCpu + numUtente;
console.log(somma);

if(pariDispari(somma) == sceltaUtente){
  console.log('hai vinto');
}else{
  console.log('hai perso');
}


function randomNum(min, max){

  return Math.floor(Math.random() * (max - min + 1) + min);

}

function pariDispari(n){

  if(n % 2 === 0){
    return 'pari'
  }

  return 'dispari'
}