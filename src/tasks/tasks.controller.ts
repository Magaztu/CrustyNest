import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TaskController{
    // Definir rutas de URL del backend visitables
    TasksService: TasksService;

    constructor(taskservice: TasksService) {
        this.TasksService = taskservice;
    } // Inyectar un servicio

    @Get() // Decorador que indica la ruta y el método HTTP para llamar a la función
    getAllTasks(){

        // Buscar algo en databases
        // Crear peticiones
        // No es obligatorio return

        // return "Obteniendo todas las tareas de la App"
        return this.TasksService.getTasks();
        // return this.TasksService.testing();
    }

    // @Get('/')
    // index(){
    //     return "Página principal" // Ejemplo, no es para páginas
    // }

    @Post()
    createTask(){
        return this.TasksService.createTask();
    }

    @Put() // Actualiza TODO el registro y sus campos (reemplaza el objeto) | Completa
    updateTask(){
        return this.TasksService.updateTask();
    }

    @Delete()
    deleteTask(){
        return this.TasksService.deleteTask();
    }

    @Patch() // Actualiza una sola porción o campo de un objeto | Parcial
    updateTaskStatus(){
        return this.TasksService.updateTaskStatus();
    }
}