// colocá las declaraciones acá
let listaDeTareas=[]
let inputTarea=document.querySelector("#task")
let inputPrioridad=document.querySelector("#prioridad")
let ul=document.querySelector("#lista-de-tareas")

//declaramos el class Tarea
class Tarea{
    constructor(nombre, prioridad){
        this.nombre=nombre
        this.prioridad=prioridad
    }
    agregarTarea(array, tarea){
        array.push(tarea)
    }
}

const eliminar=(e)=>{ // SE EJECUTA AL CLICKEAR EN EL BOTON CON LA CRUZ, LA LLAMO EN EL INNERHTML DE LA FUNCION mostrarLista()
    listaDeTareas.splice(e.target.parentElement.id, 1)//AGARRO EL ID DEL ELEMENTO PADRE DEL EVENTO PARA USARLO COMO INDEX Y SABER QUE  POSICION  ELIMINAR. CON EL SPLICE PISO EL ARRAY ELIMINANDO EL OBJETO CLICKEADO.
    mostrarLista()// EJECUTO mostrarLista() CON EL ARRAY PISADO, MOSTRANDO SOLO LOS VALORES SIN ELIMINAR
}

const mostrarLista=()=>{  //CAMBIO EL HTML, MOSTRANDO LOS OBJETOS CON LAS TAREAS INGRESADAS POR EL USUARIO
    ul.innerHTML=""     // BORRO EL ARRAY ANTERIOR QUE ESTABA MOSTRANDO PARA MOSTRAR SOLO EL ULTIMO QUE AGREGO EL USUARIO
    listaDeTareas.map((tarea, index)=>{
        ul.innerHTML+=`<li class="list-group-item d-flex justify-content-between align-items-center text-capitalize" id="${index}">${tarea.nombre} - Prioridad: ${tarea.prioridad}<i class="far fa-times-circle" onclick="eliminar(event)"></i></li>`// EN EL BOTON CON LA CRUZ
                                                                                                         //LLAMO A LA FUNCION eliminar()
    })
}


const toDoList=()=>{     // ESTA FUNCION SE EJECUTA AL CLICKEAR EL BOTON AGREGAR. 
    if(inputPrioridad.value === 'Prioridad' || inputTarea.value === '') {//VALIDO, SI NO SE INGRESO PRIORIDAD O TAREA NO EJECUTO NADA
        return 
    }

    const objTarea=new Tarea(inputTarea.value, inputPrioridad.value)// CREO LOS OBJETOS CON LOS ATRIBUTOS QUE INGRESO EL USUARIO
    objTarea.agregarTarea(listaDeTareas, objTarea)// LLAMO AL METODO agregarTarea PARA METER EL OBJETO EN EL ARRAY
    
    mostrarLista()
    inputTarea.value = ''                          // LIMPIO LOS FORM
    inputPrioridad.value = 'Prioridad'

}

document.querySelector("#agregar").addEventListener("click", toDoList)