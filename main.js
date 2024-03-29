
/* 問題① ウェブサイト見ないと思い出せませんでした。*/
const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});
console.log(result);


/* 問題② 時間かかりましたが何も見ず頑張りました。*/
const a = [2020, 2021];

function leapYear(a) {
  if ((a % 100 !== 0) && (a % 4 == 0)) {
    return `${a}はうるう年です`;
  }
  else if (a % 400 == 0) {
    return `${a}はうるう年です`;
  }
  else {
    return `${a}はうるう年ではありません`;
  }
}
console.log(leapYear(a[0]));
console.log(leapYear(a[1]));