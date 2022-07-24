const suu = 'Siz notogri sonlarni kirittingiz!!!   Iltimos qayta urinib koring';

const suu3 = 'Siz togri sonlarni kirittingiz!  Sizning xotirangiz juda yaxshi ekan'

const res = Math.floor(Math.random() * 100000000);;

alert('eslab qoling:   ' + res)

const check = prompt('Eslab qolganingizni yozing');

if (check.length >= 9) {
  document.getElementById('demo').innerHTML = 'Siz kop son kiritib yubordingiz!';
}else if (check.length == 8) {
  if (check == res){
    document.getElementById('demo').innerHTML = suu3;
  } else {
    document.getElementById('demo').innerHTML = suu;
  }
}else if (check.length == 0){
  document.getElementById('demo').innerHTML = 'Siz son kiritmadingiz!';
}else if (check.length < 8) {
  document.getElementById('demo').innerHTML = 'Sizga korsatilgan sonlardan kamroq son kirittingiz!';
}
