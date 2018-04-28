[&#129188; späť](../../README.md)</br>

## Modul 12: Javascript normy, hodnoty, var, const, let, function() {},

### 12. hodina

#### Javascript hodnoty a vkladanie do parametra
možné hondoty ktoré vieme uložiť do parametra:</br>
1. `string` t.j. text je definovaný tak že je obalený znakom sigelquote 'bla bla text' alebo doublequote "bla bla text" alebo ak chcem viacriadkový tak tento znak \`bla bla text\`</br>
```js
var text1 = 'bla bla text'
var text2 = "bla bla text"
var text3 = `bla bla text`
```
2. `Číslo` sa používa na matematické úkony napr.</br>
```js
var cislo1 = 10 + 10
var cislo2 = 10 - 10
```
3. `Pole` sa definuje zátvorkami `[]` tu je píklad ako si vytvoriť parameter do ktorého si vložim pole stringov, takto</br>
```js
var auto = ["Tesla", "Volvo", "BMW"]
```
to isté viem spraviť s číslami, atď.</br>
```js
var cena = [100, 200, 300]
```
3. `Funkcia` napr. ukázali sme si definovanú funkciu `console.log(parameterKtoriChcemVypisat)`, ktorá slúži na vypísovania si hodnôt do vystupnej konozoli na zistenie čo je uložené v danom parametri, vlastnú funkcia sa definuje názvom a za názvom nasleduju zátvorky `()` a za zatvorkami nasleduju kučeravé zátvorky `{}` takto</br>
```js
function nazovFunkcie(/*sem píšm nazov parametra ktorí očakáva funkcia*/) {
    return  //sem píšem to čo chcem aby sa vykonalo
}
nazovFunkcie()
```
- priklad funkcie definovanej s názvom a očakávaným parametrom ktorí je následne po zavolaní vypísany do konzoly prehliadača</br>
```js
function nazovFunkcie(ocakavanyParameter) {
    return  console.log(ocakavanyParameter) // výstup v prehliadači v konzole bude: 'tento string bude vypisany v prehlidaci v konzole'
}
nazovFunkcie('tento string bude vypisany v prehlidaci v konzole')
```
- priklad vloženia anonýmnej funkcie do parametra definovaný ako nazovFunkcie</br>
```js
var nazovFunkcie = function(/*sem píšm nazov parametra ktorí očakáva funkcia*/) {
    return //sem píšem to čo chcem aby sa vykonalo
}
nazovFunkcie()
```
- priklad vloženia anonýmnej funkcie do parametra s názvom a očakávaným parametrom ktorí je následne po zavolaní vypísany do konzoly prehliadača</br>
```js
var nazovFunkcie = function(ocakavanyParameter) {
    return  console.log(ocakavanyParameter) // výstup v prehliadači v konzole bude: 'tento string bude vypisany v prehlidaci v konzole'
}
nazovFunkcie('tento string bude vypisany v prehlidaci v konzole')
```
4. `Objekt` sa definuje zátvorkami `{}` kde vo vnutri definujem zoznam paramtrov do ktorích môžeme vložiť cez znak `:` napr. string, number, object(objekt), array(pole), function(funkcie) takto</br>
```js
var object = {
    type: 'tesla',
    kus: 2,
    farba: {
        pekna: 'red',
        skareda: 'black'
    },
    cars: ["Saab", "Volvo", "BMW"],
    funkcia: function(ocakavanyParameter) {
        return  console.log(ocakavanyParameter)
    }
}
```

#### Javascript var, const, let
1. `var` univerzálne definovanie parametra, slúži na označenie že daný text za ním je parameter</br>
```js
var nazovParametra = 'bla bla string'
console.log(nazovParametra) // výstup v prehliadači v konzole bude: 'bla bla string'
```
2. `const` slúži na označenie že daný text za ním je parameter, ktorí nebude v kóde prepísaný</br>
```js
const nazorvParametraKtoriNebudeNikdyPrepisany = 'bla bla text ktori nebude nikdy prepisany inym textom'
console.log(nazorvParametraKtoriNebudeNikdyPrepisany) // výstup v prehliadači v konzole bude: 'bla bla text ktori nebude nikdy prepisany inym textom'
```
príklad ktorí nikdy nestane ak použijem const</br>
```js
const nazorvParametraKtoriNebudeNikdyPrepisany = 'bla bla text ktori nebude nikdy prepisany inym textom'
nazorvParametraKtoriNebudeNikdyPrepisany = 'bla bla text ktorí sa nenahradí'
console.log(nazorvParametraKtoriNebudeNikdyPrepisany) // výstup v prehliadači v konzole bude: Uncaught TypeError: Assignment to constant variable. at <anonymous>:2:42'
```
3. `let` slúži na označenie že tento parameter bude niekde v kóde prepísaný a to takto</br>
```js
let nazovParametraKtoriBudePrepisany = 'bla bla text ktorí prepíšem číslom'
console.log(nazorvParametraKtoriNebudeNikdyPrepisany) // výstup v prehliadači v konzole bude: 'bla bla text ktorí prepíšem číslom'
nazovParametraKtoriBudePrepisany = 10
console.log(nazorvParametraKtoriNebudeNikdyPrepisany) // výstup v prehliadači v konzole bude: 10
```

#### Javascript linkovanie
1. buď píšem javascript priamo v html stránke [príklad](lesson/bezLinky/pes.html)</br>
2. alebo si oddelím javascript a uložím ho do filu napr. s názvom main.js a v html nalinkujem cestu k filu [príklad](lesson/cezLinky)</br>

