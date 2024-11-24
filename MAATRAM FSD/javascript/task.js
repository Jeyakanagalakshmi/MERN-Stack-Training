//Example 1: Personal Introduction
var name=prompt("Enter your name:")
var age=prompt("Enter your age:")
var fav_col=prompt("Enter your favorite color:")
console.log("Hello,my name is "+name+" ,I am "+age+" years old,and my favorite color is "+fav_col)

//Example 2: Simple Arithmetic
var first_num=parseInt(prompt("Enter your first number :"))
var second_num=parseInt(prompt("Enter your second number :"))
console.log("The Sum of "+parseFloat(first_num)+" and "+parseFloat(second_num)+"is " +parseFloat(first_num+second_num))
console.log("The difference between "+parseFloat(first_num)+" and "+parseFloat(second_num)+"is " +parseFloat(first_num-second_num))
console.log("The product of "+parseFloat(first_num)+" and "+parseFloat(second_num)+"is " +parseFloat(first_num*second_num))
console.log("The quotient of "+parseFloat(first_num)+" divided by "+parseFloat(second_num)+"is " +parseFloat(first_num/second_num))

//Example 3: Itemized Receipt
var fname=prompt("Enter the name of the first item:")
var fprice=parseFloat(prompt("Enter the price of "+fname+" :"))
var sname=prompt("Enter the name of the second item:")
var sprice=parseFloat(prompt("Enter the price of "+sname+" :"))
var tname=prompt("Enter the name of the third item:")
var tprice=parseFloat(prompt("Enter the price of "+tname+" :"))
console.log("1."+fname+" : Rs"+fprice)
console.log("2."+sname+" : Rs"+sprice)
console.log("3."+tname+" : Rs"+tprice)
console.log("Total : Rs"+(fprice+sprice+tprice))

//Example 4: Rectangle Perimeter
var length=parseInt(prompt("Enter the length of the rectangle :"))
var width=parseInt(prompt("Enter the width of the rectangle :"))
console.log("The perimeter of the rectangle is "+parseFloat((length+width)*2))

//Example 5: Introduction with Hobbies
var name=prompt("Enter your name:")
var age=prompt("Enter your age:")
var fh=prompt("Enter your first hobby:")
var sh=prompt("Enter your second hobby:")
var th=prompt("Enter your third hobby:")
console.log("Hi,I'm "+name +".I'm "+age+" years old and I enjoy "+fh+","+sh+",and "+th+"." )

//	Example 6: Circle Area and Circumference
var r=parseInt(prompt("Enter the radius of the circle :"))
console.log("The area of the circle is "+parseFloat(r*r*(22/7)))
console.log("The circumference of the circle is "+parseFloat(2*r*(22/7)))

//Example 7: Currency Conversion
var amount=prompt("Enter the amount in usd:")
console.log(parseFloat(amount)+" USD is equal to Rs.")

//Example 8: Simple Interest Calculation
var p=prompt("Enter the principal amount:")
var r=prompt("Enter the rate of interest(in %):")
var t=prompt("Enter the time period(in years):")
console.log("The simple interest is "+parseFloat((p*t*r)/100))

//Example 9: BMI Calculation
var w=prompt("Enter your weight (in kg):")
var h=prompt("Enter your height(in meters):")
var bmi= parseFloat(w / Math.pow(h, 2)); 
console.log("Your BMI is "+bmi)

//Example 10: Favorite Books
var name=prompt("Enter your name:")
var fav1=prompt("Enter your first favorite book:")
var fav2=prompt("Enter your second favorite book:")
var fav3=prompt("Enter your third favorite book:")
console.log(name+"'s top three favorite books are "+"'"+fav1+"',"+"'"+fav2+"',and '"+fav3+"'.")
