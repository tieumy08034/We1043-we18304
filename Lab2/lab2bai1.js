//nhap a,b,c 
let a = parseInt(prompt("moi nhap a"));
let b = parseInt(prompt("moi nhap b"));
let c = parseInt(prompt("moi nhap c"));
//kiem tra 
if(a==0){
   let x = -c/b;
   document.write("phuong trinh co 1 nghiem:"+x);
}else{
   let delta = b*b-4*a*c;
   //kiem tra dieu kien delta
   if(delta<0){
       document.write("phuong trinh vo nghiem");

   }else /*delta >=0 or delta = 0*/ if(delta ==0){
       //delta=0
       let x = -b/(2*a);
       document.write("phuong trinh co nghiem kep:"+x);
   }else{
       //delta>0
       let x1 = (-b +Math.sqrt(delta))/(2*a);
       let x2 = (-b -Math.sqrt(delta))/(2*a);
       document.write("nghiem x1 = "+x1);
       document.write(" nghiem x2 = "+x2);

   }


}
