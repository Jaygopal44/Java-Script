var a = {
     firstName:"Ram",
     lastName:"Kumar",
     age :18,
     country :'india'
}

// document.write(a);

for(var i in a){
     // document.write(a[i]);
     document.write(i + " : " + a[i] + "<br><br>");
}