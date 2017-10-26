### 5. hodina
([piata hodina](lessons)):
#### intro do css colors HEX a RGB a RGBA, čo robí css padding, margin, width, height, max-width, max-height, min-width, min-height</br>

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
- [zakladne info max-width](https://www.w3schools.com/cssref/pr_dim_max-width.asp)</br>
- [zakladne info max-height](https://www.w3schools.com/cssref/pr_dim_max-height.asp)</br>
- [zakladne info min-width](https://www.w3schools.com/cssref/pr_dim_min-width.asp)</br>
- [zakladne info min-height](https://www.w3schools.com/cssref/pr_dim_min-height.asp)</br>

#### info o padding a margin:</br>
- [zakladne info padding](https://www.w3schools.com/css/css_padding.asp)</br>
- [zakladne info margin](https://www.w3schools.com/css/css_margin.asp)</br>

#### Homework/Domáca úloha</br>
vytvor si folder s nazvom domaca-uloha-cislo potom do neho si skopiruj toto [zakladna kostra webky](../default) vytvorte si do index.html kostru stránky nasledovne:
- vytvor h1 element s atributom class s nazvom title-big a do neho vloz text padding
- vytvor div lement s atributom class do neho vloz dve classy jedna bude mat nazov box-holder a druhá box-holder-first
[takto](homework/steps/1.png)
- potom do neho si vytvor ďalšie div s atributom class s nazvom box-wrapper-padding [takto](homework/steps/2.png)
- selektnite si teda označte cele obidve divka a skopitujte si ich pod seba dva krát [takto](homework/steps/3.png)
- pod to vytvorte hr element ktorí vytvorí čiaru
- selektnite si teda označte všetko čo mate vo vnútri v body okrem hr html tagu a vložte to pod hr [takto](homework/steps/4.png)
- do druhého h1 elementu prepíšte margin
- potom všetko čo máte v body obalte novym div elementom s atributom class s nazvom main-content [takto](homework/steps.png)
- prepíšte posledné tri nazvy class box-wrapper-padding na box-wrapper-margin pomocou klavesovej skratky ctrl+d kde si len označíme niečo čo chcem viac krát označiť a kolko krát stlačite ctrl+d toľko krát vam selektne existujúce slovo a stači už len písať... mali by ste docieliť [toto](homework/steps/6.png)
- najdite druhu classu v poradí od vrchu nadol s nazvom box-holder-first a premenujte ju na box-holder-second a tiež premenujte aj druhú classu od spodu s nazvom box-holder-first a tiež ju premenujte na box-holder-second vpodstate chcem prvé tri divka nazvať podľa ich poradia a to isté chcem spraviť aj pre ďalšie tri čo nasleduju po hr html tagu [takto](homework/steps/7.png)
- super duper kostru web stránky niečo už máme
- teraz css prejdime do file style.css ktory sa nachadza v nasom skopirovanom foldri s nazvom css
- selektnime si element ktory obsahuje atribut class s nazvom main-content pridáme farbu pozadia red a maximálnu šírku 900px
[takto](homework/steps/8.png)
- selektnime si element ktory obsahuje atribut class s nazvom title-big pridáme hrubku písma bold a veľkosť písma 24px [takto](homework/steps/9.png)
- selektnime si element ktory obsahuje atribut class s nazvom box-holder pridáme ramcek 1px solid black [takto](homework/steps/10.png)

- selektnime si element ktory obsahuje atribut class s nazvom box-holder-first pridáme šírku a výšku 100px [takto](homework/steps/11.png)
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-first a hned jeho element vo vnútri cez class atribut s nazvom box-wrapper-padding a pridajme tam padding priestor ktori element bude zaberat 20px na vsetky jeho strany a vysku 58px [takto](homework/steps/12.png)

- selektnime si element ktory obsahuje atribut class s nazvom box-holder-second pridáme maximalnu šírku a maximalnu výšku 100px [takto](homework/steps/13.png)
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-second a hned jeho element vo vnútri cez class atribut s nazvom box-wrapper-padding a pridajme tam padding priestor ktori element bude zaberat 20px z hora a z dola a z lava a prava 30px teda kedže sa niektoré hodnoty opakujú nemusime ich zapisovať padding: 20px 30px 20px 30px ale padding: 20px 30px; potom pridajme vyšku 56px [takto](homework/steps/14.png)

- selektnime si element ktory obsahuje atribut class s nazvom box-holder-third pridáme minimalnu šírku a minimalnu výšku 100px a dame mu display: inline-block zaberaj len tolko kolko potrebujes [takto](homework/steps/15.png)
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-third a hned jeho element vo vnútri cez class atribut s nazvom box-wrapper-padding a pridajme tam padding priestor ktori element bude zaberat zhora bude 20px, z prava 30px, z dola 40px a z ľava 50px potom pridajme vyšku 38px [takto](homework/steps/16.png)

- selektnime si element ktory obsahuje atribut class s nazvom box-wrapper-margin pridáme farbu pozadia modra a ramcek 1px solid žltá [takto](homework/steps/17.png)

- selektnime si element ktory obsahuje atribut class s nazvom box-holder-first a hned jeho element vo vnútri cez class atribut s nazvom box-wrapper-margin a pridajme tam margin 20px z každej strany a výšku cez funkciu calc(100% - 40px); a tiež šírku calc(100% - 40px); [takto](homework/steps/18.png)
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-second a hned jeho element vo vnútri cez class atribut s nazvom box-wrapper-margin a pridajme tam margin z hora a z dola 20px, z ľava a prava 30px a šírku calc(100% - 60px); a výšku 56px [takto](homework/steps/19.png)
- selektnime si element ktory obsahuje atribut class s nazvom box-holder-third a hned jeho element vo vnútri cez class atribut s nazvom box-wrapper-margin a pridajme tam margin z hora 20px, z prava 30px, z dola 40px, z ľava 50px; a minimalnu výšku 38px  [takto](homework/steps/20.png)

