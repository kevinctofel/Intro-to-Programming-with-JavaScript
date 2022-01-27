function myFunction() {
    let a = 1;
  
    if (true) {
      console.log(a); // reference error stops code here
      let a = 2;
      console.log(a); 
    }
  }
  
  myFunction();