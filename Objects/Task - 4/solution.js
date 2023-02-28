// Multiply numeric property values by 2

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] = obj[key] * 2;
        }
    }
}



/*
// before call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// after call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/
