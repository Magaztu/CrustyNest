import { Module } from '@nestjs/common'
import { TaskController } from './tasks.controller';

@Module({
    controllers:[TaskController] // Vincular el módulo a uno o más controladores
})
export class TasksModule {

}