var a = {
     fname :'Jaygopal',
     lname : 'Gain',
     age : 23,
     email : 'jay@gmail.com',

     favMovies : ['dhoom','sholay','Hum'],

     living : {
          'city' : 'Gwlaior',
          'country' : 'India'
     },
     salary : function(){
          return 25000;

     },

     fullname : function () {
          return this.fname + " " + this.lname; 

     }
}

 //document.write(a);
	  // document.write(a.favMovies);
       document.write(a.favMovies[1]);
       document.write(a.salary());
      document.write(a.fullname());
       document.write(a.living.city);
      //document.write(a.living.country);