import { Injectable } from "@nestjs/common";

export interface IUser {
    name: string,
    last_name: string | null,
    age?: number
}

@Injectable() // Permite injectar código, o reutilizarlo, en otras partes del proyecto.
export class TasksService{
    getTasks(): IUser{
        return {
            name: "John",
            last_name:"Doe"
        }
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