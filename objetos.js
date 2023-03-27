let persona1 = {
    apellido: "oyomek",
    nombre:"carlos",
    direccion:"Los leones",
    edad:45,
    hijos: ['roman','julia','rosaura']
}
let persona2 = persona1;
persona2.apellido = 'Lopez';
//console.log(persona1);
//console.log(persona2);

/*let a = 1;
let b = a;
b = 3;
console.log(a);
console.log(b);
*/

let data = `{
    "empleados":[
        {"nombre":"Juan",
         "apellido":"Perez",
         "dni":"20234345"},
         {"nombre":"Ramon",
         "apellido":"Orosko",
         "dni":"20234345"},
         {"nombre":"Julio",
         "apellido":"Hreñuk",
         "dni":"20234345"},
         {"nombre":"Gaston",
         "apellido":"Marino",
         "dni":"20234345"},
         {"nombre":"Laura",
         "apellido":"Manzano",
         "dni":"20234345"}

    ]
}`

let persona = {
    empleados: [
        {nombre:"Julio",apellido:"Oyomek"},
        {nombre:"Gaston",apellido:"Iglesias"},
        {nombre:"Gaspar",apellido:"Aguirre"},
        {nombre:"Aldo",apellido:"Tomasino"},
        {nombre:"Jose",apellido:"Hreñuk"}

    ]
}
//let personasEmpresa = JSON.stringify(persona);
let personasEmpleadas = JSON.parse(data);
/*console.log(personasEmpleadas.empleados[4]);
console.log(personasEmpresa); */
let ul = document.getElementById('lista_per');

for(let empleado in personasEmpleadas.empleados){
   let li = document.createElement('li');
   li.innerHTML = `${empleado.nombre}`;
   ul.appendChild(li);
}
