import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

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

    // Más decoradores para especificar status de peticiones
    @Get('/notfound')
    @HttpCode(404) // Este decorador añade el status, como el .status() de ExpressJS
    notFoundPage(){
        return "404 not found"
    }

    @Get('/error')
    @HttpCode(500)
    ErrorPage(){
        return "Route error!!"
    }

    @Get('/new')
    @HttpCode(201)
    somethingNew(){
        return "Algo creado"
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number){
        console.log(typeof num)
        return num + 7;
        /* Concatena? Se necesita un PIPE!!
        En este caso el Pipe es ParseIntPipe
        Recordar: Todo Pipe es una función que recibe un valor, 
        lo transforma y lo devuelve. 
        
        Sirven para: validar datos entrantes, transformar
        datos entrantes, limpiar datos y rechazar datos inválidos.
        */
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: Boolean){
        console.log(typeof status)
        return status
    }

    // Crear Pipes propios
    @Get('/greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}){
        console.log(typeof query.name)
        console.log(typeof query.age)
        return `Hello ${query.name}, your age is ${query.age}`
    }
}
