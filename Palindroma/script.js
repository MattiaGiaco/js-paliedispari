// PALINDROMA

let MiaParola = prompt('scrivi una parola')

let palindroma = parolaContrario(MiaParola);

if (MiaParola == palindroma){
  console.log('palindroma')
}else{
  console.log('non palindroma')
}

function parolaContrario(parola){
  
  let arrParola = [''];

  for (let i=0; i<parola.lenght; i--){
    arrParola += parola[i];
  }
  return arrParola;


}