// PALINDROMA

let MiaParola =  prompt('scrivi una parola')

let palindromoCheck = parolaContrario();

if (palindromoCheck == MiaParola){
  console.log('parola palindorma');
}else{
  console.log('parola non palindroma');
}


function parolaContrario(){

  let contrario = '';
  for(let i = MiaParola.length -1; i>=0; i-- ){
    contrario+= MiaParola[i]
  }
  return contrario;
}