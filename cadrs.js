let personas = [
    {
        nombre: "Juan",
        apellido: "Perez",
        edad: 23,
        sexo: "masculino",
        emai: "juanPerez@gmail.com",
    },
    {
        nombre: "Karina",
        apellido: "Lopez",
        edad: 34,
        sexo: "femenino",
        emai: "kar45@gmail.com",
    },
    {
        nombre: "Luz",
        apellido: "Lopez",
        edad: 20,
        sexo: "femenino",
        emai: "luz45@gmail.com",
    },
    {
        nombre: "Marcos",
        apellido: "Villalva",
        edad: 45,
        sexo: "masculino",
        emai: "marcosVilla@gmail.com",
    },
];


let crearCards = (persona)=> {
    let card =  document.createElement("div");
    card.classList.add("card-persona");
    let title = document.createElement("h2");
    title.innerHTML = `${persona.nombre} ${persona.apellido}`;
    card.appendChild(title);

    let listaDatos = document.createElement("ul");
    for(keyi in persona) {
      if (keyi !== "nombre" && keyi !== "apellido"){
        let listItem = document.createElement("li");
        listItem.innerHTML = `${keyi}: ${persona[keyi]}`;
        listaDatos.appendChild(listItem);
      }
      card.appendChild(listaDatos);
     document.getElementById("mainContainer").appendChild(card);
}
};




window.addEventListener("load", ()=> {
    personas.forEach (persona => {
        crearCards(persona);
    });
});