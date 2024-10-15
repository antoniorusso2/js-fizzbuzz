//STAMPARE I NUMERI DA 1 A 100
  //inizializzazione variabile 'num' senza valori all'esterno;
  //'for' loop che si ripete 100 volte partendo da 0 ed aggiungendo 1 ad ogni ciclo
  for (let i = 0; i < 100; i++) {
    //nel blocco di codice inserire il valore della precedente variabile 'num' dichiarata all'esterno ed aggiungere 1 [num = i + 1]
    let num = i + 1;
    // console.log(num)//numbers da 1 a 100

    // IF = remaiderThree AND [&&] remainderFive = 0 => stampare 'FizzBuzz';
    // if (num % 3 === 0 && num % 5 === 0) {
    // num = 'FizzBuzz' // string
    // }
    // IF = verifica multiplo di 3
    //utilizzo dell'operatore % [remainder] in base al numero dato dal loop; [remainderThree = num % 3 => valori number da 0 a 2] //quindi se remainderThree = 0 stampare 'Fizz'
    if (num % 3 === 0) {
      num = 'Fizz' // string
      
    }
    //utilizzo dell'operatore % [remainder] in base al numero dato dal loop; [remainderFive = num % 5 => valori number da 0 a 4] //quindi se remainderFive = 0 stampare 'Buzz'
    if (num % 5 === 0){
      num = 'Buzz' //string
    }

    console.log(num) // multipli di 3 e 5 sostituiti con Fizzbuzz
  }
    

