// var a = ["pn","a","qwalior","rjit",12,30,40,50.5,true];

// document.write(a)
// document.write(a[5])

var ary = [10,20,30,40,50];
var sum =0;

document.write("<ul>");

for(var a=0; a<=4; a++){
     document.write("<li>" + ary[a] + "</li>");
     sum = sum +ary[a];
}

document.write("</ul>");
document.write("total Sum :" + sum);