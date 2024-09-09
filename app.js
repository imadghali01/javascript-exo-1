/*
    Create an object called user;
    Give him a fistName, a lastName and age;
    Give him a method printAge and aYearHasPast
    aYearHasPast should add 1 to the age property.
    printAge should console.log (firstName) (lastName) is (age) years old
    Play in your console to print his age and then increment his age.
*/

const user = {
    firstName : "manu",
    lastName : "lebanner",
    age : "50",
    printAge : function(){
        return console.log(this.firstName +" "+this.lastName + " is " + this.age);
    },
    aYearHasPast : function(){
        this.age++;
    }
}


user.printAge();
user.aYearHasPast();
user.printAge();
