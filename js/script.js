//STAMPARE I NUMERI DA 1 A 100
  //inizializzazione variabile 'num' senza valori all'esterno;
  //'for' loop che si ripete 100 volte partendo da 0 ed aggiungendo 1 ad ogni ciclo
  let num ;
  for (i = 0; i < 100; i++) {
    //nel blocco di codice inserire il valore della precedente variabile 'num' dichiarata all'esterno ed aggiungere 1 [num = i + 1]
     num = i + 1;
    // console.log(num)//numbers da 1 a 100

    //PER I MULTIPLI DI 3 STAMPARE Fizz
    //inizializzazione varibile 
    //utilizzo dell'operatore % [remainder] in base al numero dato dal loop; [remainderThree = num % 3 => valori number da 0 a 2] //quindi se remainderThree = 0 stampare 'Fizz'
    let remainderThree = num % 3;
    
    //PER I MULTIPLI DI 5 STAMPARE Buzz
    // ELSE = verifica multiplo di 5
    //utilizzo dell'operatore % [remainder] in base al numero dato dal loop; [remainderFive = num % 5 => valori number da 0 a 4] //quindi se remainderFive = 0 stampare 'Buzz'
    let remainderFive = num % 5;

    // IF = verifica multiplo di 3
    if (remainderThree === 0) {
      num = 'Fizz' // string
      
    }
    else if (remainderFive === 0){
      num = 'Buzz' //string
    }

    // IF = remaiderThree AND [&&] remainderFive = 0 => stampare 'FizzBuzz';
    if (remainderFive === 0 && remainderThree === 0){
      num = 'FizzBuzz' // string
    }
    console.log(num) // multipli di 3 e 5 sostituiti con Fizzbuzz
  }
    

