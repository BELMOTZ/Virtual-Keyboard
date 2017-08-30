var caps = false;
var shift = false;

function myFunction(key) {
  var text = document.getElementById("display").innerHTML;
  if (key == "Shift") {
    if (shift == true) {
      shift = false;
      document.getElementById("shfl").style.backgroundColor = "black";
      document.getElementById("shfr").style.backgroundColor = "black";
    }else {
      shift = true;
      document.getElementById("shfl").style.backgroundColor = "dimgray";
      document.getElementById("shfr").style.backgroundColor = "dimgray";
    }
  }else if (key == "Caps Lock") {
    if (caps) {
      caps = false;
      document.getElementById("caps").style.backgroundColor = "black";
    }else {
      caps = true;
      document.getElementById("caps").style.backgroundColor = "dimgray";
    }
  }else if (key == "Space") {
    document.getElementById("display").innerHTML += ' ';
  }else if (key == "Tab") {
    document.getElementById("display").innerHTML += "\t";
  }else if (key == "Enter") {
    document.getElementById("display").innerHTML += "<br />";
  }else if (key == "Backspace") {
    document.getElementById("display").innerHTML = text.substr(0, text.length - 1);
  }else {
    if (shift) {

      document.getElementById("display").innerHTML += key.toUpperCase();
      document.getElementById("shfl").style.backgroundColor = "black";
      document.getElementById("shfr").style.backgroundColor = "black";
      shift = false;
    }else if (caps) {
      document.getElementById("display").innerHTML += key.toUpperCase();
    }else {

      document.getElementById("display").innerHTML += key.toLowerCase();
    }
  }
}

function split(key) {
  if (shift) {
    if (key == "`")  document.getElementById("display").innerHTML += "~";
    else if (key == "1")  document.getElementById("display").innerHTML += "!";
    else if (key == "2")  document.getElementById("display").innerHTML += "@";
    else if (key == "3")  document.getElementById("display").innerHTML += "#";
    else if (key == "4")  document.getElementById("display").innerHTML += "$";
    else if (key == "5")  document.getElementById("display").innerHTML += "%";
    else if (key == "6")  document.getElementById("display").innerHTML += "^";
    else if (key == "7")  document.getElementById("display").innerHTML += "&";
    else if (key == "8")  document.getElementById("display").innerHTML += "*";
    else if (key == "9")  document.getElementById("display").innerHTML += "(";
    else if (key == "0")  document.getElementById("display").innerHTML += ")";
    else if (key == "-")  document.getElementById("display").innerHTML += "_";
    else if (key == "=")  document.getElementById("display").innerHTML += "+";
    else if (key == "[")  document.getElementById("display").innerHTML += "{";
    else if (key == "]")  document.getElementById("display").innerHTML += "}";
    else if (key == "\\")  document.getElementById("display").innerHTML += "|";
    else if (key == ";")  document.getElementById("display").innerHTML += ":";
    else if (key == "'")  document.getElementById("display").innerHTML += '"';
    else if (key == ",")  document.getElementById("display").innerHTML += "&lt;";
    else if (key == ".")  document.getElementById("display").innerHTML += "&gt;";
    else if (key == "\/")  document.getElementById("display").innerHTML += "?";
    document.getElementById("shfl").style.backgroundColor = "black";
    document.getElementById("shfr").style.backgroundColor = "black";
    shift = false;
  } else {
    document.getElementById("display").innerHTML += key;
  }
}
