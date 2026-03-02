import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() payload: string) {
    return this.usersService.create(payload);
  }

  @Get()
  findAll(@Body() payload: string) {
    return this.usersService.findAll(payload);
  }
  @Delete()
  remove(@Body() payload: string) {
    return this.usersService.remove(payload);
  }
}
