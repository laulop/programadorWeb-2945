/*-------------------------Desafío resuelto clase02---------------------*/


var daysOfTheWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
prompt ('Ingrese su edad')
for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysOfTheWeek[i]
  if ( daysOfTheWeek  === 'Sabado','Domingo') {
    console.log('Es fin de semana');

  } else {
    console.log('Es un día hábil');
  }
}
