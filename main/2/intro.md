[&#129188; späť](../../README.md)<br>

## Modul 2: Zopakovanie minulej hodiny..., Inštalácia Sourcetree, Node.js, gitbash, registrácia na githube, tvorba repositára, nastavenie repositára, mazanie repositára, vyklonovanie repozitára cez SSH a HTTPS, zoznam HTML tagy, použitie <a> html tagu, <img> HTML tág, atribúty

### 2. hodina

#### SourceTree<br>
Sourcetree zjednodušuje interakciu s vašimi úložiskami Git, aby ste sa mohli sústrediť na kódovanie. Vizualizujte a spravujte svoje úložiská pomocou jednoduchého Git GUI od Sourcetree.

#### Inštalácia SourceTree<br>
pracuje sa na videu

<hr>

#### Node.js<br>
<a href="https://www.w3schools.com/nodejs/nodejs_intro.asp" target="_blank">info o node.js</a><br>

#### Inštalácia node.js knižnice<br>
pracuje sa na videu
<hr>

#### Git bash<br>
<a href="https://git-scm.com/about" target="_blank">info o git bash</a><br>
<a href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" target="_blank">info o funkciach, ktoré môžme robiť vrámci git bash</a><br>
<a href="https://nvie.com/posts/a-successful-git-branching-model/" target="_blank">info čo sa štandardne dodržiava vo firmách</a><br>

<hr>

#### Inštalácia doplnkov do editora<br>
stiahnite si tento [zazipovany folder](vscodeExtensions.zip) alebo [zararovany folder](vscodeExtensions.rar) odzipujte alebo odrarujte ho a otvorte vo Visual Studio Code, potom nasledujte kroky vo videu

Otvorím si nastavenia vo Visual Studio Code takto<br>
File->Preferences->Settings<br>
toto skopirujem a nahradím namiesto prázdneho `{}` <br>
<pre>
<code>
 {
  // Core settings
  "editor.rulers": [
    80,
    160
  ],
  "editor.formatOnSave": true,
  "files.autoSave": "off",
  "files.eol": "\n",
  "javascript.format.enable": false,
  "javascript.validate.enable": false,
  "search.exclude": {
    "**/bin": true,
    "**/coverage": true,
    "**/dist": true,
    "**/node_modules": true,
    "**/template": true,
    "**/__snapshots__/": true
  },
  // Packages settings
  "eslint.autoFixOnSave": true,
  "eslint.enable": true,
  "flow.useNPMPackagedFlow": true,
  "editor.wordWrap": "wordWrapColumn",
  "html.format.wrapLineLength": 80,
  "highlight-matching-tag.enabled": true,
  "highlight-matching-tag.highlightSelfClosing": true,
  "highlight-matching-tag.leftStyle": {
    "borderWidth": "0",
    "borderStyle": "solid",
    "borderColor": "transparent",
    "borderRadius": "0"
  },
  "highlight-matching-tag.rightStyle": {
    "borderWidth": "0",
    "borderStyle": "solid",
    "borderColor": "transparent",
    "borderRadius": "0"
  },
  "highlight-matching-tag.style": {
    "textDecoration": "underline"
  },
  "workbench.iconTheme": "vscode-icons",
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": false,
    "suppressCommitNotFoundWarning": false,
    "suppressFileNotUnderSourceControlWarning": false,
    "suppressGitVersionWarning": false,
    "suppressLineUncommittedWarning": false,
    "suppressNoRepositoryWarning": false,
    "suppressResultsExplorerNotice": false,
    "suppressShowKeyBindingsNotice": true,
    "suppressUpdateNotice": false,
    "suppressWelcomeNotice": true
  },
  "gitlens.keymap": "chorded",
  "explorer.confirmDragAndDrop": false,
  "vsicons.dontShowNewVersionMessage": true,
  "gitlens.historyExplorer.enabled": true,
  "editor.matchBrackets": false,
  "window.zoomLevel": 0,
  "editor.wordWrapColumn": 180,
  "workbench.startupEditor": "newUntitledFile"
}
</code>
</pre>
<hr>

#### Vytvorenie github účtu<br>
 <https://github.com/join><br>

<hr>

#### info o html tagoch a atributoch:<br>

- [info o zoznamoch](https://nvie.com/posts/a-successful-git-branching-model/)<br>
- [info o zoznamoch](https://www.w3schools.com/html/html_lists.asp)<br>
- [info tabuľkách](https://www.w3schools.com/html/html_tables.asp)<br>
- [info o <img> HTML tagu](https://www.w3schools.com/tags/tag_img.asp)<br>
- [info o pisani html tagoch pre vzhlad stranok1](https://www.w3schools.com/html/html_layout.asp)<br>
- [info o pisani html tagoch pre vzhlad stranok2](https://www.developer.com/lang/understanding-the-proper-way-to-lay-out-a-page-with-html5.html)<br>
- [info o atributoch](https://www.w3schools.com/html/html_attributes.asp)<br>
- [info o <a> HTML tagu](https://www.w3schools.com/tags/tag_a.asp)<br>

Tag môže obsahovať ľubovoľný počet atribútov.
Atribúty bližšie špecifikujú vlastnosti tagu.
Atribúty sa uvádzajú v počiatočnom tagu, formou zápisu atribút="hodnota"

<hr>

#### Homework/Domáca úloha<br>

vytvorte tabulku a použite a html tag teda linky, ktoré sme tiež vytvárali na hodine podľa tohto obrázka
Nezabudnite si písať poznámky čo ste nepochopili alebo nevedeli.
[domaca uloha](homework/homework.png)<br>

[tu je riešenie](homework/solution.html)<br>
