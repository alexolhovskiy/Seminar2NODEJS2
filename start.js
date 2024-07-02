const modul = require('person_generator_by_alex');

var arr = modul.getPersons(10, false);

arr.forEach((item) => console.log(item));