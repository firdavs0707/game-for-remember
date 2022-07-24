const suu = 'Siz notogri yozdingiz!!!';

const suu3 = 'Siz togri yozdingiz!'

const res = Math.random();

alert('eslab qoling:   ' + res)

const check = prompt('Eslab qolganingizni yozing');

if (check == res){
  document.getElementById('demo').innerHTML = suu3;
} else {
  document.getElementById('demo').innerHTML = suu;
}
