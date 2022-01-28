let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  const contains = (city, array) => {
    if (array.indexOf(city) >= 0) {
        console.log(true);
    } else {
        console.log(false);
    }
  }

contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false