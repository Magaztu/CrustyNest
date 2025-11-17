import { Module, Injectable } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
    controllers:[TaskController], // Vincular el módulo a uno o más controladores.
    providers:[TasksService] // También hay que vincular los servicios para poder resolver.
})
export class TasksModule {

}