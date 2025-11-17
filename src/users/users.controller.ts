import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('')
export class UsersController {
    constructor(private UsersService: UsersService){}
    @Get('/users')
    getAllUsers(){
        return this.UsersService.getUsers();
    }
}
