import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TaskController{
    // Definir rutas de URL del backend visitables

    @Get('/tasks') // Decorador que indica la ruta y el método HTTP para llamar a la función
    getAllTasks(){

        // Buscar algo en databases
        // Crear peticiones
        // No es obligatorio return

        return "Obteniendo todas las tareas de la App"
    }

    // @Get('/')
    // index(){
    //     return "Página principal" // Ejemplo, no es para páginas
    // }
}