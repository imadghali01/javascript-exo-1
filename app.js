/*Create an array that should look like suche : `["one","two","three"]`

In order to do that, only do manipulations from this folowing array :
- The methods :
  - Pop and Push
  - Shift and unshift
  - Concat
  - Join
  - Split (which is a **STRING** method that transforms a string into an array)
  - Slice
  - Splice
  - Reverse
  - Sort
  - Includes
*/
const newArray=[];
const initialArray = [
  null,
  true,
  ["Apple", "two", undefined],
  false,
  ["three", "BeCode"],
  4,
  "I am a big bad wolf",
  ["one"],
];

for(let i=0 ; i=initialArray.length-1 ; i++){
    if(typeof(initialArray[i])== "object"){
        initialArray[i].forEach(element => {
            if(element == "one"){
                initialArray[0] = element;
            }
            else if(element == "two"){
                initialArray[1] = element;
            }
            else if(element == "three"){
                initialArray[2] = element;
            }
        });
    }

    else if(initialArray[i] == "one"){
        newArray[0] = initialArray[i];
    }
    else if(initialArray[i] == "two"){
        newArray[1] = initialArray[i];
    }
    else if(initialArray[i] == "three"){
        newArray[2] = initialArray[i];
    }
    else{
        arraySplicer(initialArray, i, 1)
    }

    
    
}




function arraySplicer(array, x, y){
    array.splice(x, y);
}


