/*Create an array that should look like suche : `["one","two","three"]`

In order to do that, only do manipulations from this folowing array :
- The methods :
  - Pop and Push
  - Shift and unshift
  - Concat
  - Join
  - Split (which is a **STRING** method that transforms a string into an array)
  - SlAice
  - Splice
  - Reverse
  - Sort
  - Includes
*/
const initialArray = [
  null,
  true,
  ["apple", "two", undefined],
  false,
  ["three", "BeCode"],
  4,
  "I am a big bad wolf",
  ["one"],
];
const endArray = [];

initialArray.forEach(x => {
    if(Array.isArray(x)){
        x.forEach(element => {
            if(element == "one"){
                endArray[0]= element;
            }
            else if(element == "two"){
                endArray[1] = element;
            }
            else if(element == "three"){
                endArray[2] = element;
            }
        });
    }

    else if(x == "one"){
        endArray[0] = x;
    }
    else if(x == "two"){
        endArray[1] = x;
    }
    else if(x == "three"){
        endArray[2] = x;
    }  
})

endArray.forEach(element => console.log(element));


