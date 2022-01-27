const a = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  function myFunction() {
    a.firstName = 'Jane'; // property change allowed
  }
  
  myFunction();
  
  console.log(a); // {firstName: Jane, lastName: Doe)