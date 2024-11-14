/*ESTUDIANTE-B
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10. 
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que retorne los nombres de los estudiantes aprobados. 
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}

- Función: nombresDeAprobados.
- Parámetros: estudiantes (array de objetos estudiante).
- Retorno: array de strings, con los nombres de los estudiantes aprobados.
*/

let nombresDeAprobados = (estudiantes) => {
    let aprobados = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota >= 10) {
            aprobados.push(estudiantes[i].nombre);
        }
    }
    return aprobados;
};

let estudiantes = [
    { nombre: 'Luis', semestre: 5, nota: 14 },
    { nombre: 'Ana', semestre: 3, nota: 9 },
    { nombre: 'Pedro', semestre: 5, nota: 12 },
    { nombre: 'Maria', semestre: 2, nota: 16 }
];

let salida = document.getElementById("salida");
let nombresAprobados = nombresDeAprobados(estudiantes);

salida.innerHTML = `Estudiantes aprobados:<br>`;
nombresAprobados.forEach((nombre) => {
    salida.innerHTML += `Nombre: ${nombre}<br>`;
});
