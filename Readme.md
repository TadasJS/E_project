Kaip pasileisti projektą 

### Iš gitHubo parsisiūsti įkeltą main. 
 * Pasirenkti papkę kurioj norėsit susikelti projektą. Pastebėjimas: GitHubas pats sukurs vieną root papkę su pavadinimu 'E-project', todėl tokios papkės nesikurti atskirai.
* Atsidaryti per terminalą savo papkę kurioj klonuosit projektą.
* Terminale įvesti $ git clone https://github.com/TadasJS/E_project.git

### Suinstaliuojam reikiamus paketus  į client papkę:
* Einam i client papkę: $ cd client 
* Suinstaliuojam paketus: $ npm i 
* Paleisti client dalį: $ npm run dev    

### Suinstaliuojam reikiamus paketus į server papkę:
* atsidaryti antrą terminalą.
* einam į server papkę: cd server
* suinstaluojam paketus: $ npm i

### Susikurti .env.dev failą:
* į .env.dev nukopijuoti turinį:

POSTGRES_USER=postgres //(DB vartotojo vardas)
POSTGRES_HOST=localhost
POSTGRES_DB=egzui //(db pavadinimas)
POSTGRES_PASSWORD= **** //(db slaptažodis)
POSTGRES_PORT=5432
APP_PORT=3000
PRIVAT_KEY=labasvakarasLietuva

### Susikurti DB:

* Projektas sukurtas ant postgressql DB.
* Iš failo dbTable.sql susikurti DB lenteles.
* .env.dev nustatyti savo DB prisijungimo duomenis


### Vartotojo prisijungimas : 
   * email: user@user.com
   * password: User@user1

### Administratoriaus prisijungimas : 
   * email: admin@admin.com
   * password: Admin@admin1

