//clase Persona *********************************
function Persona() {
  this.nombre = prompt('Ingrese nombre de la persona:', '');
  this.edad = parseInt(prompt('Ingrese edad:', ''));
}

//clase Empresa *********************************
function Empresa() {
  this.edadTope = 60;
  this.nopuedeEntrar = nopuedeEntrar;
}

function nopuedeEntrar(per) {
  if (per.edad >= this.edadTope)
    return true;
  else
    return false;
}

// bloque principal
var per1 = new Persona();
var per2 = new Persona();
var per3 = new Persona();
var empresa = new Empresa();
var cant = 0;
if (empresa.nopuedeEntrar(per1))
  cant++;
if (empresa.nopuedeEntrar(per2))
  cant++;
if (empresa.nopuedeEntrar(per3))
  cant++;
document.write('La cantidad de personas que no pueden entrar por su edad a la empresa son:' + cant);