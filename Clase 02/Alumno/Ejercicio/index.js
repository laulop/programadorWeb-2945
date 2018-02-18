
   var dayOfTheWeek = prompt ('Ingrese día de la semana', 'Lunes')

   switch (dayOfTheWeek) {
     case 'Lunes':
     case 'Martes':
     case 'Miércoles':
     case 'Jueves':
     case 'Viernes':
     console.log('Es un día hábil');
       break;
       case 'Sabado':
       case 'Domingo':
       console.log('Es un fin de semana');
       break

     default:
     console.log('Ingresaste cualquiercosa');

   }
