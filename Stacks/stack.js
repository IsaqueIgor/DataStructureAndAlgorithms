class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    
    push(element) {
        this.items.push(element)
    }

    pop(){
        if(this.items.length == 0)
            return "Undeflow";
        
        return this.items.pop();
    }

    
    peek(){
        return this.items[this.items.length - 1];
    } 
    // isEmpty() 

    printStack() 
    { 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    } 
} 

var stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(50);

console.log(stack.printStack()); 

console.log(stack.peek()); 
console.log('----'); 
stack.pop();
console.log(stack.peek()); 
console.log(stack.printStack()); 