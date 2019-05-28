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

const valueIsSet = (value) => value && !value.match(/^ *$/)

const createCompany = function() {
  let myCompanyName, myCompanyVacants
  let myCompanyMaxAge = ''

  while (!valueIsSet(myCompanyName)) {
    myCompanyName = prompt('Nombre de la empresa').toString()
  }
  
  while (!valueIsSet(myCompanyVacants)) {
    myCompanyVacants = prompt('¿Cuántas vacantes hay en la empresa?')
    parseInt(myCompanyVacants)
  }

  if (myCompanyVacants === 0) {
    alert('Vaya...la cosa está mal, ¿no?')
    return
  } else {
    while (!valueIsSet(myCompanyMaxAge)) {
      myCompanyMaxAge = prompt('Edad máxima de los empleados')
      parseInt(myCompanyMaxAge)
    }
  }
  
  myCompany = myCompanyName.toLowerCase()
  window[myCompany] = new Company(myCompanyVacants, myCompanyMaxAge)
  return
}

const createApplicants = function(company) {
  let name, age
  let applicants = company.vacants

  while (applicants > 0) {
    while (!valueIsSet(name)) {
      name = prompt('Nombre')
    }

    while (!valueIsSet(age)) {
      age = prompt('Edad')
      parseInt(age)
    }
    console.log(`Nombre ${applicants}: ${name}
    Edad ${applicants}: ${age}`)
    window[name.toLowerCase()] = new Person(name, age)
    applicants--
  }
}
