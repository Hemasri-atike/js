let name ={
          Firstname:"Hema",
          lastname:"sri",
       
}
let printFullname= function(hometown,state ) {
         console.log(this.Firstname +" "+ this.lastname    + " from " +  hometown +","+state );


      } 
printFullname.call(name,"haryana","goa")


let name2={
         Firstname:"divya",
         lastname:"sri",   
}
///function borrowing  -call method

// printFullname.call(name2,"mumbai","bali")


// apply method -pass the arguments as an array



printFullname.apply(name2,["mumbai","bali"])
//bind method   - not  call the function instantly

let printMyname = printFullname.bind(name2,"mumbai","bangalore")
console.log(printMyname)


