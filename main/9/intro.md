[&#129188; späť](../../README.md)</br>

## Modul 9: Sass: variables, nesting, operators, @import, @extend, @mixin, @function spolu s @return, @each

### 9. hodina

#### zaujímavé linky o sass
- [super stránka na otestovanie sa v sasse, kde hned na pravej strane mate vygenerované css](https://www.sassmeister.com/)</br>
- [kopec info o sasse čo všetko sa da robiť v sasse](http://sass-lang.com/documentation/Sass/Script/Functions.html)</br>

### Variables v Sass
definuje sa cey znak $ za znakom sa definuje názov parametra a potom dvojbodka bez medzier!!! potom za dvojbodkov nasleduje to čo chcete vložiť do parametra... môžte voliť hodnoty ako napr. farbu, číslo text.</br>
```css
$btn-color: #000;
$btn-width: 16px;
$btn-fonts: 'open-sans'
```
použitie parametrov nasledovne</br>
```css
button {
    color: $btn-color;
    width: $btn-width;
    font-family: $btn-fonts;
}
```

### Nesting v Sass
všimnite si že rodič ul element zoznam ma classu `list` a li elementy jeho deti majú classu `list-li` a následne a elementy nachádzajúce sa v li elementoch maju classu `list-li-a`</br>
```html
<ul class="list">
  <li class="list-li">
    <a href="#" class="list-li-a">klikatelny text</a>
  </li>
  <li class="list-li">
    <a href="#" class="list-li-a">klikatelny text</a>
  </li>
  <li class="list-li">
    <a href="#" class="list-li-a">klikatelny text</a>
  </li>
</ul>
```
v sasse môžete robiť zanorenia a kopírovať si classu zhora nadol takto:</br>
```css
.list {
  border: 1px solid red;

  &-li {
    padding: 10px;

    &-a {
      color: blue;
    }
  }
}
```
to isté sa dá robiť aj s elementami takto:</br>
```css
ul {
  border: 1px solid red;

  li {
    padding: 10px;

    a {
      color: blue;
    }
  }
}
```
Nestovať viete aj pseudoselektory:</br>
```css
ul {
  li {
    a {
      position: relative;
      text-decoration: none;
      color: black;

      &:hover {
        text-decoration: underline;
      }

      &:after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      &:before {
        position: absolute;
        content: '';
        width: 30px;
        height: 30px;
        top: 0;
        left: 0;
      }
    }

    &:first-child {
      a {
        color: red;
      }
    }
  }
}
```
### operators Sass
```
p {
  width: 10px / 8px;
  width: 10px * 8px;
  width: 10px + 8px;
  width: 10px - 8px;
}
```

### @import Sass
predstavte si ze toto je váš file s názvom param.scss</br>
```css
$color-primary: #000;
$color-secondary: #ff0000;
```
ak chcete tieto parametre pouziť naprv v druhom file s názvom btn.scss, stačí použiť funkciu @import</br>
```css
@import './param.scss';

.btn-primary {
  color: $color-primary;
}

.btn-secondary {
  color: $color-secondary;
}
```
## @extend Sass
slúži na kopírovanie štýlov pomocou class, ktorá tie štýli obsahuje napr.</br>
```css
.classKtoraObsahujeStyleKtoryChcemSkopirovat {
  color: red;
  background-color: blue;
  padding: 10px;
}

.classKtoraChceMatStyleKtoreMaTaHorna {
  @extend .classKtoraObsahujeStyleKtoryChcemSkopirovat;
  margin: 10px;
  font-size: 12px;
}
```
### @mixin Sass
@mixin funkcia sass slúži na pridanie štýlov ktoré chcem upraviť a pridať do class napr. táto funkcia s názvom font-size očakáva parameter $size, ktorá bude použítá na výpočet em hodnoty a to predelním 16 a následne pridaná k veľkosti písma...</br>
```css
@mixin font-size1($size) {
    font-size: ($size / 16) + em;
}
```
funkcia nemá ohraničenie pri pridávani svojích parameterov, v tejto funkcii mame defaultne nastavený druhý parameter a to že $context ak nie je definovaný vo volanej funkcii priradí sa tam číslo 16...</br>
```css
@mixin font-size2($size, $context: '16') {
    font-size: ($size / 16) + em;
}

```
použitie funkcie @mixin</br>
```css
h1 {
    @include font-size1(16)
}
h2 {
    @include font-size2(16)
}
h3 {
    @include font-size2(16, 2)
}
```
## @function a @return Sass
podobne ako sme to robili v `@mixin` funkcii vieme to vytvoriť nasledovne, použitím `@function` po definovaní nasleduje názov funkcie v našom prípade je to `em` a vo vnútri zátovriek () definujeme parametre, ktoré funkcia očakáva v našom príklade `$pixels` a druhý parameter, `$context`, ktorí ma definovanú defaltnu hodnotu vloženú pomocou parametra `$browser-context`</br>
```css
$browser-context: 16; // Default
@function em($pixels, $context: $browser-context) {
    @return #{$pixels/$context}em;
}
```
Použitie:</br>
```css
h1 {
    font-size: em(16);
}

h2 {
    font-size: em(16, 2);
}
```
## @each funkcia trošku mágie
definujem si parameter v ktorom mám pole farieb ktoré su priradené k textom...
```css
$nazvyFarieb: (
    'red': #fd685b,
    'green': #39ae90,
    'yellow': #545766
);
```
vytvorim si funkciu `@each` kde si definujem dva parametre: `$menoFarby`, `$jejHexCodeFarby`  ktoré su v parametre `$nazvyFarieb` potom vo vnútri funkcie si meno farby vkladám ku kláse nasledovne .btn- a za pomlčkou sa pridá jednotlivý názov farby z poľa parametra... `#{$menoFarby}` vo vnútri vygenerovanej class vložim farbu ku `color: $jejHexCodeFarby;`
```css
@each $menoFarby, $jejHexCodeFarby in $nazvyFarieb {
    .btn-#{$menoFarby} {
        color: $jejHexCodeFarby;
        padding: 10px;
        font: {
            size: 12px;
            weight: normal;
            family: 'open-sans';
        }
    }
}
```

#### Homework/Domáca úloha</br>
skúste si každý príklad vyskúšať sami bez kopírovania...