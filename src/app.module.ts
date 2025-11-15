import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

// Este es el módulo principal que puede contener a otros módulos
@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule] // Conectar el módulo princupal con el resto
})
export class AppModule {}
