Kaip pasileisti projektą 

### Iš gitHubo parsisiūsti įkeltą main. 
 * Pasirenkam papkę kurioj norėsim susikelt projektą. Pastebėjimas: GitHubas pats sukurs vieną root papkę su pavadinimu 'E-project', todėl tokios papkės nesikurti atskirai.
* Atsidarom per terminalą savo papkę kurioj klonuosim projektą.
* Terminale įvedam $ git clone https://github.com/TadasJS/E_project.git

### Suinstaliuojam reikiamus paketus  į client papkę:
* Einam i client papkę: $ cd client 
* Suinstaliuojam paketus: $ npm i 
* Paleisti client dalį: $ npm run dev 
    

### Suinstaliuojam reikiamus paketus į server papkę:
* išeinam iš client papkes: $ cd ..
* einam į server papkę: cd server
* suinstaluojam paketus: $ npm i
* Paleisti server dalį: $ npm run dev 
