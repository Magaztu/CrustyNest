import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [{
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
}
