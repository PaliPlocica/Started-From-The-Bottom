[&#129188; späť](../README.md)</br>

## Modul 8: text-transform, text-shaddow, text-decoration, background: linear-gradient, box-shadow a box-shadow s inset

### 8. hodina
ôsma hodina
<!-- ([ôsma hodina](lesson)):</br> -->

#### zaujímavé linky
- [zakladne info o text tranform](https://css-tricks.com/almanac/properties/t/text-transform)</br>
- [zakladne info o text shaddow](https://css-tricks.com/almanac/properties/t/text-shadow)</br>
- [ďalšie info o shaddow](https://www.w3schools.com/css/css3_shadows.asp)</br>
- [zakladne info o text decoration](https://css-tricks.com/almanac/properties/t/text-decoration)</br>
- [ďalšie info o text decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp)</br>
- [zakladne info o gradients](https://www.w3schools.com/css/css3_gradients.asp)</br>
- [gradients generator](http://www.css3factory.com/linear-gradients)</br>
- [ďalší gradients generator](http://www.colorzilla.com/gradient-editor/)</br>

- [zakladne info o box shaddow](https://css-tricks.com/almanac/properties/b/box-shadow)</br>
- [generator box-shaddow](https://www.cssmatic.com/box-shadow)</br>

#### Homework/Domáca úloha</br>
vytvorte si folder s nazvom domaca-uloha-cislo potom do neho si skopiruj základnú kostru ktoru si stiahneš [zakladna kostra webky](../default.rar) nezabudni to cele odrarovať už som tam pridal core.css file a aj nalinkoval ho do index.html v tom core.css file je zakladny css ktori nemusite písať za každým svoje vlastné css stale budete písať do filu style.css... vytvorte si do index.html body kostru stránky nasledovne:
- vytvorte si tri p html tagy a vložte do nich nejaky text a vytvorte pre nich atribut class nasledovne prve p bude mat classu s nazvom uppercase ďalšie lowercase a posledné capitalize a pod posledne p vytvorte hr element
```
	<p class="uppercase">This is some text.</p>
	<p class="lowercase">This is some text.</p>
	<p class="capitalize">This is some text.</p>
	<hr>
```
- vytvorte si tri h1 html tagy a vložte do nich nejaky text a vytvorte pre nich atribut class nasledovne prve h1 bude mat classu s nazvom shaddow-first ďalšie shaddow-second a posledné shaddow-third a pod posledne h1 vytvorte hr element
```
	<h1 class="shaddow-first">Text-shadow effect 1!</h1>	
	<h1 class="shaddow-second">Text-shadow effect 2!</h1>	
	<h1 class="shaddow-third">Text-shadow effect 3!</h1>
	<hr>
```
- vytvorte si tri p html tagy a vložte do nich nejaky text a vytvorte pre nich atribut class nasledovne prve p bude mat classu s nazvom text-overline ďalšie text-line-through a posledné text-underline a pod posledne p vytvorte hr element
```
	<p class="text-overline">This is some text.</p>
	<p class="text-line-through">This is some text.</p>
	<p class="text-underline">This is some text.</p>
	<hr>
```
- vytvorte div html tag s atributom class s nazvom grad1 a pod neho hr element
```
	<div class="grad1"></div>
	<hr>
```
- vytvorte dva div html tagy ktore budu mat class box-shaddow pre obidva a pre prve bude ďalšia classa box-shaddow-first a druhe div bude mať box-shaddow-second
```
	<div class="box-shaddow box-shaddow-first"></div>
	<div class="box-shaddow box-shaddow-second"></div>
```
- prejdime do súboru style.css a tam si selektnime element s classou uppercase a pridajme mu že text nech je veľkým písmenom
```
.uppercase {
  text-transform: uppercase;
}
```
- selektnime element s classou lowercase a pridajme mu že text nech je malým písmenom
```
.lowercase {
  text-transform: lowercase;
}
```
- selektnime element s classou capitalize a pridajme mu nech jeho každé slovo ma prvé písmeno veľkým
```
.capitalize {
  text-transform: capitalize;
}
```
- selektnime element s classou shaddow-first a pridajme mu tieň textu že z hora a z ľava bude odsadený 2px a farba červená
```
.shaddow-first {
  text-shadow: 2px 2px red;
}
```
- selektnime element s classou shaddow-second a pridajme mu tieň textu že z hora a z ľava bude odsadený -2px a farba červená
```
.shaddow-second {
  text-shadow: -2px -2px red;
}
```
- selektnime element s classou shaddow-third a pridajme mu tieň textu že z hora a z ľava bude odsadený 2px a jeho zahmlenie nech je 5px a farba modra
```
.shaddow-third {
  text-shadow: 2px 2px 5px blue;
}
```
- selektnime element s classou text-overline a pridajme mu nech text je podčiarknutý
```
.text-overline {
  text-decoration: overline;
}
```
- selektnime element s classou text-line-through a pridajme mu nech text je prečiarknutý
```
.text-line-through {
  text-decoration: line-through;
}
```
- selektnime element s classou text-underline a pridajme mu nech text je nadčiarknutý
```
.text-underline {
  text-decoration: underline;
}
```
- selektnime element s classou grad1 a pridajme mu výšku 100px a skúste si vygenerovať nejaké gradientné vzhľadý na týchto stránkach [prvy generator](http://www.css3factory.com/linear-gradients), [druhy generator](http://www.colorzilla.com/gradient-editor) a pridajte to do vzhľadu napr ja som si spravil z hora na dol nech je linearne pretekana farba z červenej na žltú skúste sa s tým pohrať a vytvoriť si viacej takýchto div elementov
```
.grad1 {
  height: 100px;
  background: linear-gradient(red, yellow);
}
```
- selektnime element s classou box-shaddow a pridajme mu výšku 100px a šírku 100px
```
.box-shaddow {
  width: 100px;
  height: 100px;
}
```
- selektnime element s classou box-shaddow-first a pridajme mu krabičkový tieň kde prve číslo reprezentuje posun z hora, druhe posun z ľava, trietie zahmlenie, štvrté hrubka toho tieňa a samozrejme posledna je farba vytvorme si to pomocou tohto [generatora](https://www.cssmatic.com/box-shadow)
skúste meniť parametre a pochopiť ako to funguje
```
.box-shaddow-first {
  box-shadow: 10px 10px 5px 0px red;
}
```
- selektnime element s classou box-shaddow-second a pridajme mu krabičkový tieň kde prve už nie je číslo ale inset to znamená že ten tieň bude vo vnútri krabičky a ďalšie je číslo reprezentuje posun z hora, ďalšie posun z ľava, ďalšie zahmlenie, ďalšie hrubka toho tieňa a samozrejme posledna je farba vytvorme si to pomocou tohto [generatora](https://www.cssmatic.com/box-shadow)
skúste meniť parametre a pochopiť ako to funguje
```
.box-shaddow-second {
  box-shadow: inset 10px 10px 5px 0px green;
}
```

[tu je riešenie, ktoré si pozrite až keď budete mať dokončenú domácu úlohu. Nezabudnite si písať poznámky čo ste nepochopili](homework/solution)<br>
