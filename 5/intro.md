[&#129188; späť](../README.md)

## Modul 5: intro do css colors HEX a RGB a RGBA, čo robí css padding, margin, width, height, max-width, max-height, min-width, min-height

### 5. hodina
([piata hodina](lesson)):

#### intro do css colors HEX a RGB a RGBA:</br>
- [zakladne info o css farbách](https://www.w3schools.com/css/css3_colors.asp)
- [zakladne info o RGB](https://www.w3schools.com/colors/colors_rgb.asp)</br>
- [zakladne info o HEX](https://www.w3schools.com/colors/colors_hexadecimal.asp)</br>

#### zaujímavé linky o farbách
- [farba roku 2017](https://www.pantone.com/color-of-the-year-2017)
- [color wheel adobe](https://color.adobe.com/create/color-wheel)
- [nieco o tom farebnom kolese v adobe](https://www.w3schools.com/colors/colors_wheels.asp)
- [generator farbie na klik](https://color.hailpixel.com)
- [generator odtieňov farieb](http://www.0to255.com)

#### info o šírkach a výškach:</br>
- [zakladne info width](https://www.w3schools.com/cssref/pr_dim_width.asp)</br>
- [zakladne info height](https://www.w3schools.com/cssref/pr_dim_height.asp)</br>
- [zakladne info o funkcii calc()](https://www.w3schools.com/cssref/func_calc.asp)</br>
- [zakladne info max-width](https://www.w3schools.com/cssref/pr_dim_max-width.asp)</br>
- [zakladne info max-height](https://www.w3schools.com/cssref/pr_dim_max-height.asp)</br>
- [zakladne info min-width](https://www.w3schools.com/cssref/pr_dim_min-width.asp)</br>
- [zakladne info min-height](https://www.w3schools.com/cssref/pr_dim_min-height.asp)</br>

#### info o padding a margin:</br>
- [zakladne info padding](https://www.w3schools.com/css/css_padding.asp)</br>
- [zakladne info margin](https://www.w3schools.com/css/css_margin.asp)</br>

#### Homework/Domáca úloha</br>
vytvor si folder s nazvom domaca-uloha-cislo potom do neho si skopiruj základnú ktoru ktorú stále používame a vymazujeme všetko čo je v body a v file style.css ak nemáš tu si to vieš štiahnuť nezabudni to cele odrarovať [zakladna kostra webky](../default.rar) vytvorte si do index.html body kostru stránky nasledovne:
- vytvor si html tag div a pridaj mu atribut class s nazvom main-content
```
<body>
		<div class="main-content">
		</div>
</body>
```
- potom do vnútra toho vytvoreneho div elementu vytvor h1 html tag s atributom class s nazvom title-big a do neho vloz text padding 
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
		</div>
</body>
```
- potom pod h1 element vytvor div html tag ktorí bude mať atribut class ktorý budem obsahovať dva názvy box-holder box-holder-first 
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
			</div>
		</div>
</body>
```
- následne do tohto vytvoreného div elementu vytvoríme ďalšie div s atributom class s názvom box-wrapper-padding
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
		</div>
</body>
```
- teraz ideme použiť magic touch editora ctrl+shift+d čiže označme si čo chceme aby sa skopirovalo pomocu tejto skratky čiže my chcem označiť celý div element ktorí sa nachádza pod h1 elementom, keď to zvládnete stlačíte ctrl+shift+d a magic touch dokonaný stlačte znova ctrl+shift+d 
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
		</div>
</body>
```
- toto by ste mali docieliť
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
		</div>
</body>
```
- premenujme druhu classu s nazvom box-holder-first na box-holder-second a hneď aj tu pod ňou na box-holder-third
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-second">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-third">
				<div class="box-wrapper-padding"></div>
			</div>
		</div>
</body>
```
- pridajme hr html tag pod element box-holder-third
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-second">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-third">
				<div class="box-wrapper-padding"></div>
			</div>
			<hr>
		</div>
</body>
```
- aby sme veľa nepísali zase použijeme magic touch ctrl-shift-d označme si všetko čo je v elemente div s classov main-content a použijme raz tu skratku, toto by ste mali docieliť
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-second">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-third">
				<div class="box-wrapper-padding"></div>
			</div>
			<hr>
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-second">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-third">
				<div class="box-wrapper-padding"></div>
			</div>
			<hr>
		</div>
</body>
```
- prepíšte posledné tri nazvy class box-wrapper-padding na box-wrapper-margin pomocou klavesovej skratky ctrl+d kde si len označíme niečo čo chceme naraz prepísať a kolko krát stlačite ctrl+d toľko krát vam selektne označené slovo a stači už len písať... mali by ste docieliť toto
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-second">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-third">
				<div class="box-wrapper-padding"></div>
			</div>
			<hr>
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-margin"></div>
			</div>
			<div class="box-holder box-holder-second">
				<div class="box-wrapper-margin"></div>
			</div>
			<div class="box-holder box-holder-third">
				<div class="box-wrapper-margin"></div>
			</div>
			<hr>
		</div>
</body>
```
- premenujte text v druhom h1 elemente z padding na margin
- pod posledné hr vložte a html tag a pridajte mu class atribut s názvom wrapper-link
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-second">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-third">
				<div class="box-wrapper-padding"></div>
			</div>
			<hr>
			<h1 class="title-big">margin</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-margin"></div>
			</div>
			<div class="box-holder box-holder-second">
				<div class="box-wrapper-margin"></div>
			</div>
			<div class="box-holder box-holder-third">
				<div class="box-wrapper-margin"></div>
			</div>
			<hr>
			<a href="#" class="wrapper-link">
			</a>
		</div>
</body>
```
- do vnútra a html tagu vložíme img html tag pridajme mu classu s názvom wrapper-link-img stiahnime si nejaky obrazok z netu a pridajme ho do foldra images a nalinkujme si ho cez atribut src a do atributu nezabudnite napísať text o tom čo obsahuje váš obrázok takto
```
<body>
		<div class="main-content">
			<h1 class="title-big">padding</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-second">
				<div class="box-wrapper-padding"></div>
			</div>
			<div class="box-holder box-holder-third">
				<div class="box-wrapper-padding"></div>
			</div>
			<hr>
			<h1 class="title-big">margin</h1>
			<div class="box-holder box-holder-first">
				<div class="box-wrapper-margin"></div>
			</div>
			<div class="box-holder box-holder-second">
				<div class="box-wrapper-margin"></div>
			</div>
			<div class="box-holder box-holder-third">
				<div class="box-wrapper-margin"></div>
			</div>
			<hr>
			<a href="#" class="wrapper-link">
				<img src="images/kacicka.jpg" alt="kačička" class="wrapper-link-img">
			</a>
		</div>
</body>
```
- super duper kostru web stránky už máme hotovú teraz sa presuňme do file style.css
- selektnime si element ktory obsahuje atribut class s nazvom main-content pridáme farbu pozadia red maximálnu širku 900px tiež môžme dať šírka nech je sto precent a minimálne výška nech je sto percent a margin nula a auto;
```
body, html {
  height: 100%;
}

.main-content {
  background-color: red;
  max-width: 900px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
}
```
- selektnime si element ktory obsahuje atribut class s nazvom title-big pridáme hrubku písma bold a veľkosť písma 24px
```
.title-big {
  font-weight: bold;
  font-size: 24px;
}
```
- selektnime si element ktory obsahuje atribut class s nazvom box-holder pridáme ramcek 1px solid black
```
.box-holder {
  border: 1px solid black;
}
```
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-first pridáme šírku a výšku 100px
```
.box-holder-first {
  width: 100px;
  height: 100px;
}
```
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-second pridáme maximalnu šírku a maximalnu výšku 100px
```
.box-holder-second {
  max-width: 100px;
  max-height: 100px;
}
```
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-third a jeho vnútorný element ktorý obsahuje atribut class s nazvom box-wrapper-padding pridajme tam display: inline-block nech element zaberát len toľko koľko potrebuje a minimálnu šírku a výšku 100px
```
.box-holder-third .box-wrapper-padding {
  display: inline-block;
  min-width: 100px;
  min-height: 100px;
}
```
- selektnime si element ktorý obsahuje atribut class s nazvom box-wrapper-padding a pridajme mu farbu pozadia green a rámček s hrubkov 1 px solid a farba bude yellow
```
.box-wrapper-padding {
  background-color: green;
  border: 1px solid yellow;
}
```
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-first a jeho vnútorný element ktorý obsahuje atribut class s nazvom box-wrapper-padding pridajme tam padding priestor ktori element bude zaberat 20px na vsetky jeho strany a vysku chceme dať takú aby sme vyplnili celý priestor obaľovača aby nevytekal z obaľovača a aby ani nebol menší s funkciou calc do vnútra funkcie calc chceme aby sa počítala 100% minus padding z hora 20px aj z dola 20px aj jeho rámček z hora 1px a z dola 1px cize 42px, takto docielime to že ak niekto zmení výšku nášho obaľovača vždy vnútro bude obsahovať celú výšku svojho rodiča, calc vieme použiť iba ak rodič ma pevne stanovenú výšku alebo šírku
```
.box-holder-first .box-wrapper-padding {
  padding: 20px;
  height: calc(100% - 42px);
}
```
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-second a jeho vnútorný element ktorý obsahuje atribut class s nazvom box-wrapper-padding pridajme tam padding priestor ktori element bude zaberat z hora aj z dola 20px, z lava a z prava 30px a tiež sa snažíme vyplniť čiže rodič ma 100px na vyplnenie potrebujeme odpočítať 20px z hora aj z dola plus ramček z hora 1px aj z dola 1px
```
.box-holder-second .box-wrapper-padding {
  padding: 20px 30px;
  height: 58px;
}
```
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-third a jeho vnútorný element ktorý obsahuje atribut class s nazvom box-wrapper-padding pridajme tam padding z hora 20px z prava 30px z dola 40px z lava 50px a výšku tiež nemôžeme použiť calc funkciu čiže výšku rodiča t.j. 100px odpočítame padding z hora 20px padding z dola 40px a ramček z hora 1px a rámček z dola 1px
```
.box-holder-third .box-wrapper-padding {
  padding: 20px 30px 40px 50px;
  height: 38px;
}
```
- selektnime si element ktorý obsahuje atribut class s nazvom box-wrapper-margin a pridajme mu farbu pozadia blue a rámček s hrubkov 1 px solid a farba bude yellow
```
.box-wrapper-margin {
  background-color: blue;
  border: 1px solid yellow;
}
```
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-first a jeho vnútorný element ktorý obsahuje atribut class s nazvom box-wrapper-margin pridajme margin odtlačme element z každej strany 20px a pridajme výšku pomocou calc funkcie 100% a odpočítajme margin z hora a z dola aj ramček z hora a z dola
```
.box-holder-first .box-wrapper-margin {
  margin: 20px;
  height: calc(100% - 42px);
}
```
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-second a jeho vnútorný element ktorý obsahuje atribut class s nazvom box-wrapper-margin pridajme margin odtlačme element z hora a z dola 20px a z ľava a z prava 30px a výšku si vypočítame tak že z výšky rodiča t.j. 100px odpočítame margin z hora 20px, margin z dola 20px a rámček z hora 1px a z dola 1px čiže 58px
```
.box-holder-second .box-wrapper-margin {
  margin: 20px 30px;
  height: 58px;
}
```
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-third a jeho vnútorný element ktorý obsahuje atribut class s nazvom box-wrapper-margin pridajme tam padding z hora 20px z prava 30px z dola 40px z lava 50px a výšku tiež nemôžeme použiť calc funkciu čiže výšku rodiča t.j. 100px odpočítame padding z hora 20px padding z dola 40px a ramček z hora 1px a rámček z dola 1px
```
.box-holder-third .box-wrapper-margin {
  margin: 20px 30px 40px 50px;
  height: 38px;
}
```
- selektnime si element ktory obsahuje atribut class wrapper-link a pridajme mu display inline block zaberaj tolko kolko potrebujes, ramček 1px hrubka solid black a maximálnu šírku a výšku 200px ak máte obrázok väčší ako je 200px tak vidíte že vám vyteká z vášho obaľovača
```
.wrapper-link {
  display: inline-block;
  border: 1px solid black;
  max-width: 200px;
  max-height: 200px;
}
```
- nato aby váš obrazok nevytekal seleknime si ho cez class wrapper-link-img a pridajme mu display block a tiež šírku a výšku sto percent
```
.wrapper-link-img {
	display: block;
  width: 100%;
  height: 100%;
}
```

[tu je riešenie, ktoré si pozrite až keď budete mať dokončenú domácu úlohu. Nezabudnite si písať poznámky čo ste nepochopili](homework/solution)<br>


