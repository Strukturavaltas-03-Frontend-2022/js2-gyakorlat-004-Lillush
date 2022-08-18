// Írj egy függvényt getSecondsOfThisYearUntilNow néven, aminek a visszatérési értéke az aktuális év 01.01. óta eltelt másodperceinek a száma! 
// Csak a Date konstruktor függvényt (akár példányosítva, akár anélkül), a now() és a getFullYear() metódusokat használd!

'use strict';

const getSecondsOfThisYearUntilNow = () => {
  let actualDate = new Date();
  let msTillNow = Date.now() - new Date(actualDate.getFullYear());
  
  return msTillNow / 1000;
}



export default getSecondsOfThisYearUntilNow;

