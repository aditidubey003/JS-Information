// Check for emptiness

/* Write the function isEmpty(obj) which returns true if the object 
has no properties, false otherwise.*/

// Here, if the loop will run this means there will be some key, Othewise not.
function isEmpty(obj){
     for(let key in obj){
        return false;
     }
     return true;
}

