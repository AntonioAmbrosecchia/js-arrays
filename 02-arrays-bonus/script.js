const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// 1st metodo 
/*
let reversedTeachers = teachers.reverse();
console.log(reversedTeachers);
*/
//2st metodo
let reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  const thisTeacher = teachers[i]
  reversedTeachers.push(thisTeacher)
}

console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let index = 0; index < teachers.length; index++) {
  const thisTeacher = teachers[index]

  if (thisTeacher.length >= 5) {
    longNames.push(thisTeacher)
  }
}

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf("Ed"), 1)
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;
for (let index = 0; index < teachers.length; index++) {
  const thisTeacher = teachers[index];

  if (thisTeacher === `Fabio`) {
    isFabioPresent === true
    break
  }
}
console.log(isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = "";
for (let index = 0; index < teachers.length; index++) {
  const thisTeacher = teachers[index];
  teachersString += `${thisTeacher} `
  if (index === teachers.length - 1) {
    else {
      teachersString += `${thisTeacher} `;
    }
  }

}
console.log(teachersString);
