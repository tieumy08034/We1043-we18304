//nhap a,b,c
let a = parseInt(prompt("moi nhập a"));
 let b = parseInt(prompt("moi nhập b"));
 let c = parseInt(prompt("moi nhập c"));
 //kiemtra
 if(a+b>c && b+c>a && a+c>b){
    if(a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b){
        document.write('Đây là tam giác vuông');

    }else if(a==b && b==c){
        document.write('Đây là tam giác cân');
    }else{
        document.write('Đây là tam giác thường');
    }

 }else{
    document.write('ba cạnh a,b,c không phải là ba cạnh của một tam giác!');

 }