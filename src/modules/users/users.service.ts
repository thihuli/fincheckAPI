import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  getUserById(id: string) {
    // return this.usersRepo.findById(id);
    return { id, name: 'John Doe'}
  }
}
