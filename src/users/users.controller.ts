import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserInput } from 'src/users/create-user.input';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/')
  create(@Body() input: CreateUserInput) {
    return this.usersService.create(input);
  }
}
