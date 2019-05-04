function Person(name, age) {
  this.name = name
  this.age = age
}

function Company(vacants, maxAge) {
  this.vacants = vacants
  this.maxAge = maxAge
  this.nonSuitablePeople = nonSuitablePeople
}

function nonSuitablePeople(peopleAges) {
  let counter = 0
  for(let i = 0; i < peopleAges.length; i++) {
    if(peopleAges[i] > this.maxAge) {
      counter++
    }
  }
  alert(`Cantidad de no aptos para la empresa: ${counter}`)
}
const createCompany = function() {
  const myCompanyName = prompt('Nombre de la empresa')
  const myCompanyVacants = parseInt(prompt('¿Cuántas vacantes hay en la empresa?'))
  const myCompanyMaxAge = prompt('Edad máxima de los empleados')
  const myCompanyObject = myCompanyName.toLowerCase()
  window[myCompanyObject] = new Company(myCompanyVacants, myCompanyMaxAge)
  return myCompanyObject
}