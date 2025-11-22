import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // Limpia o ignora toda clave en el body de una petición que no pertenezca al DTO
  }))
  // Permite que TODAS las rutas tengan validaciones siempre y cuando tengan su respectivo DTO

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
