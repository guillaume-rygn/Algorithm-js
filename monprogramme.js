//merge 

const { INSPECT_MAX_BYTES } = require('buffer');
const fs = require('fs');
const fileName = process.argv[2];


try {
  const data = fs.readFileSync(fileName, 'utf8');
  let turn = 0;
  let array = data.split(' ').map(x => Number(x));
 

  function merge(split1, split2) {  
    let i = 0;
    let j = 0;
    let k = 0; 
    let split1Length = split1.length;
    let split2Length = split2.length;  
    let newArray = new Array(split1Length+split2Length);  
    
    while (i < split1Length && j < split2Length) {  
      if (split1[i] < split2[j]) {  
        newArray[k] = split1[i];  
        i++;  
      } else {  
        newArray[k] = split2[j];  
        j++;  
      }  
      k++;  
    }  
    while (i < split1Length) {  
      newArray[k] = split1[i];  
      i++;  
      k++;  
    }  
    while (j < split2Length) {  
      newArray[k] = split2[j];  
      j++;  
      k++;  
    }  
    return newArray;  
  }  
    
  function sort(array) {  
    
    let arrayLength = array.length;  
    let split1;
    let split2;  
    
    if (arrayLength == 0 || arrayLength == 1) {  
      return array;  
    } else {  
      split1 = sort(array.slice(0,arrayLength/2));  
      split2 = sort(array.slice(arrayLength/2)); 
      turn ++;
      return merge (split1,split2);  
    }  
  }  
  sort(array);
  console.log(`Tri fusion: ${turn} comparaisons [${sort(array)}]`);

} catch (error) {
  console.error(error.message);
}

