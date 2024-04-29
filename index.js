// Pair Programming
// Declaracion
const Coche = {
  marca: "mach",
  modelo: "m67-g",
  matricula: "m677",
};

const Casa = {
  codPostal: "",
  calle: "",
  portal: "",
  piso: "",
};

const FullStackDeveloper = {
  lenguajes: [],
  proyectos: [],
};

const Perro = {
  nombre: "",
  raza: "",
  color: "",
  edad: 9,
  ladrar: function () {
    console.log("bark");
  },
  popo: function () {
    return Math.random() * 3;
  },
};

// Lectura
let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil["marca"];
let grupos = Concierto.grupos;
let RGB = [Led.rojo, Led.verde, Led.azul];

// Modificacion
Portatil.modelo = "P345";
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
Impresora.imprimiendo = {
  nombreArchivo: "",
  copias: 9,
  numPaginas: 9,
};

// Individual
// Declaracion
const Noticia = {
  titular: "me",
  cuerpo: "me",
};

const Persona = {
  nombre: "yo",
  apellidos: "",
  edad: 9,
};

const Avion = {
  numPasajeros: 9,
  despegar: function () {
    console.log("despegando");
  },
  volar: function () {
    console.log("llegando al destino");
  },
  aterrizar: function () {
    console.log("aterrizando");
  },
};

const Paquete = {
  contenido: [],
};

const Pais = {
  numHabitantes: 9,
  continente: "Paraguay",
  gentilicio: 16,
};

// Lectura
let codError = O_Error.codigo;
let integrantes = Grupo.integrantes;
let nivelesTinta = Impresora.tinta;
let pixeles = Pantalla.pixeles;
let especificaciones = Movil["especificaciones"];

// Modificacion
Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";
Led.encendido = Led.encendido ? false : true;
Movil.temperatura = "20º";
