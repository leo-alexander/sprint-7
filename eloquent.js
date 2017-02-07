1. Minimum

function min(a, b) {
  if (a < b) {
    return a;
  }
  else {
    return b;
  }
}

2. Recursion

function isEven(n) {
  if (n == 0) {
    return true;
  }
  else if (n == 1) {
    return false;
  }
  else if (n < 0) {
    return isEven(-n);
  }
  else {
    return isEven(n - 2);
  }
}

3. Bean Counting

function countBs(str) {
  var count = 0;
  for (i = 0; i < str.length; i++)
    if (str.charAt(i) == "B") {
      count++;
    }
  return count;
}

function countChar(str, char) {
  var count = 0;
  for (i = 0; i < str.length; i++)
    if (str.charAt(i) == char) {
      count++;
    }
  return count;
}
