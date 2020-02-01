import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserInput } from 'src/users/create-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  create(input: CreateUserInput) {
    const user = this.userRepository.create(input);

    return this.userRepository.save(user);
  }
}
