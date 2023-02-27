// Check for emptiness

/* Write the function isEmpty(obj) which returns true if the object 
has no properties, false otherwise.*/

function isEmpty(obj){
     for(let key in obj){
        return false;
     }
     return true;
}

isEmpty();