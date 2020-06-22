import {cleanConsole, createAll} from './data';
import {createTableUsers} from './example-4';
const companies = createAll();

cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', createObject(companies));

function createObject(companies) {
  const object = {};
  const users = createTableUsers(companies);
  object.size = users.length;
  let sumEdad =0;
  let contHasCar=0;
  let sumedadHascar=0;
  users.forEach((user) => {
    sumEdad= sumEdad + user.age;
    if (user.car === true) {
      contHasCar++;
      sumedadHascar+=user.age;
    }
  });
  console.log(sumEdad);
  object.average = Math.round(sumEdad / users.length);
  object.hasCar = contHasCar;
  object.averageWithCar = Math.round(sumedadHascar / contHasCar);
  return object;
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Utiliser la fonction créée dans l'exemple 4 pour créer une
// nouvelle fonction prenant en paramètre la variable "companies" et renvoyant
// un nouvel objet avec les attributs suivants :
//     'size' => nombre de "users"
//     'average' => moyenne d'âge des "users"
//     'hasCar' => nombre de "users" possédant une voiture
//     'averageWithCar' => moyenne d'âge des "users" possédant une voiture
