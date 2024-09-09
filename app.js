/*

    When the user enters the page, tha machine should ask him to write down a command :
        new to add a todo
        list to see all the todos
        delete to remove a specific todo
        quit to exit de program

    Use the prompt() function to ask what they want to perform.

    If the user choses new, prompt again to write what is the todo. When added, log to the console that the todo was added to the list.

    If the user choses list, log to the console all the todos he has inserted. It should look like this :

********* TODO LIST *********
1. Walk out the dog
2. Drink some milk
3. Learn JavaScript
4. Make exercises
etc...

    If the user choses delete, prompt what is the number of the todo and delete the todo

    If the user choses quit, break the loop.

    The user should be able to add as many todos he wants and , each time he choses list, be, able to see all of them.

TIPS :

    Use an array to store the todos and to log them to the console when we ask to list
    Keep in mind that the listing of the todos should begin with 1 (after all, we are not machines that start with 0)
    The whole app should live inside a loop that only breaks when we choose "quit".
    Use methods like splice()
    Use the concept of falsy values
*/
let command;
let addNew;
let erase;
let idcount=1;
const todoArray = [];

while(command != "quit"){
    
    command = prompt("what do you want to do? choose between add/list/delete/quit");
    
    if(command == "add"){
        addNew = prompt("what is the todo you want to add");
        todoArray.push(addNew);
    }
    else if(command == "list"){
        todoArray.forEach((elements, index) => console.log(index+1 +" "+ elements));
    }
    else if(command == "delete"){
        erase = prompt("what's the number of the todo you want to delete?");
        while (isNaN(erase) || erase > todoArray.length - 1){
            todoArray.forEach((elements, index) => console.log(index+1 +" "+ elements));
            erase = prompt("give me an existing number in the list plz do!");
        }
        todoArray.splice((erase-1), 1);
        command = prompt(" todo number " + erase +" is deleted, what do you want to do? choose between add/list/delete/quit");

    }
    else if(command == "quit"){
        console.log("bye bye");
        break;
    }

}