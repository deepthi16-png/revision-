//datatypes-the way the data is stored in the memory
//primary datatypes-variables,numbers,boolean,null
var name="Karan"
console.log(name)

var number=5
console.log(number)

var color
console.log(color)

var color="green"
console.log(color)

var button=null
console.log(button)

var boolean="true"
console.log(boolean)
//secondary datatypes-arrays,functions,objects
//arrays-datatypes that store multiple data in a single var.
 var array=[1,2,3,4,5,"Karan"]
 console.log(array[5])

 //we can store a multiple arrays inside a main array
 var array1=[ [1,2]   , [3,4]  ,[5,6] ,[7,8]         ]
 console.log(array1[3][1])


//if we need to add a data as a last element of an array-push
array.push("green")
console.log(array)

//if we need to remove the last element of an array-pop
array.pop()
array.pop()
console.log(array)

//functions-to avoid writing the same code again and again
//inside function draw u will replace a set of codes by a name
//and at the end 
function spawnClouds(){

    //place the code
}

//objects-produced out of blueprint
student1={
name:"Karan",
class:9,
state:"gujrat",
nationality:"Indian"


}
console.log(student1.name)
