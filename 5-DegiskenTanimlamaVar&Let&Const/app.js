// Var - Let - Const

//Değişken Nedir?

/*
Değişken, veri saklamak için kullanılan bir isimli alandır.
Yani bir değeri tutar ve sonra o değeri kullanmamızı sağlar.
*/

/* Hatırlayalım, JAVA'DA;
int, double, string, float, boolean gibi değerler vardı
int degiskenIsmı = deger;
int yas =23; gibi..
-------------------------------------------------------------------
JAVASCRİPT'TE değişken tanımlamak için;

var/let/const degiskenIsmı = degiskenDegeri;
seklinde olur.
let sayi=10; gibi..
*/
function selamVer(){
    var selam= "Herkese selam";
    console.log(selam);
}

selamVer();

// Peki bu değiskenleri neye göre belirleyeceğiz?
// var 'ı parantez içinde kullanınca (fonksiyonda tanımlanınca) functıon scope olur
//fakat dısında kullanınca global scope olur ve her yerde kullanılabilir fakat bu ram bellekte cok fazla yer kaplar
//let ve const :bloke özelliğine sahiptir.


var a=5;
var a=10;
 //NOT: var kullandığın değişken simini iki kez kullanabilirsin ama son yazdığın gecerli olur
 // let ve const ta böyle değildir 1 değişken isimini sadece 1 kere kullanabilirsin. (daha avantajlı ve temız)


const a=10;
a= 15; // yazsak bile consolda bu hata alacaktır cunku bir kere değişkene değer verilince
      // aynı değişken ismina baska değer atayamayız.
console.log(a);  //const (constant): sabit değişmez.


let b=5;
b=7;
b=12;
console.log(b); // let de değer değişsebilir fakat son değer ne yazıldıysa onu baz alır.

