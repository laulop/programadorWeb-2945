/*-------------------------EJERCICIO CLASE07---------------------------*/
 var studentsList = [
   'CARLOS',
   'GERONIMO',
   'NICOLAS',
   'LUCAS',
   'MARIA',
   'FEDERICO',
   'ANTONIO',
   'LORNA',
   'JULIAN',
   'DIEGO',
   'DANIELA',
   'JUAN',
   'MATEO',
   'BARBARA',
   'AGUSTIN',
   'MARIO',
   'MARIEL',
   'ANA',
   'FLORENCIA'
 ]
// hacer indexOf
// Cargar inicial

var stringStudentList = JSON.stringify(studentsList)

 localStorage.setItem('studentList', stringStudentList)

 //Levantar la data del localStorage

function addStudent (name) {
  var localStudentsList = localStorage.getItem('studentList')

  var parsedStudentsList

  if (localStudentsList) {
    parsedStudentsList = JSON.parse(localStudentsList)
  } else {
    parsedStudentsList = []
  }


/*function deleteStudent (studentName) {
  var index = searchStudentByName(studentName)
  if (index !== -1) {
    studentsList.splice(index, 1)*/

function abmStudents () {
  var option
  do {
    option = prompt('Ingrese una opción, agregar, eliminar o buscar')
    switch (option) {
      case 'agregar':
        var studentName = askStudentName()
        addStudent(studentName)
        break
      case 'eliminar':
        var studentName = askStudentName()
        deleteStudent(studentName)
        break
      case 'buscar':
        var studentName = askStudentName()
        var index = searchStudentByName(studentName)
        if (index === -1) {
          console.log('Estudiante no encontrado')
        } else {
          console.log(
            'El primer estudiante encontrado es ' + studentsList[index]
          )
        }
        break
      default:
        console.log('La opción ' + option, ' es incorrecta')
        option = null
        break
    }
  } while (!option)
}

abmStudents()

  var stringStudentList = JSON.stringify(parsedStudentsList)

  localStorage.setItem('studentList', stringStudentList)
}
