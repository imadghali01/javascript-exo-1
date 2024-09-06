/*```
  
Use a loop to log to your console a ordered list of these persons's fullname. The result should be :

```js

1. My full name is Vito Corleone.
2. My full name is William Wallace.
3. My full name is Harry Potter.
4. My full name is Amadeus Mozart.
5. My full name is Barack Obama.

```

Don't forget the numbers (and it starts at 1)

---*/
let count=1;
const users = [
    {
      firstName: "Vito",
      lastName: "Corleone",
    },
    {
      firstName: "William",
      lastName: "Wallace",
    },
    {
      firstName: "Harry",
      lastName: "Potter",
    },
    {
      firstName: "Amadeus",
      lastName: "Mozart",
    },
    {
      firstName: "Barack",
      lastName: "Obama",
    },
  ];

  users.forEach(element => {
    console.log(`${count}. My full name is ${element.firstName} ${element.lastName}.`)
    count++;
  });