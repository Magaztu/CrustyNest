import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from './tasks.service';
import { CreateTaskDto } from "./dto/create-task.dto";
import type { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('/tasks')
export class TaskController{
    // Definir rutas de URL del backend visitables
    TasksService: TasksService;

    constructor(taskservice: TasksService) {
        this.TasksService = taskservice;
    } // Inyectar un servicio

    @Get() // Decorador que indica la ruta y el método HTTP para llamar a la función
    getAllTasks(@Query() query: any){

        // Buscar algo en databases
        // Crear peticiones
        // No es obligatorio return

        // return "Obteniendo todas las tareas de la App"
        console.log(JSON.stringify(query));
        return this.TasksService.getTasks();
        // return this.TasksService.testing();
    }

    // Esto es /tasks/2

    @Get('/:id') // El :id es un parametro
    getTask(@Param('id') id: string){       // El decorador @Param recibe el nombre del parametro que se usa en /:
        // console.log(id)
        return this.TasksService.getTask(parseInt(id));
        //@Param es una forma de recibir valores dinámicamente de URLs
    }

    // @Get('/')
    // index(){
    //     return "Página principal" // Ejemplo, no es para páginas
    // }

    @Post()
    @UsePipes(new ValidationPipe) // Otro decorador, permite usar pipes, en este caso uno para validar según los decoradores definidos en el DTO
    createTask(@Body() task: CreateTaskDto){
        // console.log(task)
        return this.TasksService.createTask(task);
    }

    @Put() // Actualiza TODO el registro y sus campos (reemplaza el objeto) | Completa
    updateTask(@Body() task: UpdateTaskDto){
        return this.TasksService.updateTask(task);
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