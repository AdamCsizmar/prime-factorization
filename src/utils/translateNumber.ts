function numberToSpell(int: number, b?: number) {
  if (b == null) {
    b = 1;
  }
  var s = "";
  if (int > 999999) {
    if (int > 2000000) {
      s += numberToSpell(Math.floor(int / 1000000), 2);
      s += "millió-";
    } else {
      if (int == 2000000) {
        s += "kétmillió";
      } else {
        s += "egymillió";
      }
    }
  }
  if (int > 999) {
    if (int > 2000) {
      s += numberToSpell(Math.floor(int / 1000), 2);
      s += "ezer-";
    } else {
      if (int == 2000) {
        s += "kétezer";
      } else {
        s += "ezer";
      }
    }
  }
  if (int > 99) {
    let szazas = Math.floor((int % 1000) / 100);
    switch (szazas) {
      case 9:
        s += "kilenc";
        break;
      case 8:
        s += "nyolc";
        break;
      case 7:
        s += "hét";
        break;
      case 6:
        s += "hat";
        break;
      case 5:
        s += "öt";
        break;
      case 4:
        s += "négy";
        break;
      case 3:
        s += "három";
        break;
      case 2:
        s += "két";
        break;
    }
    if (szazas > 0) {
      s += "száz";
    }
  }
  let egyes = int % 10;
  if (int % 100 > 9) {
    var tizes = Math.floor((int % 100) / 10);
    switch (tizes) {
      case 1:
        if (egyes > 0) {
          s += "tizen";
        } else {
          s += "tíz";
        }
        break;
      case 2:
        if (egyes > 0) {
          s += "huszon";
        } else {
          s += "húsz";
        }
        break;
      case 3:
        s += "harminc";
        break;
      case 4:
        s += "negyven";
        break;
      case 5:
        s += "ötven";
        break;
      case 6:
        s += "hatvan";
        break;
      case 7:
        s += "hetven";
        break;
      case 8:
        s += "nyolcvan";
        break;
      case 9:
        s += "kilencven";
        break;
    }
  }
  if (egyes > 0) {
    switch (egyes) {
      case 1:
        s += "egy";
        break;
      case 2:
        if (b == 1) {
          s += "kettő";
        } else {
          s += "két";
        }
        break;
      case 3:
        s += "három";
        break;
      case 4:
        s += "négy";
        break;
      case 5:
        s += "öt";
        break;
      case 6:
        s += "hat";
        break;
      case 7:
        s += "hét";
        break;
      case 8:
        s += "nyolc";
        break;
      case 9:
        s += "kilenc";
        break;
    }
  }

  if (s.endsWith("-")) s = s.substring(0, s.length - 1);

  return s;
}

export default numberToSpell;
