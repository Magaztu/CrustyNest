import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users: any[] = [{
        id: 1,
        name: "Pedrito Pascal",
        phone: "1234567"
    },
    {
        id: 2,
        name: "Maria Antonieta",
        phone: "7654321"
    }
];

    getUsers(){
        return this.users;
    }

    createUser(user: CreateUserDto){

        this.users.push(user);

        return {
            ...user,
            id: this.users.length + 1
        } // Esto es un error de lógica, aumenta un id de más y bla bla, pero es por demostración
    }
}
