import { Body, Controller, Get, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('')
export class UsersController {
    constructor(private UsersService: UsersService){}
    @Get('/users')
    getAllUsers(){
        return this.UsersService.getUsers();
    }

    @Post('/users')
    // @UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDto){
        return this.UsersService.createUser(user)
    }
}
