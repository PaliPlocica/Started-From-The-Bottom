[&#129188; späť](../README.md)</br>

## Modul 6: rozoberanie domácej úlohy a opakovanie, zarovnávanie textu

### 6. hodina
([šiesta hodina](lesson)):</br>

#### zaujímavé linky
- [generator nahodneho textu](http://www.blindtextgenerator.com/lorem-ipsum)</br>

#### linky o css styloch:</br>
#### intro do css colors HEX a RGB a RGBA:</br>
- [zakladne info o css farbách](https://www.w3schools.com/css/css3_colors.asp)</br>
- [zakladne info o RGB](https://www.w3schools.com/colors/colors_rgb.asp)</br>
- [zakladne info o HEX](https://www.w3schools.com/colors/colors_hexadecimal.asp)</br>

- [zakladne info o zarovnávanie textu](https://css-tricks.com/almanac/properties/t/text-align)</br>
- [zakladne info o zarovnávanie textu](https://www.w3schools.com/cssref/pr_text_text-align.asp)</br>
- [zakladne info o dipaly](https://css-tricks.com/almanac/properties/d/display)</br>
- [zakladne info o font-size](https://www.w3schools.com/cssref/pr_font_font-size.asp)</br>

#### zaujímavé linky o farbách
- [farba roku 2017](https://www.pantone.com/color-of-the-year-2017)</br>
- [color wheel adobe](https://color.adobe.com/create/color-wheel)</br>
- [nieco o tom farebnom kolese v adobe](https://www.w3schools.com/colors/colors_wheels.asp)</br>
- [generator farbie na klik](https://color.hailpixel.com)</br>
- [generator odtieňov farieb](http://www.0to255.com)</br>

#### Homework/Domáca úloha</br>
vytvor si folder s nazvom domaca-uloha-cislo potom do neho si skopiruj základnú ktoru ktorú stále používame a vymazujeme všetko čo je v body a v file style.css ak nemáš tu si to vieš štiahnuť nezabudni to cele odrarovať [zakladna kostra webky](../default.rar) vytvorte si do index.html body kostru stránky nasledovne:
- vytvor si html tag p a pridajte mu atribut class s názvom title-align-right vygenerujte si text a skopirujte z tejto stránky [gerator textu](http://www.blindtextgenerator.com/lorem-ipsum) a skopírujte to do p html tagu
```
<body>
	<p class="title-align-right">sem skopirujte svo dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
</body>
```
- vytvor si html tag p a pridajte mu atribut class s názvom title-align-center 
```
<body>
	<p class="title-align-right">sem skopirujte svo dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
	<p class="title-align-center">sem skopirujte svo dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
</body>
```
- vytvor si html tag p a pridajte mu atribut class s názvom title-align-justify 
```
<body>
	<p class="title-align-right">sem skopirujte svo dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
	<p class="title-align-center">sem skopirujte svo dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
	<p class="title-align-justify">sem skopirujte svo dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
</body>
```
- prejdite do file style.css a seleknite si element s atributom class s názvom title-align-right a pridajte mu zarovnanie textu do prava, farba písma cervená, veľkosť písma 12px
```
.title-align-right {
	text-align: right;
	color: red;
	font-size: 12px;
}
```
- prejdite do file style.css a seleknite si element s atributom class s názvom title-align-center a pridajte mu zarovnanie textu na stred, farba textu modra, velkost pisma 14px
```
.title-align-center {
	text-align: center;
	color: blue;
	font-size: 14px;
}
```
- prejdite do file style.css a seleknite si element s atributom class s názvom title-align-justify a pridajte mu zarovnanie textu na základe šírky, farba zelená, veľkosť písma 16px
```
.title-align-justify {
	text-align: justify;
	color: green;
	font-size: 16px;
}
```

[tu je riešenie, ktoré si pozrite až keď budete mať dokončenú domácu úlohu. Nezabudnite si písať poznámky čo ste nepochopili](homework/solution)<br>
