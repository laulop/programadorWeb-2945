function Movie(title, year, director, actors) {
  var id = Math.random()
  var createdAt = new Date()
  var updatedAt = null

  this.setTitle = function (newTitle) {
    title = newTitle
    updatedAt = new Date()
  }

  this.setYear = function (newYear) {
    year = newYear
    updatedAt = new Date()
  }

  this.setDirector = function (newDirector) {
    director = newDirector
    updatedAt = new Date()
  }

  this.setActor = function (actor) {
    actors.push(actor)
    updatedAt = new Date()
  }

  this.getTitle = function () {
    return title
  }

  this.getYear = function () {
    return year
  }

  this.getDirector = function () {
    return director
  }

  this.getActors = function () {
    return actors
  }

  this.getUpdatedAt = function () {
    return updatedAt
  }

  this.showInfo = function () {
    console.log(
      'Title: ' +
      title +
      ', Año: ' +
      year +
      ', Director: ' +
      director +
      ', Actores: ' +
      actors.join(' / ') +
      ', Fecha de creación: ' +
      createdAt +
      ', Fecha de modificación: ' +
      updatedAt
    )
  }
}

var SuicideSquad = new Movie('SuicideSquad', '2016', 'David Ayer', [
  'Will Smith'
])

SuicideSquad.showInfo()

SuicideSquad.setActor('Jared Leto')

SuicideSquad.setActor('Margot Robbie')

SuicideSquad.setActor('Joel Kinnaman')

var newActor = prompt('Ingresá un actor más')

SuicideSquad.setActor(newActor)

SuicideSquad.showInfo()