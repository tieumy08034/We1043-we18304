let a=["tue","thu","sat","nine"]; 

a.pop("nine");
a.splice(0,0,"mon");
a.splice(2,0,"we");
a.splice(4,0,"fri");

a.push("sun");

console.log(a);
 
