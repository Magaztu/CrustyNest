import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

// Controlador generado con comando, se conectó automáticamente al app.module.ts
@Controller() // Si tiene argumentos, debe existir este nombre en la ruta
export class HelloController {
    // @Get('/')
    // index(){
    //     return "homepage"
    // }

    //También es posbile utilizar términos de ExpressJS
    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({
            message: "Hola from expresssss"
        })
    }
}
