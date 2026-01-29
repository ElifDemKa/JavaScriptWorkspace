
//--------------SCOPE (KAPSAM)----------------------
/* Scope, bir değişkenin nereden erişilebilir olduğunu ifade eder.

🔹----Global Scope
Her yerden erişilir. ( Global scope olmasını istediğiniz değişkenin
hiçbir süslü parantez içerisinde olmaması gerekir. Diğer türlü consolda hata alınabilir.)
(İyi yönleri var fakat kullanılmadığında ram bellekte gereksiz yer kaplar.)
let x = 10;



🔹----Function Scope
Sadece fonksiyon içinde geçerli. (Function scope içerisinde tanımladığımız degişkenlere
sadece süslü parantez içerisinden erşilebilir. Dişina çıkıldığında erişilemez. )

function test() {
  let y = 5;
}




🔹-----Block Scope (let, const)
Sadece { } bloğu içinde geçerli.

if (true) {
  let z = 3;
}
⚠️ var block scope değildir (function scope’tur).

*/
function method1(){

        var a=5;  // function scope 

    if(true){
        var b=10; // bloke scope (parantez içerisindeki süslü parantez içindeki scope)
    }

    while(true){

    }

    for(let i =0 ; i<=10; i++ ){}

    
}

