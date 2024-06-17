/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/


/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*I DATATYPE VENGONO UTILIZZATI PER DISTINGUERE I DIVERSI TIPI DI DATI ALL'INTERNO DI UNA VARIABILE.

I DATA TYPE PRIMITIVI POSSONO ESSERE:

---STRINGA => CARATTERE DI TIPO TESTO CONTRASSEGNATO DA "X" OPPURE 'X', ALL'INTERNO DI UNA STRINGA CI POSSONO ESSERE ANCHE DEI NUMERI, I QUALI PERò SARANNO LETTI DA JS COME TESTO.

---NUMERICO => CARATTERI DI TIPO NUMERICO. I DECIMALI DI SCRIVONO CON IL PUNTO E NON NECESSITANO DI "X" O 'X'.

---BOOLEANO => VENENDO INTERROGATI SUI DATI FORNITI DANNO COME RISPOSTA TRUE O FALSE, QUINDI SI POSSONO USARE PER DEFINIRE SE UN'AFFERMAZIONE é VERA O FALSA IN BASE AL DATO.

---NULL => VIENE USATO PER DEFINIRE UNA MANCANZA DI IDENTIFICAZIONE DEI DATI IN MANIERA INTENZIONALE.

---UNDEFINED => IDENTIFICA UN'ASSENZA DI DATI CHE AL MOMENTO DELLA LETTURA DEL DOCUMENTO è INDEFINITA, MA POTREBBE ANCHE CAMBIARE.
 */


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*let myName='Sara';
console.log(myName);
*/


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*let number1=12;
let number2=20;
number1+=number2;
console.log(number1);
*/


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*let X=12;
console.log(X)
*/


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*myName='Pavone';
const ciao='35';
//ciao='buonanotte'
*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*let paperino=X-4;
console.log(paperino);
*/


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*let name1='john';
let name2='John';
let verify1= name1 != name2;
console.log (verify1);

let name2min= name2.toLowerCase*/
