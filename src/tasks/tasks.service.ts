import { Injectable, NotFoundException, HttpCode } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

export interface IUser {
    name: string,
    last_name: string | null,
    age?: number
}

@Injectable() // Permite injectar código, o reutilizarlo, en otras partes del proyecto.
export class TasksService{

    private tasks: any[] = [];

    getTasks() {
        return this.tasks
    }

    getTask(id: number){
        const taskFound = this.tasks.find(task => task.id === id)
        if (!taskFound){
            // return "No se encontró la pibitarea"
            // throw new Error("Task not found") // Poco común
            return new NotFoundException(`Task with id ${id} not found`);
        }
        return taskFound
    }

    testing(){
        return "testeadito"
    }
    createTask(task: CreateTaskDto){
        this.tasks.push(
            {...task,
            id: this.tasks.length + 1}
        )
        console.log(task)
        return task
    }
    deleteTask(){
        return "Eliminando tarea"
    }
    updateTask(task: UpdateTaskDto){
        console.log(task)
        return "Actualizando tarea"
    }
    updateTaskStatus(){
        return "Actualizando campo de la tarea"
    }
}