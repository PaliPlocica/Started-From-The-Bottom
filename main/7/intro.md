[&#129188; späť](../README.md)</br>

## Modul 7: float left a clearfix vs display flex

### 7. hodina
([siedma hodina](lesson)):</br>

#### zaujímavé linky
- [zakladne info o clearfixe](https://css-tricks.com/snippets/css/clear-fix/)</br>
- [zakladne info o CSS Layout float and clear](https://www.w3schools.com/css/css_float.asp)</br>
- [zakladne info o float left, right a clear both](https://css-tricks.com/almanac/properties/f/float)</br>

- [zakladne info o display flexu1](http://jonibologna.com/flexbox-cheatsheet)
- [zakladne info o display flexu2](https://css-tricks.com/snippets/css/a-guide-to-flexbox)</br>
- [zakladne info o display flexu3](https://www.w3schools.com/css/css3_flexbox.asp)</br>

#### Homework/Domáca úloha</br>
vytvorte si folder s nazvom domaca-uloha-cislo potom do neho si skopiruj základnú kostru ktoru si stiahneš [zakladna kostra webky](../default.rar) nezabudni to cele odrarovať už som tam pridal core.css file a aj nalinkoval ho do index.html v tom core.css file je zakladny css ktori nemusite písať za každým, svoje vlastné css stale budete písať do filu style.css... vytvorte si do index.html body kostru stránky nasledovne:
- vytvorte div html tag a pridajte mu atribut class s názvom main-content
```
<body>
	<div class="main-content"></div>
</body>
```
- vytvorte si html tag p a vygenerujte z tejto stránky [gerator textu](http://www.blindtextgenerator.com/lorem-ipsum) a skopírujte to do p html tagu
```
<body>
	<div class="main-content">
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
	</div>
</body>
```
- vytvorte si html tag p a vygenerujte z tejto stránky [gerator textu](http://www.blindtextgenerator.com/lorem-ipsum) a skopírujte to do p html tagu
```
<body>
	<div class="main-content">
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
	</div>
</body>
```
- z netu si stiahnite obrázok a uložte si ho do foldra images potom vráte sa do index.html a do druhého p html tagu vložíme náš obrázok pomocou html tagu img kde do src atributu zadavame cestu napr. images/mojnazovobrazka.jpg laebo png podľa toho o aký formát obrázku ide... a pridame aj atribut alt do ktorého napišeme čo je na obrázku a tiež pridáme atribut class kde si pridáme dva classy image-wrapper a image-wrapper-right
```
<body>
	<div class="main-content">
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
		<p>
			<img src="images/kacicka.jpg" alt="Pineapple" class="image-wrapper image-wrapper-right">
			sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext
		</p>
	</div>
</body>
```
- poďme teraz do file style.css selektnime si element ktorý ma atribut class s nazvom main-content a pridajme mu maximálnu šírku 600 pixelov, nech sa odtlači pomocou marginu zhora a z dola 0 a z ľava a z prava nech si dopočíta pomocou auto a tiež pridajme rámček s hrubkov 1 pixel plná čiara a čiernej farby
```
.main-content {
	max-width: 600px;
	margin: 0 auto;
	border: 1px solid black;
}
```
- pod to si selektnime element s atributom class s názvom image-wrapper a pridajme mu šírku 170 pixelov a border 1px plna čiara a čiernej farby
```
.image-wrapper {
	width: 170px;
	border: 1px solid black;
}
```
- pod to si selektnime element s atributom class s názvom image-wrapper-right a pridajme mu float right čiže tento element bude zarovnaný z prava a margin z hora a z dola 15px z ľava 15px a z prava 0
```
.image-wrapper-right {
  float: right;
  margin: 15px 0 15px 15px;
}
```
- teraz si pod posledné p vytvoríme hr element a použíjeme magic touch selektnime si všetko čo je vo vnútri elementu s atributom class s nazvom main-content a použijeme ctrl+shift+d potom si premenujeme druhu classu s nazvom image-wrapper-right na image-wrapper-left
```
<body>
	<div class="main-content">
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
		<p>
			<img src="images/kacicka.jpg" alt="Pineapple" class="image-wrapper image-wrapper-right">
			sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext
		</p>
		<hr>
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
		<p>
			<img src="images/kacicka.jpg" alt="Pineapple" class="image-wrapper image-wrapper-left">
			sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext
		</p>
		<hr>
	</div>
</body>
```
- poďme teraz do file style.css selektnime si element ktorý ma atribut class s nazvom image-wrapper-left a pridajme float left čiže tento element bude zarovnaný z ľava a margin z hora a z dola 15px z ľava 0 a z prava 15px
```
.image-wrapper-left {
  float: left;
  margin: 15px 15px 15px 0;
}
```
- ďalej podte pod posledný hr element vytvorite si html tag header s atributom classs s názvom header do neho si vytvorme html tag h1 s nejakým textom
```
<body>
	<div class="main-content">
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
		<p>
			<img src="images/kacicka.jpg" alt="Pineapple" class="image-wrapper image-wrapper-right">
			sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext
		</p>
		<hr>
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
		<p>
			<img src="images/kacicka.jpg" alt="Pineapple" class="image-wrapper image-wrapper-left">
			sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext
		</p>
		<hr>
		<header class="header">
			<h1>Chania</h1>
		</header>
	</div>
</body>
```
- pod header si vytvorte html tag section s atributom class s názvom clearfix do vnútra section elementu si vytvorte html tag nav s atributom class s názvom float-left a druhá class s názvom menu do vnútra nav elementu si vytvorte html tag ul s atributom class list a do vnútra ul elementu si vytvorte 4 li elementy ktoré budu obsahovať atribut class s názvom list-li a do vnútra li elementov si vložte nejaký text
```
<body>
	<div class="main-content">
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
		<p>
			<img src="images/kacicka.jpg" alt="Pineapple" class="image-wrapper image-wrapper-right">
			sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext
		</p>
		<hr>
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
		<p>
			<img src="images/kacicka.jpg" alt="Pineapple" class="image-wrapper image-wrapper-left">
			sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext
		</p>
		<hr>
		<header class="header">
			<h1>Chania</h1>
		</header>
		<section class="clearfix">
			<nav class="float-left menu">
				<ul class="list">
					<li class="list-li">The Flight</li>
					<li class="list-li">The City</li>
					<li class="list-li">The Island</li>
					<li class="list-li">The Food</li>
				</ul>
			</nav>
		</section>
	</div>
</body>
```
- pod section element si vytvorte html tag footer s atributom class s názvom footer a do vnútra si môžte vytvoriť html tag p s nejakým textom
```
<body>
	<div class="main-content">
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
		<p>
			<img src="images/kacicka.jpg" alt="Pineapple" class="image-wrapper image-wrapper-right">
			sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext
		</p>
		<hr>
		<p>sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext</p>
		<p>
			<img src="images/kacicka.jpg" alt="Pineapple" class="image-wrapper image-wrapper-left">
			sem skopirujte svoj dlhokánsky teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeext
		</p>
		<hr>
		<header class="header">
			<h1>Chania</h1>
		</header>
		<section class="clearfix">
			<nav class="float-left menu">
				<ul class="list">
					<li class="list-li">The Flight</li>
					<li class="list-li">The City</li>
					<li class="list-li">The Island</li>
					<li class="list-li">The Food</li>
				</ul>
			</nav>
		</section>
		<footer class="footer">
			<p>Footer Text</p>
		</footer>
	</div>
</body>
```
- prejdime nas5 do filu style.css a selektnime si element s classov header a footer narz cez čiarku im pridame farbu pozadia grey a farbu písma white a padding z každej strany 15px
```
.header, 
.footer {
  background-color: grey;
  color: white;
  padding: 15px;
}
```
- selektnite si element s classov float-left a pridajte mu float left aby sa zarovnal z ľava a padding z každej strany 15 pixelov
```
.float-left {
  float: left;
  padding: 15px;
}
```
- selektnite si element s classov menu a pridajte mu šírku 25 percent
```
.menu {
  width: 25%;
}
```
- selektnite si element s classov content a pridajte mu šírku 75 percent
```
.content {
  width: 75%;
}
```
- selektnite si element s classov list-li a pridajte mu padding z každej strany 8 pixelov a margin zo spodu 8 pixelov farbu pozadia red a farbu písma white
```
.list-li {
  padding: 8px;
  margin-bottom: 8px;
  background-color: red;
  color: white;
}
```
- prejdite do index.html a vymažte clearfix classu refresnite si stránku a zistíte že element ul vyteká z section elementu to je preto lebo ste vymazali clearfix ktorý ako keby pridal clear both pre footer ale namiesto toho aby ste to nemuseli riešiť stačí tam kde použijte float left jeho rodičovi pridáte classu s názvom clearfix a mate to vyriešené teraz to vráte späť a uvidíte že stránka je v poriadku a nič nevyteká

[tu je riešenie, ktoré si pozrite až keď budete mať dokončenú domácu úlohu. Nezabudnite si písať poznámky čo ste nepochopili](homework/solution)<br>
