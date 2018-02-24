/*-------------------------EJERCICIO 1 - CLASE03----------------------*/

function dayOfTheWeek(dayOfTheWeek) {
  switch (dayOfTheWeek) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
    console.log('Es un día hábil')
      break;
      case 'Sabado':
      case 'Domingo':
      console.log('Es un fin de semana')
      break

    default:
    console.log('Ingresaste cualquiercosa')

  }

 }

 var day1 = prompt ('Ingrese día de la semana')
 dayOfTheWeekMessage(day1)
 var day2 = prompt ('Ingrese día de la semana')
 dayOfTheWeekMessage(day2)
 var day3 = prompt ('Ingrese día de la semana')
 dayOfTheWeekMessage(day3)



/*-------------------------EJERCICIO 2 -  CLASE03----------------------*/

function showConsoleLogWithFirstNameAndLastName() {
  var firstName = prompt ('Ingresa tu nombre')
  var lastName = prompt ('Ingresa tu apellido')
  console.log('Hola ' + firstName + ' ' +  lastName)

}

showConsoleLogWithFirstNameAndLastName()
showConsoleLogWithFirstNameAndLastName()
showConsoleLogWithFirstNameAndLastName()
