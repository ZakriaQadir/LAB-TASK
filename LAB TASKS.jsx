// Problem 1 
let object={
    name : "David Rayy",
    sclass : "VI",
    rollnno : 12
};
let keys = Object.keys(object)
console.log(keys); 


//Problem 2
var student =  { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12  };
  console.log(student);
  delete student.rollno;
  console.log(student);


  //Problem 3

  var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }



   //Problem 4

   
   let sandwitch_calculato = function(bread){
    if(bread % 2 == 0 ){
        return bread / 2;
    }
    else{
        return "bread is not enough to make sandwitch";
    }
    }
    console.log("Amount of entered bread: 10 and sandwitch mades: ",sandwitch_calculato(10));
    function sandwitch_calculator(bread,cheese){
        if(bread % 2 == 0 && cheese > 1 ){
            return bread / 2;
        }
        else if(bread % 2 == 0 && cheese == 1){
            return 1;
        }
        else{
            return "bread is not enough to make sandwitch";
        }
    }
    console.log("Amount of entered bread: 10 and 1 cheese so sandwitch mades: ",sandwitch_calculator(10,1));
 

// Problem 5

let calculate_average_and_highest = function(){
    let return_array =  new Array();
    let sum = 0;
    for(let i = 0; i<arguments.length ; i++){
        sum = sum + arguments[i];
     }
    return_array.push(sum/arguments.length);
    return_array.push(Math.max.apply(Math,arguments));
    return return_array;
     
}
let result = calculate_average_and_highest(15,20,25,30,35);
console.log("Average is : ",result[0]," and highest is: ",result[1]);

 