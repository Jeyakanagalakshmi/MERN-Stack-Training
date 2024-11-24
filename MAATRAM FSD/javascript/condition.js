function evalNumbers(op,a,b){
    switch (op){
        case "add":
            return a+b;
        case "subtract":
            return a-b;
        case "multiply":
            return a*b;
        case "divide":
            return a/b;
        case "modulus":
            return a%b;
        default:
            return "Invalid Operation";
            
    }
}
console.log(evalNumbers("add",10,20))