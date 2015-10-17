var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_-+={}[];:,.<>?'; function genpw(alphabet, length){
  var password = '';
  for (var i=0; i<length; i++) {
    var index = Math.floor(Math.random() * alphabet.length);
    password += alphabet[index];
  }
  return password;
}
var pw = ''; for (var i=0; i<8; i++) {
  pw += genpw(chars, 4) + ' ';
}
console.log(pw);
