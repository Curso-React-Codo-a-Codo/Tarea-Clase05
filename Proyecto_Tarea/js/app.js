let MyDom = document
let MyApp = document.getElementById("MyApp")
class Button {
    constructor(parentID, text, id){
        this.parentID = parentID;// el id del div en el cual estara el boton
        this.text = text; //Texto que le puedo pasar
        this.id = id; //paremetro que le puedo pasar
    }
    render(){
        let myContenedor = document.getElementById(this.parentID)
        const myButtonHTML = "<button id="+this.id+">"+this.text+"</button>"//test

        myContenedor.innerHTML = myButtonHTML; //Aca se va a generar el html del boton
    }
}

let myButton = new Button("contenedor","Presiona aquí!","boton");
myButton.render();
const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
	const nombre = prompt('¿Cuál es tu nombre?');
    if (nombre == null || nombre == "" )
    {
        MyApp.innerHTML = "Dejaste el Promt Vacio o lo Cancelaste";
    } else {
        MyApp.innerHTML = "Hola! "+ nombre;
    }
	    
});


class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        this.type = type;
    }
    render(){
        let input = document.getElementById(this.parentID);
        const myInputHTML = input.innerHTML + "<input type="+this.type+">";
        input.innerHTML = myInputHTML;
    }
}

let Array_of_inputs = ["checkbox","date","password"];

function CrearInpunt(input){
    let myInput = new Input("fecha",input);
    myInput.render();
}

async function mostrarIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ipDiv = document.getElementById('MyApp');
    ipDiv.innerHTML = `<p>Tu dirección IP es: ${data.ip}</p>`;
  } catch (error) {
    console.error('Error obteniendo la IP:', error);
  }
}

mostrarIP();

let array_filtered = Array_of_inputs.filter(Array_of_inputs => Array_of_inputs == "password" )
array_filtered.forEach(element => CrearInpunt(element));
