const a = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  function myFunction() {
    a.firstName = 'Jane'; // property change
  }
  
  myFunction();
  
  console.log(a); // {firstName: Jane, lastName: Doe)