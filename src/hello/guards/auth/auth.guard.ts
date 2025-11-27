import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import request from 'supertest';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext, // Context contiene info de toda la app
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);

    if (request.url === '/greet'){
      return false
    }

    // if(!request.headers['authorization']) return false
    // ! Esto significa "Si el request no tiene un header 'authorization: algo'"
    // ? Entonces rechaza el request

    return true;
  }
}
