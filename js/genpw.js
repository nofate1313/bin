var segments = process.argv[2] || 8;
var segmentSize = process.argv[3] || 4;
var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_-+={}[];:,.<>?';

function genpw(alphabet, length){
  var password = '';
  for (var i=0; i<length; i++) {
    var index = Math.floor(Math.random() * alphabet.length);
    password += alphabet[index];
  }
  return password;
}

var pw = '';
for (var i=0; i < segments; i++) {
  pw += genpw(characters, segmentSize) + ' ';
}
console.log(pw);
