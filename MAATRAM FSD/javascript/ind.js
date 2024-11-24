//Problem 1: Basic String Interpolation
var first_name=prompt("Enter your first name :")
var last_name=prompt("Enter your last name :")
console.log("Hello, "+first_name+" "+last_name+"!")

//Problem 2: Age Calculation
var birth_year=prompt("Enter your birth year :")
var current_year=prompt("Enter your current year :")
var age=current_year-birth_year
console.log("You are "+age+" years old.")

//Problem 3: Formatting Numbers
var first_num=parseInt(prompt("Enter your first number :"))
var second_num=parseInt(prompt("Enter your second number :"))
console.log("Sum: "+(first_num+second_num))
console.log("Difference: "+(first_num-second_num))
console.log("Product: "+(first_num*second_num))
console.log("Quotient: "+parseFloat((first_num/second_num)))

//Problem 4: Temperature Conversion
var temp=prompt("Enter temperature in Celsius :")
var  f=parseFloat((9/5)*temp+32)
console.log(temp+" degrees Celsius is "+f+" degrees Fahrenheit.")

//Problem 5: Personal Information
var Name=prompt("Enter your Name :")
var Age=prompt("Enter your Age :")
var City=prompt("Enter your City:")
console.log(Name+" ,aged "+Age+" lives in "+City)
//Problem 6: Rectangle Area Calculation
var length=parseInt(prompt("Enter the length of the rectangle :"))
var width=parseInt(prompt("Enter the width of the rectangle :"))
console.log("The area of the rectangle is "+(length*width))
//Problem 7: Price Calculation
var price=parseInt(prompt("Enter the price of the item :"))
var quantity=parseInt(prompt("Enter the quantity purchased :"))
console.log("Total cost : "+(price*quantity))