import { Controller, Get } from '@nestjs/common';

// Controlador generado con comando, se conectó automáticamente al app.module.ts
@Controller() // Si tiene argumentos, debe existir este nombre en la ruta
export class HelloController {
    @Get('/')
    index(){
        return "homepage"
    }
}
