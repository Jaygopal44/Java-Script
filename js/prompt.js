var per =prompt("Enter your Percent");
if (per>=80 && per<= 100) {
     document.write("you are in merit");
}else if(per>=60 && per<80){
     document.write("you are in Ist division");
}
else if(per>=45 && per<60){
     document.write("you are in 2nd division");
}
else if(per>=33 && per<45){
     document.write("you are in 3rd division");
}
else if(per<33){
     document.write("you are fail");
}
else{
     document.write("please enter valid percent");
}