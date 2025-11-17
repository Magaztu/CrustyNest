import { Injectable } from "@nestjs/common";

@Injectable() // Permite injectar código, o reutilizarlo, en otras partes del proyecto.
export class TasksService{
    getTasks(){
        return ['Task 1', 'Task 2', 'Task 3']
    }
    testing(){
        return "testeadito"
    }
    createTask(){
        return "Creando tareas"
    }
    deleteTask(){
        return "Eliminando tarea"
    }
    updateTask(){
        return "Actualizando tarea"
    }
    updateTaskStatus(){
        return "Actualizando campo de la tarea"
    }
}