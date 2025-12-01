// 1) Quali sono i tipi primitivi principali in TypeScript?
// I tipi primitivi sono: string, number, boolean, null, undefined, bigint, symbol.

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
 let myName: string = "Loirenzo";
 let myAge: number = 32;
 let isStudyingTS: boolean = true;

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
// diventa:
const greet = (name: string) => { return "Ciao " + name }

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
// Il tipo di ritorno è number:
const sum = (a: number, b: number) => { return a + b }

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const addIVA = (price: number) => {
   return price * 1.22;
 };

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
 const concatLength = (a: string, b: string): number => {
  const result = a + b;
  return result.length;
 };

// 7) Cos'è un Type Union e come si scrive?

// È un tipo che può accettare più valori diversi. Si scrive con la barra verticale |
// Esempio: let id: string | number;

// 8) Crea una variabile che possa contenere un numero, null o undefined.
let flexibleValue: number | null | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type WeekDay = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

// 10) Tipizza il seguente array di numeri nei due modi possibili:
 const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
let myTuple: [string, string, string, number, number];

// 12) Qual è la differenza tra type e interface?
// "type" è più flessibile e può unire più tipi. "interface" è pensata per definire oggetti e può essere estesa più volte.
// In generale le interfacce sono più usate per definire modelli di oggetti.

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
 interface Person {
   firstname: string;
   lastname: string;
   age: number;
 }

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
 interface User {
  email: string;
  phone?: number;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
 interface Studente {
  nome: string;
   voto: number;
 }
 let studenti: Studente[] = [
  { nome: "Luca", voto: 28 },
   { nome: "Sara", voto: 30 }
 ];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
 interface Veicolo {
   marca: string;
   modello: string;
 }
 interface Auto extends Veicolo {
   porte: number;
 }

// 17) Crea un oggetto che implementi l'interfaccia Auto.
 const myCar: Auto = {
   marca: "Fiat",
   modello: "Panda",
   porte: 5
 };

// 18) Cosa sono i Generics in TypeScript?
 //Sono un modo per creare tipi riutilizzabili che possono cambiare a seconda del dato passato.  
 //Tipo una funzione o interfaccia “flessibile”.

// 19) È possibile avere più tipi generici in un’interfaccia?
// Sì, basta separarli con una virgola: interface Test<A, B> { ... }

// 20) Crea un interfaccia generica per una richiesta API
 interface ApiResponse<T> {
   data: T;
   success: boolean;
   message?: string;
 }