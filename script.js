//Sujet 1
const array1 = [10, 15, 3, 7];
const k1 = prompt("Choississez un nombre pour vérifier si la somme de 2 chiffres de mon tableau pour le sujet 1 sera égale à ce nombre, voici l'array : \n\n [10, 15, 3, 7]");
const array2 = [3, 7, 8, 3, 6, 1];
const k2 = prompt("Choississez un nombre pour vérifier si la somme de 2 chiffres de mon tableau pour le sujet 2 sera égale à ce nombre, voici l'array : \n\n [3, 7, 8, 3, 6, 1]");;

//Sujet 2
const array3 = [3, 7, 8, 3, 6, 1];
const array4 = [1, 4, 5, 8];


//Exercice 1
const sum = (array, k) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === Number(k)){
         return true;
      }
    }
  }
  return false;
};

console.log("exercice 1 :\n");
console.log(sum(array1, k1));
console.log(sum(array2, k2));



//Exercice 2
const beWest = (array) => {
  let count = 1;
  for (let i = 0; i < array.length - 2; i++) {
    let hasView = true;
    for (let j = i + 1; j < array.length - i; j++) {
      if (array[i] <= array[j]) hasView = false;
    }
    hasView ? count++ : null;
  }
  return count;
};
console.log("\n\nExercice 2:");
console.log(`Sur cette rue seul ${beWest(array3)} immeuble(s) ont une vue à l'ouest`); 
console.log(`sur cette rue seul ${beWest(array4)} immeuble(s) ont une vue à l'ouest`);


//Exercice 3
const sum2 = (array, k) => {
  let sumMissing = new Set();
  sumMissing.add(Number(k) - array[0]);

   for (let i = 1; i < array.length; i++) {
     let nextSum = Number(k) - array[i];
     if (sumMissing.has(array[i])) {
       return true;
     } else {
      sumMissing.add(nextSum);
     }
   }
   return false;
};

console.log("\n\nExercice 3:");
console.log(sum2(array1, k1)); 
console.log(sum2(array2, k2)); 


//Exercice 4
const beWest2 = (array) => {
  let numberView = 1
  let maxHeight = array[array.length-1]
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > maxHeight) {
      maxHeight = array[i]
      numberView++
    }      
  }
  return numberView
};

console.log("\n\nExercice 4:");
console.log(`Sur cette rue seul ${beWest2(array3)} immeuble(s) ont une vue à l'ouest`); 
console.log(`sur cette rue seul ${beWest2(array4)} immeuble(s) ont une vue à l'ouest`);


//Exercice 5 et 6 sont les exercices 3 et 4