var caps = false;
var shift = false;

function myFunction(key) {
  var text = document.getElementById("display").value;
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
    document.getElementById("display").value += ' ';
  }else if (key == "Tab") {
    document.getElementById("display").value += "\t";
  }else if (key == "Enter") {
    document.getElementById("display").value += "\n";
  }else if (key == "Backspace") {
    document.getElementById("display").value = text.substr(0, text.length - 1);
  }else {
    if (shift) {
      document.getElementById("display").value += key.toUpperCase();
      document.getElementById("shfl").style.backgroundColor = "black";
      document.getElementById("shfr").style.backgroundColor = "black";
      shift = false;
    }else if (caps) {
      document.getElementById("display").value += key.toUpperCase();
    }else {
      document.getElementById("display").value += key.toLowerCase();
    }
  }
document.getElementById('display').scrollTop = document.getElementById('display').scrollHeight;
}

function split(key) {
  if (shift) {
    if (key == "`")  document.getElementById("display").value += "~";
    else if (key == "1")  document.getElementById("display").value += "!";
    else if (key == "2")  document.getElementById("display").value += "@";
    else if (key == "3")  document.getElementById("display").value += "#";
    else if (key == "4")  document.getElementById("display").value += "$";
    else if (key == "5")  document.getElementById("display").value += "%";
    else if (key == "6")  document.getElementById("display").value += "^";
    else if (key == "7")  document.getElementById("display").value += "&";
    else if (key == "8")  document.getElementById("display").value += "*";
    else if (key == "9")  document.getElementById("display").value += "(";
    else if (key == "0")  document.getElementById("display").value += ")";
    else if (key == "-")  document.getElementById("display").value += "_";
    else if (key == "=")  document.getElementById("display").value += "+";
    else if (key == "[")  document.getElementById("display").value += "{";
    else if (key == "]")  document.getElementById("display").value += "}";
    else if (key == "\\")  document.getElementById("display").value += "|";
    else if (key == ";")  document.getElementById("display").value += ":";
    else if (key == "'")  document.getElementById("display").value += '"';
    else if (key == ",")  document.getElementById("display").value += "<";
    else if (key == ".")  document.getElementById("display").value += ">";
    else if (key == "\/")  document.getElementById("display").value += "?";
    document.getElementById("shfl").style.backgroundColor = "black";
    document.getElementById("shfr").style.backgroundColor = "black";
    shift = false;
  } else {
    document.getElementById("display").value += key;
  }
  document.getElementById('display').scrollTop = document.getElementById('display').scrollHeight;
}
