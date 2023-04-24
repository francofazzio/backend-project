//scope
//let nombrePersona = "franco"

//function logearNombreyApellido(nombre) {
   // let apellido = "fazzio"
    //if(apellido) {
     //   console.log(apellido);
   // }
    //console.log(nombre, apellido);
//}
//logearNombreyApellido(nombrePersona)

//con return
//function retornarNombreyApellido(nombre, apellido) {
  //  if(nombre) {
    //    console.log("Entro al if")
    //}
    //return nombre + "" + apellido
//}
//let nombreyApellido = retornarNombreyApellido("franco", "fazzio")
//console.log(nombreyApellido)

//closure

//function retornarNombreyApellido(nombre) {
  //  let apellido = "Fazzio"
    //return function() {
      //  console.log(nombre, apellido)
  //  }
//}
//let NombreyApellido = retornarNombreyApellido("Franco")
//console.log(NombreyApellido())

//template strings
//let nombre = "Franco"
//let apellido = "Fazzio"
//let altura= "1.88"
//let peso =  90

//let nombreyDatos = `
//Nombre: ${nombre}
//Apellido: ${apellido}
//Altura: ${altura}
//Peso: ${peso}kg

//`
//console.log(nombreyDatos)

//clases
//class Persona {
  //  constructor(nombre, apellido, edad) {
    //    this.nombre = nombre
      //  this.apellido = apellido
        //this.edad = edad
    //}
//}
//const franco = new Persona("franco", "fazzio", 24);

//console.log(franco)

//callbacks
const ejecutar = (funcion, parametro1, parametro2) => funcion(parametro1, parametro2)

const sumar = (num1, num2) => num1 + num2
console.log(ejecutar(sumar, 3, 5))

//promises
const dividir = (numero, divisor) => {
    return new Promise ((resolve, reject) => {
        if(!divisor) {
            reject("no se puede dividir por cero")
        } else {
            resolve(numero / divisor)
        }
    } )
}

dividir(4, 2).then(resultado => {
    console.log("su resultado es:", resultado)
} ).catch(error => {
    console.log(`hubo un error $(error)`)
})

//file system modo sincronico 

//const fs = require('fs')
//fs.writeFileSync('./prueba.txt', 'UNION CAMPEON') //writeFileSync se utiliza para crear archivos

//fs.appendFileSync('./prueba.txt', '-2023') //appendFileSync (agrega mas texto)


//console.log(fs.readFileSync('./prueba.txt', 'utf-8')) //readFileSync(lee eso)

/*const fs = require('fs')
const personas = [{nombre: "franco", apellido:"fazzio"}]

 try
 {fs.writeFileSync('./prueba.txt', JSON.stringify(personas)) // asi se agrega un dato (json.stringifu)

 const personasArchivo = JSON.parse(fs.readFileSync('./prueba.txt', 'utf-8')) // asi se lee el obejto(json.parse)
console.log(personasArchivo)
}catch(error) {
    console.log('hubo un error ${error}')
} //con el try y catch te marca errores en la consola si no tiene es porque esta bien, sino lo marca

*/
 FileSystem.mkdir('./carpeta', error => { //mkdir para crear carpeta
    if(error) {
        console.log('hubo un error ${error}')
    } else {
        console.log("carpeta creada")
    }
 })


 //fs con promesas asyncawait
 const escribir = async() => { //agregar el archivo
    try {
        await FileSystem.promises.writeFile('./prueba.txt', 'SOY UNA PRUEBA')
    } catch(error) {
        console.log('hubo un error ${error}')
    }
 }
 escribir()
