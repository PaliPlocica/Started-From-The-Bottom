[&#129188; späť](../README.md)</br>

## Modul 9: position relative, absolute, fixed, transform

### 8. hodina
ôsma hodina
<!-- ([ôsma hodina](lesson)):</br> -->

#### zaujímavé linky
- [zakladne info o position](https://www.w3schools.com/css/css_positioning.asp)</br>
- [ďalšie info o position](https://css-tricks.com/almanac/properties/p/position)</br>

- [zakladne info o transform 2D](https://www.w3schools.com/css/css3_2dtransforms.asp)</br>
- [zakladne info o transform 3D](https://www.w3schools.com/css/css3_3dtransforms.asp)</br>
- [ďalšie infom o transform](https://www.w3schools.com/cssref/css3_pr_transform.asp)</br>

#### ikonky a generátor
- [icomoon generátor ikoniek](https://icomoon.io)</br>
- [ikonky font awesome](http://fontawesome.io/icons)</br>
- [ikonky pictos](http://pictos.cc/)</br>
- [ikonky fontello](http://fontello.com/)</br>

- [vkladanie ikoniek do HTML](https://dev.w3.org/html5/html-author/charref)</br>
- [vkladanie ikoniek do HTML a do Javascriptu](https://unicode-table.com/en)</br>

- [znaky ako text ktore neodporucam vkladat do html](https://www.copypastecharacter.com/symbols)</br>

#### Homework/Domáca úloha</br>
vytvorte si folder s nazvom domaca-uloha-cislo potom do neho si skopiruj základnú kostru, ktoru si stiahneš [zakladna kostra webky](../default.zip) nezabudni to cele odzipovať už som tam pridal core.css file a aj nalinkoval ho do index.html v tom core.css file je zakladny css ktori nemusite písať za každým, svoje vlastné css stale budete písať do filu style.css... 
- 1.časť na základe tohto obrázka sa pokúste vytvorit html kostru a nastylovat jednotlivé krabičky podľa [tohto obrázka](homework1/homework.png)

[tu je riešenie, ktoré si pozrite až keď budete mať dokončenú túto domácu úlohu. Nezabudnite si písať poznámky čo ste nepochopili](homework/solution)<br>

- 2.časť ak máte hotovu tu prvú časť pokračujte v index.html a pod to cele čo máte v body si vytvorte linku s antributom class s nazvom link a do vnutra pridajte nejaky text a vytvotre si hlavny nadpis do neho pridajte atribut class s nazvom title-main
```
<a href="#" class="link">linkaaaaaaa</a>
<h1 class="title-main">nadpissssssssssss</h1>
```
- prejdite do filu style.css a seleknite si naraz link a title-main cez ciarku a kedze chceme aby tieto dve texty boli rodicia a povedali svojim ikonkam aky priestor maju zaberat tak im pridame position relative, farbu textu ciernu, farbu pozadia žltú, rmaček 1px solid čierna, veľkosť písma 50px a odtlačime to z lava s tím že zaberaten element priestor 50px
```
.link,
.title-main {
  position: relative;
  color: black;
  background-color: yellow;
  border: 1px solid black;
  font-size: 50px;
  padding-left: 40px;
}
```
- kedze niekedy chceme aby sa neklikalo na cele pozadie ikonky ktoru si onedlho vytvorime tak pre linku vynulujeme ten padding z lava a pridame margin nech nezabera linka ten priestor z lava
```
.link {
  margin-left: 40px;
  padding-left: 0;
}
```
- teraz pouzijeme pseudo selektory pre linku aj pre nadpis cez ktore vytvorime nase ikonky najprv im povieme nech plavaju nad svojimi rodičmi cize position absolute nejaku velkosť písma a pozíciu z hora 50% čiže 50% výšky svojho rodiča nejaku poziciu z ľava a cez transform odpočítame 50% výšky ikonky teda font-size od výšky nášho rodiča a z index definuje prioritu umiestnenia na stránke či je nad alebo pod niečim...
```
.link:after,
.title-main:after {
  position: absolute;
  font-size: 30px;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  z-index: 1;
}
```
- kedže neviem či by ste ešte zvládly vygenerovať si ikonky a všetko zopakovať to čo na hodine tak namiesto vygenerovaných ikoniek si vieme vložiť vlastný znak cez content ciže si selektneme linku a cez pseudo selektor vložime content napr znak 1 pred text kedže linka ma použítý margin a tak musíme odpočítať ten margin z ľava aby sme to umiestnili vedľa textu ja som si vložil číslo 1 vedľa linky a vedľa nadpisu číslo 2
```
.link:after {
  content: '1';
  left: -35px;
}

.title-main:after {
  content: '2';
}
```
[tu je riešenie, ktoré si pozrite až keď budete mať dokončenú túto domácu úlohu. Nezabudnite si písať poznámky čo ste nepochopili](homework/solution)<br>
