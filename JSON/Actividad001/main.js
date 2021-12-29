const deportista = {
    nombre: 'Messi',
    champions: 4,
};

console.log(JSON.stringify(deportista));

//************************ 

const jsonDeportista = `{"nombre":"Messi","champions":4}`;
console.log(JSON.parse(jsonDeportista));

//************************ 

fetch('http://127.0.0.1:5500/pasajeros.json').then((response) => response.json()).then((data) => console.log(data));

//Queremos que la respuesta sea en formato JSON y después esos datos que lo muestre por consola.

//************************ 
// Vamos a usar los métodos de array

fetch('http://127.0.0.1:5500/pasajeros.json').then((response) => response.json()).then((pasajeros) => {
    const nombresDePasajeros = pasajeros.map((pasajero) => pasajero.nombre);
    console.log(nombresDePasajeros);
});
