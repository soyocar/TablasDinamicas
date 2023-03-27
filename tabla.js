let data = `{
    "estudiantes":[
        {"apellido":"Lopez",
         "nombre":"Ignacio",
         "dni":"20234345",
         "curso":"52",
         "email":"juanPer@gmail.com"},
         {"apellido":"Perez",
         "nombre":"Juan",
         "dni":"20234345",
         "curso":"52",
         "email":"juanPer@gmail.com"},
         {"apellido":"Soto",
         "nombre":"Micaela",
         "dni":"20234345",
         "curso":"52",
         "email":"Mica@gmail.com"},
         {"apellido":"Hreñuk",
         "nombre":"Jose",
         "dni":"20234345",
         "curso":"52",
         "email":"jose@gmail.com"},
         {"apellido":"Oyomek",
         "nombre":"Carlos",
         "dni":"20234345",
         "curso":"52",
         "email":"Carlos@gmail.com"}

          ]
}`

let crearFila = (estudiante)=> {
    let fila =  document.createElement("tr");
    fila.classList.add("fila-estudiante");
    
    for(key in estudiante) {
      
        let listItem = document.createElement("td");
        listItem.innerHTML = `${estudiante[key]}`;
        fila.appendChild(listItem);
        
       }
       document.getElementById("tabla").appendChild(fila);
        
      
      
}


let listadoEst = JSON.parse(data);

window.addEventListener("load", ()=> {
     
     listadoEst.estudiantes.forEach (estudiantes => {
        crearFila(estudiantes);
    });
});