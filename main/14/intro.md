[&#129188; späť](../../README.md)</br>

## Modul 13: Javascript selektovanie elementov, zoznamenie sa so style objektom, ktori obsahuje color, backgorundColor, fontSize.... a použitie metódy addEventListener(prvy parameter event, druhy parameter vytvorena funkcia co sa ma udiať), innerHTML

### 13. hodina

#### Javascript selektovanie elementov
- [JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp)</br>
ako sa vyťahujú dáta z objektu</br>
```js
const objekt = {
    vek: 25,
    farba: 'black'
}
console.log(objekt.vek) // 25
console.log(objekt.farba) // 'black'
console.log(objekt.vek, objekt.farba) // 25 'black'
```
ako sa vyťahujú dáta z pola</br>
```js
const objekt = [
    25, 'black'
]
console.log(objekt[0]) // 25
console.log(objekt[1]) // 'black'
console.log(objekt[0], objekt[1]) // 25 'black'
```
predstava toho ako vyťahovať parametre nejako takto vyzerá DOM pre elementy</br>
```js
const document = {
    seleketnutyElement1: {
        style: {
            color: 'black',
            backgroundColor: 'white',
            fontSize: '16px'
        },
        innerHTML: 'bla bla text'
    }
    seleketnutyElement2: {
        style: {
            color: 'black',
            backgroundColor: 'white',
            fontSize: '16px'
        },
        innerHTML: 'bla bla text'
    }
}
```
selektovanie pomocou id</br>
```js
const selektElementPomocouId = document.getElementById("mojeId")
```
selektovanie pomocou html tagu</br>
```js
const selektElementPomocouId = document.getElementsByTagName("p")
```
selektovanie pomocou class</br>
```js
const selektElementPomocouId = document.getElementsByClassName("nazovClassy")
```
selektovanie pomocou css selektorov</br>
```js
const selektElementPomocouId = document.querySelectorAll(".mojaClass")
const selektElementPomocouClass = document.querySelectorAll("#mojeId")
const selektElementPomocouTagu = document.querySelectorAll("a")
const selektElementPomocouAtributu = document.querySelectorAll("a[class]")
const selektHoverEfekt = document.querySelectorAll("a:hover")
```
#### Javascript style objekt
pridavanie štýlov pomocou javascriptu</br>
```js
const selektElementPomocouClass = document.querySelectorAll(".mojaClass")[0]
selektElementPomocouClass.style.color = 'red' // zmenim selektnutému elementu farbu textu na červenú
selektElementPomocouClass.style.backgroundColor = 'red' // zmenim selektnutému elementu farbu pozadia na červenú
selektElementPomocouClass.style.fontSize = '25px' // zmenim selektnutému elementu veľkosť písma na 25px
```
zmena textu pomocou javascriptu</br>
```html
<p class='mojaClass'>text ktori bude nahradeny</p>
```
```js
const selektElementPomocouClass = document.querySelectorAll(".mojaClass")[0]
console.log(selektElementPomocouClass.innerHTML) // výstup bude text ktori bude nahradeny
selektElementPomocouClass.innerHTML = 'tento text nahradi aktuálny'
console.log(selektElementPomocouClass.innerHTML) // výstup bude tento text nahradi aktuálny
```
príklad ako kontrolovať udalosť, že sa kliklo na element</br>
```html
<div class='btn'>tlacidlo</div>
```
ak kliknem na text tlacidlo udeje sa to ze v konzole vypise text `na element sa kliklo`</br>
```js
const element = document.querySelectorAll('btn')[0]
element.addEventListener('click',coSaMaStatPoKliku)
function coSaMaStatPoKliku() {
    console.log('na element sa kliklo')
}
```
príklad ako pomocou HTML a Javascriptom vytvoriť tlačidlo, ktoré po kliknutí zmení výšku druhému elementu a zmení priehľadnosť textu</br>
[príklad](index.html)</br>
