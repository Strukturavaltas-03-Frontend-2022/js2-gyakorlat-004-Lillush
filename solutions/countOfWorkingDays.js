// Írj egy függvényt countOfWorkingDays néven, ami két paramétert kap. Mind a két paraméter egy-egy dátum. 
// Az első a korábbi időpont, a második a későbbi időpont. A visszatérési értéke a két dátum közötti munkanapok (hétfő-péntek) száma! 
// A különböző ünnepekkel nem kell számolnod! 
// Ha az első dátum korábbi, mint a második akkor dobj egy hibát az alábbi üzenettel: The first parameter is earlier date, than second!! 
//Hibát dobni a következő módon tudsz:
//  throw new Error(message)
// A aktuális napot is bele kell számolni a munkanapokba, ha az munkanap! Sehol ne használj kerekítést!

'use strict';

const countOfWorkingDays = (date1, date2) => {
  const from = new Date(date1);
  const to = new Date(date2);
  
  if (from > to) {throw new Error('The first parameter is earlier date, than second!')};
  
  let difference = (Date.now(to) - Date.now(from))/1000/60/60/24/(7/5);
  if (from == to) {difference == 1};

  return difference;
}


export default countOfWorkingDays;
