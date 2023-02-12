function spellNumber(number: number, isRound?: number) {
  let spelledNumber = "";

  if (isRound === null) {
    isRound = 1;
  }

  if (number >= 1000000) {
    spelledNumber += spellNumber(Math.floor(number / 1000000), 2) + "millió-";
    number = number % 1000000;
    if (number === 0) {
      return spelledNumber.substring(0, spelledNumber.length - 1);
    }
  }

  if (number >= 1000) {
    spelledNumber += spellNumber(Math.floor(number / 1000), 2) + "ezer-";
    number = number % 1000;
    if (number === 0) {
      return spelledNumber.substring(0, spelledNumber.length - 1);
    }
  }

  if (number > 99) {
    let hundreds = Math.floor((number % 1000) / 100);
    switch (hundreds) {
      case 9:
        spelledNumber += "kilenc";
        break;
      case 8:
        spelledNumber += "nyolc";
        break;
      case 7:
        spelledNumber += "hét";
        break;
      case 6:
        spelledNumber += "hat";
        break;
      case 5:
        spelledNumber += "öt";
        break;
      case 4:
        spelledNumber += "négy";
        break;
      case 3:
        spelledNumber += "három";
        break;
      case 2:
        spelledNumber += "két";
        break;
    }
    if (hundreds > 0) {
      spelledNumber += "száz";
    }
  }

  let ones = number % 10;

  if (number % 100 > 9) {
    var tens = Math.floor((number % 100) / 10);
    switch (tens) {
      case 1:
        if (ones > 0) {
          spelledNumber += "tizen";
        } else {
          spelledNumber += "tíz";
        }
        break;
      case 2:
        if (ones > 0) {
          spelledNumber += "huszon";
        } else {
          spelledNumber += "húsz";
        }
        break;
      case 3:
        spelledNumber += "harminc";
        break;
      case 4:
        spelledNumber += "negyven";
        break;
      case 5:
        spelledNumber += "ötven";
        break;
      case 6:
        spelledNumber += "hatvan";
        break;
      case 7:
        spelledNumber += "hetven";
        break;
      case 8:
        spelledNumber += "nyolcvan";
        break;
      case 9:
        spelledNumber += "kilencven";
        break;
    }
  }
  if (ones > 0) {
    switch (ones) {
      case 1:
        spelledNumber += "egy";
        break;
      case 2:
        if (isRound === 1) {
          spelledNumber += "kettő";
        } else {
          spelledNumber += "két";
        }
        break;
      case 3:
        spelledNumber += "három";
        break;
      case 4:
        spelledNumber += "négy";
        break;
      case 5:
        spelledNumber += "öt";
        break;
      case 6:
        spelledNumber += "hat";
        break;
      case 7:
        spelledNumber += "hét";
        break;
      case 8:
        spelledNumber += "nyolc";
        break;
      case 9:
        spelledNumber += "kilenc";
        break;
    }
  }

  if (spelledNumber.endsWith("-")) spelledNumber = spelledNumber.substring(0, spelledNumber.length - 1);

  return spelledNumber;
}

export default spellNumber;
