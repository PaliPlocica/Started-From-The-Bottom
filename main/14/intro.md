[&#129188; späť](../../README.md)</br>

## Modul 13: Javascript selektory

### 13. hodina

#### Javascript selektory
- [príklady s operátormi](https://www.w3schools.com/jsref/jsref_operators.asp)</br>
- [aritmetické, priraďovacie operátory](https://www.w3schools.com/js/js_operators.asp)</br>
- [porovnávacie a logické operátory](https://www.w3schools.com/js/js_comparisons.asp)</br>
```js
console.log('16' == 16) // true lebo neporovnáva typ t.j. string a číslo
console.log('16' === 16) // false lebo porovnáva typ t.j. string a číslo
// opak
console.log('16' != 16) // true lebo neporovnáva typ t.j. string a číslo
console.log('16' !== 16) // false lebo porovnáva typ t.j. string a číslo
```

#### Javascript dátové typy
- [dátové typy](https://www.w3schools.com/js/js_datatypes.asp)</br>
```js
const length = 16;                              // Number
const lastName = "Johnson"                      // String
const x = {firstName:"John", lastName:"Doe"}    // Object
const cars = ["Saab", "Volvo", "BMW"]           // Array

```
Pridaním čísku k stringu sa stáva z čísla string</br>
```js
const cislo16BudeString = 16 + "Volvo"
console.log(cislo16BudeString)
var textPriradenyTextu = "16" + "Volvo"
console.log(textPriradenyTextu)
var x = "Volvo" + 16 + 4 
console.log(x) //Volvo164
```

#### Javascript typeof()
```js
console.log(typeof(""))                     // Returns "string"
console.log(typeof("John"))                 // Returns "string"
console.log(typeof("John Doe"))             // Returns "string"
console.log(typeof(undefined))              // undefined
console.log(typeof(null))                   // object

console.log(null === undefined)             // false
console.log(null == undefined)              // true
console.log(typeof(true))                   // Returns "boolean"
console.log(typeof(false))                  // Returns "boolean"
console.log(typeof({name:'John', age:34}))  // Returns "object"
console.log(typeof([1,2,3,4]))              // Returns "object" (not "array", see note below)
console.log(typeof(null))                   // Returns "object"
console.log(typeof(function myFunc(){}))    // Returns "function"
```

#### Javascript scope
[príklad](https://www.w3schools.com/js/js_scope.asp)</br>

#### Javascript if()
[príklad](https://www.w3schools.com/js/js_if_else.asp)</br>
```js
// podmienka ktora ak je splnená tj. true vykoná sa to čo je definované v {}
if(/*podmienka*/) {
    // sem pisem co chcem aby sa vykonalo ak je splnena podmienka v zatvorkách ()
}
// priklad
const funkcia = function(pocetKolobeziek) {
    if(pocetKolobeziek >= 6) {
        console.log('zlava 30%')
    }
    else if(pocetKolobeziek >= 4) {
        console.log('zlava 20%')
    }
    else if(pocetKolobeziek < 4) {
        console.log('zlava 10%')
    }
}
funkcia(10)
```

#### Javascript switch()
[príklad](https://www.w3schools.com/js/js_switch.asp)</br>
```js
const funkcia = function(pocetKolobeziek) {
    switch(true) {
        case (pocetKolobeziek >= 6):
            console.log('zlava 30%')
            break
        case (pocetKolobeziek >= 4):
            console.log('zlava 20%')
            break
        case (pocetKolobeziek < 4):
            console.log('zlava 10%')
            break
        default:
            console.log('žiadna')
    }
}
funkcia(10)
```

#### Javascript for()
[príklad](https://www.w3schools.com/js/js_loop_for.asp)</br>
```js
for(let i = 0; i < 5; i++) {
    console.log('mam sa fajne toľko krát sa zopakujem: ' + i)
    // toto je taký istý console log ako hore využitie es6
    console.log(`mam sa fajne toľko krát sa zopakujem ${i}`)
}
```
