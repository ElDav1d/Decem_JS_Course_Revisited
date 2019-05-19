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
  let myCompanyName
  const valueIsSet = (value) => value && value !== ''
  
  while (!valueIsSet(myCompanyName)) {
    myCompanyName = prompt('Nombre de la empresa').toString()
  }
  
  const myCompanyVacants = parseInt(prompt('¿Cuántas vacantes hay en la empresa?'))

  if (myCompanyVacants === 0) {
    alert('Vaya...la cosa está mal, ¿no?')
    return
  }
  
  const myCompanyMaxAge = prompt('Edad máxima de los empleados')
  const myCompanyObject = myCompanyName.toLowerCase()
  window[myCompanyObject] = new Company(myCompanyVacants, myCompanyMaxAge)
  return myCompanyObject
}