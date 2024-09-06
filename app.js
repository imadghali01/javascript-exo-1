/*Let's try another thing... Write a code that will log to the console only the even numbers untill 20.

The goal here is to see that the increment expression doesn't have to be necessarely `i++`

Attention : the 0 should no be counted.

The result in your console should be :

`2 4 6 8 10 12 14 16 18 20
`

Now, do the same thing for odd numbers untille 20.

The result in your console should be :

`1 3 5 7 9 11 13 15 17 19
`

*/
for( let i=1 ; i < 20 ; i++){
    if((i % 2) != 0){
        console.log(i);
    }
}