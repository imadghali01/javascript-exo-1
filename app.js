/*
- Ask the user what is his favorite fruit.
  - If it's `bananas`, tell him you like bananas as well.
  - If it's `strawberry`, tell him you LOVE strawberries.
  - If it's `grape`, aks him if he prefers purple or green grapes.
    - If it's `purple`, tell him you don't like purple grapes.
    - If it's `green`, tell him green grapes are ok...
    - If it's not purple or green, tell him you don't understand.
  - If it's another thing, tell him you don't understand the word he said (displaying the word he said).*/

let favoriteFruit = prompt(`what's your favorite fruit?`);
let sortOfGrape;
switch(favoriteFruit.toLowerCase()){
    case `bananas`: 
        alert(`I like bananas as well.`);
    break;
    case `strawberry`: 
        alert(`I LOVE strawberries.`);
    break;
    case `grape`: 
        sortOfGrape = prompt(` witch sort of grappe do you like? green or purple`);
        switch(sortOfGrape){
            case `purple`: 
                alert(`I don't like purple grapes.`);
            break;
            case `green`: 
                alert(`green grapes are ok...`);
            break;
            default: alert(`I don't understand.`);
        }
    break;  
    default: alert(`I don't understand ${favoriteFruit}`);
}